const fetchApi = import("https://unpkg.com/@microsoft/fetch-event-source@2.0.1/lib/esm/index.js").then(module => module.fetchEventSource);

const ai_request =  (request, respondWith) => respondWith.stream(async (signal, streamMessage) => {
  // Adds each previous query and response as individual messages
  const conversation = request.thread.flatMap((event) => {
    if (event.response) {
      return [
        { role: 'user', content: event.request.query },
        { role: 'assistant', content: event.response.data }
      ];
    } else {
      return [];
    }
  });

  // System messages provided by the plugin to format the output as HTML content.
  const pluginSystemMessages = request.system.map((content) => ({
    role: 'system',
    content
  }));

  const systemMessages = [
    ...pluginSystemMessages,
    // Additional system messages to control the output of the AI
    { role: 'system', content: 'Do not include html\`\`\` at the start or \`\`\` at the end.' },
    { role: 'system', content: 'No explanation or boilerplate, just give the HTML response.' }
  ];

  // Forms the new query sent to the API
  const content = request.context.length === 0 || conversation.length > 0
    ? request.query
    : `Question: ${request.query} Context: """${request.context}"""`;

  const messages = [
    ...conversation,
    ...systemMessages,
    { role: 'user', content }
  ];

  const requestBody = {
    model: 'gpt-3.5-turbo',
    temperature: 0.7,
    max_tokens: 800,
    messages,
    stream: true
  };

  const openAiOptions = {
    signal,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Bearer': '{{ openai_proxy_token }}'
    },
    body: JSON.stringify(requestBody)
  };

  const onopen = async (response) => {
    if (response) {
      const contentType = response.headers.get('content-type');
      if (response.ok && contentType?.includes('text/event-stream')) {
        return;
      } else if (contentType?.includes('application/json')) {
        const data = await response.json();
        if (data.error) {
          throw new Error(`${data.error.type}: ${data.error.message}`);
        }
      }
    } else {
      throw new Error('Failed to communicate with the ChatGPT API');
    }
  };

  // This function passes each new message into the plugin via the `streamMessage` callback.
  const onmessage = (ev) => {
    const data = ev.data;
    if (data !== '[DONE]') {
      const parsedData = JSON.parse(data);
      const firstChoice = parsedData?.choices[0];
      const message = firstChoice?.delta?.content;
      if (message) {
        streamMessage(message);
      }
    }
  };

  const onerror = (error) => {
    // Stop operation and do not retry by the fetch-event-source
    throw error;
  };

  // Use microsoft's fetch-event-source library to work around the 2000 character limit
  // of the browser `EventSource` API, which requires query strings
  return fetchApi
  .then(fetchEventSource =>
    fetchEventSource("{{ openai_proxy_url }}", {
      ...openAiOptions,
      openWhenHidden: true,
      onopen,
      onmessage,
      onerror
    })
  )
  .then(async (response) => {
    if (response && !response.ok) {
      const data = await response.json();
      if (data.error) {
        throw new Error(`${data.error.type}: ${data.error.message}`);
      }
    }
  })
  .catch(onerror);
});

tinymce.init({
  selector: 'textarea',
  plugins: 'ai',
  toolbar: 'aidialog aishortcuts',
  ai_request
});
const fetchApi = import('https://cdn.skypack.dev/@microsoft/fetch-event-source@2.0.1')
  .then((module) => module.fetchEventSource);
 

// This example stores the API key in the client side integration. This is not recommended for any purpose.
// Instead, an alternate method for retrieving the API key should be used.
const api_key = '<INSERT_API_KEY_HERE>';

const ai_request = (request, respondWith) => {
    respondWith.stream((signal, streamMessage) => {
        // Adds each previous query and response as individual messages
        const conversation = request.thread.flatMap((event) => {
            if (event.response) {
                return [
                    { role: 'user', content: event.request.query },
                    { role: 'assistant', content: event.response.data },
                ];
            } else {
                return [];
            }
        });

        // System messages provided by the plugin to format the output as HTML content.
        const systemMessages = request.system.map((content) => ({
            role: 'system',
            content,
        }));

        // Forms the new query sent to the API
        const content =
            request.context.length === 0 || conversation.length > 0
                ? request.query
                : `Question: ${request.query} Context: """${request.context}"""`;

        const messages = [
            ...conversation,
            ...systemMessages,
            { role: 'user', content },
        ];

        let hasHead = false;
        let markdownHead = '';

        const hasMarkdown = (message) => {
            if (message.includes('`') && markdownHead !== '```') {
                const numBackticks = message.split('`').length - 1;
                markdownHead += '`'.repeat(numBackticks);
                if (hasHead && markdownHead === '```') {
                    markdownHead = '';
                    hasHead = false;
                }
                return true;
            } else if (message.includes('html') && markdownHead === '```') {
                markdownHead = '';
                hasHead = true;
                return true;
            }
            return false;
        };

        const requestBody = {
            model: 'gpt-4o',
            temperature: 0.7,
            max_tokens: 4000,
            messages,
            stream: true,
        };

        const openAiOptions = {
            signal,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${api_key}`,
            },
            body: JSON.stringify(requestBody),
        };

        const onopen = async (response) => {
            if (response) {
                const contentType = response.headers.get('content-type');
                if (response.ok && contentType?.includes('text/event-stream')) {
                    return;
                } else if (contentType?.includes('application/json')) {
                    const data = await response.json();
                    if (data.error) {
                        throw new Error(
                            `${data.error.type}: ${data.error.message}`
                        );
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
                if (message && message !== '') {
                    if (!hasMarkdown(message)) {
                        streamMessage(message);
                    }
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
            .then((fetchEventSource) =>
                fetchEventSource('https://api.openai.com/v1/chat/completions', {
                    ...openAiOptions,
                    openWhenHidden: true,
                    onopen,
                    onmessage,
                    onerror,
                })
            )
            .then(async (response) => {
                if (response && !response.ok) {
                    const data = await response.json();
                    if (data.error) {
                        throw new Error(
                            `${data.error.type}: ${data.error.message}`
                        );
                    }
                }
            })
            .catch(onerror);
    });
};

tinymce.init({
    selector: 'textarea', // change this value according to your HTML
    height: 760,
    plugins: [
        'ai',
        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
        'insertdatetime', 'media', 'table', 'help', 'wordcount'
    ],
    toolbar: 'aidialog aishortcuts | undo redo | blocks | ' +
        'bold italic backcolor | alignleft aligncenter ' +
        'alignright alignjustify | bullist numlist outdent indent | ' +
        'removeformat | help',
    content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
    ai_request,
    ai_shortcuts: [
        { title: 'Rewrite in plain language', prompt: 'Rewrite this insurance wording in plain language that a policyholder with no insurance background can understand. Keep every condition and exclusion.', selection: true },
        { title: 'List the exclusions', prompt: 'List every exclusion and condition in this content as a bulleted list.', selection: true },
        { title: 'Summarize in one sentence', prompt: 'Summarize this content in one sentence.', selection: true },
        {
            title: 'Change tone', subprompts: [
                { title: 'Reassuring', prompt: 'Rewrite this content in a calm, reassuring tone for a customer who has just had a leak at home.', selection: true },
                { title: 'Formal', prompt: 'Rewrite this content in a formal tone suitable for a policy document.', selection: true }
            ]
        },
        { title: 'Draft a claim acknowledgment', prompt: 'Write a short email that acknowledges a new water damage claim, gives the claim reference CLM-48213, and lists the next three steps for the policyholder.', selection: false }
    ]
});

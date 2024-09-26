const fetchApi = import(
  "https://unpkg.com/@microsoft/fetch-event-source@2.0.1/lib/esm/index.js"
).then((module) => module.fetchEventSource);

// This example stores the OpenAI API key in the client side integration. This is not recommended for any purpose.
// Instead, an alternate method for retrieving the API key should be used.
const openai_api_key = "<INSERT_OPENAI_API_KEY_HERE>";

const useDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
const isSmallScreen = window.matchMedia('(max-width: 1023.5px)').matches;

tinymce.init({
  selector: 'textarea#full-featured',
  plugins: 'ai preview powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link math media mediaembed codesample table charmap pagebreak nonbreaking anchor tableofcontents insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker editimage help formatpainter permanentpen pageembed charmap tinycomments mentions quickbars linkchecker emoticons advtable footnotes mergetags autocorrect typography advtemplate markdown revisionhistory',
  tinydrive_token_provider: 'URL_TO_YOUR_TOKEN_PROVIDER',
  tinydrive_dropbox_app_key: 'YOUR_DROPBOX_APP_KEY',
  tinydrive_google_drive_key: 'YOUR_GOOGLE_DRIVE_KEY',
  tinydrive_google_drive_client_id: 'YOUR_GOOGLE_DRIVE_CLIENT_ID',
  mobile: {
    plugins: 'ai preview powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link math media mediaembed codesample table charmap pagebreak nonbreaking anchor tableofcontents insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker help formatpainter pageembed charmap mentions quickbars linkchecker emoticons advtable footnotes mergetags autocorrect typography advtemplate',
  },
  menu: {
    tc: {
      title: 'Comments',
      items: 'addcomment showcomments deleteallconversations'
    }
  },
  menubar: 'file edit view insert format tools table tc help',
  toolbar: "undo redo | revisionhistory | aidialog aishortcuts | blocks fontsizeinput | bold italic | align numlist bullist | link image | table math media pageembed | lineheight  outdent indent | strikethrough forecolor backcolor formatpainter removeformat | charmap emoticons checklist | code fullscreen preview | save print | pagebreak anchor codesample footnotes mergetags | addtemplate inserttemplate | addcomment showcomments | ltr rtl casechange | spellcheckdialog a11ycheck", // Note: if a toolbar item requires a plugin, the item will not present in the toolbar if the plugin is not also loaded.
  autosave_ask_before_unload: true,
  autosave_interval: '30s',
  autosave_prefix: '{path}{query}-{id}-',
  autosave_restore_when_empty: false,
  autosave_retention: '2m',
  image_advtab: true,
	typography_rules: [
		'common/punctuation/quote',
		'en-US/dash/main',
		'common/nbsp/afterParagraphMark',
		'common/nbsp/afterSectionMark',
		'common/nbsp/afterShortWord',
		'common/nbsp/beforeShortLastNumber',
		'common/nbsp/beforeShortLastWord',
		'common/nbsp/dpi',
		'common/punctuation/apostrophe',
		'common/space/delBeforePunctuation',
		'common/space/afterComma',
		'common/space/afterColon',
		'common/space/afterExclamationMark',
		'common/space/afterQuestionMark',
		'common/space/afterSemicolon',
		'common/space/beforeBracket',
		'common/space/bracket',
		'common/space/delBeforeDot',
		'common/space/squareBracket',
		'common/number/mathSigns',
		'common/number/times',
		'common/number/fraction',
		'common/symbols/arrow',
		'common/symbols/cf',
		'common/symbols/copy',
		'common/punctuation/delDoublePunctuation',
		'common/punctuation/hellip'
	],
	typography_ignore: [ 'code' ],
	advtemplate_list: () => {
    return Promise.resolve([
      {
        id: '1',
        title: 'Resolving tickets',
        content: '<p>As we have not heard back from you in over a week, we have gone ahead and resolved your ticket.</p>'
      },
      {
        id: '2',
        title: 'Quick replies',
        items: [
          {
            id: '3',
            title: 'Message received',
            content: '<p>Just a quick note to say we have received your message, and will get back to you within 48 hours.</p>'
          },
          {
            id: '4',
            title: 'Progress update',
            content: '</p>Just a quick note to let you know we are still working on your case</p>'
          }
        ]
      }
    ]);
  },
  link_list: [
    { title: 'My page 1', value: 'https://www.tiny.cloud' },
    { title: 'My page 2', value: 'http://www.moxiecode.com' }
  ],
  image_list: [
    { title: 'My page 1', value: 'https://www.tiny.cloud' },
    { title: 'My page 2', value: 'http://www.moxiecode.com' }
  ],
  image_class_list: [
    { title: 'None', value: '' },
    { title: 'Some class', value: 'class-name' }
  ],
  importcss_append: true,
  height: 600,
  image_caption: true,
  quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
  noneditable_class: 'mceNonEditable',
  toolbar_mode: 'sliding',
  spellchecker_ignore_list: ['Ephox', 'Moxiecode', 'tinymce', 'TinyMCE'],
  tinycomments_mode: 'embedded',
  content_style: '.mymention{ color: gray; }',
  contextmenu: 'link image editimage table configurepermanentpen',
  a11y_advanced_options: true,
  skin: useDarkMode ? 'oxide-dark' : 'oxide',
  content_css: useDarkMode ? 'dark' : 'default',
  autocorrect_capitalize: true,
  mergetags_list: [
    {
      title: 'Client',
      menu: [
        {
          value: 'Client.LastCallDate',
          title: 'Call date'
        },
        {
          value: 'Client.Name',
          title: 'Client name'
        }
      ]
    },
    {
      title: 'Proposal',
      menu: [
        {
          value: 'Proposal.SubmissionDate',
          title: 'Submission date'
        }
      ]
    },
    {
      value: 'Consultant',
      title: 'Consultant'
    },
    {
      value: 'Salutation',
      title: 'Salutation'
    }
  ],
  // For revision history plugin
  revisionhistory_fetch: () => {
    return Promise.resolve([
      {
        revisionId: '3',
        createdAt: '2023-11-24T22:26:21.578Z',
        author: {
          id: 'husky',
          name: 'A Tiny Husky',
          avatar: '{{imagesdir}}/tiny-husky.jpg'
        },
        content: `
          <p><img style="display: block; margin-left: auto; margin-right: auto;" title="Tiny Logo" src="https://www.tiny.cloud/docs/images/logos/android-chrome-256x256.png" alt="TinyMCE Logo" width="128" height="128"></p>
          <h2 style="text-align: center;">Welcome to the TinyMCE editor demo!</h2>
          <h2>A simple table to play with</h2>
          <table style="border-collapse: collapse; width: 100%;" border="1">
          <thead>
          <tr>
          <th>Product</th>
          <th>Cost</th>
          <th>Really?</th>
          </tr>
          </thead>
          <tbody>
          <tr>
          <td>TinyMCE</td>
          <td>Free</td>
          <td>YES!</td>
          </tr>
          <tr>
          <td>Plupload</td>
          <td>Free</td>
          <td>YES!</td>
          </tr>
          </tbody>
          </table>
          <h2>Found a bug?</h2>
          <p>If you think you have found a bug please create an issue on the <a href="https://github.com/tinymce/tinymce/issues">GitHub repo</a> to report it to the developers.</p>
          <h2>Finally ...</h2>
          <p><s>Don't forget to check out our other product <a href="http://www.plupload.com" target="_blank" rel="noopener">Plupload</a>, your ultimate upload solution featuring HTML5 upload support.</s></p>
          <p>Thanks for supporting TinyMCE! We hope it helps you and your users create great content.<br>All the best from the TinyMCE team.</p>
        `,
      },
      {
        revisionId: '2',
        createdAt: '2023-11-25T08:30:21.578Z',
        author: {
          id: 'tiny.user',
          name: 'A Tiny User',
          avatar: '{{imagesdir}}/logos/android-chrome-192x192.png'
        },
        content: `
          <p><img style="display: block; margin-left: auto; margin-right: auto;" title="Tiny Logo" src="https://www.tiny.cloud/docs/images/logos/android-chrome-256x256.png" alt="TinyMCE Logo" width="128" height="128"></p>
          <h2 style="text-align: center;">Welcome to the TinyMCE editor demo!</h2>
          <h2>Got questions or need help?</span></h2>
          <ol>
          <li>Our <a href="../">documentation</a> is a great resource for learning how to configure TinyMCE.</li>
          <li>Have a specific question? Try the <a href="https://stackoverflow.com/questions/tagged/tinymce" target="_blank" rel="noopener"><code>tinymce</code> tag at Stack Overflow</a>.</li>
          <li>We also offer enterprise grade support as part of <a href="../../../../pricing">TinyMCE premium plans</a>.</li>
          </ol>
          <h2>A simple table to play with</h2>
          <table style="border-collapse: collapse; width: 100%;" border="1">
          <thead>
          <tr>
          <th>Product</th>
          <th>Cost</th>
          <th>Really?</th>
          </tr>
          </thead>
          <tbody>
          <tr>
          <td>TinyMCE</td>
          <td>Free</td>
          <td>YES!</td>
          </tr>
          <tr>
          <td>Plupload</td>
          <td>Free</td>
          <td>YES!</td>
          </tr>
          </tbody>
          </table>
          <h2>Found a bug?</h2>
          <p>If you think you have found a bug please create an issue on the <a href="https://github.com/tinymce/tinymce/issues">GitHub repo</a> to report it to the developers.</p>
          <h2>Finally ...</h2>
          <p>Don't forget to check out our other product <a href="http://www.plupload.com" target="_blank" rel="noopener">Plupload</a>, your ultimate upload solution featuring HTML5 upload support.</p>
          <p>Thanks for supporting TinyMCE! We hope it helps you and your users create great content.<br>All the best from the TinyMCE team.</p>
        `,
      },
      {
        revisionId: '1',
        createdAt: '2023-11-29T10:11:21.578Z',
        author: {
          id: 'tiny.user',
          name: 'A Tiny User',
          avatar: '{{imagesdir}}/logos/android-chrome-192x192.png'
        },
        content: `
          <p><img style="display: block; margin-left: auto; margin-right: auto;" title="Tiny Logo" src="https://www.tiny.cloud/docs/images/logos/android-chrome-256x256.png" alt="TinyMCE Logo" width="128" height="128"></p>
          <h2 style="text-align: center;">Welcome to the TinyMCE editor demo!</h2>
          <h2>Got questions or need help?</h2>
          <ul>
          <li>Our <a href="../">documentation</a> is a great resource for learning how to configure TinyMCE.</li>
          <li>Have a specific question? Try the <a href="https://stackoverflow.com/questions/tagged/tinymce" target="_blank" rel="noopener"><code>tinymce</code> tag at Stack Overflow</a>.</li>
          <li>We also offer enterprise grade support as part of <a href="../../../../pricing">TinyMCE premium plans</a>.</li>
          </ul>
          <h2>A simple table to play with</h2>
          <table style="border-collapse: collapse; width: 100%;" border="1">
          <thead>
          <tr>
          <th>Product</th>
          <th>Cost</th>
          <th>Really?</th>
          </tr>
          </thead>
          <tbody>
          <tr>
          <td>TinyMCE</td>
          <td>Free</td>
          <td>YES!</td>
          </tr>
          <tr>
          <td>Plupload</td>
          <td>Free</td>
          <td>YES!</td>
          </tr>
          </tbody>
          </table>
          <h2>Found a bug?</h2>
          <p>If you think you have found a bug please create an issue on the <a href="https://github.com/tinymce/tinymce/issues">GitHub repo</a> to report it to the developers.</p>
          <h2>Finally ...</h2>
          <p>Don't forget to check out our other product <a href="http://www.plupload.com" target="_blank" rel="noopener">Plupload</a>, your ultimate upload solution featuring HTML5 upload support.</p>
          <p>Thanks for supporting TinyMCE! We hope it helps you and your users create great content.<br>All the best from the TinyMCE team.</p>
        `,
      },
    ]);
  },
  ai_request: (request, respondWith) => {
    respondWith.stream((signal, streamMessage) => {
      // Adds each previous query and response as individual messages
      const conversation = request.thread.flatMap((event) => {
        if (event.response) {
          return [
            { role: "user", content: event.request.query },
            { role: "assistant", content: event.response.data },
          ];
        } else {
          return [];
        }
      });
  
      // System messages provided by the plugin to format the output as HTML content.
      const systemMessages = request.system.map((content) => ({
        role: "system",
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
        { role: "user", content },
      ];
  
      let hasHead = false;
      let markdownHead = "";
  
      const hasMarkdown = (message) => {
        if (message.includes("`") && markdownHead !== "```") {
          const numBackticks = message.split("`").length - 1;
          markdownHead += "`".repeat(numBackticks);
          if (hasHead && markdownHead === "```") {
            markdownHead = "";
            hasHead = false;
          }
          return true;
        } else if (message.includes("html") && markdownHead === "```") {
          markdownHead = "";
          hasHead = true;
          return true;
        }
        return false;
      };
  
      const requestBody = {
        model: "gpt-4o",
        temperature: 0.7,
        max_tokens: 4000,
        messages,
        stream: true,
      };
  
      const openAiOptions = {
        signal,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openai_api_key}`,
        },
        body: JSON.stringify(requestBody),
      };
  
      const onopen = async (response) => {
        if (response) {
          const contentType = response.headers.get("content-type");
          if (response.ok && contentType?.includes("text/event-stream")) {
            return;
          } else if (contentType?.includes("application/json")) {
            const data = await response.json();
            if (data.error) {
              throw new Error(`${data.error.type}: ${data.error.message}`);
            }
          }
        } else {
          throw new Error("Failed to communicate with the ChatGPT API");
        }
      };
  
      // This function passes each new message into the plugin via the `streamMessage` callback.
      const onmessage = (ev) => {
        const data = ev.data;
        if (data !== "[DONE]") {
          const parsedData = JSON.parse(data);
          const firstChoice = parsedData?.choices[0];
          const message = firstChoice?.delta?.content;
          if (message && message !== "") {
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
          fetchEventSource("https://api.openai.com/v1/chat/completions", {
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
              throw new Error(`${data.error.type}: ${data.error.message}`);
            }
          }
        })
        .catch(onerror);
    });
  },
  /*
  The following settings require more configuration than shown here.
  For information on configuring the mentions plugin, see:
  https://www.tiny.cloud/docs/tinymce/latest/mentions/.
  */
  mentions_selector: ".mymention",
  mentions_fetch: mentions_fetch, // TODO: Implement mentions_fetch
  mentions_menu_hover: mentions_menu_hover, // TODO: Implement mentions_menu_hover
  mentions_menu_complete: mentions_menu_complete, // TODO: Implement mentions_menu_complete
  mentions_select: mentions_select, // TODO: Implement mentions_select
  mentions_item_type: "profile",
});

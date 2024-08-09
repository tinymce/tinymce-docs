const fetchApi = import(
  "https://unpkg.com/@microsoft/fetch-event-source@2.0.1/lib/esm/index.js"
).then((module) => module.fetchEventSource);

/* Script to import faker.js for generating random data for demonstration purposes */
tinymce.ScriptLoader.loadScripts(['https://cdn.jsdelivr.net/npm/faker@5/dist/faker.min.js']).then(() => {

  /*
  ** This is to simulate requesting information from a server.
  **
  ** It has 2 functions:
  ** fetchUsers() - returns a complete list of users' ids and names.
  ** fetchUser(id) - returns the full information about a single user id.
  **
  ** Both of these functions have a slight delay to simulate a server request.
  */
  const fakeServer = (() => {
    /* Some user profile images for our fake server (original source: unsplash) */
    const images = [
      'Abdullah_Hadley', 'Abriella_Bond', 'Addilynn_Dodge', 'Adolfo_Hess', 'Alejandra_Stallings', 'Alfredo_Schafer', 'Aliah_Pitts', 'Amilia_Luna', 'Andi_Lane', 'Angelina_Winn', 'Arden_Dean', 'Ariyanna_Hicks', 'Asiya_Wolff', 'Brantlee_Adair', 'Carys_Metz', 'Daniela_Dewitt', 'Della_Case', 'Dianna_Smiley', 'Eliana_Stout', 'Elliana_Palacios', 'Fischer_Garland', 'Glen_Rouse', 'Grace_Gross', 'Heath_Atwood', 'Jakoby_Roman', 'Judy_Sewell', 'Kaine_Hudson', 'Kathryn_Mcgee', 'Kayley_Dwyer', 'Korbyn_Colon', 'Lana_Steiner', 'Loren_Spears', 'Lourdes_Browning', 'Makinley_Oneill', 'Mariana_Dickey', 'Miyah_Myles', 'Moira_Baxter', 'Muhammed_Sizemore', 'Natali_Craig', 'Nevaeh_Cates', 'Oscar_Khan', 'Rodrigo_Hawkins', 'Ryu_Duke', 'Tripp_Mckay', 'Vivianna_Kiser', 'Yamilet_Booker', 'Yarely_Barr', 'Zachary_Albright', 'Zahir_Mays', 'Zechariah_Burrell'
    ];

    /* Create an array of 200 random names using faker.js */
    const userNames = [];
    for (let i = 0; i < 200; i++) {
      userNames.push(faker.name.findName());
    }

    /* This represents a database of users on the server */
    const userDb = {};
    userNames.map((fullName) => {
      const id = fullName.toLowerCase().replace(/ /g, '');
      return {
        id: id,
        name: fullName,
        fullName: fullName,
        description: faker.name.jobTitle(),
        image: '{{imagesdir}}/unsplash/uifaces-unsplash-portrait-' + images[Math.floor(images.length * Math.random())] + '.jpg'
      };
    }).forEach((user) => {
      userDb[user.id] = user;
    });

    /* This represents getting the complete list of users from the server with the details required for the mentions "profile" item */
    const fetchUsers = () => new Promise((resolve, _reject) => {
      /* simulate a server delay */
      setTimeout(() => {
        const users = Object.keys(userDb).map(id => ({
          id: id,
          name: userDb[id].name,
          image: userDb[id].image,
          description: userDb[id].description
        }));
        resolve(users);
      }, 500);
    });

    /* This represents requesting all the details of a single user from the server database */
    const fetchUser = (id) => new Promise((resolve, reject) => {
      /* simulate a server delay */
      setTimeout(() => {
        if (Object.prototype.hasOwnProperty.call(userDb, id)) {
          resolve(userDb[id]);
        }
        reject(`unknown user id "${id}"`);
      }, 300);
    });

    return {
      fetchUsers: fetchUsers,
      fetchUser: fetchUser
    };
  })();

  /* These are "local" caches of the data returned from the fake server */
  let usersRequest = null;
  const userRequest = {};

  const mentions_fetch = (query, success) => {
    /* Fetch your full user list from somewhere */
    if (usersRequest === null) {
      usersRequest = fakeServer.fetchUsers();
    }
    usersRequest.then((users) => {
      /* `query.term` is the text the user typed after the '@' */
      users = users.filter((user) => user.name.indexOf(query.term.toLowerCase()) !== -1);
      users = users.slice(0, 10);

      /* Where the user object must contain the properties `id` and `name`
        but you could additionally include anything else you deem useful. */
      success(users);
    });
  };

  const mentions_menu_hover = (userInfo, success) => {
    /* Request more information about the user from the server and cache it locally */
    if (!userRequest[userInfo.id]) {
      userRequest[userInfo.id] = fakeServer.fetchUser(userInfo.id);
    }
    userRequest[userInfo.id].then(userDetail => {
      const div = document.createElement('div');

      div.innerHTML = (
        '<div class="card">' +
          '<img class="avatar" src="' + userDetail.image + '">' +
          '<h1>' + userDetail.fullName + '</h1>' +
          '<p>' + userDetail.description + '</p>' +
        '</div>'
      );

      success(div);
    });
  };

  const mentions_menu_complete = (editor, userInfo) => {
    const span = editor.getDoc().createElement('span');
    span.className = 'mymention';
    span.setAttribute('data-mention-id', userInfo.id);
    span.appendChild(editor.getDoc().createTextNode('@' + userInfo.name));
    return span;
  };

  const mentions_select = (mention, success) => {
    /* `mention` is the element we previously created with `mentions_menu_complete`
      in this case we have chosen to store the id as an attribute */
    const id = mention.getAttribute('data-mention-id');
    /* Request more information about the user from the server and cache it locally */
    if (!userRequest[id]) {
      userRequest[id] = fakeServer.fetchUser(id);
    }
    userRequest[id].then((userDetail) => {
      const div = document.createElement('div');
      div.innerHTML = (
        '<div class="card">' +
        '<img class="avatar" src="' + userDetail.image + '">' +
        '<h1>' + userDetail.fullName + '</h1>' +
        '<p>' + userDetail.description + '</p>' +
        '</div>'
      );
      success(div);
    });
  };

  const useDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isSmallScreen = window.matchMedia('(max-width: 1023.5px)').matches;

  const ai_request = (request, respondWith) => {
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
          Authorization: `Bearer {{ openai_proxy_token }}`,
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
          fetchEventSource("{{ openai_proxy_url }}", {
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
  };

  // revisionhistory_fetch
  const fetchRevisions = () => {
  return new Promise((resolve, _reject) => {
    /* Simulate fetching revisions from a server */
    setTimeout(() => {
      resolve([
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
    }, 500);
  });
  };

  tinymce.init({
    selector: 'textarea#full-featured',
    plugins: 'ai preview powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link math media mediaembed codesample table charmap pagebreak nonbreaking anchor tableofcontents insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker editimage help formatpainter permanentpen pageembed charmap tinycomments mentions quickbars linkchecker emoticons advtable footnotes mergetags autocorrect typography advtemplate markdown revisionhistory',
    editimage_cors_hosts: ['picsum.photos'],
    tinydrive_token_provider: (success, failure) => {
      success({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqb2huZG9lIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.Ks_BdfH4CWilyzLNk8S2gDARFhuxIauLa8PwhdEQhEo' });
    },
    tinydrive_demo_files_url: '{{imagesdir}}/tiny-drive-demo/demo_files.json',
    tinydrive_dropbox_app_key: 'jee1s9eykoh752j',
    tinydrive_google_drive_key: 'AIzaSyAsVRuCBc-BLQ1xNKtnLHB3AeoK-xmOrTc',
    tinydrive_google_drive_client_id: '748627179519-p9vv3va1mppc66fikai92b3ru73mpukf.apps.googleusercontent.com',
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
		typography_default_lang: 'en-US',
		typography_langs: [
			'en-US',
			'es',
			'de'
		],
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
    advtemplate_templates: [
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
							content: '<p>Just a quick note to let you know we are still working on your case</p>'
						}
					]
      }
    ],
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
    content_style: '.mymention{ color: gray; }' +
    'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
    contextmenu: 'link image editimage table spellchecker configurepermanentpen',
    a11y_advanced_options: true,
    skin: useDarkMode ? 'oxide-dark' : 'oxide',
    content_css: useDarkMode ? 'dark' : 'default',
    mentions_selector: '.mymention',
    mentions_fetch: mentions_fetch,
    mentions_menu_hover: mentions_menu_hover,
    mentions_menu_complete: mentions_menu_complete,
    mentions_select: mentions_select,
    mentions_item_type: 'profile',
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
    ai_request,
    revisionhistory_fetch: fetchRevisions,
    revisionhistory_author: {
      id: 'john.doe',
      name: 'John Doe'
    },
    revisionhistory_display_author: true,
  });
});

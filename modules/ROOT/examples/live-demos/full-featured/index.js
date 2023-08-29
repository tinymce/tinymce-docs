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

  tinymce.init({
    selector: 'textarea#full-featured',
    plugins: 'preview powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media mediaembed codesample table charmap pagebreak nonbreaking anchor tableofcontents insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker editimage help formatpainter permanentpen pageembed charmap tinycomments mentions quickbars linkchecker emoticons advtable export footnotes mergetags autocorrect typography advtemplate',
    editimage_cors_hosts: ['picsum.photos'],
    tinydrive_token_provider: (success, failure) => {
      success({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqb2huZG9lIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.Ks_BdfH4CWilyzLNk8S2gDARFhuxIauLa8PwhdEQhEo' });
    },
    tinydrive_demo_files_url: '{{imagesdir}}/tiny-drive-demo/demo_files.json',
    tinydrive_dropbox_app_key: 'jee1s9eykoh752j',
    tinydrive_google_drive_key: 'AIzaSyAsVRuCBc-BLQ1xNKtnLHB3AeoK-xmOrTc',
    tinydrive_google_drive_client_id: '748627179519-p9vv3va1mppc66fikai92b3ru73mpukf.apps.googleusercontent.com',
    mobile: {
      plugins: 'preview powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media mediaembed codesample table charmap pagebreak nonbreaking anchor tableofcontents insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker help formatpainter pageembed charmap mentions quickbars linkchecker emoticons advtable footnotes mergetags autocorrect typography advtemplate',
    },
    menu: {
      tc: {
        title: 'Comments',
        items: 'addcomment showcomments deleteallconversations'
      }
    },
    menubar: 'file edit view insert format tools table tc help',
      toolbar: "undo redo | aidialog aishortcuts | blocks fontsizeinput | bold italic | align numlist bullist | link image | table media pageembed | lineheight  outdent indent | strikethrough forecolor backcolor formatpainter removeformat | charmap emoticons checklist | code fullscreen preview | save print export | pagebreak anchor codesample footnotes mergetags | addtemplate inserttemplate | addcomment showcomments | ltr rtl casechange | spellcheckdialog a11ycheck," // Note: if a toolbar item requires a plugin, the item will not present in the toolbar if the plugin is not also loaded.
    toolbar_sticky: true,
    toolbar_sticky_offset: isSmallScreen ? 102 : 108,
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
    spellchecker_ignore_list: ['Ephox', 'Moxiecode', 'tinymce', 'TinyMCE', 'tm', 'TM'], // ‘tm’ and ‘TM’ are temporary spellchecker bug workarounds
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
    ]
  });
});

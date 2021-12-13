
/* Script to import faker.js for generating random data for demonstration purposes */
tinymce.ScriptLoader.loadScripts(['https://cdn.jsdelivr.net/npm/faker@5/dist/faker.min.js'], function() {

  /*
  ** This is to simulate requesting information from a server.
  **
  ** It has 2 functions:
  ** fetchUsers() - returns a complete list of users' ids and names.
  ** fetchUser(id) - returns the full information about a single user id.
  **
  ** Both of these functions have a slight delay to simulate a server request.
  */
  var fakeServer = (function () {
    /* Use TinyMCE's Promise shim */
    var Promise = tinymce.util.Promise;

    /* Some user profile images for our fake server (original source: unsplash) */
    var images = [
      'Abdullah_Hadley', 'Abriella_Bond', 'Addilynn_Dodge', 'Adolfo_Hess', 'Alejandra_Stallings', 'Alfredo_Schafer', 'Aliah_Pitts', 'Amilia_Luna', 'Andi_Lane', 'Angelina_Winn', 'Arden_Dean', 'Ariyanna_Hicks', 'Asiya_Wolff', 'Brantlee_Adair', 'Carys_Metz', 'Daniela_Dewitt', 'Della_Case', 'Dianna_Smiley', 'Eliana_Stout', 'Elliana_Palacios', 'Fischer_Garland', 'Glen_Rouse', 'Grace_Gross', 'Heath_Atwood', 'Jakoby_Roman', 'Judy_Sewell', 'Kaine_Hudson', 'Kathryn_Mcgee', 'Kayley_Dwyer', 'Korbyn_Colon', 'Lana_Steiner', 'Loren_Spears', 'Lourdes_Browning', 'Makinley_Oneill', 'Mariana_Dickey', 'Miyah_Myles', 'Moira_Baxter', 'Muhammed_Sizemore', 'Natali_Craig', 'Nevaeh_Cates', 'Oscar_Khan', 'Rodrigo_Hawkins', 'Ryu_Duke', 'Tripp_Mckay', 'Vivianna_Kiser', 'Yamilet_Booker', 'Yarely_Barr', 'Zachary_Albright', 'Zahir_Mays', 'Zechariah_Burrell'
    ];

    /* Create an array of 200 random names using faker.js */
    var userNames = [];
    for (var i = 0; i < 200; i++) {
      userNames.push(faker.name.findName());
    };

    /* This represents a database of users on the server */
    var userDb = {};
    userNames.map(function (fullName) {
      var id = fullName.toLowerCase().replace(/ /g, '');
      return {
        id: id,
        name: fullName,
        fullName: fullName,
        description: faker.name.jobTitle(),
        image: '{{ site.baseurl }}/images/unsplash/uifaces-unsplash-portrait-' + images[Math.floor(images.length * Math.random())] + '.jpg'
      };
    }).forEach(function(user) {
      userDb[user.id] = user;
    });

    /* This represents getting the complete list of users from the server with the details required for the mentions "profile" item */
    var fetchUsers = function() {
      return new Promise(function(resolve, _reject) {
        /* simulate a server delay */
        setTimeout(function() {
          var users = Object.keys(userDb).map(function(id) {
            return {
              id: id,
              name: userDb[id].name,
              image: userDb[id].image,
              description: userDb[id].description
            };
          });
          resolve(users);
        }, 500);
      });
    };

    /* This represents requesting all the details of a single user from the server database */
    var fetchUser = function(id) {
      return new Promise(function(resolve, reject) {
        /* simulate a server delay */
        setTimeout(function() {
          if (Object.prototype.hasOwnProperty.call(userDb, id)) {
            resolve(userDb[id]);
          }
          reject('unknown user id "' + id + '"');
        }, 300);
      });
    };

    return {
      fetchUsers: fetchUsers,
      fetchUser: fetchUser
    };
  })();

  /* These are "local" caches of the data returned from the fake server */
  var usersRequest = null;
  var userRequest = {};

  var mentions_fetch = function (query, success) {
    /* Fetch your full user list from somewhere */
    if (usersRequest === null) {
      usersRequest = fakeServer.fetchUsers();
    }
    usersRequest.then(function(users) {
      /* `query.term` is the text the user typed after the '@' */
      users = users.filter(function (user) {
        return user.name.indexOf(query.term.toLowerCase()) !== -1;
      });

      users = users.slice(0, 10);

      /* Where the user object must contain the properties `id` and `name`
        but you could additionally include anything else you deem useful. */
      success(users);
    });
  };

  var mentions_menu_hover = function (userInfo, success) {
    /* Request more information about the user from the server and cache it locally */
    if (!userRequest[userInfo.id]) {
      userRequest[userInfo.id] = fakeServer.fetchUser(userInfo.id);
    }
    userRequest[userInfo.id].then(function(userDetail) {
      var div = document.createElement('div');

      div.innerHTML = (
      '<div class="card">' +
        '<img class="avatar" src="' + userDetail.image + '"/>' +
        '<h1>' + userDetail.fullName + '</h1>' +
        '<p>' + userDetail.description + '</p>' +
      '</div>'
      );

      success(div);
    });
  };

  var mentions_menu_complete = function (editor, userInfo) {
    var span = editor.getDoc().createElement('span');
    span.className = 'mymention';
    span.setAttribute('data-mention-id', userInfo.id);
    span.appendChild(editor.getDoc().createTextNode('@' + userInfo.name));
    return span;
  };

  var mentions_select = function (mention, success) {
    /* `mention` is the element we previously created with `mentions_menu_complete`
      in this case we have chosen to store the id as an attribute */
    var id = mention.getAttribute('data-mention-id');
    /* Request more information about the user from the server and cache it locally */
    if (!userRequest[id]) {
      userRequest[id] = fakeServer.fetchUser(id);
    }
    userRequest[id].then(function(userDetail) {
      var div = document.createElement('div');
      div.innerHTML = (
        '<div class="card">' +
        '<img class="avatar" src="' + userDetail.image + '"/>' +
        '<h1>' + userDetail.fullName + '</h1>' +
        '<p>' + userDetail.description + '</p>' +
        '</div>'
      );
      success(div);
    });
  };

  var useDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  tinymce.init({
    selector: 'textarea#full-featured',
    plugins: 'preview powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample table charmap pagebreak nonbreaking anchor toc insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker imagetools textpattern noneditable help formatpainter permanentpen pageembed charmap tinycomments mentions quickbars linkchecker emoticons advtable export',
    imagetools_cors_hosts: ['picsum.photos'],
    tinydrive_token_provider: function (success, failure) {
      success({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqb2huZG9lIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.Ks_BdfH4CWilyzLNk8S2gDARFhuxIauLa8PwhdEQhEo' });
    },
    tinydrive_demo_files_url: '{{ site.baseurl }}/images/tiny-drive-demo/demo_files.json',
    tinydrive_dropbox_app_key: 'jee1s9eykoh752j',
    tinydrive_google_drive_key: 'AIzaSyAsVRuCBc-BLQ1xNKtnLHB3AeoK-xmOrTc',
    tinydrive_google_drive_client_id: '748627179519-p9vv3va1mppc66fikai92b3ru73mpukf.apps.googleusercontent.com',
    mobile: {
      plugins: 'preview powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker textpattern noneditable help formatpainter pageembed charmap mentions quickbars linkchecker emoticons advtable'
    },
    menu: {
      tc: {
        title: 'Comments',
        items: 'addcomment showcomments deleteallconversations'
      }
    },
    menubar: 'file edit view insert format tools table tc help',
    toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment',
    autosave_ask_before_unload: true,
    autosave_interval: '30s',
    autosave_prefix: '{path}{query}-{id}-',
    autosave_restore_when_empty: false,
    autosave_retention: '2m',
    image_advtab: true,
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
    templates: [
          { title: 'New Table', description: 'creates a new table', content: '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>' },
      { title: 'Starting my story', description: 'A cure for writers block', content: 'Once upon a time...' },
      { title: 'New list with dates', description: 'New List with dates', content: '<div class="mceTmpl"><span class="cdate">cdate</span><br /><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>' }
    ],
    template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
    template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
    height: 600,
    image_caption: true,
    quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
    noneditable_noneditable_class: 'mceNonEditable',
    toolbar_mode: 'sliding',
    spellchecker_ignore_list: ['Ephox', 'Moxiecode'],
    tinycomments_mode: 'embedded',
    content_style: '.mymention{ color: gray; }' +
    {{site.liveDemoIframeCSSStyles}},
    contextmenu: 'link image imagetools table spellchecker configurepermanentpen',
    a11y_advanced_options: true,
    skin: useDarkMode ? 'oxide-dark' : 'oxide',
    content_css: useDarkMode ? 'dark' : 'default',
    mentions_selector: '.mymention',
    mentions_fetch: mentions_fetch,
    mentions_menu_hover: mentions_menu_hover,
    mentions_menu_complete: mentions_menu_complete,
    mentions_select: mentions_select,
    mentions_item_type: 'profile'
  });
});
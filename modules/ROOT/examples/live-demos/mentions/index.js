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
    userNames.sort((a, b) => a.localeCompare(b));

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
        const users = Object.keys(userDb).map((id) => ({
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
        reject('unknown user id "' + id + '"');
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
      users = users.filter((user) => user.name.toLowerCase().includes(query.term.toLowerCase()))

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
    userRequest[userInfo.id].then((userDetail) => {
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

  tinymce.init({
    selector: 'textarea#mentions',
    plugins: 'mentions',
    content_style: '.mymention{ color: gray; }' +
      'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',

    mentions_selector: '.mymention',
    mentions_fetch: mentions_fetch,
    mentions_menu_hover: mentions_menu_hover,
    mentions_menu_complete: mentions_menu_complete,
    mentions_select: mentions_select,
    mentions_item_type: 'profile'
  });
});

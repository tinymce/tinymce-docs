import ('https://cdn.jsdelivr.net/npm/@faker-js/faker@9/dist/index.min.js').then(({ faker }) => {
  const adminUser = {
    id: 'johnsmith',
    name: 'John Smith',
    fullName: 'John Smith',
    description: 'Company Founder',
    image: "https://i.pravatar.cc/150?img=11"
  };

  const currentUser = {
    id: 'jennynichols',
    name: 'Jenny Nichols',
    fullName: 'Jenny Nichols',
    description: 'Marketing Director',
    image: "https://i.pravatar.cc/150?img=10"
  };
  
  const fakeDelay = 500;
  const numberOfUsers = 200;
  
  /* These are "local" caches of the data returned from the fake server */
  let fetchedUsers = false;
  let usersRequest; // Promise
  const userRequest = {};
  
  const setupFakeServer = () => {
    const images = [ adminUser.image, currentUser.image ];
    const userNames = [ adminUser.fullName, currentUser.fullName ];

    for (let i = 0; i < numberOfUsers; i++) {
      images.push(faker.image.avatar());
      userNames.push(`${faker.person.firstName()} ${faker.person.lastName()}`);
    }
  
    /* This represents a database of users on the server */
    const userDb = {
      [adminUser.id]: adminUser,
      [currentUser.id]: currentUser
    };
    userNames.map((fullName) => {
      if ((fullName !== currentUser.fullName) && (fullName !== adminUser.fullName)) {
        const id = fullName.toLowerCase().replace(/ /g, '');
        userDb[id] = {
          id,
          name: fullName,
          fullName,
          description: faker.person.jobTitle(),
          image: images[Math.floor(images.length * Math.random())]
        };
      }
    });
  
    /* This represents getting the complete list of users from the server with the details required for the mentions "profile" item */
    const fetchUsers = () => new Promise((resolve) => {
      /* simulate a server delay */
      setTimeout(() => {
        const users = Object.keys(userDb).map((id) => ({
          id,
          name: userDb[id].name,
          image: userDb[id].image,
          description: userDb[id].description
        }));
        resolve(users);
      }, fakeDelay);
    });
  
    const fetchUser = (id) => new Promise((resolve, reject) => {
      /* simulate a server delay */
      setTimeout(() => {
        if (Object.prototype.hasOwnProperty.call(userDb, id)) {
          resolve(userDb[id]);
        }
        reject('unknown user id "' + id + '"');
      }, fakeDelay);
    });

    return {
      fetchUsers,
      fetchUser
    };
  };

  const fakeServer = setupFakeServer();
  
  const mentions_fetch = (query, success) => {
    if (!fetchedUsers) {
      fetchedUsers = true;
      usersRequest = fakeServer.fetchUsers();
    }
    usersRequest.then((users) => {
      const userMatch = (name) => name.toLowerCase().indexOf(query.term.toLowerCase()) !== -1;
      success(users.filter((user) => userMatch(user.name) || userMatch(user.id)));
      fetchedUsers = false;
    });
  };
  
  const mentions_menu_hover = (userInfo, success) => {
    if (!userRequest[userInfo.id]) {
      userRequest[userInfo.id] = fakeServer.fetchUser(userInfo.id);
    }
    userRequest[userInfo.id].then((userDetail) => {
      success({ type: 'profile', user: userDetail });
    });
  };
  
  const mentions_menu_complete = (editor, userInfo) => {
    const span = editor.getDoc().createElement('span');
    span.className = 'mymention';
    span.setAttribute('style', 'color: #1b1; background-color: #eee;');
    span.setAttribute('data-mention-id', userInfo.id);
    span.appendChild(editor.getDoc().createTextNode('@' + userInfo.name));
    return span;
  };
  
  const mentions_select = (mention, success) => {
    const id = mention.getAttribute('data-mention-id');
    if (id) {
      userRequest[id] = fakeServer.fetchUser(id);
      userRequest[id].then((userDetail) => {
        success({ type: 'profile', user: userDetail });
      });
    }
  };

  const tinycomments_can_resolve = (req, done, _fail) => {
    const allowed = req.comments.length > 0 && req.comments[0].author === author;
    done({
      canResolve: allowed
    });
  };
  
  tinymce.init({
    selector: 'textarea#comments-embedded',
    license_key: 'gpl',
    toolbar: 'addcomment showcomments code | bold italic underline',
    menubar: 'file edit view insert format tools tc help',
    menu: {
      tc: {
        title: 'TinyComments',
        items: 'addcomment showcomments deleteallconversations'
      }
    },
    plugins: [ 'tinycomments', 'mentions', 'help', 'code' ],
    tinycomments_mentions_enabled: true,
  
    mentions_item_type: 'profile',
    mentions_min_chars: 0,
    mentions_selector: '.mymention',
    mentions_fetch,
    mentions_menu_hover,
    mentions_menu_complete,
    mentions_select,
  
    tinycomments_mode: 'embedded',
    tinycomments_author: currentUser.id,
    tinycomments_author_name: currentUser.fullName,
    tinycomments_avatar: currentUser.image,
    tinycomments_can_resolve,
  });
});

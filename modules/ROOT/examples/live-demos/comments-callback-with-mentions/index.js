import ('https://cdn.jsdelivr.net/npm/@faker-js/faker@9/dist/index.min.js').then(({ faker }) => {
  const userDb = {
    'michaelcook': {
      id: 'michaelcook',
      name: 'Michael Cook',
      fullName: 'Michael Cook',
      description: 'Product Owner',
      image: "{{imagesdir}}/avatars/michaelcook.png"
    },
    'kalebwilson': {
      id: 'kalebwilson',
      name: 'Kaleb Wilson',
      fullName: 'Kaleb Wilson',
      description: 'Marketing Director',
      image: "{{imagesdir}}/avatars/kalebwilson.png"
    }
  };
  
  const currentUid = 'kalebwilson';
  const adminUid = 'michaelcook';
  
  const currentUser = userDb[currentUid];
  const adminUser = userDb[adminUid];
  
  const now = new Date();
  const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000).toISOString();
  const anhourago = new Date(now.getTime() - 60 * 60 * 1000).toISOString();
  
  const fillAuthorInfo = (id, fullName, image) => ({
    author: id,
    authorName: fullName,
    authorAvatar: image,
  });
  
  const getAuthorInfo = (uid) => {
    const user = userDb[uid];
    if (user) {
      return fillAuthorInfo(user.id, user.fullName, user.image);
    }
    return {
      author: uid,
      authorName: uid,
    };
  };
  
  const conversationDb = {
    'mce-conversation_19679600221621399703915': {
      uid: 'mce-conversation_19679600221621399703915',
      comments: [{
        uid: 'mce-conversation_19679600221621399703915',
        ...getAuthorInfo(currentUid),
        content: `What do you think about this? @${adminUser.id}?`,
        createdAt: yesterday,
        modifiedAt: yesterday
      }, {
        uid: 'mce-conversation_19679600221621399703917',
        ...getAuthorInfo(adminUid),
        content: `I think this is a great idea @${currentUser.id}!`,
        createdAt: anhourago,
        modifiedAt: anhourago,
      }]
    },
    'mce-conversation_420304606321716900864126': {
      uid: 'mce-conversation_420304606321716900864126',
      comments: [{
        uid: 'mce-conversation_420304606321716900864126',
        ...getAuthorInfo(adminUid),
        content: `@${currentUser.id} Please revise this sentence, exclamation points are unprofessional!`,
        createdAt: yesterday,
        modifiedAt: anhourago
      }]
    }
  };
  
  const fakeDelay = 200;
  const numberOfUsers = 200;
  const randomString = () => {
    return crypto.getRandomValues(new Uint32Array(1))[0].toString(36).substring(2, 14);
  };
  
  /* These are "local" caches of the data returned from the fake server */
  let fetchedUsers = false;
  let usersRequest; // Promise
  const userRequest = {};
  const resolvedConversationDb = {};
  
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
  
  /********************************
   *   Mentions functions    *
   ********************************/
  
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
    span.setAttribute('style', 'color: #37F;');
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
  
  /********************************
   *   Tiny Comments functions    *
   * (must call "done" or "fail") *
   ********************************/

  const tinycomments_create = (req, done, fail) => {
    if (req.content === 'fail') {
      fail(new Error('Something has gone wrong...'));
    } else {
      const uid = 'annotation-' + randomString();
      conversationDb[uid] = {
        uid,
        comments: [{
          uid,
          ...getAuthorInfo(currentUid),
          content: req.content,
          createdAt: req.createdAt,
          modifiedAt: req.createdAt
        }]
      };
      setTimeout(() => done({ conversationUid: uid }), fakeDelay);
    }
  };

  const tinycomments_reply = (req, done) => {
    const replyUid = 'annotation-' + randomString();
    conversationDb[req.conversationUid].comments.push({
      uid: replyUid,
      ...getAuthorInfo(currentUid),
      content: req.content,
      createdAt: req.createdAt,
      modifiedAt: req.createdAt
    });
    setTimeout(() => done({ commentUid: replyUid }), fakeDelay);
  };

  const tinycomments_delete = (req, done) => {
    if (currentUid === adminUid) { // Replace wth your own logic, e.g. check if user created the conversation
      delete conversationDb[req.conversationUid];
      setTimeout(() => done({ canDelete: true }), fakeDelay);
    } else {
      setTimeout(() => done({ canDelete: false, reason: 'Must be admin user' }), fakeDelay);
    }
  };

  const tinycomments_resolve = (req, done) => {
    const conversation = conversationDb[req.conversationUid];
    if (currentUid === conversation.comments[0].author) { // Replace wth your own logic, e.g. check if user has admin priveleges
      delete conversationDb[req.conversationUid];
      setTimeout(() => done({ canResolve: true }), fakeDelay);
    } else {
      setTimeout(() => done({ canResolve: false, reason: 'Must be conversation author' }), fakeDelay);
    }
  };

  const tinycomments_delete_comment = (req, done) => {
    const oldcomments = conversationDb[req.conversationUid].comments;
    let reason = 'Comment not found';

    const newcomments = oldcomments.filter((comment) => {
      if (comment.uid === req.commentUid) { // Found the comment to delete
        if (currentUid === comment.author) { // Replace with your own logic, e.g. check if user has admin privileges
          return false; // Remove the comment
        } else {
          reason = 'Not authorised to delete this comment'; // Update reason
        }
      }
      return true; // Keep the comment
    });
    if (newcomments.length === oldcomments.length) {
      setTimeout(() => done({ canDelete: false, reason }), fakeDelay);
    } else {
      conversationDb[req.conversationUid].comments = newcomments;
      setTimeout(() => done({ canDelete: true }), fakeDelay);
    }
  };

  const tinycomments_edit_comment = (req, done) => {
    const oldcomments = conversationDb[req.conversationUid].comments;
    let reason = 'Comment not found';
    let canEdit = false;

    const newcomments = oldcomments.map((comment) => {
      if (comment.uid === req.commentUid) { // Found the comment to delete
        if (currentUid === comment.author) { // Replace with your own logic, e.g. check if user has admin privileges
          canEdit = true; // User can edit the comment
          return { ...comment, content: req.content, modifiedAt: new Date().toISOString() }; // Update the comment
        } else {
          reason = 'Not authorised to edit this comment'; // Update reason
        }
      }
      return comment; // Keep the comment
    });

    if (canEdit) {
      conversationDb[req.conversationUid].comments = newcomments;
      setTimeout(() => done({ canEdit }), fakeDelay);
    } else {
      setTimeout(() => done({ canEdit, reason }), fakeDelay);
    }
  };

  const tinycomments_delete_all = (req, done) => {
    const conversation = conversationDb[req.conversationUid];
    if (currentUid === conversation.comments[0].author) { // Replace wth your own logic, e.g. check if user has admin priveleges
      delete conversationDb[req.conversationUid];
      setTimeout(() => done({ canDelete: true }), fakeDelay);
    } else {
      setTimeout(() => done({ canDelete: false, reason: 'Must be conversation author' }), fakeDelay);
    }
  };

  const tinycomments_lookup = (req, done) => {
    setTimeout(() => {
      done({
        conversation: {
          uid: conversationDb[req.conversationUid].uid,
          comments: [...conversationDb[req.conversationUid].comments]
        }
      });
    }, fakeDelay);
  };

  const tinycomments_fetch = (conversationUids, done) => {
    const fetchedConversations = {};
    conversationUids.forEach((uid) => {
      const conversation = conversationDb[uid];
      if (conversation) {
        fetchedConversations[uid] = {...conversation};
      }
    });
    setTimeout(() => done({ conversations: fetchedConversations }), fakeDelay);
  };

  // Read the above `getAuthorInfo` function to see how this could be implemented
  const tinycomments_fetch_author_info = (done) => done(getAuthorInfo(currentUid));
  
  tinymce.init({
    selector: 'textarea#comments-callback-with-mentions',
    license_key: 'gpl',
    toolbar: 'addcomment showcomments code | bold italic underline',
    menubar: 'file edit view insert format tools tc help',
    menu: {
      tc: {
        title: 'TinyComments',
        items: 'addcomment showcomments deleteallconversations'
      }
    },
    plugins: [ 'tinycomments', 'mentions', 'help', 'code', 'quickbars', 'link', 'lists', 'image' ],
    quickbars_selection_toolbar: 'alignleft aligncenter alignright | addcomment showcomments',
    quickbars_image_toolbar: 'alignleft aligncenter alignright | rotateleft rotateright | imageoptions',
    tinycomments_mentions_enabled: true,
    sidebar_show: 'showcomments',
  
    mentions_item_type: 'profile',
    mentions_min_chars: 0,
    mentions_selector: '.mymention',
    mentions_fetch,
    mentions_menu_hover,
    mentions_menu_complete,
    mentions_select,
  
    tinycomments_mode: 'callback',
    tinycomments_author: currentUser.id,
    tinycomments_author_name: currentUser.fullName,
    tinycomments_avatar: currentUser.image,
    tinycomments_create,
    tinycomments_reply,
    tinycomments_delete,
    tinycomments_resolve,
    tinycomments_delete_all,
    tinycomments_lookup,
    tinycomments_delete_comment,
    tinycomments_edit_comment,
    tinycomments_fetch,
    tinycomments_fetch_author_info
  });
});

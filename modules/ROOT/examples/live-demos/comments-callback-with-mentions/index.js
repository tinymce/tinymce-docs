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
  
  const conversationDb = {
    'mce-conversation_19679600221621399703915': {
      uid: 'mce-conversation_19679600221621399703915',
      comments: [{
        uid: 'mce-conversation_19679600221621399703915',
        author: currentUser.id,
        authorName: currentUser.fullName,
        authorAvatar: currentUser.image,
        content: `What do you think about this @${adminUser.id}?`,
        createdAt: '2021-05-19T04:48:23.914Z',
        modifiedAt: '2021-05-19T04:48:23.914Z'
      },
      {
        uid: 'mce-conversation_19679600221621399703917',
        author: adminUser.id,
        authorName: adminUser.fullName,
        authorAvatar: adminUser.image,
        content: `I think this is a great idea @${currentUser.id}!`,
        createdAt: "2024-05-28T12:54:24.126Z",
        modifiedAt: "2024-05-28T12:54:24.126Z",
      }]
    },
    'mce-conversation_420304606321716900864126': {
      uid: 'mce-conversation_420304606321716900864126',
      comments: [{
        uid: 'mce-conversation_420304606321716900864126',
        author: adminUser.id,
        authorName: adminUser.fullName,
        authorAvatar: adminUser.image,
        content: `@${currentUser.id} Please revise this sentence, exclamation points are unprofessional!`,
        createdAt: '2024-05-28T12:54:24.126Z',
        modifiedAt: '2024-05-28T12:54:24.126Z'
      }]
    }
  };
  
  const fakeDelay = 500;
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
  
  const tinycomments_create = (req, done, fail) => {
    if (req.content === 'fail') {
      fail(new Error('Something has gone wrong...'));
    } else {
      const uid = 'annotation-' + randomString();
      conversationDb[uid] = {
        uid,
        comments: [{
        uid,
        authorName: currentUser.fullName,
        authorAvatar: currentUser.image,
        author: currentUser.name,
        content: req.content,
        createdAt: req.createdAt,
        modifiedAt: req.createdAt
        }]
      };
    
      setTimeout(() => {
        done({
        conversationUid: uid
        });
      }, fakeDelay);
    }
  };
  
  const tinycomments_reply = (req, done) => {
    const replyUid = 'annotation-' + randomString();
    const current = conversationDb[req.conversationUid];
    current.comments.push(
      {
        uid: replyUid,
        authorName: currentUser.fullName,
        authorAvatar: currentUser.image,
        author: currentUser.name,
        content: req.content,
        createdAt: req.createdAt,
        modifiedAt: req.createdAt
      }
    );
  
    setTimeout(() => {
      done({
        commentUid: replyUid
      });
    }, fakeDelay);
  };
  
  const tinycomments_delete = (req, done) => {
    delete conversationDb[req.conversationUid];
  
    setTimeout(() => {
      done({
        canDelete: true
      });
    }, fakeDelay);
  };
  
  const tinycomments_resolve = (req, done) => {
    resolvedConversationDb[req.conversationUid] = conversationDb[req.conversationUid];
    delete conversationDb[req.conversationUid];
  
    setTimeout(() => {
      done({
        canResolve: true
      });
    }, fakeDelay);
  };
  
  const tinycomments_delete_comment = (req, done) => {
    const current = conversationDb[req.conversationUid];
    // Should be supported on browsers ...
    current.comments = current.comments.filter((f) => {
      return f.uid !== req.commentUid;
    });
  
    setTimeout(() => {
      done({
        canDelete: true
      });
    }, fakeDelay);
  };
  
  const tinycomments_edit_comment = (req, done) => {
    const current = conversationDb[req.conversationUid];
    // Should be supported on browsers ...
    current.comments = current.comments.map((f) => {
    return f.uid === req.commentUid ? {
        ...f,
        content: req.content,
        modifiedAt: new Date().toISOString()
      } : f;
    });
  
    setTimeout(() => {
      done({
        canEdit: true
      });
    }, fakeDelay);
  };
  
  const tinycomments_delete_all = (req, done) => {
    Object.keys(conversationDb).forEach((k) => {
      delete conversationDb[k];
    });
  
    setTimeout(() => {
      done({
        canDelete: true
      });
    }, fakeDelay);
  };
  
  const tinycomments_lookup = (req, done) => {
    setTimeout(() => {
      done({
        conversation: {
        uid: conversationDb[req.conversationUid].uid,
        comments: conversationDb[req.conversationUid].comments.slice(0)
        }
      });
    }, fakeDelay);
  };
  
  const tinycomments_fetch = (_, done) => {
    setTimeout(() => done({
      conversations: conversationDb
    }), fakeDelay);
  };
  
  
  tinymce.init({
    selector: 'textarea#comments-callback',
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
  });
});

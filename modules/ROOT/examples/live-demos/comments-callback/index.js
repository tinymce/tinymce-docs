/********************************
 *   Tiny Comments functions    *
 * (must call "done" or "fail") *
 ********************************/

import('https://cdn.jsdelivr.net/npm/@faker-js/faker@9/dist/index.min.js').then(() => {
  const adminUser = {
    id: 'johnsmith',
    name: 'John Smith',
    fullName: 'John Smith',
    description: 'Company Founder',
    image: "https://i.pravatar.cc/150?img=11"
  };

  const currentUser = {
    id: 'Bennichols',
    name: 'Ben Nichols',
    fullName: 'Ben Nichols',
    description: 'Marketing Director',
    image: "https://fiddle.tiny.cloud/images/spellchecker-pro-2018-04-12@2x.png"
  };

  const conversationDb = {
    'mce-conversation_19679600221621399703915': {
      uid: 'mce-conversation_19679600221621399703915',
      comments: [{
        uid: 'mce-conversation_19679600221621399703915',
        author: currentUser.id,
        authorName: currentUser.fullName,
        authorAvatar: currentUser.image,
        content: `What do you think about this?`,
        createdAt: '2021-05-19T04:48:23.914Z',
        modifiedAt: '2021-05-19T04:48:23.914Z'
      }, {
        uid: 'mce-conversation_19679600221621399703917',
        author: adminUser.id,
        authorName: adminUser.fullName,
        authorAvatar: adminUser.image,
        content: `I think this is a great idea!`,
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
        content: `Please revise this sentence, exclamation points are unprofessional!`,
        createdAt: '2024-05-28T12:54:24.126Z',
        modifiedAt: '2024-05-28T12:54:24.126Z'
      }]
    }
  };

  const fakeDelay = 200;
  const randomString = () => crypto.getRandomValues(new Uint32Array(1))[0].toString(36).substring(2, 14);

  const resolvedConversationDb = {};

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
      setTimeout(() => done({ conversationUid: uid }), fakeDelay);
    }
  };

  const tinycomments_reply = (req, done) => {
    const replyUid = 'annotation-' + randomString();
    conversationDb[req.conversationUid].comments.push({
      uid: replyUid,
      authorName: currentUser.fullName,
      authorAvatar: currentUser.image,
      author: currentUser.name,
      content: req.content,
      createdAt: req.createdAt,
      modifiedAt: req.createdAt
    });
    setTimeout(() => done({ commentUid: replyUid }), fakeDelay);
  };

  const tinycomments_delete = (req, done) => {
    delete conversationDb[req.conversationUid];
    setTimeout(() => done({ canDelete: true }), fakeDelay);
  };

  const tinycomments_resolve = (req, done) => {
    resolvedConversationDb[req.conversationUid] = conversationDb[req.conversationUid];
    delete conversationDb[req.conversationUid];
    setTimeout(() => done({ canResolve: true }), fakeDelay);
  };

  const tinycomments_delete_comment = (req, done) => {
    conversationDb[req.conversationUid].comments = conversationDb[req.conversationUid].comments.filter(
      (f) => f.uid !== req.commentUid
    );
    setTimeout(() => done({ canDelete: true }), fakeDelay);
  };

  const tinycomments_edit_comment = (req, done) => {
    conversationDb[req.conversationUid].comments = conversationDb[req.conversationUid].comments.map(
      (f) => f.uid === req.commentUid ? { ...f, content: req.content, modifiedAt: new Date().toISOString() } : f
    );
    setTimeout(() => done({ canEdit: true }), fakeDelay);
  };

  const tinycomments_delete_all = (_, done) => {
    Object.keys(conversationDb).forEach((k) => delete conversationDb[k]);
    setTimeout(() => done({ canDelete: true }), fakeDelay);
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

  tinymce.init({
    selector: 'textarea#comments-callback',
    license_key: 'gpl',
    height: 800,
    toolbar: 'addcomment showcomments code | bold italic underline',
    menubar: 'file edit view insert format tools tc help',
    menu: {
      tc: {
        title: 'TinyComments',
        items: 'addcomment showcomments deleteallconversations'
      }
    },
    plugins: ['tinycomments', 'help', 'code', 'quickbars', 'link', 'lists', 'image'],
    quickbars_selection_toolbar: 'alignleft aligncenter alignright | addcomment showcomments',
    quickbars_image_toolbar: 'alignleft aligncenter alignright | rotateleft rotateright | imageoptions',
    sidebar_show: 'showcomments',
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
  });
});
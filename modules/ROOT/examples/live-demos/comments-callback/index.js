/********************************
 *   Demo-specific configuration  *
 ********************************/

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
}

const conversationDb = {
  'mce-conversation_19679600221621399703915': {
    uid: 'mce-conversation_19679600221621399703915',
    comments: [{
      uid: 'mce-conversation_19679600221621399703915',
      ...getAuthorInfo(currentUid),
      content: `What do you think about this?`,
      createdAt: yesterday,
      modifiedAt: yesterday
    }, {
      uid: 'mce-conversation_19679600221621399703917',
      ...getAuthorInfo(adminUid),
      content: `I think this is a great idea!`,
      createdAt: anhourago,
      modifiedAt: anhourago,
    }]
  },
  'mce-conversation_420304606321716900864126': {
    uid: 'mce-conversation_420304606321716900864126',
    comments: [{
      uid: 'mce-conversation_420304606321716900864126',
      ...getAuthorInfo(adminUid),
      content: `Please revise this sentence, exclamation points are unprofessional!`,
      createdAt: yesterday,
      modifiedAt: anhourago
    }]
  }
};

const fakeDelay = 200;
const randomString = () => crypto.getRandomValues(new Uint32Array(1))[0].toString(36).substring(2, 14);

const resolvedConversationDb = {};

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
const tinycomments_fetch_author_info = (_, done) => done(getAuthorInfo(currentUid));

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
  tinycomments_create,
  tinycomments_reply,
  tinycomments_delete,
  tinycomments_resolve,
  tinycomments_delete_all,
  tinycomments_lookup,
  tinycomments_delete_comment,
  tinycomments_edit_comment,
  tinycomments_fetch,
  tinycomments_fetch_author_info,
});

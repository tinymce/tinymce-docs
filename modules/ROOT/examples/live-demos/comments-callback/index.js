const API_URL = 'https://demouserdirectory.tiny.cloud/v1/users';

const user_id = 'james-wilson';
const collaborator_id = 'mia-andersson';

const now = new Date();
const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000).toISOString();
const anhourago = new Date(now.getTime() - 60 * 60 * 1000).toISOString();
const fakeDelay = 200;

const randomString = () => {
  return crypto.getRandomValues(new Uint32Array(1))[0].toString(36).substring(2, 14);
};

const conversationDb = {
  'mce-conversation_19679600221621399703915': {
    uid: 'mce-conversation_19679600221621399703915',
    comments: [{
      uid: 'mce-conversation_19679600221621399703915',
      author: user_id,
      authorName: 'James Wilson',
      authorAvatar: 'https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_james-wilson_128_52f19412.jpg',
      content: `What do you think about this?`,
      createdAt: yesterday,
      modifiedAt: yesterday
    }, {
      uid: 'mce-conversation_19679600221621399703917',
      author: collaborator_id,
      authorName: 'Mia Andersson',
      authorAvatar: 'https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_mia-andersson_128_e6f9424b.jpg',
      content: `I think this is a great idea!`,
      createdAt: anhourago,
      modifiedAt: anhourago,
    }]
  },
  'mce-conversation_420304606321716900864126': {
    uid: 'mce-conversation_420304606321716900864126',
    comments: [{
      uid: 'mce-conversation_420304606321716900864126',
      author: collaborator_id,
      authorName: 'Mia Andersson',
      authorAvatar: 'https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_mia-andersson_128_e6f9424b.jpg',
      content: `Please revise this sentence, exclamation points are unprofessional!`,
      createdAt: yesterday,
      modifiedAt: anhourago
    }]
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
          author: user_id,
          authorName: 'James Wilson',
          authorAvatar: 'https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_james-wilson_128_52f19412.jpg',
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
    author: user_id,
    authorName: 'James Wilson',
    authorAvatar: 'https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_james-wilson_128_52f19412.jpg',
    content: req.content,
    createdAt: req.createdAt,
    modifiedAt: req.createdAt
  });
  setTimeout(() => done({ commentUid: replyUid }), fakeDelay);
};

const tinycomments_delete = (req, done) => {
  if (user_id === collaborator_id) { // Replace wth your own logic, e.g. check if user created the conversation
    delete conversationDb[req.conversationUid];
    setTimeout(() => done({ canDelete: true }), fakeDelay);
  } else {
    setTimeout(() => done({ canDelete: false, reason: 'Must be admin user' }), fakeDelay);
  }
};

const tinycomments_resolve = (req, done) => {
  const conversation = conversationDb[req.conversationUid];
  if (user_id === conversation.comments[0].author) { // Replace wth your own logic, e.g. check if user has admin priveleges
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
      if (user_id === comment.author) { // Replace with your own logic, e.g. check if user has admin privileges
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
      if (user_id === comment.author) { // Replace with your own logic, e.g. check if user has admin privileges
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
  if (user_id === conversation.comments[0].author) { // Replace wth your own logic, e.g. check if user has admin priveleges
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

const tinycomments_fetch_author_info = (done) => {
  fetch(`${API_URL}/${user_id}`)
    .then(res => res.json())
    .then(currentUser => {
      done({
        author: currentUser.id,
        authorName: currentUser.name,
        authorAvatar: currentUser.avatar
      });
    });
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
  plugins: [ 'tinycomments', 'help', 'code', 'quickbars', 'link', 'lists', 'image' ],
  quickbars_selection_toolbar: 'alignleft aligncenter alignright | addcomment showcomments',
  quickbars_image_toolbar: 'alignleft aligncenter alignright | rotateleft rotateright | imageoptions',
  
  tinycomments_mode: 'callback',
  tinycomments_mentions_enabled: true,
  sidebar_show: 'showcomments',
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
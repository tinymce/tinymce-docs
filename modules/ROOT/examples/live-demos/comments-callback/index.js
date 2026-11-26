const API_URL = 'https://demouserdirectory.tiny.cloud/v1/users';

// The signed-in user. Replace with the ID of the user in your application.
const user_id = 'ava-mitchell';

const fakeDelay = 200;

const users = {
  'ava-mitchell': { name: 'Ava Mitchell', avatar: 'https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_ava-mitchell_128_8073af20.jpg' },
  'daniel-long': { name: 'Daniel Long', avatar: 'https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_daniel-long_128_732bc263.jpg' },
  'grace-lee': { name: 'Grace Lee', avatar: 'https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_grace-lee_128_60439c26.jpg' },
  'joshua-perry': { name: 'Joshua Perry', avatar: 'https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_joshua-perry_128_47869386.jpg' }
};

const hoursAgo = (hours) => new Date(Date.now() - hours * 60 * 60 * 1000).toISOString();

const randomString = () => crypto.getRandomValues(new Uint32Array(1))[0].toString(36);

const makeComment = (uid, author, content, createdAt) => ({
  uid,
  author,
  authorName: users[author].name,
  authorAvatar: users[author].avatar,
  content,
  createdAt,
  modifiedAt: createdAt
});

// An in-memory stand-in for the server that stores conversations.
// Each key matches a data-mce-annotation-uid attribute in the editor content.
const conversationDb = {
  'mce-conversation_trail-miles': {
    uid: 'mce-conversation_trail-miles',
    comments: [
      makeComment('mce-conversation_trail-miles', 'ava-mitchell',
        'The parks department press release says 12 miles. Which figure is right?', hoursAgo(26)),
      makeComment('mce-conversation_trail-miles-reply-1', 'daniel-long',
        '14 is right. The release went out before Cedar Loop reopened on Monday, and the ranger station confirmed the total this morning.', hoursAgo(5))
    ]
  },
  'mce-conversation_ranger-quote': {
    uid: 'mce-conversation_ranger-quote',
    comments: [
      makeComment('mce-conversation_ranger-quote', 'joshua-perry',
        'Did Ranger Ortiz agree to be quoted by name? The department usually sends media questions to its press office.', hoursAgo(8)),
      makeComment('mce-conversation_ranger-quote-reply-1', 'daniel-long',
        'Yes. It was a recorded phone interview on November 24, and the press office approved it.', hoursAgo(6))
    ]
  },
  'mce-conversation_file-photo': {
    uid: 'mce-conversation_file-photo',
    comments: [
      makeComment('mce-conversation_file-photo', 'grace-lee',
        'The photo next to this paragraph is a 2024 file photo taken before the storm. Label it as a file photo, or I can send a photographer up on Friday.', hoursAgo(1))
    ]
  }
};

const startedByCurrentUser = (conversationUid) =>
  conversationDb[conversationUid].comments[0].author === user_id;

const tinycomments_create = (req, done) => {
  const uid = 'mce-conversation_' + randomString();
  conversationDb[uid] = {
    uid,
    comments: [ makeComment(uid, user_id, req.content, req.createdAt) ]
  };
  setTimeout(() => done({ conversationUid: uid }), fakeDelay);
};

const tinycomments_reply = (req, done) => {
  const commentUid = req.conversationUid + '-reply-' + randomString();
  conversationDb[req.conversationUid].comments.push(
    makeComment(commentUid, user_id, req.content, req.createdAt)
  );
  setTimeout(() => done({ commentUid, author: user_id, authorName: users[user_id].name }), fakeDelay);
};

// Users can edit and delete only their own comments
const tinycomments_edit_comment = (req, done) => {
  const comment = conversationDb[req.conversationUid].comments
    .find((c) => c.uid === req.commentUid);
  if (comment && comment.author === user_id) {
    comment.content = req.content;
    comment.modifiedAt = new Date().toISOString();
    setTimeout(() => done({ canEdit: true }), fakeDelay);
  } else {
    setTimeout(() => done({ canEdit: false, reason: 'Only the author can edit this comment.' }), fakeDelay);
  }
};

const tinycomments_delete_comment = (req, done) => {
  const conversation = conversationDb[req.conversationUid];
  const comment = conversation.comments.find((c) => c.uid === req.commentUid);
  if (comment && comment.author === user_id) {
    conversation.comments = conversation.comments.filter((c) => c.uid !== req.commentUid);
    setTimeout(() => done({ canDelete: true }), fakeDelay);
  } else {
    setTimeout(() => done({ canDelete: false, reason: 'Only the author can delete this comment.' }), fakeDelay);
  }
};

// Users can delete or resolve only the conversations they started
const tinycomments_delete = (req, done) => {
  if (startedByCurrentUser(req.conversationUid)) {
    delete conversationDb[req.conversationUid];
    setTimeout(() => done({ canDelete: true }), fakeDelay);
  } else {
    setTimeout(() => done({ canDelete: false, reason: 'Only the person who started this conversation can delete it.' }), fakeDelay);
  }
};

const tinycomments_resolve = (req, done) => {
  if (startedByCurrentUser(req.conversationUid)) {
    delete conversationDb[req.conversationUid];
    setTimeout(() => done({ canResolve: true }), fakeDelay);
  } else {
    setTimeout(() => done({ canResolve: false, reason: 'Only the person who started this conversation can resolve it.' }), fakeDelay);
  }
};

const tinycomments_delete_all = (_req, done) => {
  Object.keys(conversationDb).forEach((uid) => delete conversationDb[uid]);
  setTimeout(() => done({ canDelete: true }), fakeDelay);
};

const tinycomments_lookup = (req, done) => {
  const conversation = conversationDb[req.conversationUid];
  setTimeout(() => done({
    conversation: { uid: conversation.uid, comments: [ ...conversation.comments ] }
  }), fakeDelay);
};

// Load every conversation in the document in one request
const tinycomments_fetch = (conversationUids, done) => {
  const conversations = {};
  conversationUids.forEach((uid) => {
    if (conversationDb[uid]) {
      conversations[uid] = { ...conversationDb[uid], comments: [ ...conversationDb[uid].comments ] };
    }
  });
  setTimeout(() => done({ conversations }), fakeDelay);
};

tinymce.init({
  selector: 'textarea#comments-callback',
  height: 720,
  plugins: [
    'tinycomments', 'quickbars',
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'addcomment showcomments | undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
  quickbars_selection_toolbar: 'addcomment | bold italic | quicklink',
  quickbars_insert_toolbar: false,
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],

  tinycomments_mode: 'callback',
  tinycomments_create,
  tinycomments_reply,
  tinycomments_edit_comment,
  tinycomments_delete_comment,
  tinycomments_delete,
  tinycomments_resolve,
  tinycomments_delete_all,
  tinycomments_lookup,
  tinycomments_fetch,
  tinycomments_always_show_highlights: true,
  sidebar_show: 'showcomments',

  user_id,
  fetch_users: (userIds) => Promise.all(userIds
    .map((userId) =>
      fetch(`${API_URL}/${userId}`)
        .then((response) => response.json())
        .catch(() => ({ id: userId }))))
});

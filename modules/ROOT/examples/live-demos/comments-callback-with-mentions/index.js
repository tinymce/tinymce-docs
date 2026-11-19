const API_URL = 'https://demouserdirectory.tiny.cloud/v1/users';

// The signed-in user. Replace with the ID of the user in your application.
const user_id = 'james-wilson';

const fakeDelay = 200;

const users = {
  'james-wilson': { name: 'James Wilson', avatar: 'https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_james-wilson_128_52f19412.jpg' },
  'mia-andersson': { name: 'Mia Andersson', avatar: 'https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_mia-andersson_128_e6f9424b.jpg' },
  'jade-scott': { name: 'Jade Scott', avatar: 'https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_jade-scott_128_515dc6a1.jpg' },
  'anna-petrov': { name: 'Anna Petrov', avatar: 'https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_anna-petrov_128_00f7f951.jpg' }
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
  'mce-conversation_sync-time': {
    uid: 'mce-conversation_sync-time',
    comments: [
      makeComment('mce-conversation_sync-time', 'mia-andersson',
        '@james-wilson is 60 seconds realistic on a weak signal?', hoursAgo(49)),
      makeComment('mce-conversation_sync-time-reply-1', 'james-wilson',
        '@mia-andersson test uploads over 3G took 20 to 40 seconds for a report with five photos, so 60 seconds holds for most reports. Reports with many photos take longer.', hoursAgo(20)),
      makeComment('mce-conversation_sync-time-reply-2', 'jade-scott',
        '@james-wilson adding a test case for a report with 20 photos to the regression suite. Results will be in the Friday test report.', hoursAgo(3))
    ]
  },
  'mce-conversation_report-limit': {
    uid: 'mce-conversation_report-limit',
    comments: [
      makeComment('mce-conversation_report-limit', 'anna-petrov',
        '@mia-andersson what happens when an inspector reaches the 50-report limit? Please describe the expected behavior in this table.', hoursAgo(8))
    ]
  },
  'mce-conversation_map-tiles': {
    uid: 'mce-conversation_map-tiles',
    comments: [
      makeComment('mce-conversation_map-tiles', 'james-wilson',
        'Map tiles need about 300 MB of storage per region. Suggest leaving them out of version 4.2.', hoursAgo(1))
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

// Mentions: search the user directory and insert a styled span for the selected person.
// In comments, a mention is stored as @ followed by the user ID.
const toMentionsUser = (userInfo) => ({
  id: userInfo.id,
  name: userInfo.name,
  image: userInfo.avatar,
  description: userInfo.custom.role
});

const mentions_fetch = (query, success) => {
  fetch(`${API_URL}?q=${encodeURIComponent(query.term.toLowerCase())}&limit=10`)
    .then((response) => response.json())
    .then((users) => success(users.data.map(toMentionsUser)))
    .catch((error) => console.error(error));
};

const mentions_menu_complete = (editor, userInfo) => {
  const span = editor.getDoc().createElement('span');
  span.className = 'mymention';
  span.setAttribute('data-mention-id', userInfo.id);
  span.appendChild(editor.getDoc().createTextNode('@' + userInfo.name));
  return span;
};

const mentions_menu_hover = (userInfo, success) => {
  success({ type: 'profile', user: userInfo });
};

const mentions_select = (mention, success) => {
  const id = mention.getAttribute('data-mention-id');
  fetch(`${API_URL}/${id}`)
    .then((response) => response.json())
    .then((userInfo) => success({ type: 'profile', user: toMentionsUser(userInfo) }))
    .catch((error) => console.error(error));
};

tinymce.init({
  selector: 'textarea#comments-callback-with-mentions',
  height: 680,
  plugins: 'tinycomments mentions quickbars lists link advlist autolink image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table help wordcount',
  toolbar: 'addcomment showcomments | undo redo | blocks | bold italic | ' +
    'bullist numlist | link | backcolor | ' +
    'alignleft aligncenter alignright alignjustify | outdent indent | ' +
    'removeformat | help',
  menubar: 'file edit view insert format tools table comments help',
  menu: {
    comments: { title: 'Comments', items: 'addcomment showcomments deleteallconversations' }
  },
  quickbars_selection_toolbar: 'addcomment | bold italic | quicklink',
  quickbars_insert_toolbar: false,
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  content_style: '.mymention { color: #174ea6; font-weight: 600; }',

  tinycomments_mode: 'callback',
  tinycomments_mentions_enabled: true,
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

  mentions_fetch,
  mentions_item_type: 'profile',
  mentions_min_chars: 0,
  mentions_menu_complete,
  mentions_menu_hover,
  mentions_selector: '.mymention',
  mentions_select,

  user_id,
  fetch_users: (userIds) => Promise.all(userIds
    .map((userId) =>
      fetch(`${API_URL}/${userId}`)
        .then((response) => response.json())
        .catch(() => ({ id: userId }))))
});

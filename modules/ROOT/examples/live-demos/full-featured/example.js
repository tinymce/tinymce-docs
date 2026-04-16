const API_URL = 'https://demouserdirectory.tiny.cloud/v1/users';

const user_id = 'james-wilson';
const collaborator_id = 'mia-andersson';

const now = new Date();
const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000).toISOString();
const anhourago = new Date(now.getTime() - 60 * 60 * 1000).toISOString();
const oneminuteago = new Date(now.getTime() - 1 * 60 * 1000).toISOString();
const amomentago = new Date(now.getTime() - 30 * 1000).toISOString();
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
      content: 'Do we want to say "rich text editor" or "WYSIWYG editor" here?',
      createdAt: oneminuteago,
      modifiedAt: oneminuteago
    }, {
      uid: 'mce-conversation_19679600221621399703917',
      author: collaborator_id,
      authorName: 'Mia Andersson',
      authorAvatar: 'https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_mia-andersson_128_e6f9424b.jpg',
      content: 'I think "rich text editor" works ok.',
      createdAt: amomentago,
      modifiedAt: amomentago,
    }]
  },
  'mce-conversation_420304606321716900864126': {
    uid: 'mce-conversation_420304606321716900864126',
    comments: [{
      uid: 'mce-conversation_420304606321716900864126',
      author: user_id,
      authorName: 'James Wilson',
      authorAvatar: 'https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_james-wilson_128_52f19412.jpg',
      content: 'Let\'s mention Export to PDF here as well.',
      createdAt: oneminuteago,
      modifiedAt: oneminuteago
    }]
  }
};

const mentions_fetch = async (query, success) => {
  const searchPhrase = query.term.toLowerCase();
  await fetch(`${API_URL}?q=${encodeURIComponent(searchPhrase)}`)
    .then((response) => response.json())
    .then((users) => success(users.data.map((userInfo) => ({
      id: userInfo.id,
      name: userInfo.name,
      image: userInfo.avatar,
      description: userInfo.custom.role
    }))))
    .catch((error) => console.log(error));
};

const mentions_menu_complete = (editor, userInfo) => {
  const span = editor.getDoc().createElement('span');
  span.className = 'mymention';
  span.setAttribute('data-mention-id', userInfo.id);
  span.appendChild(editor.getDoc().createTextNode('@' + userInfo.name));
  return span;
};

const createCard = (userInfo) => {
  const div = document.createElement('div');
  div.innerHTML = (
    '<div class="card">' +
      '<img class="avatar" src="' + userInfo.image + '">' +
      '<h1>' + userInfo.name + '</h1>' +
      '<p>' + userInfo.description + '</p>' +
    '</div>'
  );
  return div;
};

const mentions_select = async (mention, success) => {
  const id = mention.getAttribute('data-mention-id');
  await fetch(`${API_URL}/${id}`)
    .then((response) => response.json())
    .then((userInfo) => {
      const card = createCard({
        id: userInfo.id,
        name: userInfo.name,
        image: userInfo.avatar,
        description: userInfo.custom.role
      });
      success(card);
    })
    .catch((error) => console.error(error));
};

const mentions_menu_hover = async (userInfo, success) => {
  const card = createCard(userInfo);
  success(card);
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
  const conversation = conversationDb[req.conversationUid];
  if (user_id === conversation.comments[0].author) { // Replace wth your own logic, e.g. check if user created the conversation
    delete conversationDb[req.conversationUid];
    setTimeout(() => done({ canDelete: true }), fakeDelay);
  } else {
    setTimeout(() => done({ canDelete: false, reason: 'Must be conversation author' }), fakeDelay);
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

const tinycomments_can_resolve = (req, done, fail) => {
  const conversation = conversationDb[req.conversationUid];
  if (user_id === conversation.comments[0].author) { // Replace wth your own logic, e.g. check if user has admin priveleges
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

const revisions = [
  {
    revisionId: '3',
    createdAt: '2023-11-24T22:26:21.578Z',
    author: {
      id: 'james-wilson',
      name: 'A Tiny Husky',
      avatar: 'https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_james-wilson_128_52f19412.jpg',
    },
    content: `
      <p><img style="display: block; margin-left: auto; margin-right: auto;" title="Tiny Logo" src="https://www.tiny.cloud/docs/tinymce/latest/_images/logos/android-chrome-256x256.png" alt="TinyMCE Logo" width="128" height="128"></p>
      <h2 style="text-align: center;">Welcome to the TinyMCE editor demo!</h2>
      <h2>A simple table to play with</h2>
      <table style="border-collapse: collapse; width: 100%;" border="1">
      <thead>
      <tr>
      <th>Product</th>
      <th>Cost</th>
      <th>Really?</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>TinyMCE</td>
      <td>Free</td>
      <td>YES!</td>
      </tr>
      <tr>
      <td>Plupload</td>
      <td>Free</td>
      <td>YES!</td>
      </tr>
      </tbody>
      </table>
      <h2>Found a bug?</h2>
      <p>If you think you have found a bug please create an issue on the <a href="https://github.com/tinymce/tinymce/issues">GitHub repo</a> to report it to the developers.</p>
      <h2>Finally ...</h2>
      <p><s>Don't forget to check out our other product <a href="http://www.plupload.com" target="_blank" rel="noopener">Plupload</a>, your ultimate upload solution featuring HTML5 upload support.</s></p>
      <p>Thanks for supporting TinyMCE! We hope it helps you and your users create great content.<br>All the best from the TinyMCE team.</p>
    `,
  },
  {
    revisionId: '2',
    createdAt: '2023-11-25T08:30:21.578Z',
    author: {
      id: 'mia.andersson',
      name: 'Mia Andersson',
      avatar: 'https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_mia-andersson_128_e6f9424b.jpg',
    },
    content: `
      <p><img style="display: block; margin-left: auto; margin-right: auto;" title="Tiny Logo" src="https://www.tiny.cloud/docs/tinymce/latest/_images/logos/android-chrome-256x256.png" alt="TinyMCE Logo" width="128" height="128"></p>
      <h2 style="text-align: center;">Welcome to the TinyMCE editor demo!</h2>
      <h2>Got questions or need help?</span></h2>
      <ol>
      <li>Our <a href="../">documentation</a> is a great resource for learning how to configure TinyMCE.</li>
      <li>Have a specific question? Try the <a href="https://stackoverflow.com/questions/tagged/tinymce" target="_blank" rel="noopener"><code>tinymce</code> tag at Stack Overflow</a>.</li>
      <li>We also offer enterprise grade support as part of <a href="../../../../pricing">TinyMCE premium plans</a>.</li>
      </ol>
      <h2>A simple table to play with</h2>
      <table style="border-collapse: collapse; width: 100%;" border="1">
      <thead>
      <tr>
      <th>Product</th>
      <th>Cost</th>
      <th>Really?</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>TinyMCE</td>
      <td>Free</td>
      <td>YES!</td>
      </tr>
      <tr>
      <td>Plupload</td>
      <td>Free</td>
      <td>YES!</td>
      </tr>
      </tbody>
      </table>
      <h2>Found a bug?</h2>
      <p>If you think you have found a bug please create an issue on the <a href="https://github.com/tinymce/tinymce/issues">GitHub repo</a> to report it to the developers.</p>
      <h2>Finally ...</h2>
      <p>Don't forget to check out our other product <a href="http://www.plupload.com" target="_blank" rel="noopener">Plupload</a>, your ultimate upload solution featuring HTML5 upload support.</p>
      <p>Thanks for supporting TinyMCE! We hope it helps you and your users create great content.<br>All the best from the TinyMCE team.</p>
    `,
  },
  {
    revisionId: '1',
    createdAt: '2023-11-29T10:11:21.578Z',
    author: {
      id: 'mia.andersson',
      name: 'Mia Andersson',
      avatar: 'https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_mia-andersson_128_e6f9424b.jpg',
    },
    content: `
      <p><img style="display: block; margin-left: auto; margin-right: auto;" title="Tiny Logo" src="https://www.tiny.cloud/docs/tinymce/latest/_images/logos/android-chrome-256x256.png" alt="TinyMCE Logo" width="128" height="128"></p>
      <h2 style="text-align: center;">Welcome to the TinyMCE editor demo!</h2>
      <h2>Got questions or need help?</h2>
      <ul>
      <li>Our <a href="../">documentation</a> is a great resource for learning how to configure TinyMCE.</li>
      <li>Have a specific question? Try the <a href="https://stackoverflow.com/questions/tagged/tinymce" target="_blank" rel="noopener"><code>tinymce</code> tag at Stack Overflow</a>.</li>
      <li>We also offer enterprise grade support as part of <a href="../../../../pricing">TinyMCE premium plans</a>.</li>
      </ul>
      <h2>A simple table to play with</h2>
      <table style="border-collapse: collapse; width: 100%;" border="1">
      <thead>
      <tr>
      <th>Product</th>
      <th>Cost</th>
      <th>Really?</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>TinyMCE</td>
      <td>Free</td>
      <td>YES!</td>
      </tr>
      <tr>
      <td>Plupload</td>
      <td>Free</td>
      <td>YES!</td>
      </tr>
      </tbody>
      </table>
      <h2>Found a bug?</h2>
      <p>If you think you have found a bug please create an issue on the <a href="https://github.com/tinymce/tinymce/issues">GitHub repo</a> to report it to the developers.</p>
      <h2>Finally ...</h2>
      <p>Don't forget to check out our other product <a href="http://www.plupload.com" target="_blank" rel="noopener">Plupload</a>, your ultimate upload solution featuring HTML5 upload support.</p>
      <p>Thanks for supporting TinyMCE! We hope it helps you and your users create great content.<br>All the best from the TinyMCE team.</p>
    `,
  }
];

const revisionhistory_fetch = () => new Promise((resolve) => {
  setTimeout(() => {
    const sortedRevisions = revisions
      .sort((a, b) => new Date(a.createdAt) < new Date(b.createdAt) ? 1 : -1);
    resolve(sortedRevisions);
  }, fakeDelay);
});

const revisionhistory_fetch_revision = (_editor, revision) => new Promise((resolve, reject) => {
  setTimeout(() => {
    const revision = revisions.find((r) => r.revisionId === revision.revisionId);
    if (revision) {
      resolve(revision);
    } else {
      reject(`Revision ${revision.revisionId} is not found`);
    }
  }, fakeDelay);
});

tinymce.init({
  selector: 'textarea#full-featured',
  plugins: [
    'tinymceai', 'suggestededits', 'preview', 'powerpaste', 'casechange', 'importcss', 'searchreplace',
    'autolink', 'autosave', 'save', 'directionality', 'advcode', 'visualblocks', 'visualchars', 'fullscreen',
    'link', 'math', 'media', 'mediaembed', 'codesample', 'table', 'charmap', 'pagebreak', 'nonbreaking',
    'anchor', 'tableofcontents', 'insertdatetime', 'advlist', 'lists', 'checklist', 'wordcount', 'tinymcespellchecker',
    'a11ychecker', 'help', 'formatpainter', 'permanentpen', 'pageembed', 'charmap', 'tinycomments', 'mentions',
    'quickbars', 'emoticons', 'advtable', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'advtemplate', 'markdown',
    'revisionhistory', 'importword', 'exportword', 'exportpdf', 'uploadcare',
  ],
  menu: {
    tc: {
      title: 'Comments',
      items: 'addcomment showcomments deleteallconversations'
    }
  },
  menubar: 'file edit view insert format tools table tc help',
  // Note: if a toolbar item requires a plugin, the item will not present in the toolbar if the plugin is not also loaded.
  toolbar: "undo redo | insertfile |importword exportword exportpdf | suggestededits | revisionhistory | tinymceai-chat tinymceai-review tinymceai-quickactions | blocks fontsizeinput | bold italic | align numlist bullist | link uploadcare uploadcare-video | table math media pageembed | lineheight  outdent indent | strikethrough forecolor backcolor formatpainter removeformat | charmap emoticons checklist | code fullscreen preview | save print | pagebreak anchor codesample footnotes mergetags | addtemplate inserttemplate | addcomment showcomments | ltr rtl casechange | spellcheckdialog a11ycheck", 
  mobile: {
    plugins: 'tinymceai suggestededits preview powerpaste casechange importcss searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen link math media mediaembed codesample table charmap pagebreak nonbreaking anchor tableofcontents insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker help formatpainter pageembed charmap mentions quickbars emoticons advtable footnotes mergetags autocorrect typography advtemplate uploadcare'
  },
 
  autosave_ask_before_unload: true,
  autosave_interval: '30s',
  autosave_prefix: '{path}{query}-{id}-',
  autosave_restore_when_empty: false,
  autosave_retention: '2m',
  typography_default_lang: 'en-US',
  typography_langs: [
    'en-US',
    'es',
    'de'
  ],
  typography_rules: [
    'common/punctuation/quote',
    'en-US/dash/main',
    'common/nbsp/afterParagraphMark',
    'common/nbsp/afterSectionMark',
    'common/nbsp/afterShortWord',
    'common/nbsp/beforeShortLastNumber',
    'common/nbsp/beforeShortLastWord',
    'common/nbsp/dpi',
    'common/punctuation/apostrophe',
    'common/space/delBeforePunctuation',
    'common/space/afterComma',
    'common/space/afterColon',
    'common/space/afterExclamationMark',
    'common/space/afterQuestionMark',
    'common/space/afterSemicolon',
    'common/space/beforeBracket',
    'common/space/bracket',
    'common/space/delBeforeDot',
    'common/space/squareBracket',
    'common/number/mathSigns',
    'common/number/times',
    'common/number/fraction',
    'common/symbols/arrow',
    'common/symbols/cf',
    'common/symbols/copy',
    'common/punctuation/delDoublePunctuation',
    'common/punctuation/hellip'
  ],
  typography_ignore: [ 'code' ],
  advtemplate_templates: [
    {
      id: '1',
      title: 'Resolving tickets',
      content: '<p>As we have not heard back from you in over a week, we have gone ahead and resolved your ticket.</p>'
    },
    {
      id: '2',
        title: 'Quick replies',
        items: [
          {
            id: '3',
            title: 'Message received',
            content: '<p>Just a quick note to say we have received your message, and will get back to you within 48 hours.</p>'
          },
          {
            id: '4',
            title: 'Progress update',
            content: '<p>Just a quick note to let you know we are still working on your case</p>'
          }
        ]
    }
  ],
  link_list: [
    { title: 'My page 1', value: 'https://www.tiny.cloud' },
    { title: 'My page 2', value: 'http://www.moxiecode.com' }
  ],
  importcss_append: true,
  height: 600,
  quickbars_selection_toolbar: 'tinymceai-quickactions ai-quickactions-translate | bold italic | quicklink h2 h3 blockquote quicktable | addcomment',
  noneditable_class: 'mceNonEditable',
  toolbar_mode: 'sliding',
  spellchecker_ignore_list: ['Ephox', 'Moxiecode', 'tinymce', 'TinyMCE'],
  content_style: '.mymention{ color: gray; }' +
  'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
  contextmenu: 'link uploadcare uploadcare-video table spellchecker configurepermanentpen',
  
  tinymceai_token_provider: async () => {
    return fetch('/api/tinymceai-token', { credentials: 'include' })
      .then(resp => resp.text())
      .then(token => ({ token }));
  },
  tinymceai_chat_fetch_sources: () => Promise.resolve([{
    label: 'TinyMCE resources',
    sources: [
      { id: 'docs', label: 'TinyMCE Documentation', type: 'web-resource' },
      { id: 'blog', label: 'Tiny Blog', type: 'web-resource' },
      { id: 'survey-2023', label: 'State of rich text editing 2023', type: 'web-resource' },
    ]
  }]),
  tinymceai_chat_fetch_source: (id) => {
    const urls = {
      'docs': 'https://www.tiny.cloud/docs/tinymce/latest/',
      'blog': 'https://www.tiny.cloud/blog/',
      'survey-2023': 'https://www.tiny.cloud/developer-survey-results-2023/',
    };
    return Promise.resolve({ type: 'web-resource', url: urls[id] });
  },
  tinymceai_reviews: [
    'ai-reviews-proofread',
    'ai-reviews-improve-clarity',
    'ai-reviews-improve-readability',
    'ai-reviews-change-length',
    'ai-reviews-change-tone',
    'ai-reviews-custom'
  ],
  tinymceai_quickactions_custom: [
    {
      type: 'chat',
      title: 'Challenge',
      prompt: 'Challenge statements, verify facts and identify assumptions'
    }
  ],
  tinymceai_languages: [
    { title: 'English', language: 'english' },
    { title: 'Chinese (Simplified)', language: 'chinese' },
    { title: 'Spanish', language: 'spanish' },
    { title: 'German', language: 'german' },
    { title: 'Japanese', language: 'japanese' },
    { title: 'Portuguese', language: 'portuguese' },
    { title: 'Swedish', language: 'swedish' },
    { title: 'Korean', language: 'korean' },
    { title: 'Hindi (Devanagari)', language: 'hindi devanagari' },
    { title: 'Italian', language: 'italian' },
    { title: 'Klingon', language: 'klingon' },
    { title: 'Dothraki', language: 'dothraki' },
  ],
  
  tinycomments_mode: 'callback',
  tinycomments_mentions_enabled: true,
  sidebar_show: 'tinymceai-chat',
  tinycomments_create,
  tinycomments_reply,
  tinycomments_delete,
  tinycomments_resolve,
  tinycomments_can_resolve,
  tinycomments_delete_all,
  tinycomments_lookup,
  tinycomments_delete_comment,
  tinycomments_edit_comment,
  tinycomments_fetch,

  mentions_item_type: 'profile',
  mentions_min_chars: 0,
  mentions_selector: '.mymention',
  mentions_fetch,
  mentions_menu_hover,
  mentions_menu_complete,
  mentions_select,
  
  uploadcare_public_key: '<your-public-key>',
  uploadcare_srcset_steps: [100, 200, 300, 500, 750, 1000],
  uploadcare_video_properties: { 
    posterOffset: "1:35"
  },
  a11y_advanced_options: true,
  uploadcare_filters: [
    { name: 'none' }, // No filter applied
    { name: 'adaris', amount: -100 }, // Adaris with inverted effect (amount -100), label defaults to 'adaris'
    { name: 'adaris', amount: -100, label: 'Vintage Fade' }, // Adaris with inverted effect (amount -100), label reads 'Vintage Fade'
    { name: 'adaris', amount: 0, label: 'Base' }, // Adaris with neutral effect (amount 0), label reads 'Base'
    { name: 'adaris', amount: 50, label: 'Light' }, // Adaris with light effect (amount 50), label reads 'Light'
    { name: 'adaris', amount: 100, label: 'Standard' }, // Adaris with standard effect (amount 100), label reads 'Standard'
    { name: 'adaris', amount: 200, label: 'Intense' }, // Adaris with intense effect (amount 200), label reads 'Intense'
    { name: 'zevcen', amount: 200, label: 'Glow Boost' }, // Zevcen with intense effect (amount 200), label reads 'Glow Boost'
    { name: 'galen', amount: 80, label: 'Soft Focus' }, // Galen with softening effect (amount 80), label reads 'Soft Focus'
    { name: 'carris', amount: 120, label: 'Sharp Contrast' }, // Carris with high contrast (amount 120), label reads 'Sharp Contrast'
    { name: 'ferand', amount: 60, label: 'Light Touch' }, // Ferand with light enhancement (amount 60), label reads 'Light Touch'
    { name: 'sorahel', amount: -50, label: 'Night Mood' } // Sorahel with darkened effect (amount -50), label reads 'Night Mood'
  ],
  
  autocorrect_capitalize: true,
  mergetags_list: [
    {
      title: 'Client',
      menu: [
        {
          value: 'Client.LastCallDate',
          title: 'Call date'
        },
        {
          value: 'Client.Name',
          title: 'Client name'
        }
      ]
    },
    {
      title: 'Proposal',
      menu: [
        {
          value: 'Proposal.SubmissionDate',
          title: 'Submission date'
        }
      ]
    },
    {
      value: 'Consultant',
      title: 'Consultant'
    },
    {
      value: 'Salutation',
      title: 'Salutation'
    }
  ],
  exportpdf_converter_options: {
    'format': 'Letter',
    'margin_top': '1in',
    'margin_right': '1in',
    'margin_bottom': '1in',
    'margin_left': '1in'
  },
  exportword_converter_options: {
    'document': { 
      'size': 'Letter'
    }
  },
  pagebreak_separator: '<div style="break-after: page"></div>',
  pagebreak_split_block: true,
  importword_converter_options: {
    'formatting': {
      'styles': 'inline',
      'resets': 'inline',
      'defaults': 'inline',
    }
  },
  revisionhistory_fetch,
  revisionhistory_fetch_revision,
  revisionhistory_display_author: true,
  
  suggestededits_content: 'html',
  suggestededits_access: 'full',

  user_id,
  fetch_users: (userIds) => Promise.all(userIds
    .map((userId) =>
      fetch(`${API_URL}/${userId}`)
        .then((response) => response.json())
        .catch(() => ({ id: userId }))))
});
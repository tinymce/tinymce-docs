// Step 1: Set up session - this should be part of the application's user management process. We simulate that here by creating a session for a random user.
const apiKey = '{{tinymceai_demo_api_key}}';
const isLoggedIn = fetch(`https://demo.api.tiny.cloud/1/${apiKey}/auth/random`, { method: "POST", credentials: "include" });

const mentions_fetch = async (query, success) => {
  const searchPhrase = query.term.toLowerCase();
  await fetch(`https://demouserdirectory.tiny.cloud/v1/users?q=${encodeURIComponent(searchPhrase)}`)
    .then((response) => response.json())
    .then((users) => success(users.data.map((userInfo) => ({
      id: userInfo.id,
      name: userInfo.name,
      image: userInfo.avatar,
      description: userInfo.custom.role
    }))))
    .catch(() => {});
};

const fetch_users = (userIds) => Promise.all(userIds.map((userId) => fetch(`https://demouserdirectory.tiny.cloud/v1/users/${userId}`).then((response) => response.json()).catch(() => ({ id: userId }))));

// Each editor seeds its revision history from its own textarea.
const createRevisionHistoryFetch = (selector) => () => {
  const textarea = document.querySelector(selector);
  const initialContent = textarea ? textarea.value : '';
  const revisions = [
    {
      revisionId: '1',
      createdAt: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 1, 14, 32, 0).getTime(),
      author: {
        id: 'jade-scott',
        name: 'Jade Scott',
        avatar: 'https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_jade-scott_128_515dc6a1.jpg',
      },
      content: initialContent
    },
    {
      revisionId: '0',
      createdAt: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 1, 14, 32, 0).getTime(),
      author: {
        id: 'jade-scott',
        name: 'Jade Scott',
        avatar: 'https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_jade-scott_128_515dc6a1.jpg',
      },
      content: ''
    }
  ];
  return Promise.resolve(revisions.sort((a, b) => (new Date(a.createdAt) < new Date(b.createdAt) ? -1 : 1)));
};

// Share one TinyMCE AI configuration between every editor in the group.
const sharedSettings = {
  plugins: [
    'autolink', 'link', 'emoticons', 'lists', 'table', 'advlist', 'searchreplace', 'wordcount', 'autocorrect', 'tinymcespellchecker', 'charmap', 'fullscreen', 'advcode', 'accordion', 'anchor', 'footnotes', 'powerpaste', 'importword', 'exportpdf', 'exportword', 'markdown', 'a11ychecker', 'typography', 'casechange', 'checklist', 'advtable', 'formatpainter', 'permanentpen', 'tableofcontents', 'help', 'math', 'linkchecker', 'media', 'mediaembed',
    'quickbars', 'tinymceai', 'tinycomments', 'mentions', 'revisionhistory', 'suggestededits', 'uploadcare'
  ],
  toolbar: 'undo redo | tinymceai-chat tinymceai-review ai-quickactions-translate spellchecker | styles | bold italic underline forecolor backcolor casechange | link uploadcare table addcomment | align bullist numlist checklist removeformat | code fullscreen help',
  menubar: false,
  tinymceai_sidebar_type: 'floating',
  quickbars_selection_toolbar: 'tinymceai-quickactions addcomment',
  tinymceai_chat_welcome_message: '<p>Hi! I’m your writing assistant.</p><p>I can read and write across all three sections of this hiring pack — refine the role, generate interview questions, or draft notes for HR.</p>',
  // Every welcome action uses the empty 'no-icon' icon registered in setup, so the buttons show text only.
  tinymceai_chat_welcome_actions: [
    { text: '**Try one of these:**' },
    {
      title: 'Suggest more interview questions',
      command: 'TinyMCEAIChatPrompt',
      value: {
        prompt: 'Based on the Role description, suggest three or four more interview questions and add them to the end of the numbered list in the Interview questions section. Match the style of the existing questions.',
        displayedPrompt: 'Suggest more interview questions'
      },
      icon: 'no-icon'
    },
    {
      title: 'Draft notes for HR',
      command: 'TinyMCEAIChatPrompt',
      value: {
        prompt: 'Based on the Role description and the Interview questions, draft additional notes for HR about scheduling and running the interviews for this role, and add them to the Notes for HR section.',
        displayedPrompt: 'Draft notes for HR'
      },
      icon: 'no-icon'
    },
    {
      title: 'Flag any unclear or biased wording',
      command: 'TinyMCEAIChatPrompt',
      value: {
        prompt: 'Check all three sections of this hiring pack for unclear or biased wording. For each phrase, explain the problem and suggest clearer, more inclusive wording.',
        displayedPrompt: 'Flag any unclear or biased wording'
      },
      icon: 'no-icon'
    }
  ],
  setup: (editor) => {
    editor.ui.registry.addIcon('no-icon', '');
  },
  toolbar_mode: 'sliding',
  visual: false,
  images_file_types: 'jpeg,jpg,jpe,jfi,jif,jfif,png,gif,bmp,webp,svg',
  user_id: 'james-wilson',
  spellchecker_active: true,
  spellchecker_dialog: true,
  uploadcare_public_key: '630992ad50fe2291c406',
  uploadcare_store_type: 'temporary',
  advcode_inline: true,
  tinycomments_mode: 'embedded',
  suggestededits_content: 'html',
  mentions_item_type: 'profile',
  mentions_fetch,
  fetch_users,
  revisionhistory_display_author: true,
  tinymceai_token_provider: async () => {
    // Step 2: Check we have a session then fetch JWT
    return isLoggedIn.then(() =>
      fetch(`https://demo.api.tiny.cloud/1/${apiKey}/jwt/tinymceai`, { credentials: "include" })
        .then(resp => resp.text())
        .then(token => ({ token }))
    );
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
  ]
};

tinymce.init({
  ...sharedSettings,
  selector: 'textarea#tinymceai-multi-editor-role-description',
  height: '270px',
  sidebar_show: 'tinymceai-chat',
  revisionhistory_fetch: createRevisionHistoryFetch('textarea#tinymceai-multi-editor-role-description'),
  tinymceai_group: 'hiring-pack',
  tinymceai_document_name: 'Role description',
  tinymceai_document_description: 'The job advert for the role: the job title and location, what the role involves, and the requirements for candidates.'
});

tinymce.init({
  ...sharedSettings,
  selector: 'textarea#tinymceai-multi-editor-interview-questions',
  height: '340px',
  revisionhistory_fetch: createRevisionHistoryFetch('textarea#tinymceai-multi-editor-interview-questions'),
  tinymceai_group: 'hiring-pack',
  tinymceai_document_name: 'Interview questions',
  tinymceai_document_description: 'The interview guide for the role: a heading followed by a numbered list of interview questions.'
});

tinymce.init({
  ...sharedSettings,
  selector: 'textarea#tinymceai-multi-editor-notes-for-hr',
  height: '260px',
  revisionhistory_fetch: createRevisionHistoryFetch('textarea#tinymceai-multi-editor-notes-for-hr'),
  tinymceai_group: 'hiring-pack',
  tinymceai_document_name: 'Notes for HR',
  tinymceai_document_description: 'Notes for the HR team about scheduling and running the hiring process for the role.'
});

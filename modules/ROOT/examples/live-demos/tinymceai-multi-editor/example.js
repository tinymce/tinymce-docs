// Open-source plugins below are only for editing the demo HTML (lists, links, tables). TinyMCE AI options are the focus.
// Share one TinyMCE AI configuration between every editor in the group.
const sharedSettings = {
  plugins: ['tinymceai', 'advlist', 'lists', 'link', 'autolink', 'table', 'wordcount'],
  toolbar: 'undo redo | tinymceai-chat tinymceai-review ai-quickactions-translate | styles | bold italic underline | bullist numlist | link table',
  menubar: false,
  tinymceai_sidebar_type: 'floating',
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
  tinymceai_token_provider: async () => {
    return fetch('/api/token', { credentials: 'include' })
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
  tinymceai_group: 'hiring-pack',
  tinymceai_document_name: 'Role description',
  tinymceai_document_description: 'The job advert for the role: the job title and location, what the role involves, and the requirements for candidates.'
});

tinymce.init({
  ...sharedSettings,
  selector: 'textarea#tinymceai-multi-editor-interview-questions',
  height: '340px',
  tinymceai_group: 'hiring-pack',
  tinymceai_document_name: 'Interview questions',
  tinymceai_document_description: 'The interview guide for the role: a heading followed by a numbered list of interview questions.'
});

tinymce.init({
  ...sharedSettings,
  selector: 'textarea#tinymceai-multi-editor-notes-for-hr',
  height: '260px',
  tinymceai_group: 'hiring-pack',
  tinymceai_document_name: 'Notes for HR',
  tinymceai_document_description: 'Notes for the HR team about scheduling and running the hiring process for the role.'
});

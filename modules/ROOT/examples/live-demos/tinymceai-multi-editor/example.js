// Step 1: Set up session - this should be part of the application's user management process.
// Open-source plugins below are only for editing the demo HTML (lists, links, tables). TinyMCE AI options are the focus.
// Share one TinyMCE AI configuration between every editor in the group.
const sharedSettings = {
  height: '800px',
  plugins: ['tinymceai', 'advlist', 'lists', 'link', 'autolink', 'table', 'wordcount'],
  toolbar: 'undo redo | tinymceai-chat ai-quickactions-translate tinymceai-review | styles | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link',
  tinymceai_sidebar_type: 'floating',
  tinymceai_chat_welcome_message: '<p>Welcome to TinyMCE AI. Pick an action below or type your own prompt.</p>',
  tinymceai_chat_welcome_actions: [
    { text: 'Here are some actions to get started:' },
    { title: 'Summarize the document', command: 'TinyMCEAIQuickActionsSummarize' },
    { title: 'Continue writing', command: 'TinyMCEAIQuickActionContinueWriting' },
    { title: 'Translate to Spanish', command: 'TinyMCEAIQuickActionTranslate', value: 'spanish' },
    { title: 'Review my document', command: 'ToggleSidebar', value: 'tinymceai-review' }
  ],
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
  selector: 'textarea#tinymceai-multi-editor-introduction',
  tinymceai_group: 'article',
  tinymceai_document_name: 'Introduction',
  tinymceai_document_description: 'The introduction of the article. A title, a short paragraph that sets out the topic, and a figure.'
});

tinymce.init({
  ...sharedSettings,
  selector: 'textarea#tinymceai-multi-editor-body',
  tinymceai_group: 'article',
  tinymceai_document_name: 'Body',
  tinymceai_document_description: 'The main body of the article. Uses h2 and h3 subheadings, short paragraphs, a bulleted list, and a comparison table.'
});

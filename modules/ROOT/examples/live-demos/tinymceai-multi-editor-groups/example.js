// Step 1: Set up session - this should be part of the application's user management process.
// Open-source plugins below are only for editing the demo HTML (lists, links, tables). TinyMCE AI options are the focus.
// Share one TinyMCE AI configuration between every editor. Each editor sets its own group, so the page holds two independent groups.
const sharedSettings = {
  height: '600px',
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

// Group 1: the Introduction and Native integration editors share one AI sidebar.
tinymce.init({
  ...sharedSettings,
  selector: 'textarea#tinymceai-multi-editor-groups-introduction',
  tinymceai_group: 'article-opening',
  tinymceai_document_name: 'Introduction',
  tinymceai_document_description: 'The introduction of the article. A title, a short paragraph that sets out the topic, and a figure.'
});

tinymce.init({
  ...sharedSettings,
  selector: 'textarea#tinymceai-multi-editor-groups-native-integration',
  tinymceai_group: 'article-opening',
  tinymceai_document_name: 'Native integration',
  tinymceai_document_description: 'The section on moving from external AI tools to AI built into the editor, with a bulleted list of benefits.'
});

// Group 2: the Workflow comparison and Adoption challenges editors share a separate AI sidebar and never see the content of group 1.
tinymce.init({
  ...sharedSettings,
  selector: 'textarea#tinymceai-multi-editor-groups-workflow-comparison',
  tinymceai_group: 'article-analysis',
  tinymceai_document_name: 'Workflow comparison',
  tinymceai_document_description: 'The section that compares traditional and AI-enhanced workflows. Keep the comparison table.'
});

tinymce.init({
  ...sharedSettings,
  selector: 'textarea#tinymceai-multi-editor-groups-adoption-challenges',
  tinymceai_group: 'article-analysis',
  tinymceai_document_name: 'Adoption challenges',
  tinymceai_document_description: 'The closing section on adoption challenges. Two short paragraphs.'
});

// Step 1: Set up session - this should be part of the application's user management process.
// Open-source plugins below are only for editing the demo HTML (lists, links, tables). TinyMCE AI options are the focus.
tinymce.init({
  selector: 'textarea#tinymceai-review',
  height: '800px',
  plugins: ['tinymceai', 'advlist', 'lists', 'link', 'autolink', 'table', 'wordcount'],
  toolbar: 'undo redo | tinymceai-chat ai-quickactions-translate tinymceai-review | styles | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link',
  sidebar_show: 'tinymceai-review',
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
  ]
});

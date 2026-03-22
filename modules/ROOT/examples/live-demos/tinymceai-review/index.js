// Step 1: Set up session - this should be part of the application's user management process. We simulate that here by creating a session for a random user.
const apiKey = '{{tinymceai_demo_api_key}}';
const isLoggedIn = fetch(`https://demo.api.tiny.cloud/1/${apiKey}/auth/random`, { method: "POST", credentials: "include" });

tinymce.init({
  selector: 'textarea#tinymceai-review',
  height: '610px',
  plugins: ["tinymceai", "advlist", "anchor", "autolink", "charmap", "code"],
  toolbar: "undo redo | tinymceai-chat ai-quickactions-translate tinymceai-review | styles | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
  sidebar_show: 'tinymceai-review',
  tinymceai_token_provider: async () => {
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
    { type: 'chat', title: 'Challenge', prompt: 'Challenge statements, verify facts and identify assumptions' }
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

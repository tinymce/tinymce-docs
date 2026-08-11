// The MCP server is configured on the AI service, not in the editor. The editor only
// needs the tinymceai plugin and a token provider.
// The demo-only data plumbing (merge tag list, mentions directory, revision history,
// and template storage) is omitted below to keep the AI configuration in focus.
tinymce.init({
  selector: 'textarea#tinymceai-mcp',
  height: 'clamp(650px, 80vh, 1200px)',
  plugins: [
    'autolink', 'link', 'emoticons', 'lists', 'table', 'advlist', 'searchreplace', 'wordcount', 'autocorrect', 'tinymcespellchecker', 'charmap', 'fullscreen', 'advcode', 'accordion', 'anchor', 'footnotes', 'powerpaste', 'importword', 'exportpdf', 'exportword', 'markdown', 'a11ychecker', 'typography', 'casechange', 'checklist', 'advtable', 'formatpainter', 'permanentpen', 'tableofcontents', 'help', 'math', 'linkchecker', 'media', 'mediaembed',
    'quickbars', 'tinymceai', 'tinycomments', 'uploadcare'
  ],
  toolbar: 'undo redo | tinymceai-chat tinymceai-review | ai-quickactions-translate | styles fontsizeinput | bold italic underline forecolor backcolor casechange | link uploadcare table addcomment | align bullist numlist checklist removeformat | code fullscreen help',
  quickbars_selection_toolbar: 'tinymceai-quickactions ai-quickactions-improve-writing addcomment',
  body_class: 'tox-comments-visible', // Ensure comments show up on init
  sidebar_show: 'tinymceai-chat',
  toolbar_mode: 'sliding',
  visual: false,
  table_default_attributes: {}, // Prevents inserting border=1 attribute on a new table
  content_css: 'content.css',
  user_id: 'james-wilson',
  advcode_inline: true,
  highlight_on_focus: false,
  tinycomments_mode: 'embedded',
  tinymceai_default_model: 'claude-4-6-sonnet',
  tinymceai_allow_model_selection: false,
  tinymceai_chat_welcome_message: 'This demo is connected to an Airtable database containing acquisition deals and related companies information.',
  tinymceai_chat_welcome_actions: [
    { text: 'Try using the following actions with this database:' },
    { text: '**Get help editing your document**' },
    {
      title: 'Fill with "Nuvo Technologies" account details',
      command: 'TinyMCEAIChatPrompt',
      value: {
        prompt: 'Pull the "Nuvo Technologies" record from "TinyMCE demo data" Airtable database and fill in all placeholders in this document',
        displayedPrompt: 'Pull the "Nuvo Technologies" record from Airtable and fill in all placeholders in this document'
      },
      icon: 'document-properties'
    },
    { text: '**Explore data via chat**' },
    {
      title: 'Compile an open deals summary report',
      command: 'TinyMCEAIChatPrompt',
      value: {
        prompt: 'Find all deals in "proposal sent" status and provide a summary in chat with their deal value, notes, confidence level and potential red flags'
      },
      icon: 'comment'
    }
  ],
  tinymceai_languages: [
    { title: 'English', language: 'english' },
    { title: 'Chinese (Simplified)', language: 'chinese' },
    { title: 'Spanish', language: 'spanish' },
    { title: 'German', language: 'german' },
    { title: 'Japanese', language: 'japanese' },
    { title: 'Portuguese', language: 'portuguese' },
    { title: 'Korean', language: 'korean' },
    { title: 'Italian', language: 'italian' }
  ],
  // Required for authentication. Replace with the token endpoint for the AI service.
  tinymceai_token_provider: () => {
    return fetch('/api/tinymceai-token', { credentials: 'include' })
      .then(resp => resp.text())
      .then(token => ({ token }));
  }
});

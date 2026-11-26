tinymce.init({
  selector: 'textarea#markdown',
  height: 640,
  plugins: [
    'markdown', 'emoticons',
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'convertmarkdown insertmarkdown | undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'link emoticons | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  // Symbols written as (KEY) in pasted Markdown are replaced with these characters.
  markdown_symbols: {
    C: '©',
    TM: '™',
    R: '®',
    SM: '℠'
  },
  setup: (editor) => {
    const getMarkdownBox = () => document.getElementById('markdown-source');

    // Convert the whole document from HTML to Markdown.
    editor.ui.registry.addButton('convertmarkdown', {
      text: 'Convert to Markdown',
      onAction: () => {
        editor.plugins.markdown.getContent().then((markdown) => {
          getMarkdownBox().value = markdown;
        });
      }
    });

    // Convert Markdown to HTML and insert it at the insertion point.
    editor.ui.registry.addButton('insertmarkdown', {
      text: 'Insert Markdown',
      onAction: () => {
        editor.execCommand('MarkdownInsert', false, getMarkdownBox().value);
      }
    });
  }
});

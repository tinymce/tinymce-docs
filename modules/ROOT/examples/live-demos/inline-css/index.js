tinymce.init({
  selector: 'textarea#inline-css',
  height: 680,
  plugins: [
    'inlinecss',
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'emailhtml | undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'link table | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  // Newsletter styles. Rules from content_style are always inlined.
  content_style: '.mce-content-body { font-family: Arial, Helvetica, sans-serif; color: #0c132c; } ' +
    '.price { text-align: right; white-space: nowrap; } ' +
    'a.button { display: inline-block; padding: 10px 18px; border-radius: 6px; background-color: #335dff; color: #ffffff; font-weight: 600; text-decoration: none; } ' +
    '.small-print { color: #17224f; font-size: 13px; }',
  inlinecss_file_filter: 'demo-content',
  // Skip the html and body rules that draw the gray page and the card in the editor.
  inlinecss_selector_filter: (selector) => selector !== 'html' && selector !== 'body',
  setup: (editor) => {
    // Show the result of editor.plugins.inlinecss.getContent() in a dialog.
    editor.ui.registry.addButton('emailhtml', {
      text: 'Email HTML',
      tooltip: 'Show the email HTML with inlined CSS',
      onAction: () => editor.plugins.inlinecss.getContent().then(({ html }) => {
        editor.windowManager.open({
          title: 'Email HTML',
          size: 'large',
          body: {
            type: 'panel',
            items: [
              { type: 'iframe', name: 'preview', label: 'Rendered without stylesheets' },
              { type: 'textarea', name: 'html', label: 'HTML with inlined CSS' }
            ]
          },
          initialData: { preview: html, html },
          buttons: [{ type: 'cancel', text: 'Close' }]
        });
      })
    });
  }
});

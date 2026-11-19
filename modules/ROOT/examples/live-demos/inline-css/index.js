tinymce.init({
  selector: 'textarea#inline-css',
  height: 620,
  plugins: 'inlinecss lists link table advlist autolink image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media help wordcount',
  toolbar: 'undo redo | blocks | bold italic | alignleft aligncenter alignright | ' +
    'bullist numlist | link table | backcolor | alignjustify | ' +
    'outdent indent | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  // Newsletter-specific styles. Styles from content_style are always inlined.
  content_style: `
    .price { text-align: right; white-space: nowrap; }
    a.button { display: inline-block; padding: 10px 18px; border-radius: 6px; background-color: #1a73e8; color: #ffffff; font-weight: 600; text-decoration: none; }
    .small-print { color: #6b7280; font-size: 13px; }
  `,
  // Inline rules from the newsletter stylesheet only, not from the default editor content CSS.
  inlinecss_file_filter: 'demo-content'
});

document.getElementById('inline-css-btn').addEventListener('click', () => {
  const editor = tinymce.get('inline-css');
  editor.plugins.inlinecss.getContent().then((content) => {
    document.getElementById('output-text-area').value = content.html;

    const outputDoc = document.getElementById('outputIframe').contentWindow.document;
    outputDoc.open();
    outputDoc.write(content.html);
    outputDoc.close();
  });
});

tinymce.init({
  selector: 'textarea#premiumskinsandicons-bootstrap',
  height: 800,
  plugins: [
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'undo redo | blocks | ' +
    'bold italic forecolor backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'link image table | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  skin: 'bootstrap',
  icons: 'bootstrap',
  setup: (editor) => {
    editor.on('init', () => {
      editor.getContainer().style.transition='border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out';
    });
    editor.on('focus', () => {
      editor.getContainer().style.boxShadow='0 0 0 .2rem rgba(0, 123, 255, .25)';
      editor.getContainer().style.borderColor='#80bdff';
    });
    editor.on('blur', () => {
      editor.getContainer().style.boxShadow='';
      editor.getContainer().style.borderColor='';
    });
  }
});

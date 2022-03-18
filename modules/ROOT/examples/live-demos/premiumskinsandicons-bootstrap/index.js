tinymce.init({
  selector: 'textarea#premiumskinsandicons-bootstrap',
  skin: 'bootstrap',
  icons: 'bootstrap',
  plugins: 'image lists link anchor charmap',
  toolbar: 'formatselect | bold italic bullist numlist | link image charmap',
  menubar: false,
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

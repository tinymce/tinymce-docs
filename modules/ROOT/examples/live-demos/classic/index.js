tinymce.init({
  selector: 'textarea#classic',
  width: '100%',
  height: 600,
  resize: false,
  plugins: [
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'advcode', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount',
    'a11ychecker', 'editimage', 'powerpaste', 'tinydrive', 'tinymcespellchecker'
  ],
  toolbar: 'spellchecker a11ycheck insertfile | undo redo | blocks | ' +
    'bold italic forecolor backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'link image | code | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  spellchecker_dialog: true,
  spellchecker_ignore_list: ['Ostrander', 'Kittredge'],
  tinydrive_demo_files_url: '{{imagesdir}}/tiny-drive-demo/demo_files.json',
  tinydrive_token_provider: (success, failure) => {
    success({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqb2huZG9lIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.Ks_BdfH4CWilyzLNk8S2gDARFhuxIauLa8PwhdEQhEo' });
  }
});

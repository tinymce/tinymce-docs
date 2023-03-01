tinymce.init({
  selector: 'textarea#dark-mode',
  height: 500,
  menubar: false,
  skin: 'oxide-dark',
  content_css: 'dark',
  plugins: [
    'advlist autolink lists link image charmap print preview anchor',
    'searchreplace visualblocks code fullscreen',
    'insertdatetime media table code help wordcount'
  ],
  toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help | fullscreen code',
  content_style: {{site.liveDemoIframeCSSStyles}}
});
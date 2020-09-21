tinymce.init({
  selector: 'textarea#basic-example',
  height: 500,
  menubar: false,
  plugins: [
    'advlist autolink lists link image charmap print preview anchor',
    'searchreplace visualblocks code fullscreen',
    'insertdatetime media table paste code help wordcount'
  ],
  toolbar: 'undo redo | formatselect | ' +
  'bold italic backcolor | alignleft aligncenter ' +
  'alignright alignjustify | bullist numlist outdent indent | ' +
  'removeformat | help',
  skin: (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'oxide-dark' : ''),
  content_css: (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : ''),
  content_style: {{site.liveDemoIframeCSSStyles}}
});

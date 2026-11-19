tinymce.init({
  selector: "textarea#uploadcare-video",
  plugins: [
    'uploadcare', 'code', 'link', 'preview', 'lists', 'advlist', 'autolink',
    'charmap', 'anchor', 'searchreplace', 'visualblocks', 'fullscreen',
    'insertdatetime', 'table', 'help', 'wordcount'
  ],
  uploadcare_public_key: '<your-public-key>',
  // Video configuration
  uploadcare_video_properties: {
  autoplay: false,
  controls: true,
  loop: false,
  muted: true,
  preload: 'metadata',
  posterOffset: "0:10",
  showLogo: false,
  fluid: true,
},
  a11y_advanced_options: true,
  toolbar: 'undo redo | styles | bold italic underline | forecolor | ' +
    'bullist numlist | link uploadcare uploadcare-video | code preview | ' +
    'blocks | backcolor | alignleft aligncenter alignright alignjustify | ' +
    'outdent indent | removeformat | help',
  height: 700,	
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css']
});

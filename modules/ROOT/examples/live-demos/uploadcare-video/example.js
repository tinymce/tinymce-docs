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
  toolbar: 'uploadcare-video uploadcare link | ' +
    'undo redo | blocks | bold italic underline forecolor backcolor | ' +
    'alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | ' +
    'code preview | removeformat | help',
  height: 700,	
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css']
});

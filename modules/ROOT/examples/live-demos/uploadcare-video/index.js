tinymce.init({
  selector: "textarea#uploadcare-video",
  plugins: [
    'uploadcare', 'code', 'link', 'preview', 'lists', 'advlist', 'autolink',
    'charmap', 'anchor', 'searchreplace', 'visualblocks', 'fullscreen',
    'insertdatetime', 'table', 'help', 'wordcount'
  ],
  uploadcare_public_key: '630992ad50fe2291c406',
  uploadcare_cdn_base_url: 'https://tiny.ucarecdn.com',
  uploadcare_store_type: 'temporary',
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

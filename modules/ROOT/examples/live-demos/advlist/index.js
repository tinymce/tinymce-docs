tinymce.init({
  selector: 'textarea#advlist-demo',
  height: 720,
  plugins: [
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'numlist bullist outdent indent | undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | table | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  advlist_number_styles: 'default,upper-roman,upper-alpha,lower-alpha,lower-roman',
  advlist_bullet_styles: 'square,disc'
});

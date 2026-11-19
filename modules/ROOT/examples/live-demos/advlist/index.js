tinymce.init({
  selector: 'textarea#advlist-demo',
  height: 680,
  plugins: 'advlist lists autolink link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table help wordcount',
  toolbar: 'numlist bullist | outdent indent | undo redo | blocks | bold italic | ' +
    'backcolor | alignleft aligncenter alignright alignjustify | ' +
    'removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  advlist_number_styles: 'default,lower-alpha,lower-greek,lower-roman,upper-alpha,upper-roman',
  advlist_bullet_styles: 'default,disc,circle,square'
});

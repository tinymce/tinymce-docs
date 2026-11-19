tinymce.init({
  selector: 'textarea#linkchecker',
  height: 620,
  plugins: 'linkchecker autolink link lists advlist image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table help wordcount',
  toolbar: 'link | undo redo | blocks | bold italic | bullist numlist | backcolor | ' +
    'alignleft aligncenter alignright alignjustify | outdent indent | ' +
    'removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css']
});

tinymce.init({
  selector: 'textarea#autocorrect',
  height: 560,
  plugins: 'autocorrect lists advlist autolink link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table help wordcount',
  toolbar: 'undo redo | blocks | bold italic | bullist numlist | backcolor | ' +
    'alignleft aligncenter alignright alignjustify | outdent indent | ' +
    'removeformat | help',
  menu: {
    tools: { title: 'Tools', items: 'autocorrect capitalization' }
  },
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  autocorrect_autocorrect: true,
  autocorrect_capitalize: true
});

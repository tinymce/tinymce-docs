tinymce.init({
  selector: 'textarea#tableofcontents',
  height: 680,
  plugins: 'tableofcontents lists link advlist autolink image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table help wordcount',
  toolbar: 'tableofcontents | undo redo | blocks | bold italic | bullist numlist | ' +
    'link | backcolor | alignleft aligncenter alignright alignjustify | ' +
    'outdent indent | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  tableofcontents_depth: 4,
  tableofcontents_orderedlist: true
});

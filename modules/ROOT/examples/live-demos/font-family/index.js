tinymce.init({
  selector: 'textarea#font-family',
  height: 680,
  plugins: 'lists advlist autolink link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table help wordcount',
  toolbar: 'fontfamily | undo redo | blocks | bold italic | bullist numlist | ' +
    'removeformat | backcolor | ' +
    'alignleft aligncenter alignright alignjustify | outdent indent | help',
  font_family_formats: 'Inter=inter, sans-serif; Georgia=georgia, palatino, serif; Trebuchet MS=trebuchet ms, geneva, sans-serif; Verdana=verdana, geneva, sans-serif; Courier New=courier new, courier, monospace; Times New Roman=times new roman, times, serif',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css']
});

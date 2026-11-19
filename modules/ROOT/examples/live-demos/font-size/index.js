tinymce.init({
  selector: 'textarea#font-size',
  height: 720,
  plugins: 'lists advlist autolink link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table help wordcount',
  toolbar: 'fontsizeinput | undo redo | blocks | bold italic | ' +
    'alignleft aligncenter | bullist numlist | removeformat | backcolor | ' +
    'alignright alignjustify | outdent indent | help',
  font_size_formats: '11px 14px 16px 18px 20px 28px 40px 64px',
  font_size_input_default_unit: 'px',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css']
});

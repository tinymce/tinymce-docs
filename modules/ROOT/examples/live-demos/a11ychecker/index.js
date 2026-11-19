tinymce.init({
  selector: 'textarea#a11ychecker',
  height: 680,
  plugins: 'a11ychecker advlist lists image link table autolink charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media help wordcount',
  toolbar: 'a11ycheck | undo redo | blocks | bold italic forecolor | ' +
    'bullist numlist | link image table | backcolor | ' +
    'alignleft aligncenter alignright alignjustify | outdent indent | ' +
    'removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  a11y_advanced_options: true,
  a11ychecker_html_version: 'html5',
  a11ychecker_level: 'aaa',
  a11ychecker_allow_decorative_images: true
});

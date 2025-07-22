tinymce.init({
  selector: 'textarea#a11ychecker',
  plugins: 'a11ychecker advcode table advlist lists image media anchor link autoresize',
  toolbar: 'a11ycheck | blocks bold forecolor backcolor | bullist numlist | link image media anchor | table | code',
  max_height: 500,
  a11y_advanced_options: true,
  a11ychecker_html_version: 'html5',
  a11ychecker_level: 'aaa',
  a11ychecker_allow_decorative_images: true,
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
});

tinymce.init({
  selector: 'textarea#a11ychecker',
  plugins: 'a11ychecker advcode table advlist lists image media anchor hr link autoresize',
  toolbar: 'a11ycheck | formatselect bold forecolor backcolor | bullist numlist | link image media anchor | table | code',
  a11y_advanced_options: true,
  a11ychecker_html_version: 'html5',
  a11ychecker_level: 'aaa',
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
});
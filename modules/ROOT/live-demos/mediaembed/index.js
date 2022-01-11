tinymce.init({
  selector: 'textarea#mediaembed',
  plugins: 'media mediaembed code lists',
  toolbar: 'media code',
  height: 600,
  content_style: {{site.liveDemoIframeCSSStyles}}
});
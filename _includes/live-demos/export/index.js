tinymce.init({
  selector: 'textarea#export',
  plugins: 'export pagebreak code',
  toolbar: 'export pagebreak code',
  height: 500,
  content_style: {{site.liveDemoIframeCSSStyles}}
});
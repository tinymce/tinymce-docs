tinymce.init({
  selector: 'textarea#bbcode',
  height: 200,
  plugins: 'bbcode code',
  toolbar: 'undo redo | bold italic underline | code',
  content_style: {{site.liveDemoCSSStyles}}
});

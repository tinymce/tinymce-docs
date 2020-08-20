tinymce.init({
  selector: 'textarea.advcodedemo',
  plugins: 'advcode',
  toolbar: 'code',

  height: 600,
  content_style: {{site.liveDemoIframeCSSStyles}}
});

tinymce.init({
  selector: 'textarea.codedemo',
  plugins: 'code',
  toolbar: 'code',

  height: 600,
  content_style: {{site.liveDemoIframeCSSStyles}}
});
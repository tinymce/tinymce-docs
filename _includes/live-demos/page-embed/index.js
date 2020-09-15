tinymce.init({
  selector: 'textarea#page-embed',
  plugins: 'pageembed code preview',
  toolbar: 'pageembed code preview',
  menubar: 'view',
  tiny_pageembed_classes: [
    { text: 'Big embed', value: 'my-big-class' },
    { text: 'Small embed', value: 'my-small-class' }
  ],
  height: 500,
  content_style: {{site.liveDemoIframeCSSStyles}}
});
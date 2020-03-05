// Initialize the TinyMCE editor
tinymce.init({
  selector: 'textarea#page-embed',
  plugins: 'pageembed code',
  toolbar: 'pageembed code',
  menubar: "view",
  tiny_pageembed_classes: [
    { text: 'Big embed', value: 'my-big-class' },
    { text: 'Small embed', value: 'my-small-class' }
  ],
  height: 500,
  content_css: '//www.tiny.cloud/css/codepen.min.css',
});
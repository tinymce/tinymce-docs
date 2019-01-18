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
  content_css: [
    '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
    '//www.tiny.cloud/css/codepen.min.css'
  ]
});
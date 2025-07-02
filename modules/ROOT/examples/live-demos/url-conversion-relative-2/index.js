tinymce.init({
  selector: '#url-conversion-relative-2',
  height: 300,
  plugins: 'link image code',
  relative_urls: true,
  // The documentBaseURI will be set to the current page's URL
  setup: function(editor) {
    editor.on('init', function() {
      console.log('Base URI:', editor.documentBaseURI.getURI());
    });
  },
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
});
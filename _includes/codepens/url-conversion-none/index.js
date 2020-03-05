// Initialize the TinyMCE editor
tinymce.init({
  selector: '#url-conversion-none',
  font_formats: fontList,
  content_css: '//www.tiny.cloud/css/codepen.min.css',
  height: 230,
  plugins: 'link image code',
  convert_urls: false,
});
tinymce.init({
  selector: '#url-conversion-relative-2',
  height: 230,
  plugins: 'link image code',
  relative_urls: true,
  document_base_url: '//www.tiny.cloud/demo/',
  content_style: {{site.liveDemoCSSStyles}}
});
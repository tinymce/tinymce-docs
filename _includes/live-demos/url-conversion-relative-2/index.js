tinymce.init({
  selector: '#url-conversion-relative-2',
  height: 300,
  plugins: 'link image code',
  relative_urls: true,
  document_base_url: '//www.tiny.cloud/docs/demo',
  content_style: {{site.liveDemoIframeCSSStyles}}
});
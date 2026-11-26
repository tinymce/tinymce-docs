tinymce.init({
  selector: '#url-conversion-relative-2',
  height: 600,
  plugins: [
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'code link image | undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
  // Absolute address, because document_base_url points to another site
  content_css: ['default', new URL('{{attachmentsdir}}/demo-content/content.css', document.baseURI).href],
  relative_urls: true,
  document_base_url: '//www.tiny.cloud/docs/demo'
});

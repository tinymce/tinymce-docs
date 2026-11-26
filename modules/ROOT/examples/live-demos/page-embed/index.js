tinymce.init({
  selector: 'textarea#page-embed',
  height: 780,
  plugins: [
    'pageembed',
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'pageembed | undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'link table | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  tiny_pageembed_classes: [
    { text: 'Simulation (16:9)', value: 'tiny-pageembed--16by9' },
    { text: 'Wide (21:9)', value: 'tiny-pageembed--21by9' },
    { text: 'Map (4:3)', value: 'tiny-pageembed--4by3' },
    { text: 'Square (1:1)', value: 'tiny-pageembed--1by1' }
  ]
});

tinymce.init({
  selector: 'textarea#text-color',
  height: 820,
  plugins: [
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'forecolor backcolor | undo redo | blocks | ' +
    'bold italic | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
  color_map_foreground: [
    '#17224F', 'Navy',
    '#335DFF', 'Key ingredient blue',
    '#002FE6', 'Royal blue',
    '#0025B3', 'Deep blue',
    '#0C132C', 'Midnight',
    '#B3261E', 'Warning red'
  ],
  color_map_background: [
    '#FFF3B0', 'Allergen yellow',
    '#F0F3FF', 'Pale blue',
    '#C6CCDC', 'Mist',
    '#FDE2E1', 'Pale red'
  ],
  color_cols_foreground: 3,
  color_cols_background: 2,
  color_default_foreground: '#335DFF',
  color_default_background: '#FFF3B0',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css']
});

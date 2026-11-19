tinymce.init({
  selector: 'textarea#text-color',
  height: 720,
  plugins: 'lists table advlist autolink link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media help wordcount',
  toolbar: 'forecolor backcolor | undo redo | blocks | bold italic | ' +
    'bullist numlist | table | ' +
    'alignleft aligncenter alignright alignjustify | outdent indent | ' +
    'removeformat | help',
  color_map_foreground: [
    '141C3A', 'Ink',
    '174EA6', 'Brand Blue',
    '1B5E20', 'On Track Green',
    '8A4B00', 'At Risk Amber',
    'B3261E', 'Blocked Red',
    '6A1B9A', 'Review Purple',
    '00695C', 'Teal',
    '4B5676', 'Slate'
  ],
  color_map_background: [
    'DFF5E1', 'Pale Green',
    'FFF3B0', 'Highlight Yellow',
    'FDE2E1', 'Pale Red',
    'E3ECFF', 'Pale Blue',
    'EDE7F6', 'Pale Purple',
    'F1F3F4', 'Light Gray'
  ],
  color_cols_foreground: 4,
  color_cols_background: 3,
  color_default_foreground: '#174EA6',
  color_default_background: '#FFF3B0',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css']
});

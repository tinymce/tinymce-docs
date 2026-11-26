tinymce.init({
  selector: 'textarea#user-formatting',
  height: 820,
  plugins: [
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'blocks styles fontfamily fontsizeinput lineheight | outdent indent | ' +
    'forecolor backcolor | undo redo | bold italic | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist | removeformat | help',
  toolbar_mode: 'wrap',
  block_formats: 'Paragraph=p; Heading 1=h1; Heading 2=h2; Heading 3=h3',
  style_formats: [
    { title: 'Lead paragraph', block: 'p', classes: 'lead' },
    { title: 'Sale price', inline: 'span', classes: 'sale-price' },
    { title: 'Highlight', inline: 'mark' },
    { title: 'Small print', inline: 'small' }
  ],
  font_family_formats: 'Inter=inter, sans-serif; Georgia=georgia, serif; Arial=arial, helvetica, sans-serif; Courier New=courier new, courier, monospace',
  font_size_formats: '12px 14px 16px 18px 21px 28px 36px',
  font_size_input_default_unit: 'px',
  line_height_formats: '1 1.2 1.4 1.6 2',
  color_map: [
    '#17224F', 'Navy',
    '#335DFF', 'Blue',
    '#002FE6', 'Royal blue',
    '#0025B3', 'Deep blue',
    '#0C132C', 'Midnight',
    '#C6CCDC', 'Mist',
    '#F0F3FF', 'Pale blue',
    '#FFFFFF', 'White'
  ],
  color_cols: 4,
  indentation: '24px',
  list_max_depth: 2,
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  content_style: '.lead { font-size: 18px; color: #17224f; } ' +
    '.sale-price { font-size: 21px; font-weight: 700; color: #0025b3; } ' +
    'mark { background-color: #f0f3ff; color: #0025b3; padding: 0 2px; } ' +
    'small { color: #17224f; }'
});

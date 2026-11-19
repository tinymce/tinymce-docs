tinymce.init({
  selector: 'textarea#user-formatting',
  height: 720,
  plugins: 'lists advlist autolink link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table help wordcount',
  toolbar: 'blocks styles fontfamily fontsizeinput lineheight | ' +
    'forecolor backcolor | bold italic underline | ' +
    'alignleft aligncenter alignright | bullist numlist outdent indent | ' +
    'removeformat | undo redo | alignjustify | help',
  block_formats: 'Paragraph=p; Heading 1=h1; Heading 2=h2; Heading 3=h3; Preformatted=pre',
  style_formats: [
    { title: 'Lead paragraph', block: 'p', classes: 'lead' },
    { title: 'Callout', block: 'blockquote', wrapper: true },
    { title: 'Highlight', inline: 'mark' },
    { title: 'Small print', inline: 'small' }
  ],
  font_family_formats: 'Inter=Inter, sans-serif; Georgia=georgia, serif; Courier New=courier new, courier, monospace; System default=system-ui, sans-serif',
  font_size_formats: '12px 14px 16px 18px 21px 28px 36px',
  font_size_input_default_unit: 'px',
  line_height_formats: '1 1.2 1.4 1.6 2',
  color_map: [
    '141C3A', 'Northwind Navy',
    '174EA6', 'Northwind Blue',
    '4B5676', 'Slate',
    '2E7D32', 'Success Green',
    'C62828', 'Alert Red',
    'FFF3B0', 'Highlight Yellow',
    'EEF1FF', 'Pale Blue',
    'FFFFFF', 'White'
  ],
  color_cols: 4,
  indentation: '24px',
  list_max_depth: 3,
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  content_style: '.lead { font-size: 19px; color: #4b5676; } mark { background: #fff3b0; padding: 0 2px; } small { color: #4b5676; }'
});

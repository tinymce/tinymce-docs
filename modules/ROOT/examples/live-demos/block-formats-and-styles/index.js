tinymce.init({
  selector: 'textarea#block-formats-and-styles',
  height: 800,
  plugins: [
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'blocks styles | undo redo | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
  block_formats: 'Paragraph=p; Title=h1; Section=h2; Step=h3',
  style_formats: [
    { title: 'Guide blocks', items: [
      { title: 'Lead paragraph', block: 'p', classes: 'lead' },
      { title: 'Tip', block: 'p', classes: 'tip' },
      { title: 'Safety warning', block: 'div', classes: 'safety-warning', wrapper: true }
    ]},
    { title: 'Parts table', items: [
      { title: 'Striped rows', selector: 'table', classes: 'striped' },
      { title: 'Back-ordered part', selector: 'tr', classes: 'back-ordered' }
    ]},
    { title: 'Labels' },
    { title: 'Part number', inline: 'span', classes: 'part-number' },
    { title: 'Measurement', inline: 'span', classes: 'measurement' }
  ],
  style_formats_autohide: true,
  preview_styles: 'font-weight font-style text-decoration color background-color border-left',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  content_style: '.lead { font-size: 18px; color: #17224f; } ' +
    '.tip { padding: 10px 14px; border-left: 4px solid #335dff; background-color: #f9f9fb; } ' +
    '.safety-warning { margin: 16px 0; padding: 12px 16px; border: 1px solid #c6ccdc; border-left: 4px solid #0c132c; border-radius: 6px; background-color: #f9f9fb; } ' +
    '.safety-warning p:last-child { margin-bottom: 0; } ' +
    '.part-number { padding: 1px 6px; white-space: nowrap; border: 1px solid #c6ccdc; border-radius: 4px; color: #0025b3; font-weight: 600; } ' +
    '.measurement { font-weight: 600; color: #17224f; } ' +
    'table.striped tbody tr:nth-child(even) td { background-color: #f9f9fb; } ' +
    'table tbody tr.back-ordered td { background-color: #c6ccdc; font-style: italic; }'
});

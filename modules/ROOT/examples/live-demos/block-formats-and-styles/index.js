tinymce.init({
  selector: 'textarea#block-formats-and-styles',
  height: 760,
  plugins: 'lists table advlist autolink link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media help wordcount',
  toolbar: 'blocks styles | undo redo | bold italic | bullist numlist | table | ' +
    'backcolor | alignleft aligncenter alignright alignjustify | ' +
    'outdent indent | removeformat | help',
  block_formats: 'Paragraph=p; Heading 1=h1; Heading 2=h2; Heading 3=h3; Preformatted=pre',
  style_formats: [
    { title: 'Article', items: [
      { title: 'Lead paragraph', block: 'p', classes: 'lead' },
      { title: 'Tip callout', block: 'div', classes: [ 'callout', 'tip' ], wrapper: true },
      { title: 'Warning callout', block: 'div', classes: [ 'callout', 'warning' ], wrapper: true }
    ]},
    { title: 'Inline text', items: [
      { title: 'Keyboard key', inline: 'kbd' },
      { title: 'Interface label', inline: 'span', classes: 'ui-label' },
      { title: 'Marker', inline: 'mark' }
    ]},
    { title: 'Tables', items: [
      { title: 'Striped rows', selector: 'table', classes: 'striped' },
      { title: 'Highlighted row', selector: 'tr', classes: 'row-highlight' }
    ]},
    { title: 'Status labels' },
    { title: 'Updated', inline: 'span', classes: [ 'badge', 'badge-updated' ] },
    { title: 'Deprecated', inline: 'span', classes: [ 'badge', 'badge-deprecated' ] }
  ],
  style_formats_autohide: true,
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  content_style: '.lead { font-size: 19px; color: #4b5676; } ' +
    '.callout { margin: 16px 0; padding: 12px 16px; border-left: 4px solid; border-radius: 6px; } ' +
    '.callout p:last-child { margin-bottom: 0; } ' +
    '.tip { background: #e8f5e9; border-color: #2e7d32; } ' +
    '.warning { background: #fff4e5; border-color: #b26a00; } ' +
    'kbd { padding: 1px 6px; border: 1px solid #c5cbe0; border-radius: 4px; background: #f5f6f8; font-family: monospace; font-size: 0.9em; } ' +
    '.ui-label { font-weight: 600; color: #174ea6; } ' +
    'mark { background: #fff3b0; padding: 0 2px; } ' +
    'table.striped tbody tr:nth-child(even) td { background: #f6f8ff; } ' +
    'tr.row-highlight td, table.striped tbody tr.row-highlight td { background: #fff3b0; } ' +
    '.badge { padding: 1px 8px; border-radius: 10px; font-size: 13px; font-weight: 600; } ' +
    '.badge-updated { background: #e3ecff; color: #174ea6; } ' +
    '.badge-deprecated { background: #fde2e1; color: #b3261e; }'
});

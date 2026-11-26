tinymce.init({
  selector: 'textarea#format-custom',
  height: 800,
  plugins: [
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'styles | undo redo | blocks | ' +
    'bold italic underline strikethrough backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  content_style: '.left { text-align: left; } ' +
    'img.left, audio.left, video.left { float: left; } ' +
    'table.left { margin-left: 0px; margin-right: auto; } ' +
    '.right { text-align: right; } ' +
    'img.right, audio.right, video.right { float: right; } ' +
    'table.right { margin-left: auto; margin-right: 0px; } ' +
    '.center { text-align: center; } ' +
    'img.center, audio.center, video.center { display: block; margin: 0 auto; } ' +
    'table.center { margin: 0 auto; } ' +
    '.full { text-align: justify; } ' +
    'img.full, audio.full, video.full { display: block; margin: 0 auto; } ' +
    'table.full { margin: 0 auto; } ' +
    '.bold { font-weight: bold; } ' +
    '.italic { font-style: italic; } ' +
    '.underline { text-decoration: underline; } ' +
    '.product-code { letter-spacing: 0.02em; } ' +
    'tr.highlight-row td { background-color: #c6ccdc; }',
  formats: {
    alignleft: { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img,audio,video', classes: 'left' },
    aligncenter: { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img,audio,video', classes: 'center' },
    alignright: { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img,audio,video', classes: 'right' },
    alignjustify: { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img,audio,video', classes: 'full' },
    bold: { inline: 'span', classes: 'bold' },
    italic: { inline: 'span', classes: 'italic' },
    underline: { inline: 'span', classes: 'underline', exact: true },
    strikethrough: { inline: 'del' },
    productcode: { inline: 'span', styles: { color: '#0025b3', fontWeight: '600' }, attributes: { title: 'Product code' }, classes: 'product-code' }
  },
  style_formats: [
    { title: 'Product code', format: 'productcode' },
    { title: 'Align left', format: 'alignleft' },
    { title: 'Align center', format: 'aligncenter' },
    { title: 'Align right', format: 'alignright' },
    { title: 'Justify', format: 'alignjustify' },
    { title: 'Bold text', inline: 'strong' },
    { title: 'Accent text', inline: 'span', styles: { color: '#335dff' } },
    { title: 'Accent heading', block: 'h2', styles: { color: '#0025b3' } },
    { title: 'Badge', inline: 'span', styles: { display: 'inline-block', border: '1px solid #335dff', 'border-radius': '5px', padding: '2px 5px', margin: '0 2px', color: '#335dff' } },
    { title: 'Highlighted row', selector: 'tr', classes: 'highlight-row' },
    { title: 'Image formats' },
    { title: 'Image left', selector: 'img', styles: { 'float': 'left', 'margin': '0 10px 0 10px' } },
    { title: 'Image right', selector: 'img', styles: { 'float': 'right', 'margin': '0 0 10px 10px' } }
  ]
});

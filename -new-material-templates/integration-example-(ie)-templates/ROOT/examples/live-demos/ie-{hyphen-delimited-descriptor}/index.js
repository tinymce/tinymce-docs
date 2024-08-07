const content_style= `

// In a more typical environment this constant would be a file, style.css,
// referenced in the tinymce.init configuration with the content_css option.

<css for the demo goes here>

`;

tinymce.init({
  selector: 'textarea#<hyphen-delimited-descriptor>',
// below is a basic 6.x working configuration.
// Do not assume it is suitable for demonstrating the plugin to be documented.
  height: 600,
  plugins: [
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'undo redo | blocks | ' +
  'bold italic backcolor | alignleft aligncenter ' +
  'alignright alignjustify | bullist numlist outdent indent | ' +
  'removeformat | help',
  content_style, // must be here if you have <css for the demo> above.
  newdocument_content // required — with actual material here — if your demo involves creating new documents.
});

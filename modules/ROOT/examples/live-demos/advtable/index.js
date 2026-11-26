tinymce.init({
  selector: 'textarea#advtable',
  height: 720,
  plugins: [
    'advtable',
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'advtablerownumbering table | undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  // Both series number only the body rows, so the header row and the total row stay blank.
  advtable_value_series: {
    numbered: {
      title: 'Numbered',
      update: true,
      resizable: false,
      generator: (info) => {
        const count = info.prev ? info.prev.count : 0;
        return info.sectionType === 'tbody' ? { value: count + 1, count: count + 1 } : { count };
      }
    },
    lettered: {
      title: 'Lettered',
      update: true,
      resizable: false,
      generator: (info) => {
        const count = info.prev ? info.prev.count : 0;
        return info.sectionType === 'tbody' ? { value: String.fromCharCode(65 + count), count: count + 1 } : { count };
      }
    }
  }
});

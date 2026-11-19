// Number only the body rows, so the header row and the total row stay unnumbered.
const bodyRowSeries = (formatValue) => (info) => {
  const count = info.prev ? info.prev.count : 0;
  if (info.sectionType === 'tbody' && info.cellType === 'td') {
    return { value: formatValue(count + 1), count: count + 1 };
  }
  return { count };
};

tinymce.init({
  selector: 'textarea#advtable',
  height: 680,
  plugins: 'table advtable lists advlist autolink link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media help wordcount',
  toolbar: 'table advtablerownumbering | undo redo | blocks | bold italic | ' +
    'alignleft aligncenter alignright | backcolor | alignjustify | ' +
    'bullist numlist outdent indent | removeformat | help',
  advtable_value_series: {
    numbered: {
      title: 'Numbered',
      update: true,
      resizable: false,
      generator: bodyRowSeries((n) => n)
    },
    lettered: {
      title: 'Lettered',
      update: true,
      resizable: false,
      generator: bodyRowSeries((n) => String.fromCharCode(64 + n))
    }
  },
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css']
});

tinymce.init({
  selector: 'textarea#emoticons',
  height: 720,
  plugins: [
    'emoticons',
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'emoticons | undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'link image table | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  emoticons_append: {
    roast_light: {
      keywords: [ 'roast', 'light', 'bright' ],
      char: '🌱'
    },
    roast_medium: {
      keywords: [ 'roast', 'medium', 'balanced' ],
      char: '🌰'
    },
    roast_dark: {
      keywords: [ 'roast', 'dark', 'bold' ],
      char: '🍫'
    },
    pour_over: {
      keywords: [ 'pourover', 'filter', 'drip' ],
      char: '☕',
      category: 'food_and_drink'
    }
  }
});

tinymce.init({
  selector: 'textarea#spellchecker',
  height: 760,
  plugins: [
    'tinymcespellchecker',
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'spellchecker spellcheckdialog language | undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'link image table | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  spellchecker_language: 'en-US',
  spellchecker_languages: [ 'en-US', 'en-GB', 'fr', 'it', 'es' ],
  spellchecker_ignore_list: {
    'en-US': [ 'brunoise', 'mirepoix', 'moka' ],
    'it': [ 'moka' ]
  },
  content_langs: [
    { title: 'English (US)', code: 'en-US' },
    { title: 'English (UK)', code: 'en-GB' },
    { title: 'French', code: 'fr' },
    { title: 'Italian', code: 'it' },
    { title: 'Spanish', code: 'es' }
  ]
});

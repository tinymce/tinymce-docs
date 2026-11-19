tinymce.init({
  selector: 'textarea#emoticons',
  height: 600,
  plugins: 'emoticons lists advlist autolink link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table help wordcount',
  toolbar: 'emoticons | undo redo | blocks | bold italic | bullist numlist | ' +
    'backcolor | alignleft aligncenter alignright alignjustify | ' +
    'outdent indent | removeformat | help',
  emoticons_append: {
    shipped: {
      keywords: [ 'shipped', 'done', 'released' ],
      char: '✅'
    },
    in_progress: {
      keywords: [ 'wip', 'progress', 'building' ],
      char: '🚧'
    },
    blocked: {
      keywords: [ 'blocked', 'stuck', 'waiting' ],
      char: '⛔'
    }
  },
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css']
});

tinymce.init({
  selector: 'textarea#emoticons',
  height: 300,
  plugins: 'lists code emoticons',
  toolbar: 'undo redo | styleselect | bold italic | ' +
    'alignleft aligncenter alignright alignjustify | ' +
    'outdent indent | numlist bullist | emoticons',
  emoticons_append: {
    custom_mind_explode: {
      keywords: ['brain', 'mind', 'explode', 'blown'],
      char: '🤯'
    }
  },
  content_style: {{site.liveDemoIframeCSSStyles}}
});
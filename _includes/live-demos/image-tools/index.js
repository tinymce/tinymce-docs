tinymce.init({
  selector: 'textarea#image-tools',
  height: 500,
  plugins: [
    'advlist autolink lists link image charmap print preview anchor',
    'searchreplace visualblocks code fullscreen',
    'insertdatetime media table imagetools wordcount'
  ],
  toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
  content_style: {{site.liveDemoIframeCSSStyles}}
});
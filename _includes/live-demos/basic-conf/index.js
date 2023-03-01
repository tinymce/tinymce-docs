tinymce.init({
  selector: '#basic-conf',
  width: 600,
  height: 300,
  plugins: [
    'advlist autolink link image lists charmap print preview hr anchor pagebreak',
    'searchreplace wordcount visualblocks code fullscreen insertdatetime media nonbreaking',
    'table emoticons template help'
  ],
  toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | ' +
    'bullist numlist outdent indent | link image | print preview media fullscreen | ' +
    'forecolor backcolor emoticons | help',
  menu: {
    favs: {title: 'My Favorites', items: 'code visualaid | searchreplace | emoticons'}
  },
  menubar: 'favs file edit view insert format tools table help',
  content_style: {{site.liveDemoIframeCSSStyles}}
});
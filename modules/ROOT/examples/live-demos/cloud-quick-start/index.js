tinymce.init({
  selector: 'textarea#cloud-quick-start',
  plugins: [
    'advlist', 'anchor', 'autolink', 'charmap', 'code', 'codesample', 'emoticons',
    'fullscreen', 'help', 'image', 'insertdatetime', 'link', 'lists', 'media',
    'preview', 'searchreplace', 'table', 'visualblocks', 'wordcount'
  ],
  menubar: 'file edit view insert format tools table help',
  toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media table | charmap emoticons codesample | code preview fullscreen | removeformat help',
  height: 500
});

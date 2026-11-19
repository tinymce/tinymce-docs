tinymce.init({
  selector: 'textarea#quickbars',
  height: 640,
  plugins: 'quickbars image link lists table advlist autolink charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media help wordcount',
  toolbar: false,
  quickbars_selection_toolbar: 'bold italic underline | quicklink h2 h3 blockquote | bullist numlist',
  quickbars_insert_toolbar: 'quickimage quicktable hr',
  quickbars_image_toolbar: 'alignleft aligncenter alignright | image',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css']
});

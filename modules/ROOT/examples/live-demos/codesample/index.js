tinymce.init({
  selector: 'textarea#codesample',
  height: 640,
  plugins: 'codesample code lists link advlist autolink image charmap preview anchor searchreplace visualblocks fullscreen insertdatetime media table help wordcount',
  toolbar: 'codesample code | undo redo | blocks | bold italic | bullist numlist | ' +
    'link | backcolor | alignleft aligncenter alignright alignjustify | ' +
    'outdent indent | removeformat | help',
  codesample_languages: [
    { text: 'HTML/XML', value: 'markup' },
    { text: 'JavaScript', value: 'javascript' },
    { text: 'CSS', value: 'css' },
    { text: 'PHP', value: 'php' },
    { text: 'Ruby', value: 'ruby' },
    { text: 'Python', value: 'python' },
    { text: 'Java', value: 'java' },
    { text: 'C', value: 'c' },
    { text: 'C#', value: 'csharp' },
    { text: 'C++', value: 'cpp' }
  ],
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css']
});

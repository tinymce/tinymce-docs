tinymce.init({
  selector: 'textarea#codesample',
  height: 500,
  plugins: 'codesample code',
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
  toolbar: 'codesample code',
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
});

### `codesample_languages`

This configuration option enables you to set a list of languages to be displayed in the languages drop down.

#### Example: Using `codesample_languages`

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'codesample',
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
  toolbar: 'codesample'
});
```

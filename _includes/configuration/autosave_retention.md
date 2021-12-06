### `autosave_retention`

This option lets you to specify the duration editor content should remain in local storage. Content older than the set time will be ignored. The syntax is to append the letter `m` to the end of a number value. For example, "20m" for 20 minutes.

Type
: `String`

Default Value
: '20m'

#### Example: Using `autosave_retention`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'autosave',
  autosave_retention: '30m'
});
```

## mobile

This option allows you specify an alternative config that will extend the existing desktop config when the editor is loaded on a mobile device. This gives you the flexibility to override settings specifically for [mobile]({{ site.baseurl }}/docs/mobile) and really customize the mobile experience.

**Type:** `Object`

##### Example of mobile specific config

This example shows how to setup a mobile section override some of the desktop settings with [mobile]({{ site.baseurl }}/configure/editor-appearance/#mobile) specific settings.

```js
tinymce.init({
  selector: 'textarea',
  plugins: [ 'code', 'lists' ]
  mobile: {
    theme: 'mobile',
    plugins: [ 'autosave', 'lists', 'autolink' ],
    toolbar: [ 'undo', 'bold', 'italic', 'styleselect' ]
  }
});
```

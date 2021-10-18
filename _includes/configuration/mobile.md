## mobile

This option allows you specify an alternative configuration for mobile devices. This setting allows for overriding settings specifically for mobile devices. For information on customizing {{site.productname}} for mobile devices, see: [{{site.productname}} mobile]({{ site.baseurl }}/how-to-guides/tinymce-for-mobile/).

**Type:** `Object`

### Example of mobile specific configuration

This example shows how to setup a mobile section to override some of the desktop settings with mobile specific settings.

```js
tinymce.init({
  selector: 'textarea',
  plugins: [ 'code', 'lists' ]
  mobile: {
    menubar: true,
    plugins: [ 'autosave', 'lists', 'autolink' ],
    toolbar: [ 'undo', 'bold', 'italic', 'styleselect' ]
  }
});
```

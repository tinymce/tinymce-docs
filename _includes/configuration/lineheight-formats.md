## lineheight_formats

{{ site.requires_5_5v }}

This option allows you to override the line heights displayed in the `lineheight` dropdown toolbar button and the `lineheight` menu item. Each item in the string should be space separated.

**Type:** `String`

**Default Value:** `'1 1.1 1.2 1.3 1.4 1.5 2'`

##### Example

```js
tinymce.init({
    selector: 'textarea', // change this value according to your HTML
    toolbar: 'lineheight',
    lineheight_formats: '1 1.1 1.2 1.3 1.4 1.5 2'
});
```
### `template_mdate_format`

This option allows you to provide {{site.productname}} with a date/time format that all 'modified' date templates will use.

Type
: `String`

Default
: `'%Y-%m-%d'`

#### Example: Using `template_mdate_format`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'template',
  menubar: 'insert',
  toolbar: 'template',
  template_mdate_format: '%m/%d/%Y : %H:%M:%S',
  templates: [
    {title: 'Mdate', description: 'Mdate example', content: '<p class="mdate">This will be replaced with the date modified</p>'}
  ]
});
```

If the date modified is set as 9:00AM on January 15th 2000, then inserting this template will insert the following into the editor:

```html
<p class="mdate">01/15/2000 : 09:00</p>
```

For a list of available date and time formats, see: [Reference Date/Time formats](#referencedatetimeformats).

## `iframe_aria_text`

{{ site.requires_5_9v }}

This option is used to customize the `title` attribute on the {{site.productname}} `iframe` element. For example:
 
~~~html
<iframe title="Rich Text Area. Press ALT-0 for help."></iframe>
~~~

The `title` attribute is read by screen-readers to help users identify the editor. This option only applies to {{site.productname}} classic (iframe) mode and has no effect on [`inline` editors]({{site.baseurl}}/configure/editor-appearance/#inline).

**Type:** `String`

**Default Value:** `'Rich Text Area. Press ALT-0 for help.'`

### Example: Using `iframe_aria_text`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your html
  iframe_aria_text: 'Text Editor'
});
```

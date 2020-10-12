## `fix_list_elements`

This option enables you to specify that list elements (`ul`, `ol`) should be converted to valid XHTML. This option is disabled by default since it causes some glitches with a few browsers.

This invalid list:

```html
<ol>
  <li>a</li>
    <ol>
      <li>b</li>
      <li>c</li>
   </ol>
    <li>e</li>
</ol>
```

Gets converted into this valid list:

```html
<ol>
  <li>a
    <ol>
      <li>b</li>
      <li>c</li>
    </ol>
  </li>
  <li>e</li>
</ol>
```

**Type:** `Boolean`

**Default Value:** `false`

**Possible Values:** `true`, `false`

### Example: Using `fix_list_elements`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  fix_list_elements : true
});
```

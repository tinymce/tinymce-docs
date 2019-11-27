## remove_script_host

If this option is enabled the protocol and host part of the URLs returned from the MCFileManager will be removed. This option is only used if the [relative_urls](#relative_urls) option is set to false.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

##### Example: remove_script_host

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  remove_script_host: false
});
```

> If disabled, URLs will be returned in this format: `'http://www.example.com/somedir/somefile.htm'` instead of the default format: `'/somedir/somefile.htm'`.

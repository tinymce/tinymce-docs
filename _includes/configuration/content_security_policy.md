## `content_security_policy`

This option allows you to set a custom content security policy for the editor's iframe contents.

**Type:** `String`

### Example: Using `content_security_policy`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  content_security_policy: "default-src 'self'"
});
```

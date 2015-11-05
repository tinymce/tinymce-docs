## content_security_policy

This option allows you to set a custom content security policy for the editor's iframe contents.

An example of this setting is as follows:

```js
tinymce.init({
    content_security_policy: "default-src 'self'"
});
```

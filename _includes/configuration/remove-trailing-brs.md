## remove_trailing_brs

This option allows you to disable TinyMCE's default behaviour of removing <br> tags at the end of block elements. Gecko and WebKit browsers inject these elements to make it possible to place the caret in empty blocks. This logic attempts to remove these elements while also keeping tags that were intentionally placed by the user.

An example of this setting is as follows:

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  remove_trailing_brs: false
});
```

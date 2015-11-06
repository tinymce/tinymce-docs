## directionality

This option allows you to set the base direction of directionally neutral text (i.e., text that doesn't have inherent directionality as defined in Unicode) within the editor. This is similar to the use of the "dir" attribute when using content editable elements by themselves.

The allowed values for this configuration option are:

* "ltr"
* "rtl"

An example of this setting is as follows:

```js
tinymce.init({
    ...
    directionality : 'ltr',
    ...
});
```

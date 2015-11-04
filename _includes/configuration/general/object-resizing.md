## object_resizing
This options allows you to turn on/off the resizing handles on images, tables or media objects. This option is enabled by default and allows you to resize table and images. You can also specify a CSS3 selector of what you want to enable resizing on.

Disable all resizing of images/tables

```js
tinymce.init({
        ...
        object_resizing : false
});
```

Enable resizing on images only

```js
tinymce.init({
        ...
        object_resizing : "img"
});
```

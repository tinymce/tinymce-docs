## `object_resizing`

This options allows you to turn on/off the resizing handles on images, tables or media objects. This option is enabled by default and allows you to resize table and images. You can also specify a CSS3 selector of what you want to enable resizing on.

### Disable all resizing of images/tables

**Type:** `Boolean`, `String`

**Default Value:** `true`

**Possible Values:** `true`, `false`, `img`

{{site.differs_for_mobile}}

#### Example: Disable object resizing

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  object_resizing : false
});
```

### Enable resizing on images only

**Type:** `Boolean`, `String`

**Default Value:** `true`

**Possible Values:** `true`, `false`, `img`

#### Example: Enable object resizing for images

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  object_resizing : 'img'
});
```

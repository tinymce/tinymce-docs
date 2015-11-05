## skin

This option allows you to specify the skin that TinyMCE should use. The default skin included with TinyMCE is named "lightgray".

The name of the skin should match the name of the folder within the skins directory of TinyMCE. If the specified skin is not found, TinyMCE will not load.

```js
tinymce.init({
    ...
    skin: "lightgray",
    ...
});
```

If you would like to create your own skin, please see the guide [here](/advanced-development-topics/creating-a-skin/).

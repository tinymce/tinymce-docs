## fixed_toolbar_container

Use this option to render the inline toolbar into a fixed positioned HTML element for example a top positioned toolbar. This option takes a CSS 3 selector for example "#mytoolbar" and renders any inline toolbars into this element.

Example

```js
tinymce.init({
    inline: true,
    fixed_toolbar_container: "#mytoolbar"
});
```

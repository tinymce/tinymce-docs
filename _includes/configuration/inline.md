
## `inline`

{{site.notonmobile}}

The **inline** option allows you to specify whether {{site.productname}} should run in inline mode.

The inline editing mode is useful when creating user experiences where you want the editing view of the page to be merged with the reading view of the page. When in inline mode, content is edited within the element the editor was initialized on, not within an iframe. Inline editors are designed to be "hidden" until content is selected and to use the CSS styles of the page where it initializes.

**Type:** `Boolean`

**Default Value:** `false`

**Possible Values:** `true`, `false`

### Example: Using `inline`

```js
tinymce.init({
  selector: '#myeditablediv',  // change this value according to your HTML
  inline: true
});
```

> **Note**: {{site.productname}} in inline mode will not initialize on the following elements: `area`, `base`, `basefont`, `br`, `col`, `frame`, `hr`, `img`, `input`, `isindex`, `link`, `meta`, `param`, `embed`, `source`, `wbr`, `track`, `colgroup`, `option`, `table`, `tbody`, `tfoot`, `thead`, `tr`, `th`, `td`, `script`, `noscript`, `style`, `textarea`, `video`, `audio`, `iframe`, `object`, and `menu`.

For more information on the differences between the editing modes, please see this page [here]({{ site.baseurl }}/general-configuration-guide/use-tinymce-inline/).


### CSS stylesheets and inline editor content

When using {{site.productname}} in inline mode, the editor inherits the CSS stylesheet from the page it is embedded in.

If the editor is used in inline mode, care should be taken when using styling that depends on structures within the editor. For example, if there's a class like this:

```css
h1 strong {
  color: orange;
}
```

This would make the phrase "bold text" bold and orange in the content:

```html
<h1>This text is <strong>bold text</strong> in a heading</h1>
```

If the user changed the heading to a paragraph or a different heading level, then the text color of the bold text would change for the user. While this is entirely correct behavior according to the stylesheet, it is entirely unexpected from the user's perspective.

## inline_boundaries_selector

The **inline_boundaries_selector** option allows you specify what elements the inline boundaries should apply to. This defaults to `a[href],code` but can be extended to include other inline elements such as `b`, `strong`, `i`, and `em`.

If you add new elements, you need to add CSS selectors for them in the content CSS. See the [Boilerplate Content CSS page]({{ site.baseurl }}/advanced/boilerplate-content-css/) for details.

**Type:** `String`

**Default Value:** `a[href],code`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  inline_boundaries_selector: 'a[href],code,b,i,strong,em'
});
```

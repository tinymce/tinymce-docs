## inline_boundaries_selector

This option allows you specify what elements the inline boundaries should apply to. This defaults to a[href],code but can be extended to include other inline elements such as b,strong,i,em. If you add new elements you will have to add css selectors for them in the content css check the [Boilerplate Content CSS page]({{ site.baseurl }}/advanced/boilerplate-content-css/) for details.

**Type:** `String`

**Default Value:** `a[href],code`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  inline_boundaries_selector: 'a[href],code,b,i,strong,em'
});
```

## `cache_suffix`

This option lets you add a custom cache buster URL part at the end of each request `{{site.prodnamecode}}` makes to load CSS, scripts, etc. Just add the query string part you want to append to each URL request, for example "?v=4.1.6".

**Type:** `String`

### Example: Using `cache_suffix`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  cache_suffix: '?v=4.1.6'
});
```

## `target`

Sometimes there might be already a reference to a DOM element at hand, for example when element is created dynamically. In such case initialising editor on it by [selector]({{ site.baseurl }}/configure/integration-and-setup/#selector) might seem irrational (since selector - *id* or *class* should be created first). In such cases you can supply that element directly via `target` option.

> **Important:** `selector` option has precedence over `target`, so in order for `target` to work, do not use the `selector` option.

**Type:** `Node`

### Example: Using `target`

```js
var el = document.createElement('textarea');
document.body.appendChild(el);

// ...

tinymce.init({
  target: el
});
```

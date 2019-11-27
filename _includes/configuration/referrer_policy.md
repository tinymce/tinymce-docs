## referrer_policy

Used for setting the level of referrer information sent when loading plugins and CSS. Referrer policies can be used to:

* Improve the privacy of end-users.
* Assist with server-side filtering of cross-origin requests for {{site.productname}} resources.

{{site.requires_5_1v}}

**Type:** `String`

**Default Value:** `''`

For a list of valid referrer policies (directives), see: [MDN Web Docs - Referrer-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy).

##### Example: referrer_policy

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  referrer_policy: 'strict-origin-when-cross-origin'
});
```

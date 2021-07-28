### `media_url_resolver`

This option allows you to specify a function that will be used to replace {{site.productname}}'s default media embed logic with your own, custom logic.

The media url resolver function takes three arguments: `data`, a `resolve` callback and a `reject` callback. The `data` argument will be an object with a `url` property on it. In your custom handler function you can then handle the `url` in whatever way you want and return the HTML you want to embed by calling the `resolve` callback and passing it an object with the HTML set on the `html` property, like this: `resolve({html: 'YOUR_HTML'})`.

If you in your handler would like fall back to the default media embed logic you can simple call the `resolve` callback with an object where the `html` property is set to an empty string, like this: `resolve({html: ''})`.

If something goes wrong in your function and you want to show an error to the user you can do so by calling the `reject` callback with an object where the message you want to show the user is set under the `msg` property, like this: `reject({msg: 'YOUR_ERROR_MESSAGE'})`. The message entered will be shown in an error notification to the user.

**Type:** `Function`

#### Example: Using `media_url_resolver`

The following example simply checks if the url contains some special url and returns an iframe if it does. Otherwise it calls the `resolve` callback with an empty string, falling back to the default media embed logic.

```js
tinymce.init({
  selector: 'textarea.tinymce',
  plugins: 'media',
  toolbar: 'media',
  media_url_resolver: function (data, resolve/*, reject*/) {
    if (data.url.indexOf('YOUR_SPECIAL_VIDEO_URL') !== -1) {
      var embedHtml = '<iframe src="' + data.url +
      '" width="400" height="400" ></iframe>';
      resolve({html: embedHtml});
    } else {
      resolve({html: ''});
    }
  }
});
```

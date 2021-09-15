### `a11ychecker_issue_url_callback`

The `a11ychecker_issue_url_callback` option is used to change the target URL for the "Click for more info" button (![help icon - a question mark inside a circle]({{site.baseurl}}/images/icons/help.svg)) in the Accessibility Checker dialog. By default, the "more info" links will point to `{{site.url}}/docs/plugins/a11ychecker/#<ruleId>`, such as `{{site.url}}/docs/plugins/a11ychecker/#D1`. This option can be used to set the target URL to a page or pages outside {{site.url}}/docs/.

**Type:** `Function`

**Default Value:** `undefined`

#### Example: Using `a11ychecker_issue_url_callback`

This example shows how to change the link for the "Click for more info" button (![help icon - a question mark inside a circle]({{site.baseurl}}/images/icons/help.svg)) on the Accessibility Checker dialog to point to anchors at `www.example.com/tinymce/a11ychecker/more_info`.

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your html
  plugins: 'a11ychecker',
  toolbar: 'a11ycheck',
  a11ychecker_issue_url_callback: function (ruleId) {
    return `https://www.example.com/tinymce/a11ychecker/more_info#${ruleId}`
  };
});
```


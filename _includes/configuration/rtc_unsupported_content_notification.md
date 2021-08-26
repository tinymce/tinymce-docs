### `rtc_unsupported_content_notification`

The `rtc_unsupported_content_notification` option can be used to disable the notification about unsupported HTML inside the RTC enabled editor. Existing documents containing HTML generated using plugins not yet supported by the RTC plugin could lead to unexpected behavior. For a list of RTC supported plugins, see: [Supported {{site.productname}} functionality for Real-Time Collaboration]({{site.baseurl}}/rtc/rtc-supported-functionality/).

**Type:** `Boolean`

**Default:** `true`

**Required:** no

#### Example of blocking unsupported content notifications

```js
tinymce.init({
  selector: 'textarea', // change this value according to your HTML
  plugins: 'rtc',
  rtc_unsupported_content_notification: false
})
```

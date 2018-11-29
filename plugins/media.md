---
layout: default
title: Media plugin
title_nav: Media
description: Add HTML5 video and audio elements.
keywords: video youtube vimeo mp3 mp4 mov movie clip film media_live_embeds audio_template_callback media_alt_source media_poster media_dimensions media_filter_html media_scripts video_template_callback
controls: toolbar button, menu item
---

The `media` plugin adds the ability for users to be able to add HTML5 video and audio elements to the editable area. It also adds the item `Insert/edit video` under the `Insert` menu as well as a toolbar button.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "media",
  menubar: "insert",
  toolbar: "media"
});
```

### Options

These settings affect the execution of the `media` plugin. Namely the ability to disable parts of the media dialog box when inserting/editing media items. In addition, the user may disable the cross-site scripting sanitation filter for video/object elements here.

### `media_live_embeds`

> New in TinyMCE version 4.3!

When you enable this option users will see a live preview of embedded video content within the editable area, rather than a placeholder image. This means that users can play a video clip, such as YouTube, within the editor.

This option is enabled by default and accepts URLs input into the source field or embed field in the dialog box by the user.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "media",
  menubar: "insert",
  toolbar: "media",
  media_live_embeds: true
});
```

### `audio_template_callback`

This option allows you to specify the function that will return the HTML embed code of the audio media that you are attempting to insert into TinyMCE.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "media",
  menubar: "insert",
  toolbar: "media",
  audio_template_callback: function(data) {
   return '<audio controls>' + '\n<source src="' + data.source1 + '"' + (data.source1mime ? ' type="' + data.source1mime + '"' : '') + ' />\n' + '</audio>';
 }
});
```

### `media_url_resolver`

This option allows you to specify a function that will be used to replace TinyMCE's default media embed logic with your own, custom logic.

The media url resolver function takes three arguments: `data`, a `resolve` callback and a `reject` callback. The `data` argument will be an object with a `url` property on it. In your custom handler function you can then handle the `url` in whatever way you want and return the HTML you want to embed by calling the `resolve` callback and passing it an object with the HTML set on the `html` property, like this: `resolve({html: 'YOUR_HTML'})`.

If you in your handler would like fall back to the default media embed logic you can simple call the `resolve` callback with an object where the `html` property is set to an empty string, like this: `resolve({html: ''})`.

If something goes wrong in your function and you want to show an error to the user you can do so by calling the `reject` callback with an object where the message you want to show the user is set under the `msg` property, like this: `reject({msg: 'YOUR_ERROR_MESSAGE'})`. The message entered will be shown in an error notification to the user.

**Type:** `JavaScript Function`

##### Example

The following example simply checks if the url contains some special url and returns an iframe if it does. Otherwise it calls the `resolve` callback with an empty string, falling back to the default media embed logic.

```js
tinymce.init({
  selector: "textarea.tinymce",
  plugins: "media",
  toolbar: "media",
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

### `media_alt_source`

This options allows you disable the `Alternative source` input field in the media dialog.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "media",
  menubar: "insert",
  toolbar: "media",
  media_alt_source: false
});
```

### `media_poster`

This options allows you disable the `Poster` input field in the media dialog.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "media",
  menubar: "insert",
  toolbar: "media",
  media_poster: false
});
```

### `media_dimensions`

This options allows you disable the `Dimensions` input fields in the media dialog.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "media",
  menubar: "insert",
  toolbar: "media",
  media_dimensions: false
});
```

### `media_filter_html`

This option allows you disable the XSS sanitation filter for video/object elements. Scripts, conditional comments, etc, can't be used within these elements by default for security reasons. If you want to include that and have server side sanitizers or if you trust your users, then you can disable this feature.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "media",
  menubar: "insert",
  toolbar: "media",
  media_filter_html: false
});
```

### `media_scripts`

This option allows you to embed videos using script elements.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "media",
  menubar: "insert",
  toolbar: "media",
  media_scripts: [
   {filter: 'http://media1.tinymce.com'},
   {filter: 'http://media2.tinymce.com', width: 100, height: 200}
 ]
});
```

### `video_template_callback`

This option allows you to specify the function that will return the HTML embed code of the video media that you are attempting to insert into TinyMCE.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "media",
  menubar: "insert",
  toolbar: "media",
  video_template_callback: function(data) {
   return '<video width="' + data.width + '" height="' + data.height + '"' + (data.poster ? ' poster="' + data.poster + '"' : '') + ' controls="controls">\n' + '<source src="' + data.source1 + '"' + (data.source1mime ? ' type="' + data.source1mime + '"' : '') + ' />\n' + (data.source2 ? '<source src="' + data.source2 + '"' + (data.source2mime ? ' type="' + data.source2mime + '"' : '') + ' />\n' : '') + '</video>';
 }
});
```

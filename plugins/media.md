---
layout: default
title: Media Plugin
title_nav: Media
description: Add HTML5 video and audio elements.
keywords: video, Youtube, Vimeo, MP3, film
---

// adds menu control (under Insert menu)

// toolbar control

The `media` plugin adds the ability for users to be able to add HTML5 video and audio elements to the editable area. It also adds the menu item `Insert/edit video` under the `Insert` menu as well as a toolbar control.

**Type:** `String`

**Example:**

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  plugins: "media",
  menubar: "insert",
  toolbar: "media"
});
```

### Options

These settings affect the execution of the `media` plugin, namely the ability to disable parts of the media dialog box when inserting/editing media items. In addition, the user may disable the cross-site scripting sanitation filter for video/object elements here.

### `media_live_embeds`

> New in 4.3

When you enable this option users will see a live preview of embedded video content within the editable area, rather than a placeholder image. This means that users can play a video clip, such as YouTube, within the editor.

This option is enabled by default and accepts urls input into the source field or embed field in the dialog box by the user.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

**Example:**

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  plugins: "media",
  menubar: "insert",
  toolbar: "media",
  media_live_embeds: true
});
```

### `audio_template_callback`

This option allows you to specify the function that will return the html embed code of the audio media that you are attempting to insert into tinymce.

**Type:** `String`

**Example:**

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  plugins: "media",
  menubar: "insert",
  toolbar: "media",
  audio_template_callback: function(data) {
   return '<audio controls>' + '\n<source src="' + data.source1 + '"' + (data.source1mime ? ' type="' + data.source1mime + '"' : '') + ' />\n' + '</audio>';
 }
});
```

### `media_alt_source`

This options allows you disable the `Alternative source` input field in the media dialog.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

**Example:**

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
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

**Example:**

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
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

**Example:**

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  plugins: "media",
  menubar: "insert",
  toolbar: "media",
  media_dimensions: false
});
```

### `media_filter_html`

This option allows you disable the XSS sanitation filter for video/object elements. Scripts, conditional comments, etc, can't be used within these elements by default for security reasons. If you want to include that and have server side sanitizers, or you trust your users, then you can disable this feature.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

**Example:**

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  plugins: "media",
  menubar: "insert",
  toolbar: "media",
  media_filter_html: false
});
```

### `media_scripts`

This option allows you to embed videos using script elements.

**Type:** `String`

**Example:**

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
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

This option allows you to specify the function that will return the html embed code of the video media that you are attempting to insert into tinymce.

**Type:** `String`

**Example:**

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  plugins: "media",
  menubar: "insert",
  toolbar: "media",
  video_template_callback: function(data) {
   return '<video width="' + data.width + '" height="' + data.height + '"' + (data.poster ? ' poster="' + data.poster + '"' : '') + ' controls="controls">\n' + '<source src="' + data.source1 + '"' + (data.source1mime ? ' type="' + data.source1mime + '"' : '') + ' />\n' + (data.source2 ? '<source src="' + data.source2 + '"' + (data.source2mime ? ' type="' + data.source2mime + '"' : '') + ' />\n' : '') + '</video>';
 }
});
```

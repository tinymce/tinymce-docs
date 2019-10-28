---
layout: default
title: PowerPaste plugin
title_nav: PowerPaste
keywords: enterprise powerpaste power paste paste_as_text powerpaste_word_import powerpaste_html_import powerpaste_block_drop powerpaste_allow_local_images microsoft word excel
---

The TinyMCE **PowerPaste** plugin automatically cleans up content from Microsoft Word/Excel and HTML sources to ensure clean, compliant content that matches the look and feel of the site.

>***Note:*** _Due to limitations in Excel online (part of Office Live) PowerPaste does not support pasting from Excel online.  If you paste content using Excel in Office Live you will get a plain text representation of the content._


## Usage

The **PowerPaste** plugin activates automatically when users paste content into the editor. For basic usage, users are not required to take any action. Simply copy and paste content normally using keyboard shortcuts, the browser's "Paste" menu item (including from the context menu), or the TinyMCE "Paste" toolbar button.

To paste clipboard content as plain text, users can click the "Paste As Text" toolbar button or menu item, then paste the content normally. The TinyMCE **PowerPaste** plugin will convert the HTML on the clipboard into plain text.

If you configure **PowerPaste** to allow local images (see the [`powerpaste_allow_local_images`](#powerpaste_allow_local_images) setting below), then images copied from Microsoft Word and other sources will appear in TinyMCE as Base64 encoded images. You can have TinyMCE automatically upload Base64 encoded images for reverting back to a standard image as described in the [image upload documentation]({{site.baseurl}}/advanced/handle-async-image-uploads/).

>***Note:*** _PowerPaste (when configured to allow local images) will import images from pasted Microsoft Word/Excel content.  When doing this, **PowerPaste** extracts Base64 encoded images from the clipboard.  Images larger than approximately 8.5MB may fail to import based on technical limitations of web browsers._


## Cloud Installation
To enable the TinyMCE **PowerPaste** plugin with [TinyMCE Cloud]({{ site.baseurl }}/cloud-deployment-guide/editor-and-features/):

1. If you are currently using the `paste` plugin provided with TinyMCE, disable it by removing it from the `plugins` list.
2. Add `powerpaste` to the `plugins` list.

Example TinyMCE configuration:

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "powerpaste"
});
```

## Self-hosted Installation
To enable the TinyMCE **PowerPaste** plugin:

1. If you are currently using the `paste` plugin provided with TinyMCE, disable it by removing it from the `plugins` list.
2. Copy the entire `powerpaste` folder (found in the ZIP that you downloaded) into the `plugins` directory of your TinyMCE installation. This is typically `/tinymce/plugins`.
3. Add `powerpaste` to the `plugins` list in  your TinyMCE configuration.

See the example TinyMCE configuration above.


## Using the PowerPaste Plugin with Module Loaders

To enable the **PowerPaste** plugin when using a [module loader]({{site.baseurl}}/advanced/usage-with-module-loaders/), follow these instructions:

1. Make the PowerPaste plugin folder available over http.
2. Add the path to the PowerPaste plugin folder to the [external plugins]({{site.baseurl}}/configure/integration-and-setup/#external_plugins) option in `tinymce.init()`.

Example:

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  external_plugins: {
    'powerpaste': 'http://www.server.com/application/external_plugins/powerpaste/plugin.js'
  }
});
```


## Configuration Options

### paste_as_text

This option controls the default state of the **Paste as text** menu item, which is added by the `powerpaste` plugin under the `Edit` menu drop-down.

The supported values are `true` and `false`. The default is `false`.

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "powerpaste",
  menubar: "edit",
  toolbar: "pastetext",
  paste_as_text: true
});
```

### powerpaste_word_import

This setting controls how content pasted from Microsoft Word is filtered.

**Default value:** `prompt`

The supported values are:

* `clean` - Preserve the structure of the content such as headings, tables and lists but remove inline styles and classes. This results in simple content that uses the site's CSS stylesheet while retaining the semantic structure from the original document.
* `merge` - Preserve the inline formatting and structure of the original document. Invalid and proprietary styles, tags and attributes are still removed ensuring that the HTML is valid while more closely matching the original document formatting.
* `prompt` - Prompt the user to choose between the clean and merge options after attempting to paste word content.

>***Note:*** *When using the Windows operating system, copying and pasting content from Word 2013 (or later) in "Protected View" will result in plain, unformatted text. This is due to how Protected View interacts with the clipboard.*

### powerpaste_html_import

This setting controls how content pasted from sources other than Microsoft Word is filtered. Note that this includes content copied from TinyMCE itself.

**Default value:** `clean`

The supported values are:

* `clean` - Preserve the structure of the content such as headings, tables, and lists but remove inline styles and classes. This results in simple content that uses the site's CSS stylesheet while retaining the semantic structure from the original document.
* `merge` Preserve the inline formatting and structure of the original document. Invalid and proprietary styles, tags and attributes are still removed ensuring that the HTML is valid while more closely matching the original document formatting.
* `prompt` - Prompt the user to choose between the clean and merge options after attempting to paste HTML content.

### powerpaste_block_drop

Due to browser limitations, it is not possible to filter content that is dragged and dropped into the editor. When powerpaste_block_drop is set to true the plugin will disable drag and dropping content into the editor. This prevents the unfiltered content from being introduced. Copy and paste is still enabled.

**Default value:** `false`

**Possible values:**  `true`, `false`

### powerpaste_allow_local_images

When set to true Base64 encoded images using a data URI in the copied content will not be removed after pasting.

**Default value:** `true`

**Possible values:**  `true`, `false`

>***Note:*** *If you configure* ***PowerPaste*** *to allow local images, you can have TinyMCE automatically upload Base64 encoded images for conversion back to a standard image as described on the [image upload documenation]({{ site.baseurl }}/advanced/handle-async-image-uploads/).*

### powerpaste_keep_unsupported_src

Due to browser limitations, PowerPaste is not able to support all image types supported by Word and Excel. When `powerpaste_keep_unsupported_src` is set to `true`, PowerPaste will store the original `src` of unsupported images in a `data-image-src` attribute on the pasted image element. This enables developers to add further image support via post-processing.

For example, browsers do not allow PowerPaste to access the file system. If your application has access to the file system, setting `powerpaste_keep_unsupported_src` to `true` may allow you to replace unsupported images during post-processing using the original file paths.

**Default value:** `false`

**Possible values:**  `true`, `false`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "powerpaste",
  powerpaste_word_import: "clean",
  powerpaste_html_import: "merge"
});
```

## Toolbar Buttons

#### pastetext

This button allows you to toggle paste as plain text mode on and off. When in plain text mode, all rich content is converted into plain text.

Example TinyMCE Configuration:

```js
tinymce.init({
  selector: "textarea",
  plugins: "powerpaste",
  toolbar: "pastetext"
});
```

## Menu Items

#### pastetext

This menu item allows you to toggle paste as plain text mode on and off. When in plain text mode, all rich content is converted into plain text.

Example TinyMCE Configuration:

```js
tinymce.init({
  selector: "textarea",
  plugins: "powerpaste",
  menu: {
	edit: {title: "edit", items: "pastetext"}
  }
});
```

## Advanced Config Options

### Pre- and post- filtering callbacks

Developers can add custom filtering before and after **PowerPaste's** filters are run using the pre- and post- filtering callbacks. These can be added as init options or at runtime using event listeners.

> Note: These callbacks are also triggered by the core Paste plugin, but when triggered by PowerPaste they are passed more data.

#### Configuration Options

##### paste_preprocess

This setting allows you to run custom filtering on the content from the clipboard before it is run through PowerPaste's filters. The callback is passed two arguments: the PowerPaste plugin instance and an object containing event data. This object contains:

- Standard paste event data.
- `content` - A string containing the content to be pasted.
- `mode` - A string indicating whether PowerPaste is in `clean` or `merge` mode.
- `source` - A string indicating which kind of filtering PowerPaste will run based on the source of the content. This will return `html`, `msoffice`, `googledocs`, `image`, `plaintext`, `text` or `invalid`.

Example TinyMCE configuration:

```js
const yourCustomFilter = function(content) {
  // Implement your custom filtering and return the filtered content
  return content;
};

tinymce.init({
  selector: "textarea",
  plugins: "powerpaste",
  paste_preprocess: function (pluginApi, data) {
    console.log(data.content, data.mode, data.source);
    // Apply custom filtering by mutating data.content
    // For example:
    const content = data.content;
    const newContent = yourCustomFilter(content);
    data.content = newContent;
  }
});
```

##### paste_postprocess

This setting allows you to run custom filtering on the pasted content after it is run through PowerPaste's filters. The callback is passed two arguments: the PowerPaste plugin instance and an object containing event data. This object contains:

- Standard paste event data.
- `node` - A DOM node containing the DOM structure of the filtered paste content.
- `mode` - A string indicating whether PowerPaste is in `clean` or `merge` mode.
- `source` - A string indicating which kind of filtering PowerPaste will run based on the source of the content. This will return `html`, `msoffice`, `googledocs`, `image`, `plaintext`, `text`, or `invalid`.

Example TinyMCE configuration:

```js
tinymce.init({
  selector: "textarea",
  plugins: "powerpaste",
  paste_postprocess: function (pluginApi, data) {
    console.log(data.node, data.mode, data.source);
    // Apply custom filtering by mutating data.node
    const additionalNode = document.createElement('div');
    additionalNode.innerHTML = '<p>This will go before the pasted content.</p>';
    data.node.insertBefore(additionalNode, data.node.firstElementChild);
  }
});
```

#### Event Listeners

Custom paste filtering can also be configured at runtime using event listeners.

- `PastePreProcess` is equivalent to `paste_preprocess`
- `PastePostProcess` is equivalent to `paste_postprocess`

The event listeners are passed the same data objects as their equivalent configuration options. The event listener callbacks can be configured or changed at any time as long as you have a reference to the Editor API.

Example TinyMCE configuration:

```js
const yourCustomFilter = function(content) {
  // Implement your custom filtering and return the filtered content
  return content;
};

tinymce.init({
  selector: "textarea",
  plugins: "powerpaste",
  setup: function(editor) {
    editor.on('PastePreProcess', function(data) {
      console.log(data.content, data.mode, data.source);
      // Apply custom filtering by mutating data.content
      const content = data.content;
      const newContent = customFilter(content);
      data.content = newContent;
    });

    editor.on('PastePostProcess', function(data) {
      console.log(data.node, data.mode, data.source);
      // Apply custom filtering by mutating data.node
      // For example:
      const additionalNode = document.createElement('div');
      additionalNode.innerHTML = '<p>This will go before the pasted content.</p>';
      data.node.insertBefore(additionalNode, data.node.firstElementChild);
    });
  }
});
```

## Buy TinyMCE PowerPaste

Start with our [dedicated product page](https://about.tiny.cloud/products/powerpaste/) to see our flexible pricing options. OEM and enterprise customers should [contact sales directly](https://www.tinymce.com/pricing/).

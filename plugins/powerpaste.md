---
layout: default
title: PowerPaste Plugin
description: Upgrade the Microsoft Word copy-and-paste capabilities of TinyMCE.
keywords: Excel, powerpaste
---

The TinyMCE PowerPaste plugin automatically cleans up content from Microsoft Word and other HTML sources to ensure clean, compliant content that matches the look and feel of the site.

PowerPaste is a premium upgrade from the makers of TinyMCE that is included in paid subscription plans of TinyMCE including TinyMCE Enterprise.


## Usage

The  PowerPaste plugin activates automatically when users paste content into the editor. For basic usage, users are not required to take any action - simply copy and paste content normally using keyboard shortcuts, the browser's "Paste" menu item (including from the context menu) or the TinyMCE "Paste" toolbar button.

To paste clipboard content as plain text, removing all forms of formatting, user's can click the "Paste As Text" toolbar button and then paste the content normally. The TinyMCE PowerPaste plugin will convert the HTML on the clipboard into plain text.


## Installation

To enable the TinyMCE PowerPaste plugin:

1. If you are currently using the `paste` plugin provided with TinyMCE, disable it by removing it from the `plugins` list.
2. Copy the entire `powerpaste` folder that contains this README file into the plugins directory of your TinyMCE installation. This is typically `/tinymce/plugins`.
3. Add `powerpaste` to the `plugins` list.

Example TinyMCE configuration:

````
tinymce.init({
    selector: 'textarea',
    plugins: 'powerpaste',
    ...
});
````

## Configuration Options


### powerpaste_word_import

This setting controls how content being pasted from Microsoft Word is filtered. The supported values are:

* `clean` - Preserve the structure of the content such as headings, tables and lists but remove inline styles and classes. This results in simple content that uses the site's CSS stylesheet while retaining the semantic structure from the original document.
* `merge` - Preserve the inline formatting and structure of the original document. Invalid and proprietary styles, tags and attributes are still removed ensuring that the HTML is valid while more closely matching the original document formatting.
* `prompt` (Default) - Prompt the user to choose between the clean and merge options after attempting to paste word content.


### powerpaste_html_import

This setting controls how content being pasted from sources other than Microsoft Word is filtered. Note that this includes content copied from TinyMCE itself. The supported values are:

* `clean` - Preserve the structure of the content such as headings, tables and lists but remove inline styles and classes. This results in simple content that uses the site's CSS stylesheet while retaining the semantic structure from the original document.
merge (Default) - Preserve the inline formatting and structure of the original document. Invalid and proprietary styles, tags and attributes are still removed ensuring that the HTML is valid while more closely matching the original document formatting.
* `prompt` - Prompt the user to choose between the clean and merge options after attempting to paste HTML content.


### powerpaste_block_drop

Due to browser limitations, it is not possible to filter content that is dragged and dropped into the editor. When powerpaste_block_drop is set to true the plugin will disable drag and dropping content into the editor. This prevents the unfiltered content from being introduced. Copy and paste is still enabled.

The default is false.


### powerpaste_allow_local_images

When set to true base64 encoded images using a data URI in the copied content will not be removed after pasting.

The default is false.

Example configuration:

````
tinymce.init({
	selector: 'textarea',
	plugins: 'powerpaste',
	powerpaste_word_import: 'clean',
	powerpaste_html_import: 'merge',
	...
});
````

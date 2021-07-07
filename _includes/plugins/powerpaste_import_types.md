The supported string-based values are:

* `clean` - Preserve the structure of the content such as headings, tables, and lists but remove inline styles and classes. This results in simple content that uses the site's CSS stylesheet while retaining the semantic structure from the original document.
* `merge` - Preserve the inline formatting and structure of the original document. Invalid and proprietary styles, tags and attributes are still removed ensuring that the HTML is valid while more closely matching the original document formatting.
* `prompt` - Prompt the user to choose between the clean and merge options after attempting to paste HTML content.

Alternatively, this option can take an asyncronous function that returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) which will resolve with `clean` or `merge`. This allows the paste mode to be dynamically set each time a user pastes relevant content. It can be used, for example, to replicate the `prompt` dialog with a custom dialog.
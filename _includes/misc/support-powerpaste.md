## PowerPaste support (Copy and Paste)

{{site.companynameformal}} tests and supports using the PowerPaste plugin for copying content from Google Docs and versions of Microsoft Word and Microsoft Excel:

* Covered by Microsoft Mainstream Support based on the [Microsoft Fixed Lifecycle Policy](https://support.microsoft.com/en-us/help/14085/fixed-lifecycle-policy).
* Provided by Microsoft Office 365.

### PowerPaste Feature and Browser Support

PowerPaste (Copy and Paste) is supported on all the browsers supported by {{site.productname}} Enterprise. There are some variances of functionality for different browsers.

|                       | HTML Cleaning | Improved HTML Cleaning | Image Import  |
|-----------------------| :-----------: | :--------------------: | :-----------: |
| Internet Explorer 11  | {{site.tick}} | {{site.cross}}         | {{site.cross}}|
| Microsoft Edge Latest | {{site.tick}} | {{site.tick}}          | {{site.tick}} |
| Chrome Latest         | {{site.tick}} | {{site.tick}}          | {{site.tick}} |
| Firefox Latest        | {{site.tick}} | {{site.tick}}          | {{site.tick}} |
| Safari Latest         | {{site.tick}} | {{site.tick}}          | {{site.tick}} |

#### HTML Cleaning

On all browsers, PowerPaste provides basic HTML cleaning. For browsers where HTML5 support is not available, PowerPaste uses the browser DOM to import and clean HTML. This mechanism is the primary cleaning method on browsers where HTML5 clipboard APIs are not available. While the resulting content is clean HTML the direct conversion to a browser DOM can result in some loss of content structure and/or formatting information.

#### Improved HTML Cleaning

On browsers that support HTML5 APIs, PowerPaste is able to use improved HTML cleaning techniques. Improved HTML cleaning uses the HTML5 clipboard APIs to access the clipboard directly. The original document structure and formatting (when importing formatting) is more likely to be preserved. Where available this approach gives the highest fidelity copy and paste from supported applications to HTML.

#### Image Import

On browsers that support HTML5, PowerPaste is able to import images embedded in the content (e.g. from Microsoft Word) into the editor. These images can then be uploaded via a HTTP post as required.

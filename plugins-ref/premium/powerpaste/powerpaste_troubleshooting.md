---
layout: default
title: Troubleshooting the PowerPaste plugin
title_nav: Troubleshooting
description: Information on troubleshooting PowerPaste behavior.
keywords: enterprise powerpaste power paste microsoft word excel google docs
---

## Common questions and troubleshooting PowerPaste behavior

### What happens when copy and pasting from Microsoft Word?

When content is copied from an application (such as Microsoft Word), the application places an HTML representation of the copied content onto the computer's clipboard. PowerPaste uses the HTML from the clipboard and cannot access the file directly.

> **Note**: Web browsers and the applications running in them cannot directly access files on the device for security reasons.

Microsoft Word or Microsoft Excel can create content that does not have an equivalent in HTML. The HTML provided to the clipboard by the application is the application's "best effort" at representing the content as HTML. Depending on the complexity of the source document, the content pasted into {{site.productname}} using PowerPaste may not be an exact representation of what the content looked like in the original application.

### Why are some images or elements from Microsoft Word not appearing?

Some "images" in Microsoft Word cannot be represented as image files in an HTML document, such as: charts, drawings, and "Word Art". PowerPaste may not be able to paste these items into the {{site.productname}} editor, because they were not represented as HTML-compatible images on the clipboard. Microsoft Word also allows some formats on images that cannot be represented in HTML, such as wrap and inline.

Microsoft Word can also create content that cannot be accurately recreated in HTML, such as columns, page headers and page footers. Some of these elements may not be copied to the clipboard by Microsoft Word, such as page headers and footers.

### How can I see what is on the clipboard?

To view the HTML of content pasted from the clipboard:

* If you are using Microsoft Internet Explorer 11, visit: [{{site.companyname}} Clipboard Viewer for Microsoft Internet Explorer 11](http://static.ephox.com/clipboard/clipboardtestie11.html).
* If you are using any other browser, visit: [{{site.companyname}} Clipboard Viewer](http://static.ephox.com/clipboard/clipboardtest.html).

### Why would Microsoft Internet Explorer 11 show different results from every other supported browser?

Microsoft Internet Explorer interacts with Microsoft Word content differently than all other browsers. When pasting, Microsoft Internet Explorer transforms and cleans up Microsoft Word content before pasting it into {{site.productname}}. Therefore, Microsoft Internet Explorer provides different clipboard data to web applications when compared to other browsers. This behavior only occurs when Microsoft content is pasted into Microsoft Internet Explorer and cannot be disabled.

### Why do images not paste when copied with text content in Microsoft Internet Explorer 11?

This issue relates to changes to Microsoft Internet Explorer 11 late in the product’s life. {{site.companyname}} (and companies that offer similar products) have reached out to Microsoft to suggest that this change is a defect despite their initial reply that it was intentional and "expected behavior" in Microsoft Internet Explorer 11. Microsoft has made no public statement about addressing the issue specifically, and is no longer making non-security changes to Microsoft Internet Explorer 11. The only recommended workarounds are:

* Paste the images into {{site.productname}} individually.
* Use a different browser.

---
layout: default
title: Get Support &amp; FAQ
title_nav: Support &amp; FAQ
description: Community and pro-grade support options.
keywords: forum forums url absolute relative security xss
---

> If you landed here having worked through the [Introduction & getting started]({{  site.baseurl }}/general-configuration-guide/advanced-install) section, congratulations, you are on your way to the {{site.productname}} ninja hood :-). It's now time to deep-dive into [configuring the editor]({{ site.baseurl }}/configure/) and explore [plugin options]({{ site.baseurl }}/plugins/). We wish you well and welcome you to {{site.productname}}. If you get stuck, a great place to start is the [{{site.productname}} Forum](https://community.tiny.cloud/).


## Premium support
Paid premium support is available as part of [{{site.productname}} Enterprise]({{site.pricingpage}}). {{site.productname}} Enterprise customers can [review what information you need to gather]({{ site.baseurl }}/enterprise/support/) to submit a case.


## Forums
Open Source Community Edition users can get free access to the [{{site.productname}} Forum](https://community.tiny.cloud/). Sign up [here](https://community.tiny.cloud/).


## FAQ & troubleshooting

### Q: The icons are missing when installing on my server?

Some web servers do not support the mime types needed for the font file extensions. Below are the mime types required - the first part is the mime type the second part is the file extension that needs to be mapped. It's in apache mime type format. Other servers might need a different format.

| MIME type                     | File Extension |
|:------------------------------|:---------------|
| image/svg+xml                 | svg  |

### Q: Why do buttons/select boxes have the incorrect size?

You are probably using an old `DOCTYPE`. As of {{site.productname}} 4, a proper HTML5 doctype is required. All web developers should use a standard rendering mode on their web pages. Use a HTML5 doctype like `<!DOCTYPE html>` to properly render the page and the {{site.productname}} UI.

### Q: Is TinyMCE protected against XSS vulnerabilities?

The server should have protection against XSS attacks implemented. Since if you can submit contents in a form using {{site.productname}} one could as easily disable all JavaScript and therefore bypass {{site.productname}} filtering and still submit HTML code with insecure content. You need to properly filter the HTML input on the server using things like [HTML Purifier](http://htmlpurifier.org/).

### Q: How do I convert my URLs to relative, absolute, or absolute with the domain?

#### Relative URLs

The **Relative URLs** converts all URLs within the same domain to relative URLs. The URLs are relative from the `document_base_url`.

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  relative_urls : true,
  document_base_url : 'http://www.site.com/path1/'
});
```

##### Example relative URL

`http://www.site.com/path1/path2/file.htm >> path2/file.htm`

#### Absolute URLs

The **Absolute URLs** converts all relative URLs to absolute URLs. The URLs are `absolute` based on the `document_base_url`.

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  relative_urls : false,
  remove_script_host : true,
  document_base_url : 'http://www.site.com/path1/'
});
```

##### Example absolute URL

`path2/file.htm >> /path1/path2/file.htm`

#### Domain absolute URLs

The **Domain absolute URLs** converts all relative URLs to absolute URLs. The URLs are `absolute` based on the `document_base_url` with the domain.

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  relative_urls : false,
  remove_script_host : false,
  document_base_url : 'http://www.site.com/path1/'
});
```

##### Example domain absolute URL

`path2/file.htm >> http://www.site.com/path1/path2/file.htm`

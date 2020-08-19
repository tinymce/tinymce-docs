---
layout: default
title: Get Support &amp; FAQ
title_nav: Support &amp; FAQ
description: Community and pro-grade support options.
keywords: forum forums url absolute relative security xss
---

## Premium support
Paid premium support is available as part of [{{site.enterpriseversion}} and {{site.cloudname}} subscriptions]({{site.pricingpage}}). {{site.productname}} Enterprise customers can [submit a case support request]({{ site.baseurl }}/enterprise/support/).


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

##### Example

`http://www.site.com/path1/path2/file.htm >> path2/file.htm`

##### Example: Relative URLs on links and images

{% include live-demo.html id="url-conversion-relative-1" height="400" %}

##### Example: Relative URLs on links and images to a specific page

{% include live-demo.html id="url-conversion-relative-2" height="400" %}

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

##### Example

`path2/file.htm >> /path1/path2/file.htm`

##### Example: Absolute URLs on links and images

{% include live-demo.html id="url-conversion-absolute-1" height="400" %}

##### Example: Absolute URLs and including domain on links and images

{% include live-demo.html id="url-conversion-absolute-2" height="400" %}

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

##### Example

`path2/file.htm >> http://www.site.com/path1/path2/file.htm`

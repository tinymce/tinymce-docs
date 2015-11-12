---
layout: default
title: 12. Get Support & FAQ
description: Community and pro-grade support options.
keywords: forum forums url absolute relative security xss
---

> If you landed here having worked through the [Get Started Guide]({{ site.baseurl }}/get-started/first-steps), congratulations, you are on you way to TinyMCE ninjahood :-) It's now time to deep-dive into [configuring the editor]({{ site.baseurl }}/configure/) and exploring [plugin options]({{ site.baseurl }}/plugins/). Wishing you well, welcome to TinyMCE and if you get stuck a great place to start is the [TinyMCE Forum](http://www.tinymce.com/forum/).


## Premium Support
If your support requirements included guaranteed responses from the TinyMCE Support Team, in-time bug fixes (and so on), **paid** premium support is available as part of [TinyMCE Enterprise](http://www.tinymce.com/pricing/).

If you are a TinyMCE Enterprise customer in good standing please [review what information you need to gather](http://docs.ephox.com/pages/viewpage.action?pageId=19760628) to submit a case.


## Forums
Users of the open source Community Edition have free access to the [TinyMCE Forum](http://www.tinymce.com/forum/). Sign up [here](http://www.tinymce.com/forum/register.php).


## FAQ & Troubleshooting

### Q: The icons are missing when installed on my server?

TinyMCE 4 uses Web fonts for it's icons. Some web servers doesn't support the mime types needed for the font file extensions. Below are the mime types needed: the first part is the mime type the second part is the file extension that needs to be mapped. It's in apache mime type format other server might need some other format.

| MIME type                     | File Extension |
|:------------------------------|:---------------|
| application/x-font-ttf        | ttf  |
| application/x-font-otf        | otf  |
| application/font-woff         | woff |
| application/vnd.ms-fontobject | eot  |
| image/svg+xml                 | svg  |



### Q: Why do buttons/selectboxes have the incorrect size?

You are probably using an old `DOCTYPE` as of TinyMCE 4 a proper HTML5 doctype is required. All web developers should use a standards rendering mode on their web pages. So use a HTML5 doctype like `<!DOCTYPE html>` to properly render the page and the TinyMCE UI.

### Q: Is TinyMCE protected against XSS vulnerabilities?

Protection against XSS attacks needs to be done on the server since if you can submit contents in a form using TinyMCE one could as easily disable all javascript and therefore bypass TinyMCE filtering and still submit HTML code with insecure content. You need to properly filter the HTML input on the server using things like [HTMLPurifier](http://htmlpurifier.org/).

### Q: How do I convert my URLs to relative, absolute, or absolute with domain?

#### Relative URLs

This will convert all URLs within the same domain to relative URLs. The URLs will be relative from the `document_base_url`.

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  relative_urls : true,
  document_base_url : "http://www.site.com/path1/"
});
```

##### Example

`http://www.site.com/path1/path2/file.htm >> path2/file.htm`

#### Absolute URLs

This will convert all relative URLs to absolute URLs. The URLs will be absolute based on the `document_base_url`.

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  relative_urls : false,
  remove_script_host : true,
  document_base_url : "http://www.site.com/path1/"
});
```

##### Example

`path2/file.htm >> /path1/path2/file.htm`

#### Domain absolute URLs

This will convert all relative URLs to absolute URLs. The URLs will be absolute based on the `document_base_url` with domain.

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  relative_urls : false,
  remove_script_host : false,
  document_base_url : "http://www.site.com/path1/"
});
```

##### Example

`path2/file.htm >> http://www.site.com/path1/path2/file.htm`

### Q: Where are the advanced image options?

Use the [`Style Formats`](/configure/content-filtering/#style_formats) option instead, which is much more powerful.

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  style_formats: [
    {title: 'Image Left', selector: 'img', styles: {
      'float' : 'left',
      'margin': '0 10px 0 10px'
    }},
    {title: 'Image Right', selector: 'img', styles: {
      'float' : 'right',
      'margin': '0 10px 0 10px'
    }}
]
});
```

If you wish to align the image, you can also just use the text align buttons when having images selected.

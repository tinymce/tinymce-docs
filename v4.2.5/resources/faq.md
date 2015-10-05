---
layout: default
title: FAQ
---

* See http://www.tinymce.com/wiki.php/FAQ.
* We should look into the forums and research for most common problems or search queries.

## Q: How do I convert my URLs to relative, absolute, or absolute with domain?

### Relative URLs

This will convert all URLs within the same domain to relative URLs. The URLs will be relative from the [document_base_url].

```
relative_urls : true,
document_base_url : "http://www.site.com/path1/"
```

Example: http://www.site.com/path1/path2/file.htm >> path2/file.htm

### Absolute URLs

This will convert all relative URLs to absolute URLs. The URLs will be absolute based on the [document_base_url].

```
relative_urls : false,
remove_script_host : true,
document_base_url : "http://www.site.com/path1/"
```

Example: path2/file.htm >> /path1/path2/file.htm

### Domain Absolute URLs

This will convert all relative URLs to absolute URLs. The URLs will be absolute based on the [document_base_url] with domain.

```
relative_urls : false,
remove_script_host : false,
document_base_url : "http://www.site.com/path1/"
```

Example: path2/file.htm >> http://www.site.com/path1/path2/file.htm

## Q: Where are the advanced image options?

Use the Style Formats option instead, which is much more powerful.

```
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
```

If you wish to align the image, you can also just use the text align buttons when having images selected.

## Q: The icons are missing when installed on my server?

TinyMCE 4 uses Web fonts for it's icons. Some web servers doesn't support the mime types needed for the font file extensions. Below are the mime types needed the first part is the mime type the second part is the file extension that needs to be mapped. It's in apache mime type format other server might need some other format.

| :-----------------------------| :------------- |
| application/x-font-ttf        | ttf |
| application/x-font-otf        | otf |
| application/font-woff         | woff |
| application/vnd.ms-fontobject | eot |
| image/svg+xml                 | svg |

## Q: Is TinyMCE protected against XSS vulnerabilities?

Protection against XSS attacks needs to be done on the server since if you can submit contents in a form using TinyMCE one could as easily disable all javascript and there for bypass TinyMCE filtering and still submit HTML code with insecure content. You need to properly filter the HTML input on the server using things like [HTMLPurifier](http://htmlpurifier.org/) etc.

## Q: Why do Buttons/selectboxes have incorrect size?

You are probably using an old DOCTYPE as of TinyMCE 4 a proper HTML5 doctype is required. All web developers should use a standards rendering mode on their web pages. So use a HTML5 doctype like <!DOCTYPE html> to properly render the page and the TinyMCE UI.


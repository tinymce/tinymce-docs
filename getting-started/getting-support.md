---
layout: default
title: Getting Support & FAQ
description: Extensive community and pro-grade support options.
---

> If you landed here having worked through the [Getting Started guide](/getting-started/first-steps), congratulations, you are on you way to TinyMCE ninjahood!

> It's now time to deep-dive into the [editor configuration settings](/editor-configuration-settings/) and [plugin options](/plugins/). Good luck and if you get stuck a great place to start is the [TinyMCE Forum](http://www.tinymce.com/forum/).

## Forums
Users of the open source Community Edition have free access to the [TinyMCE Forum](http://www.tinymce.com/forum/). Sign up [here](http://www.tinymce.com/forum/register.php).

## Stack Overflow
There is a vibrant community of TinyMCE developers on [Stack Overflow](http://stackoverflow.com/search?tab=newest&q=tinymce).

## Premium Support
If your support requirements included guaranteed responses, in-time bug fixes (and so on) premium support is available as part of [TinyMCE Enterprise](http://www.tinymce.com/enterprise/).


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



### Q: Why do buttons/selectboxes have incorrect size?

You are probably using an old `DOCTYPE` as of TinyMCE 4 a proper HTML5 doctype is required. All web developers should use a standards rendering mode on their web pages. So use a HTML5 doctype like `<!DOCTYPE html>` to properly render the page and the TinyMCE UI.

---
layout: default
title: Getting Support & FAQ
---


TinyMCE provides various support options to the community.

## Forums
Users of the open source Community Edition have free access to the [TinyMCE Forums]. Sign up [here].

## Stack Overflow
There is a vibrant community of TinyMCE users on [Stack Overflow].

## Premium Support
If your support requirements included guaranteed responses, in-time bug fixes (and so on) premium support is available as part of TinyMCE Enterprise.


## FAQ & Troubleshooting

### Q: The icons are missing when installed on my server?

TinyMCE 4 uses Web fonts for it's icons. Some web servers doesn't support the mime types needed for the font file extensions. Below are the mime types needed the first part is the mime type the second part is the file extension that needs to be mapped. It's in apache mime type format other server might need some other format.

| :-----------------------------| :------------- |
| application/x-font-ttf        | ttf |
| application/x-font-otf        | otf |
| application/font-woff         | woff |
| application/vnd.ms-fontobject | eot |
| image/svg+xml                 | svg |



### Q: Why do Buttons/selectboxes have incorrect size?

You are probably using an old DOCTYPE as of TinyMCE 4 a proper HTML5 doctype is required. All web developers should use a standards rendering mode on their web pages. So use a HTML5 doctype like <!DOCTYPE html> to properly render the page and the TinyMCE UI.

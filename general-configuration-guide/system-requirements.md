---
layout: default
title: 11. System Requirements
description: Official TinyMCE browser support.
keywords: browser compatibility explorer ie safari firefox chrome edge
---
## Mobile Supported Platforms

We're pleased to introduce [TinyMCE mobile](https://www.tinymce.com/mobile), available in version 4.7.

TinyMCE mobile is designed to run on iOS Safari and Android Chrome. You'll find a streamlined interface while keeping the most common touch interactions easily to hand. We tested mobile on the following platforms:

{% include mobile_platform_compatibility.md %}

Please visit our [mobile page](https://www.tinymce.com/mobile) to download the self-hosted package. If you're using TinyMCE Cloud, mobile is available in the `dev` branch.

If you use other platforms and encounter bugs, please let us know in the [TinyMCE issue tracker](https://github.com/tinymce/tinymce/issues).

For further information on TinyMCE mobile setup and configuration, please visit [TinyMCE mobile documentation]({{ site.baseurl }}/mobile).

## Browser Compatibility

TinyMCE uses advanced JavaScript and tries to be as smart as possible when it comes to different browsers. The primary focus is on Chrome, Firefox, Internet Explorer, and Safari.

If a browser is not listed on this page, it doesn't mean TinyMCE won't work. An unlisted browser might mean that TinyMCE may not have been fully tested on that browser. To determine compatibility with an unlisted browser, try out the examples on our website.

Since TinyMCE version 4.6.0 Internet Explorer 8-10 is not supported, if you need legacy browser support, the 4.5.X branch is maintained with critical fixes.

Please use the [issues tracker on GitHub](https://github.com/tinymce/tinymce/issues) to submit bugs on the listed browsers only.

|Browser | Windows | Mac | GNU/Linux |
|--------|---------|-----|-----------|
|Chrome  | YES     | YES | YES       |
|Firefox | YES     | YES | YES       |
|Edge    | YES     | N/A | N/A       |
|IE 11   | YES     | N/A | N/A       |
|IE 10   | NO      | N/A | N/A       |
|IE 9    | NO      | N/A | N/A       |
|IE 8    | NO      | N/A | N/A       |
|Safari  | N/A     | YES | N/A       |

TinyMCE fully supports the most recent version of all supported browsers listed above.  If vendors offer an Extended Support Release (e.g., Firefox) we also officially support the latest ESR from each vendor.  As each browser vendor releases new major versions (e.g. Chrome 61 vs. Chrome 62) we provide support for the prior major version for 60 days after the prior release is superseded.

{% assign_page next_page = "/general-configuration-guide/get-support/index.html" %}
{% include next-step.html next=next_page %}

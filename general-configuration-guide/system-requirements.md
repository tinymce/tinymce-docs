---
layout: default
title: System requirements
title_nav: System requirements
description: Official TinyMCE browser support.
keywords: browser compatibility explorer ie safari firefox chrome edge
---
## Mobile supported platforms

[TinyMCE mobile](https://www.tiny.cloud/docs/mobile/) is available in TinyMCE 5.0

TinyMCE mobile has a streamlined interface with most common touch interactions easily accomplished with one hand. TinyMCE mobile is designed to run on iOS Safari and Android Chrome. TinyMCE mobile is tested on the following platforms:

{% include mobile_platform_compatibility.md %}

Visit the [mobile page](https://www.tiny.cloud/docs/mobile/) to download the self-hosted package. TinyMCE mobile is available on /dev branch on Tiny Cloud. 

Please report platform issues and bugs in the [TinyMCE issue tracker](https://github.com/tinymce/tinymce/issues).

Visit [TinyMCE mobile documentation]({{ site.baseurl }}/mobile) for further information on TinyMCE mobile setup and configuration.

## Browser compatibility

TinyMCE uses advanced JavaScript techniques to normalize inconsistencies among browsers to ensure a uniform user experience. The primary focus is on Chrome, Firefox, Internet Explorer, and Safari.

An unlisted browser might mean that TinyMCE may not have been fully tested on that browser. Try out the examples on www.tinymce.com to determine compatibility with an unlisted browser.

Please use the [issues tracker on GitHub](https://github.com/tinymce/tinymce/issues) to submit bugs on listed browsers only.

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

TinyMCE fully supports the most recent version of all browsers listed above. TinyMCE also supports the latest Extended Support Release (ESR) from each vendor (e.g. Firefox). TinyMCE provides support for the prior major version for 60 days after the release has been superseded by a new major version (e.g. Chrome 61 vs. Chrome 62).

{% assign_page next_page = "/general-configuration-guide/get-support/index.html" %}
{% include next-step.html next=next_page %}

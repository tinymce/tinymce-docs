---
layout: default
title: Checking links as-you-type
title_nav: Hyperlink checking
description: Check for valid hyperlinks inside the editor
keywords: enterprise pricing video youtube vimeo mp3 mp4 mov movie clip film link linkchecking linkchecker mediaembed media
---

The [Link Checker plugin]({{ site.baseurl }}/plugins/linkchecker/) provides a link checking service right within the TinyMCE editor.

Think of Link Checker as "spell-checking for URLs". But instead of checking spelling, it will let you know if a URL in the editor is valid, invalid or questionable. This is a huge time-saver for anyone who creates content — no more having to double-check URLs, especially in imported content. Not to mention the benefit of no longer frustrating readers with broken hyperlinks.

Link Checker is available as a stand-alone plugin or as part of our Pro Bundle. To learn more about your options, check out our [pricing and plans here](https://www.tinymce.com/pricing/).

Your have two deployment options. One is super easy with TinyMCE Cloud, the other is to go the more traditional Self-hosted route, requiring an additional [server-side component]({{ site.baseurl }}/enterprise/server/) to be installed and configured.

## Link Checker cloud setup

[TinyMCE Cloud]({{ site.baseurl }}/cloud-deployment-guide/editor-and-features/) makes setting up Link Checker a breeze. Simply include the `linkchecker` parameter in your `tinymce.init` and have our Cloud services do the work for you.

## Link Checker self-hosted quick setup

If you'd rather deploy Link Checker via the Self-hosted package, you have a little more work to do. Once you've got the [server-side component]({{ site.baseurl }}/enterprise/server/) installed, additional configuration to your `application.conf` file is required. (Don't forget to restart the Java application server after updating the configuration.)

This element configures the Link Checker service's built-in cache. When a hyperlink is checked and confirmed valid, the result is cached to save unnecessary network traffic in the future.

Default settings are automatically configured, meaning these settings are optional.

- `capacity` - sets the capacity of the cache. The default setting is 500.
- `timeToLiveInSeconds` - sets the time-to-live of elements of the cache, measured in seconds. This is the maximum total amount of time that an element is allowed to remain in the cache. The default setting is 86400 seconds, which is one day.
- `timeToIdleInSeconds` - sets the time-to-idle of elements of the cache, measured in seconds. This is the maximum amount of time that an element will remain in the cache if it is not being accessed. The default setting is 3600 seconds, which is one hour.

Example:

```
ephox {
  link-checking.cache {
    capacity = 500
    timeToLiveInSeconds = 86400
    timeToIdleInSeconds = 3600
  }
}
```

You will also find more Self-hosted setup information on the [Link Checker plugin page]({{ site.baseurl }}/plugins/linkchecker/).

> **Important note:** The Link Checker server currently does not support integration with IBM WebSphere Application Server.

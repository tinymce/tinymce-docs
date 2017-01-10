---
layout: default
title: Configure Link Checker Server
description: Instructions for getting the Link Checker service configured
keywords: enterprise pricing video youtube vimeo mp3 mp4 mov movie clip film link linkchecking linkchecker mediaembed media
---

Once you've got the [server-side component]({{ site.baseurl }}/enterprise/server/) installed, the Link Checker service requires some additional configuration in your `application.conf` file. Don't forget to restart the Java application server after updating the configuration.

This element configures the Link Checker service's built-in cache. When a hyperlink is checked and confirmed valid, the result is cached to save unnecessary network traffic in the future.

Default settings are automatically configured, meaning these settings are optional.

- `capacity` - sets the capacity of the cache. The default setting is 500.
- `timeToLiveInSeconds` - sets the time-to-live of elements of the cache, measured in seconds. This is the maximum total amount of time that an element is allowed to remain in the cache. The default setting is 86400 seconds, which is one day.
- `timeToIdleInSeconds` - sets the time-to-idle of elements of the cache, measured in seconds. This is the maximum amount of time that an element will remain in the cache if it is not being accessed. The default setting is 3600 seconds, which is one hour.

Example:

````
ephox {
  link-checking.cache {
    capacity = 500
    timeToLiveInSeconds = 86400
    timeToIdleInSeconds = 3600
  }
}

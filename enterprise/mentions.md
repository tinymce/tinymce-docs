---
layout: default
title: Mentions
description: Mentions brings social sharing to TinyMCE.
keywords: atmention mention
---

It is now possible for users of your application to send notifications to other users through an `@mention` in the document. `@mentions` are of course incredibly commonplace in social software such as Twitter and Facebook along with social enterprise applications such as IBM’s Connections suite.

Users can communicate every day using `@mentions` on social networks, and can expect to be able to use them when creating content too.

Mentions is available as a stand-alone plugin or as part of the Pro Bundle. To learn more about all the options, check out the [pricing and plans here](https://www.tiny.cloud/pricing/).

There are two deployment options. One is with TinyMCE Cloud, the other is to go the more traditional Self-hosted route, requiring an additional [server-side component]({{ site.baseurl }}/enterprise/server/) to be installed and configured.

## Mentions cloud setup

[TinyMCE Cloud]({{ site.baseurl }}/cloud-deployment-guide/editor-and-features/) makes setting up Mentions very easy. Simply include the `mentions` parameter in the `tinymce.init` script. The Tiny Cloud services automatically downloads the Mentions feature for the editor.

## Downloading Mentions

A [TinyMCE Enterprise](https://www.tinymce.com/pricing/) subscription includes the ability to download and install the Mentions feature for the editor.

Please note that this feature requires a backend integration with a system to handle listing of users, as well as sending the notification. This is [explained in our example code](https://www.tinymce.com/docs/plugins/mentions/), but there are two integration points: getting a userlist when `@abc...` is typed, and on submitting the form, sending a notification to the `@mentions` in the document.

---
layout: default
title: Mentions
description: Mentions brings social sharing to TinyMCE.
keywords: atmention mention
---

It is now possible for users to send notifications to other users using the Mentions plugin through an `@username` in the document. Using `@username` for notifications are incredibly commonplace in social software such as Twitter and Facebook along with social enterprise applications such as IBM’s Connections suite.

Users can communicate every day using `@username` on social networks and can expect to be able to use them when creating content too.

Mentions is available as a stand-alone plugin or as part of the Pro Bundle. To learn more about all the options, check out the [pricing and plans here](https://www.tiny.cloud/pricing/).

There are two deployment options. One is with {{site.cloudname}}, the other is the more traditional Self-hosted route, requiring an additional [server-side component]({{ site.baseurl }}/enterprise/server/) to be installed and configured.

Please note that this feature requires a backend integration with a system to handle listing of users, as well as sending the notifications. Refer to this [example code](https://www.tinymce.com/docs/plugins/mentions/#example) for more information. There are two integration points: getting a user list when `@abc...` is typed, and on submitting the form, sending a notification to the `@username` in the document.

## Mentions cloud setup

Mentions is available for download through [{{site.cloudname}}]({{ site.baseurl }}/cloud-deployment-guide/editor-and-features/). Include the `mentions` parameter in the `tinymce.init` script. Refer to the [Mentions documentation]({{site.baseurl}}/plugins/mentions/), for more information on setup and configuration.

## Downloading Mentions

A [TinyMCE Enterprise](https://www.tinymce.com/pricing/) subscription includes the ability to download and install the Mentions feature for the editor. For more information on setup and configuration refer to the [Mentions documentation]({{site.baseurl}}/plugins/mentions/).



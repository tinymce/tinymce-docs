---
layout: default
title: AtMention
description: AtMentions bring social sharing to TinyMCE.
keywords: @mention
---

It is now possible for users of your application to send notifications to other users through an `@mention` in the document. AtMentions are of course incredibly commonplace in social software such as Twitter and Facebook along with social enterprise applications such as IBM’s Connections suite.

The value to developers building modern enterprise solutions is obvious. Your users communicate every day using `@mentions` on social networks, and they expect to be able to use them when creating content too.

## Downloading AtMentions

A [TinyMCE Enterprise](https://www.tinymce.com/pricing/) subscription includes the ability to download and install the AtMentions feature for the editor.

Please note that this feature requires a backend integration with a system to handle listing of users, as well as sending the notification. This is [explained in our example code](https://www.tinymce.com/docs/plugins/mentions/), but basically, there are two integration points: getting a userlist when `@abc...` is typed, and on submitting the form, sending a notification to the `@mentions` in the document.

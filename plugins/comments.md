---
layout: default
title: Comments plugin
title_nav: Comments
description: Tiny Comments provides the ability to add comments to the content and collaborate with other users for content editing.
keywords: comments commenting tinycomments
---

## Introduction

The Tiny Comments plugin provides the ability to start or join a conversation by adding comments to the content within the TinyMCE editor. The Comments plugin is built upon the [Annotations API]({{site.baseurl}}/advanced/annotations/) and uses annotations to create comment threads (conversations).

Comments is a premium plugin from Tiny. Please see the [Premium features]({{site.baseurl}}/enterprise/tiny-comments/) section for all the buying options.

Once you have obtained the Comments plugin, refer to the following instructions for using it.

### Modes

There are two modes available in Comments that provide the ability to save comments. These modes are configured in the Comments settings.

* **Callback Mode** - This is the default mode in Comments. This mode is used to configure storage and save comments on user’s server. This option gives the user a choice to configure the storage settings to either persist comments immediately or save them at the same time as the content. Additional callbacks are required to be configured to use Comments in the callback mode. Refer to the [configuring callbacks for comments]({{site.baseurl}}/advanced/configuring-comments-callbacks/) section, for more information.

* **Embedded Mode** - This mode allows the user to store the comments within the content. No additional callbacks are required to be configured to use this mode.

### Configuring Comments embedded mode

To configure Comments to use the embedded mode use the following script:

```js
tinymce.init({
  selector: "#textarea",
  menubar: 'file edit view insert format tools tc',
menu: {
 tc: {
  title: 'TinyComments',
  items: 'addcomment'
   }
 },
 tinycomments_author: 'Embedded Journalist',
 tinycomments_mode: 'embedded'
 ...
})
```

### Configuring the Comments toolbar button

Use the following script to configure the Comments toolbar button:

```js
tinymce.init({
 selector: "#textarea",
 toolbar: 'bold italic underline insertfile | addcomment',
 ...
})
```

Optional values: addcomment, showcomments

**Result**: The **Comments**  ![**Comments**]({{site.baseurl}}/images/comment-disabled.png) toolbar button appears in the toolbar menu. The function of this button is to add comments to selected text.

> Note: Currently, there are two toolbar buttons available:

* `addcomment` - Provides the ability to add comments.

* `showcomments`- Provides the ability to display comments field for the selected text. It is a toggle button and is used to hide the comments sidebar as well.


### Configuring the Comments menu item

By default, when Comments is added to the plugin list, the default menus will have entries for `addcomment` (Insert Menu), showcomments (View Menu), and deleteallconversations (File Menu).

For more information on configuring menu items refer to the [toolbar]({{site.baseurl}}/configure/editor-appearance/#toolbar) and [menu]({{site.baseurl}}/configure/editor-appearance/#menu) sections.

Currently, there are three menu items available:

* `addcomment` - Provides the ability to add comments. By default, this option can be accessed through **Insert** -> **Add comment** menu bar item.

* `showcomments`- Provides the ability to display comments field for the selected text. It is a toggle button and is used to hide the comments as well. By default, this option can be accessed through **View** -> **Show comment** menu bar item.

* `deleteallconversations`- Provides the ability to delete all the comments in the content. By default, this option can be accessed through **File** -> **Delete all conversations** menu bar item.

### Configuring the commented text properties

The editor needs to be configured to highlight the commented text. The following configuration is an example of displaying the text that the comment has been added to in a desired style:

```js
tinymce.init({
...
 content_style: '.mce-annotation { background: #fff0b7; } .tc-active-annotation {background: #ffe168; color: black; }',
 ...
})
```

**Result**: The commented text will be highlighted yellow.
![**Highlighted text**]({{site.baseurl}}/images/highlight.png)

For more information on TinyMCE formats, refer to the [formats]({{site.baseurl}}/configure/content-formatting/#formats) section.


### Using Comments

#### To add a comment

1. Select the text from the desired location in the editor body.
1. From the navigation menu, choose **Insert**-> **Add Comment** or click on the **Comments** ![**Comments**]({{site.baseurl}}/images/comment-disabled.png) toolbar button to add the comment.
1. The Comment dialog box appears in the sidebar of the editor instance.
1. Type the comment in the box displaying _Say something…_ suggested text.
1. Press **Clear** to delete or **Save** to store the input comment.

**Result**: The selected text will be highlighted as per the configured options. The following screen with the option for editing, deleting, and replying to the comment, will appear.
![**Delete Conversation**]({{site.baseurl}}/images/deleteconversation.png)

Note: The above procedure can be followed for adding multiple comments to the document.

#### Editing a comment
Follow this procedure to edit a comment.

1. Click on the ![**3dots**]({{site.baseurl}}/images/3dots.png) icon above the comments box to expand the menu.
1. Select **Edit** from the menu items.
1. The comment field becomes editable. Make the required changes.
1. Click **Cancel** to discard or **Save** to store the changes.

#### Delete a comment
Follow this procedure to delete a comment. This option is not available for the first comment in a conversation.

1. Click on the ![**3dots**]({{site.baseurl}}/images/3dots.png) icon above the comments box to expand the menu.
1. Select **Delete** from the menu items.
1. The following options appear in the comments sidebar:
![**delete comment**]({{site.baseurl}}/images/delete.png)
1. Click **Cancel** to save or **Delete** to remove the comment from the conversation.


#### Delete conversation
This option is only available for the first comment in a conversation. Once the comment is saved, follow this procedure to delete a conversation.

1. Click on the ![**3dots**]({{site.baseurl}}/images/3dots.png) icon above the comments box to expand the menu.
1. Select **Delete conversation** from the menu items.
1. The following decision dialog box will appear:
![**delete conversation**]({{site.baseurl}}/images/decision.png)
1. Click **Cancel** to save or **Delete** to remove the conversation.

**Result**: The conversation and all its subsequent comments will be deleted.

#### Show comment
Follow this procedure to display the comments sidebar:

1. Place the cursor on the desired text in the editor body:
1. From the navigation menu, choose **View** -> **Show Comment** or click on the **Show Comments**![**Comments**]({{site.baseurl}}/images/comment-disabled.png) toggle toolbar button to display the comment.

**Result**: The comments sidebar will appear and display the corresponding conversation for the highlighted text.

#### Delete all conversations

Follow this procedure to delete all conversations in the document:

1. From the navigation menu, choose **File** -> **Delete all conversations** option to delete all the comments in a document.
1. The following decision dialog box will appear:
![**Delete all conversations**]({{site.baseurl}}/images/decision2.png)
1. Click **No** to save or **Yes** to remove the all the comments.

**Result**: All the comments for the selected document will be deleted.

Check out the [Comments demo]({{site.baseurl}}/demo/comments/) to try out this new feature.

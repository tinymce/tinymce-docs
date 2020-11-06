---
layout: default
title: Comments
title_nav: Comments
description: Tiny Comments provides the ability to add comments to the content and collaborate with other users for content editing.
keywords: comments commenting tinycomments
---

{% assign pluginname = "Comments" %}
{% assign plugincode = "comments" %}

{{site.premiumplugin}}

The Comments plugin provides the ability to start or join a conversation by adding comments to the content within the {{site.productname}} editor. The Comments plugin is built upon the [Annotations API]({{site.baseurl}}/advanced/annotations/) and uses annotations to create comment threads (conversations).

## Interactive example

{% include live-demo.html id="comments-2" %}

## Using Comments

### To add a comment

1. Select the text from the desired location in the editor body.
1. From the navigation menu, choose **Insert**-> **Add Comment** or click on the **Comments** ![Comments]({{site.baseurl}}/images/comment-disabled.png) toolbar button to add the comment.
1. The Comment dialog box appears in the sidebar of the editor instance.
1. Type the comment in the box displaying "_Say something…_" suggested text.
1. Press **Clear** to delete or **Save** to store the input comment.

**Result**: The selected text will be highlighted as per the configured options. The following screen with the option for editing, deleting, and replying to the comment, will appear.

![Delete Conversation]({{site.baseurl}}/images/commentedit.png)

Note: The above procedure can be followed for adding multiple comments to the document.

### Editing a comment

Follow this procedure to edit a comment.

1. Click on this ![3 dots]({{site.baseurl}}/images/3dots.png) icon above the comments box to expand the menu.
1. Select **Edit** from the menu items.
1. The comment field becomes editable. Make the required changes.
1. Click **Cancel** to discard or **Save** to store the changes.

### Delete a comment

Follow this procedure to delete a comment. This option is not available for the first comment in a conversation.

1. Click on this ![3 dots]({{site.baseurl}}/images/3dots.png) icon above the comments box to expand the menu.
1. Select **Delete** from the menu items.
1. The following options appear in the comments sidebar:<br/>
![delete comment]({{site.baseurl}}/images/delete.png)
1. Click **Cancel** to save or **Delete** to remove the comment from the conversation.

### Delete conversation

This option is only available for the first comment in a conversation. Once the comment is saved, follow this procedure to delete a conversation.

1. Click on this ![3 dots]({{site.baseurl}}/images/3dots.png) icon above the comments box to expand the menu.
1. Select **Delete conversation** from the menu items.
1. The following decision dialog box will appear:<br/>
![delete conversation]({{site.baseurl}}/images/decision.png)
1. Click **Cancel** to save or **Delete** to remove the conversation.

**Result**: The conversation and all its subsequent comments will be deleted.

### Show comment

Follow this procedure to display the comments sidebar:

1. Place the cursor on the desired text in the editor body:
1. From the navigation menu, choose **View** -> **Show Comment** or click on the **Show Comments**![Comments]({{site.baseurl}}/images/comment-disabled.png) toggle toolbar button to display the comment.

**Result**: The comments sidebar will appear and display the corresponding conversation for the highlighted text.

### Delete all conversations

Follow this procedure to delete all conversations in the document:

1. From the navigation menu, choose **File** -> **Delete all conversations** option to delete all the comments in a document.
1. The following decision dialog box will appear:<br />
![Delete all conversations]({{site.baseurl}}/images/decision2.png)
1. Click **Ok** to remove the all the comments or **Cancel** to dismiss the action.

**Result**: All the comments for the selected document will be deleted.

## Add the Comments plugin

To add the Comments plugin to the {{site.productname}} editor, use the following script:

```js
tinymce.init({
  selector: '#tiny-ui .editor',
  plugins: 'paste tinycomments',
  tinycomments_mode: 'embedded',
  tinycomments_author: 'Author'
});
```

## Modes

There are two modes available in Comments that provide the ability to save comments. These modes are configured in the Comments settings.

* **Callback Mode** - This is the default mode in Comments. This mode is used to configure storage and save comments on the user’s server. This option gives the user a choice of configuring the storage settings to either persist comments immediately or save them at the same time as the content. Additional callbacks must be configured to use Comments in callback mode.

* **Embedded Mode** - This mode allows the user to store the comments within the content. No additional callbacks are required to be configured to use this mode.

### Configuring Comments callback mode

Refer to the [configuring callbacks for comments]({{site.baseurl}}/advanced/configuring-comments-callbacks/) section for more information.

### Configuring Comments embedded mode

To configure Comments to use the embedded mode use the following script:
```js
tinymce.init({
  selector: '#textarea',
  tinycomments_author: 'embedded_journalist',
  tinycomments_author_name: 'Embedded Journalist',
  tinycomments_mode: 'embedded'
  ...
})
```

#### Embedded mode options

##### `tinycomments_author`

This option sets the author id to be used when creating or replying to comments.

**Type:** `String`

**Default Value:** `'Anon'`

###### Example: Using `tinycomments_author`

```js
tinymce.init({
  selector: '#textarea',
  tinycomments_author: 'embedded_journalist',
  tinycomments_mode: 'embedded'
})
```

##### `tinycomments_author_name`

> Available in Tiny Comments version 2.1 onwards.

_Optional_ - This option sets the author's display name to be used when creating or replying to comments. If this option is omitted, then the author id is used instead.

**Type:** `String`

###### Example: Using `tinycomments_author_name`

```js
tinymce.init({
  selector: '#textarea',
  tinycomments_author: 'embedded_journalist',
  tinycomments_author_name: 'Embedded Journalist',
  tinycomments_mode: 'embedded'
})
```

##### `tinycomments_can_delete`

_Optional_ - This option sets the author permissions for _deleting comment conversations_. If the `tinycomments_can_delete` option is not included, the current author (`tinycomments_author`) cannot delete comment conversations created by other authors.

**Type:** `Function`

**Default Function:**

```js
function (req, done, fail) {
  var allowed = req.comments.length > 0 &&
                req.comments[0].author === <Current_tinycomments_author>;
  done({
    canDelete: allowed
  });
}
```

The following example extends the default behavior to allow the author `<Admin user>` to delete other author's comment conversations by adding `|| currentAuthor === '<Admin user>'`.

###### Example: Using `tinycomments_can_delete`

```js
var currentAuthor = 'embedded_journalist';

tinymce.init({
  selector: '#textarea',
  tinycomments_author: currentAuthor,
  tinycomments_can_delete: function (req, done, fail) {
    var allowed = req.comments.length > 0 &&
                  req.comments[0].author === currentAuthor;
    done({
      canDelete: allowed || currentAuthor === '<Admin user>'
    });
  }
});
```

##### `tinycomments_can_delete_comment`


_Optional_ - This option sets the author permissions for _deleting comments_. If the `tinycomments_can_delete_comment` option is not included, the current author (`tinycomments_author`) cannot delete comments added by other authors.

**Type:** `Function`

**Default Function:**

```js
function (req, done, fail) {
  var allowed = req.comment.author === <Current_tinycomments_author>;
  done({
    canDelete: allowed
  });
}
```

The following example extends the default behavior to allow the author `<Admin user>` to delete other author's comments by adding `|| currentAuthor === '<Admin user>'`.

###### Example: Using `tinycomments_can_delete_comment`

```js
var currentAuthor = 'embedded_journalist';

tinymce.init({
  selector: '#textarea',
  tinycomments_author: currentAuthor,
  tinycomments_can_delete_comment: function (req, done, fail) {
    var allowed = req.comment.author === currentAuthor;
    done({
      canDelete: allowed || currentAuthor === '<Admin user>'
    });
  }
});
```

##### `tinycomments_can_edit_comment`

_Optional_ - This option sets the author permissions for _editing comments_. If the `tinycomments_can_edit_comment` option is not included, the current author (`tinycomments_author`) cannot edit comments added by other authors.

**Type:** `Function`

**Default Function**
```js
function (req, done, fail) {
  var allowed = req.comment.author === <Current_tinycomments_author>;
  done({
    canEdit: allowed
  });
}
```

The following example extends the default behavior to allow the author `<Admin user>` to edit other author's comments by adding `|| currentAuthor === '<Admin user>'`.

###### Example: Using `tinycomments_can_edit_comment`

```js
var currentAuthor = 'embedded_journalist';

tinymce.init({
  selector: '#textarea',
  tinycomments_author: currentAuthor,
  tinycomments_can_edit_comment: function (req, done, fail) {
    var allowed = req.comment.author === currentAuthor;
    done({
      canEdit: allowed || currentAuthor === '<Admin user>'
    });
  }
});
```

{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% include misc/plugin-menu-item-id-boilerplate.md %}

## Configuring the commented text properties

The highlight styles are now a part of the overall content skin and are changed through customizing the skin.

{{site.productname}} open source project [oxide](https://github.com/tinymce/oxide/blob/master/src/less/theme/content/comments/comments.less) (default skin), defines the variables used for changing the annotation colours.

Refer to the [documentation]({{site.baseurl}}/advanced/creating-a-skin/#creatingaskin) for building a skin using this repo.

For more information on configuring {{site.productname}} formats, refer to the [formats]({{site.baseurl}}/configure/content-formatting/#formats) section.

## Using Comments embedded mode with the Full Page plugin

Users have to be cautious when deciding the order in which the plugins are added in the plugins list.

Comments can cause an issue if the [Full Page]({{site.baseurl}}/plugins/opensource/fullpage/) plugin `fullpage` appears before Comments plugin `tinycomments` in the plugin list, and `tinycomments` is configured to use `embedded mode`.

The order that the plugins appear affects the order that the `getContent` hooks are processed in. This creates an issue with `tinycomments` working as expected since the `fullpage` plugin adds outer `<html>` elements before `tinycomments` adds its comment data. This leads to the comment data being in the wrong place. The consequence of this situation is that when a saved document is re-opened, the comment data is lost (but the highlights are still there).

For a workaround, please ensure that `tinycomments` is listed before `fullpage` in the plugins list. This should result in `tinycomments` working properly.

## Commands

The Comments plugin provides the following JavaScript commands.

{% include commands/comments-cmds.md %}

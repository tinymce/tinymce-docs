# Using TinyMCE Comments
:title_nav: Using Comments
:description: How to add, edit, resolve, and remove comments in TinyMCE
:keywords: comments commenting tinycomments

{% assign pluginname = "Comments" %}
{% assign plugincode = "comments" %}

I'm trying to:

- [Add a comment](#addacomment).
- [Edit a comment](#editacomment).
- [Delete a comment](#deleteacomment).
- [Delete a comment thread (conversation)](#deleteacommentthreadconversation).
- [Resolve a comment thread (conversation)](#resolveacommentthreadconversation).
- [Show or view a comment](#showorviewacomment).
- [Delete all comment threads](#deleteallcommentthreads).

## Add a comment

1. Select the text from the desired location in the editor body.
1. From the navigation menu, choose **Insert**-> **Add Comment** or click on the **Add comment** ![Add comment]({{site.baseurl}}/images/icons/comment-add.svg) toolbar button to add the comment.
1. The Comment box appears in the sidebar of the editor instance.
1. Type a comment in the comment box, the "_Say something…_" placeholder text will disappear.
1. Press **Clear** to discard or **Save** to store the input comment.

**Result**: The selected text will be highlighted as per the configured options. The following screen with the option for editing, deleting, and replying to the comment, will appear.

![Delete Conversation]({{site.baseurl}}/images/comments-edit.png)

Note: The above procedure can be followed for adding multiple comments to the document.

## Edit a comment

Follow this procedure to edit a comment.

1. Click on the ellipsis ![(ellipsis - 3 horizontal dots)]({{site.baseurl}}/images/icons/image-options.svg) icon above the comments box to expand the menu.
1. Select **Edit** from the menu items.
1. The comment field becomes editable. Make the required changes.
1. Click **Cancel** to discard or **Save** to store the changes.

## Delete a comment

Follow this procedure to delete a comment. This option is not available for the first comment in a conversation.

1. Click on the ellipsis ![(ellipsis - 3 horizontal dots)]({{site.baseurl}}/images/icons/image-options.svg) icon above the comments box to expand the menu.
1. Select **Delete** from the menu items.
1. The following options appear in the comments sidebar:<br/>
![delete comment]({{site.baseurl}}/images/comments-delete-comment.png)
1. Click **Cancel** to cancel the action or **Delete** to remove the comment from the conversation.

## Delete a comment thread (conversation)

This option is only available for the first comment in a conversation. Once the comment is saved, follow this procedure to delete a conversation.

1. Click on the ellipsis ![(ellipsis - 3 horizontal dots)]({{site.baseurl}}/images/icons/image-options.svg) icon above the comments box to expand the menu.
1. Select **Delete conversation** from the menu items.
1. The following decision dialog box will appear:<br/>
![delete conversation]({{site.baseurl}}/images/comments-delete-conversation.png)
1. Click **Cancel** to cancel the action or **Delete** to remove the conversation.

**Result**: The conversation and all its subsequent comments will be deleted.

## Resolve a comment thread (conversation)

> **NOTE**: This feature requires the [`tinycomments_resolve`]({{site.baseurl}}/plugins-ref/premium/comments/comments_callback_mode/#tinycomments_resolve) or [`tinycomments_can_resolve`]({{site.baseurl}}/plugins-ref/premium/comments/comments_embedded_mode/#tinycomments_can_resolve) setting to be configured.

This option is only available for the first comment in a conversation. Once a comment is saved, follow this procedure to resolve a conversation.

1. Click on the ellipsis ![(ellipsis - 3 horizontal dots)]({{site.baseurl}}/images/icons/image-options.svg) icon above the comments box to expand the menu.
1. Select **Resolve conversation** from the menu items.
1. The following decision dialog box will appear:<br/>
![resolve conversation]({{site.baseurl}}/images/comments-resolve-conversation.png)
1. Click **Cancel** to cancel the action or **Resolve** to resolve the conversation.

**Result**: The conversation will be resolved.

## Show or view a comment

Follow this procedure to display the comments sidebar:

1. Place the cursor on the desired text in the editor body:
1. From the navigation menu, choose **View** -> **Show Comment** or click on the **Show Comments**![Comments]({{site.baseurl}}/images/comments-toolbar-button.png) toggle toolbar button to display the comment.

**Result**: The comments sidebar will appear and display the corresponding conversation for the highlighted text.

## Delete all comment threads

Follow this procedure to delete all conversations in the document:

1. From the navigation menu, choose **File** -> **Delete all conversations** option to delete all the comments in a document.
1. The following decision dialog box will appear:<br />
![Delete all conversations]({{site.baseurl}}/images/comments-delete-conversations.png)
1. Click **Ok** to remove the all the comments or **Cancel** to dismiss the action.

**Result**: All the comments for the selected document will be deleted.

### `tinycomments_create`

The Comments plugin uses the `tinycomments_create` function to create a comment.

The `tinycomments_create` function saves the comment as a new conversation and returns a unique conversation ID via the `done` callback. If an unrecoverable error occurs, it should indicate this with the fail callback.

The `tinycomments_create` function is given a request (req) object as the first parameter, which has these fields:

`content`
: The content of the comment to create.

`createdAt`
: The date the comment was created.

The `done` callback should accept the following object:

```js
{
  conversationUid: string, // the new conversation uid
  // Optional error callback which will be run if the new conversation could not be created
  onError: function (err) { ... },
  // Optional success callback which will be run when the new conversation is successfully created
  onSuccess: function (uid) { ... }
}
```

For example:

```js
function create_comment(ref, done, fail) {
  let content = ref.content;
  let createdAt = ref.createdAt;

  fetch('https://api.example/conversations/', {
    method: 'POST',
    body: JSON.stringify({ content: content, createdAt: createdAt }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to create comment');
      }
      return response.json();
    })
    .then((ref2) => {
      let conversationUid = ref2.conversationUid;
      done({ conversationUid: conversationUid });
    })
    .catch((e) => {
      fail(e);
    });
}

tinymce.init({
  selector: '#editor',
  plugins: 'tinycomments',
  tinycomments_mode: 'callback',
  tinycomments_create: create_comment, // Add the callback to TinyMCE
  tinycomments_reply: reply_comment,
  tinycomments_edit_comment: edit_comment,
  tinycomments_delete: delete_comment_thread,
  tinycomments_delete_all: delete_all_comment_threads,
  tinycomments_delete_comment: delete_comment,
  tinycomments_lookup: lookup_comment
});
```


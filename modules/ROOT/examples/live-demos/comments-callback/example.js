/********************************
 *   Tiny Comments functions    *
 * (must call "done" or "fail") *
 ********************************/

function tinycomments_create(req, done, fail) {
  let content = req.content;
  let createdAt = req.createdAt;

  fetch('https://api.example/conversations/', {
    method: 'POST',
    body: JSON.stringify({ content: content, createdAt: createdAt }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to create comment');
      }
      return response.json();
    })
    .then((req2) => {
      let conversationUid = req2.conversationUid;
      done({ conversationUid: conversationUid });
    })
    .catch((e) => {
      fail(e);
    });
}

function tinycomments_reply(req, done, fail) {
  let conversationUid = req.conversationUid;
  let content = req.content;
  let createdAt = req.createdAt;

  fetch('https://api.example/conversations/' + conversationUid, {
    method: 'POST',
    body: JSON.stringify({ content: content, createdAt: createdAt }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to reply to comment');
      }
      return response.json();
    })
    .then((req2) => {
      let commentUid = req2.commentUid;
      done({ commentUid: commentUid });
    })
    .catch((e) => {
      fail(e);
    });
}

function tinycomments_edit_comment(req, done, fail) {
  let conversationUid = req.conversationUid;
  let commentUid = req.commentUid;
  let content = req.content;
  let modifiedAt = req.modifiedAt;

  fetch(
    'https://api.example/conversations/' + conversationUid + '/' + commentUid,
    {
      method: 'PUT',
      body: JSON.stringify({ content: content, modifiedAt: modifiedAt }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to edit comment');
      }
      return response.json();
    })
    .then((req2) => {
      let canEdit = req2.canEdit;
      done({ canEdit: canEdit });
    })
    .catch((e) => {
      fail(e);
    });
}

function tinycomments_delete(req, done, fail) {
  let conversationUid = req.conversationUid;
  fetch('https://api.example/conversations/' + conversationUid, {
    method: 'DELETE',
  }).then((response) => {
    if (response.ok) {
      done({ canDelete: true });
    } else if (response.status === 403) {
      done({ canDelete: false });
    } else {
      fail(new Error('Something has gone wrong...'));
    }
  });
}

function tinycomments_delete_all(_req, done, fail) {
  fetch('https://api.example/conversations', {
    method: 'DELETE',
  }).then((response) => {
    if (response.ok) {
      done({ canDelete: true });
    } else if (response.status === 403) {
      done({ canDelete: false });
    } else {
      fail(new Error('Something has gone wrong...'));
    }
  });
}

function tinycomments_delete_comment(req, done, fail) {
  let conversationUid = req.conversationUid;
  let commentUid = req.commentUid;

  fetch(
    'https://api.example/conversations/' + conversationUid + '/' + commentUid,
    {
      method: 'DELETE',
    }
  ).then((response) => {
    if (response.ok) {
      done({ canDelete: true });
    } else if (response.status === 403) {
      done({ canDelete: false });
    } else {
      fail(new Error('Something has gone wrong...'));
    }
  });
}

function tinycomments_lookup({ conversationUid }, done, fail) {
  let lookup = async function () {
    let convResp = await fetch(
      'https://api.example/conversations/' + conversationUid
    );
    if (!convResp.ok) {
      throw new Error('Failed to get conversation');
    }
    let comments = await convResp.json();
    let usersResp = await fetch('https://api.example/users/');
    if (!usersResp.ok) {
      throw new Error('Failed to get users');
    }
    let { users } = await usersResp.json();
    let getUser = function (userId) {
      return users.find((u) => {
        return u.id === userId;
      });
    };
    return {
      conversation: {
        uid: conversationUid,
        comments: comments.map((comment) => {
          return {
            ...comment,
            content: comment.content,
            authorName: getUser(comment.author)?.displayName,
          };
        }),
      },
    };
  };
  lookup()
    .then((data) => {
      console.log('Lookup success ' + conversationUid, data);
      done(data);
    })
    .catch((err) => {
      console.error('Lookup failure ' + conversationUid, err);
      fail(err);
    });
}

tinymce.init({
  selector: 'textarea#comments-callback',
  height: 800,
  plugins: 'code tinycomments help lists',
  toolbar:
    'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | addcomment showcomments | help',
  menubar: 'file edit view insert format tc',
  menu: {
    tc: {
      title: 'Comments',
      items: 'addcomment showcomments deleteallconversations',
    },
  },
  tinycomments_create,
  tinycomments_reply,
  tinycomments_edit_comment,
  tinycomments_delete,
  tinycomments_delete_all,
  tinycomments_delete_comment,
  tinycomments_lookup,
  /* The following setup callback opens the comments sidebar when the editor loads */
  setup: function (editor) {
    editor.on('SkinLoaded', () => {
      editor.execCommand('ToggleSidebar', false, 'showcomments');
    });
  },
});

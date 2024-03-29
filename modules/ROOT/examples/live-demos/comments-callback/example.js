/********************************
 *   Tiny Comments functions    *
 * (must call "done" or "fail") *
 ********************************/

const tinycomments_create = (req, done, fail) => {
  const { content, createdAt } = req;

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
      const conversationUid = req2.conversationUid;
      done({ conversationUid });
    })
    .catch((e) => {
      fail(e);
    });
};

const tinycomments_reply = (req, done, fail) => {
  const { conversationUid, content, createdAt } = req;

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
      const commentUid = req2.commentUid;
      done({ commentUid });
    })
    .catch((e) => {
      fail(e);
    });
};

const tinycomments_edit_comment = (req, done, fail) => {
  const { conversationUid, commentUid, content, modifiedAt } = req;

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
      const canEdit = req2.canEdit;
      done({ canEdit });
    })
    .catch((e) => {
      fail(e);
    });
};

const tinycomments_delete = (req, done, fail) => {
  const conversationUid = req.conversationUid;
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
};

const tinycomments_delete_all = (_req, done, fail) => {
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
};

const tinycomments_delete_comment = (req, done, fail) => {
  const { conversationUid, commentUid } = req;

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
};

const tinycomments_lookup = ({ conversationUid }, done, fail) => {
  const lookup = async () => {
    const convResp = await fetch(
      'https://api.example/conversations/' + conversationUid
    );
    if (!convResp.ok) {
      throw new Error('Failed to get conversation');
    }
    const comments = await convResp.json();
    const usersResp = await fetch('https://api.example/users/');
    if (!usersResp.ok) {
      throw new Error('Failed to get users');
    }
    const { users } = await usersResp.json();
    const getUser = (userId) => users.find((u) => u.id === userId);
    return {
      conversation: {
        uid: conversationUid,
        comments: comments.map((comment) => ({
          ...comment,
          content: comment.content,
          authorName: getUser(comment.author)?.displayName,
        })),
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
};

tinymce.init({
  selector: 'textarea#comments-callback',
  height: 800,
  plugins: 'code tinycomments help lists',
  toolbar:
    'undo redo | blocks | ' +
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
  setup: (editor) => {
    editor.on('SkinLoaded', () => {
      editor.execCommand('ToggleSidebar', false, 'showcomments');
    });
  },
});

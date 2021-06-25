/********************************
 *   Tiny Comments functions    *
 * (must call "done" or "fail") *
 ********************************/

function tinycomments_create(_ref, done, fail) {
  var content = _ref.content;
  var createdAt = _ref.createdAt;

  fetch('https://api.example/conversations/', {
    method: 'POST',
    body: JSON.stringify({ content: content, createdAt: createdAt }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(function (response) {
      if (!response.ok) {
        throw new Error('Failed to create comment');
      }
      return response.json();
    })
    .then(function (_ref2) {
      var conversationUid = _ref2.conversationUid;
      done({ conversationUid: conversationUid });
    })
    .catch(function (e) {
      fail(e);
    });
}

function tinycomments_reply(_ref, done, fail) {
  var conversationUid = _ref.conversationUid;
  var content = _ref.content;
  var createdAt = _ref.createdAt;

  fetch('https://api.example/conversations/' + conversationUid, {
    method: 'POST',
    body: JSON.stringify({ content: content, createdAt: createdAt }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(function (response) {
      if (!response.ok) {
        throw new Error('Failed to reply to comment');
      }
      return response.json();
    })
    .then(function (_ref2) {
      var commentUid = _ref2.commentUid;
      done({ commentUid: commentUid });
    })
    .catch(function (e) {
      fail(e);
    });
}

function tinycomments_edit_comment(_ref, done, fail) {
  var conversationUid = _ref.conversationUid;
  var commentUid = _ref.commentUid;
  var content = _ref.content;
  var modifiedAt = _ref.modifiedAt;

  fetch(
    'https://api.example/conversations/' + conversationUid + '/' + commentUid,
    {
      method: 'PUT',
      body: JSON.stringify({ content: content, modifiedAt: modifiedAt }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  )
    .then(function (response) {
      if (!response.ok) {
        throw new Error('Failed to edit comment');
      }
      return response.json();
    })
    .then(function (_ref2) {
      var canEdit = _ref2.canEdit;
      return void done({ canEdit: canEdit });
    })
    .catch(function (e) {
      return void fail(e);
    });
}

function tinycomments_delete(_ref, done, fail) {
  var conversationUid = _ref.conversationUid;
  fetch('https://api.example/conversations/' + conversationUid, {
    method: 'DELETE',
  }).then(function (response) {
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
  }).then(function (response) {
    if (response.ok) {
      done({ canDelete: true });
    } else if (response.status === 403) {
      done({ canDelete: false });
    } else {
      fail(new Error('Something has gone wrong...'));
    }
  });
}

function tinycomments_delete_comment(_ref, done, fail) {
  var conversationUid = _ref.conversationUid;
  var commentUid = _ref.commentUid;

  fetch(
    'https://api.example/conversations/' + conversationUid + '/' + commentUid,
    {
      method: 'DELETE',
    }
  ).then(function (response) {
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
  var lookup = async function () {
    var convResp = await fetch(
      'https://api.example/conversations/' + conversationUid
    );
    if (!convResp.ok) {
      throw new Error('Failed to get conversation');
    }
    var comments = await convResp.json();
    var usersResp = await fetch('https://api.example/users/');
    if (!usersResp.ok) {
      throw new Error('Failed to get users');
    }
    var { users } = await usersResp.json();
    var getUser = function (userId) {
      return users.find(function (u) {
        return u.id === userId;
      });
    };
    return {
      conversation: {
        uid: conversationUid,
        comments: comments.map(function (comment) {
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
    .then(function (data) {
      console.log('Lookup success ' + conversationUid, data);
      done(data);
    })
    .catch(function (err) {
      console.error('Lookup failure ' + conversationUid, err);
      fail(err);
    });
}

tinymce.init({
  selector: 'textarea#callback-mode',
  height: 800,
  plugins: 'paste code tinycomments help lists',
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
    editor.on('SkinLoaded', function () {
      editor.execCommand('ToggleSidebar', false, 'showcomments');
    });
  },
});

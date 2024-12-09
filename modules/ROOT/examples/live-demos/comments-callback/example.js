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
      done({
        commentUid: replyUid,
        author: currentUser.id,
        authorName: currentUser.fullName
      });
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

const tinycomments_fetch = (conversationUids, done, fail) => {
  const requests = conversationUids.map((uid) => fetch(`https://api.example/conversations/${uid}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }})
      .then((response) => response.json())
      .then((data) => ({
        [uid]: {
          uid: uid,
          comments: data
        }
      }))
    );

  Promise.all(requests)
    .then((data) => {
      console.log('data', data);
      const conversations = data.reduce((conv, d) => ({
          ...conv,
          ...d
        })
      , {});
      console.log(`Fetch success ${conversationUids}`, conversations);
      done({ conversations });
    })
    .catch((err) => {
      console.error(`Fetch failure ${conversationUids}`, err);
      fail('Fetching conversations failed');
    });
};

tinymce.init({
  selector: 'textarea#comments-callback',
  height: 800,
  plugins: 'code tinycomments help lists quickbars link image',
  toolbar:
    'addcomment showcomments | undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
  menubar: 'file edit view insert format tc',
  sidebar_show: 'showcomments',
  menu: {
    tc: {
      title: 'Comments',
      items: 'addcomment showcomments deleteallconversations',
    },
  },
  quickbars_selection_toolbar: 'alignleft aligncenter alignright | addcomment showcomments',
  quickbars_image_toolbar: 'alignleft aligncenter alignright | rotateleft rotateright | imageoptions',
  tinycomments_create,
  tinycomments_reply,
  tinycomments_edit_comment,
  tinycomments_delete,
  tinycomments_delete_all,
  tinycomments_delete_comment,
  tinycomments_lookup,
  tinycomments_fetch,
});

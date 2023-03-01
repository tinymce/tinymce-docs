tinymce.ScriptLoader.loadScripts(
  [
    '//unpkg.com/@pollyjs/core@5.1.1',
    '//unpkg.com/@pollyjs/adapter-fetch@5.1.1',
    '//unpkg.com/@pollyjs/persister-local-storage@5.1.1',
  ],
  () => {
    /******************************
     * Mock server implementation *
     ******************************/

    let { Polly } = window['@pollyjs/core'];
    let FetchAdapter = window['@pollyjs/adapter-fetch'];
    let LocalStoragePersister = window['@pollyjs/persister-local-storage'];

    Polly.register(FetchAdapter);
    Polly.register(LocalStoragePersister);
    let polly = new Polly('test', {
      adapters: ['fetch'],
      persister: 'local-storage',
      logging: true,
    });
    let server = polly.server;

    /* this would be an admin for the file, they're allowed to do all operations */
    function getOwner() {
      return localStorage.getItem('owner') ?? users[0].id;
    }

    /* Server knows the author, probably by cookie or JWT token */
    function getAuthor() {
      return localStorage.getItem('author') ?? users[0].id;
    }

    /* this would be an admin for the file, they're allowed to do all operations */
    function setOwner(user) {
      localStorage.setItem('owner', user) ?? users[0].id;
    }

    /* Server knows the author, probably by cookie or JWT token */
    function setAuthor(user) {
      localStorage.setItem('author', user) ?? users[0].id;
    }

    function randomString() {
      const randomArray = new Uint32Array(20);
      return window.crypto.getRandomValues(randomArray)[0];
    }

    /* Our server "database" */
    function getDB() {
      return JSON.parse(localStorage.getItem('fakedb') ?? '{}');
    }
    function setDB(data) {
      localStorage.setItem('fakedb', JSON.stringify(data));
    }

    function getConversation(uid) {
      let store = getDB();
      console.log('DB get:', uid, store[uid]);
      return store[uid];
    }

    function setConversation(uid, conversation) {
      let store = getDB();
      console.log('DB set:', uid, store[uid], conversation);
      store[uid] = conversation;
      setDB(store);
    }

    function deleteConversation(uid) {
      let store = getDB();
      console.log('DB delete:', uid);
      delete store[uid];
      setDB(store);
    }

    function deleteAllConversations() {
      console.log('DB delete all');
      let store = {};
      setDB(store);
    }

    server.host('https://api.example', () => {
      /* create new conversation */
      server.post('/conversations/').intercept((req, res) => {
        let author = getAuthor();
        let { content, createdAt } = JSON.parse(req.body);
        console.log(req.body);
        try {
          let conversationUid = randomString();
          setConversation(conversationUid, [
            {
              author,
              createdAt,
              modifiedAt: createdAt,
              content,
              uid: conversationUid /* first comment has same uid as conversation */,
            },
          ]);
          res.status(201).json({ conversationUid });
        } catch (e) {
          console.log('Server error:', e);
          res.status(500);
        }
      });

      /* add new comment to conversation */
      server.post('/conversations/:conversationUid').intercept((req, res) => {
        let author = getAuthor();
        let { content, createdAt } = JSON.parse(req.body);
        let conversationUid = req.params.conversationUid;
        try {
          let conversation = getConversation(conversationUid);
          let commentUid = randomString();
          setConversation(
            conversationUid,
            conversation.concat([
              {
                author,
                createdAt,
                modifiedAt: createdAt,
                content,
                uid: commentUid,
              },
            ])
          );
          res.status(201).json({ commentUid });
        } catch (e) {
          console.log('Server error:', e);
          res.status(500);
        }
      });

      /* edit a comment */
      server
        .put('/conversations/:conversationUid/:commentUid')
        .intercept((req, res) => {
          let author = getAuthor();
          let { content, modifiedAt } = JSON.parse(req.body);
          let conversationUid = req.params.conversationUid;
          let commentUid = req.params.commentUid;

          try {
            let conversation = getConversation(conversationUid);
            let commentIndex = conversation.findIndex((comment) => {
              return comment.uid === commentUid;
            });
            let comment = conversation[commentIndex];
            let canEdit = comment.author === author;
            if (canEdit) {
              setConversation(conversationUid, [
                ...conversation.slice(0, commentIndex),
                {
                  ...comment,
                  content,
                  modifiedAt,
                },
                ...conversation.slice(commentIndex + 1),
              ]);
            }
            res.status(201).json({ canEdit });
          } catch (e) {
            console.log('Server error:', e);
            res.status(500);
          }
        });

      /* delete a comment */
      server
        .delete('/conversations/:conversationUid/:commentUid')
        .intercept((req, res) => {
          let author = getAuthor();
          let owner = getOwner();
          let conversationUid = req.params.conversationUid;
          let commentUid = req.params.commentUid;
          let conversation = getConversation(conversationUid);
          if (!conversation) {
            res.status(404);
          }
          let commentIndex = conversation.findIndex((comment) => {
            return comment.uid === commentUid;
          });
          if (commentIndex === -1) {
            res.status(404);
          }
          if (
            conversation[commentIndex].author === author ||
            author === owner
          ) {
            setConversation(conversationUid, [
              ...conversation.slice(0, commentIndex),
              ...conversation.slice(commentIndex + 1),
            ]);
            res.status(204);
          } else {
            res.status(403);
          }
        });

      /* delete a conversation */
      server.delete('/conversations/:conversationUid').intercept((req, res) => {
        let author = getAuthor();
        let owner = getOwner();
        let conversationUid = req.params.conversationUid;
        let conversation = getConversation(conversationUid);
        if (conversation) {
          if (conversation[0].author === author || author === owner) {
            deleteConversation(conversationUid);
            res.status(204);
          } else {
            res.status(403);
          }
        } else {
          res.status(404);
        }
      });

      /* delete all conversations */
      server.delete('/conversations').intercept((req, res) => {
        let author = getAuthor();
        let owner = getOwner();
        if (author === owner) {
          deleteAllConversations();
          res.status(204);
        } else {
          res.status(403);
        }
      });

      /* lookup a conversation */
      server.get('/conversations/:conversationUid').intercept((req, res) => {
        let conversation = getConversation(req.params.conversationUid);
        if (conversation) {
          res.status(200).json(conversation);
        } else {
          res.status(404);
        }
      });

      /* lookup users */
      server.get('/users/').intercept((req, res) => {
        res.status(200).json({
          users,
        });
      });
    }); /* server.host */

    /* Connect using the `connectTo` API */
    polly.connectTo('fetch');

    /************************************************
     * Fake Users and associated pickers            *
     * Should be based on sessions and backend data *
     ***********************************************/

    const users = [
      { id: 'alex', displayName: 'Alex' },
      { id: 'jessie', displayName: 'Jessie' },
      { id: 'sam', displayName: 'Sam' },
    ];

    /* Set initial Owner */
    setOwner(users[2].id);

    /* Set initial Author */
    setAuthor(users[0].id);

    /********************************
     *   Tiny Comments functions    *
     * (must call "done" or "fail") *
     ********************************/

    /**
     * Callback for when the operation was successful.
     * @template T
     * @callback done
     * @param {T} data - the data
     * @returns {void}
     */

    /**
     * Callback for when the operation failed.
     * @callback fail
     * @param {string|Error} error - the reason for the failure
     * @returns {void}
     */

    /**
     * The data supplied to create a comment.
     * @typedef {Object} TinyCommentsCreateReq
     * @property {string} content - comment content
     * @property {string} createdAt - ISO creation date
     */

    /**
     * The response returned when a comment was created on the server.
     * @typedef {Object} TinyCommentsCreateResp
     * @property {string} conversationUid - ID of created comment
     * @property {?fail} onError - error callback to call when the comment can't be put into the document
     * @property {?done<string>} onSuccess - success callback to call when the comment is put into the document
     */

    /**
     * Conversation "create" function. Saves the comment as a new conversation,
     * and asynchronously returns a conversation unique ID via the "done"
     * callback.
     *
     * @param {TinyCommentsCreateReq} req - the comment to create
     * @param {done<TinyCommentsCreateResp>} done - callback to call when the comment is created on the server
     * @param {fail} fail - callback to call when something fails
     */
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

    /**
     *
     * @typedef {Object} TinyCommentsReplyReq
     * @property {string} conversationUid
     * @property {string} content
     * @property {string} createdAt
     */

    /**
     *
     * @typedef {Object} TinyCommentsReplyResp
     * @property {string} commentUid
     */

    /**
     * Conversation "reply" function. Saves the comment as a reply to the
     * an existing conversation, and asynchronously returns via the "done"
     * callback when finished.
     *
     * @param {TinyCommentsReplyReq} req - the comment to append
     * @param {done<TinyCommentsReplyResp>} done - callback to call when the comment is created on the server
     * @param {fail} fail - callback to call when something fails
     */
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
    /**
     *
     * @typedef {Object} TinyCommentsEditReq
     * @property {string} conversationUid
     * @property {string} commentUid
     * @property {string} content
     * @property {string} modifiedAt
     */

    /**
     *
     * @typedef {Object} TinyCommentsEditResp
     * @property {boolean} canEdit
     * @property {?string} reason
     */

    /**
     *
     * @param {TinyCommentsEditReq} req
     * @param {done<TinyCommentsEditResp>} done
     * @param {fail} fail
     */
    function tinycomments_edit_comment(req, done, fail) {
      let conversationUid = req.conversationUid;
      let commentUid = req.commentUid;
      let content = req.content;
      let modifiedAt = req.modifiedAt;

      fetch(
        'https://api.example/conversations/' +
          conversationUid +
          '/' +
          commentUid,
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

    /**
     *
     * @typedef TinyCommentsDeleteReq
     * @property {string} conversationUid
     */

    /**
     *
     * @typedef TinyCommentsDeleteResp
     * @property {boolean} canDelete
     * @property {?string} reason
     */

    /**
     * Conversation "delete" function. Deletes an entire conversation.
     * Returns asynchronously whether the conversation was deleted.
     * Failure to delete due to permissions or business rules is indicated
     * by `{canDelete: false}`, while unexpected errors should be indicated using the
     * "fail" callback.
     * @param {TinyCommentsDeleteReq} req
     * @param {done<TinyCommentsDeleteResp>} done
     * @param {fail} fail
     */
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

    /**
     *
     * @typedef TinyCommentsDeleteAllReq
     * @type {object}
     */

    /**
     *
     * @typedef TinyCommentsDeleteAllResp
     * @property {boolean} canDelete
     * @property {?string} reason
     */

    /**
     * All conversations "delete_all" function. Deletes all conversations.
     * Returns asynchronously whether all conversations were deleted.
     * Failure to delete due to permissions or business rules is indicated
     * by `{canDelete: false}`, while unexpected errors should be indicated using the
     * "fail" callback.
     * @param {TinyCommentsDeleteAllReq} _req - no options
     * @param {done<TinyCommentsDeleteAllResp>} done
     * @param {fail} fail
     */
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

    /**
     *
     * @typedef TinyCommentsDeleteCommentReq
     * @property {string} conversationUid
     * @property {string} commentUid
     */

    /**
     *
     * @typedef TinyCommentsDeleteCommentResp
     * @property {boolean} canDelete
     * @property {?string} reason
     */

    /**
     *
     * @param {TinyCommentsDeleteCommentReq} req
     * @param {done<TinyCommentsDeleteCommentResp>} done
     * @param {fail} fail
     */
    function tinycomments_delete_comment(req, done, fail) {
      let conversationUid = req.conversationUid;
      let commentUid = req.commentUid;

      fetch(
        'https://api.example/conversations/' +
          conversationUid +
          '/' +
          commentUid,
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

    /**
     * @typedef TinyCommentsLookupReq
     * @property {string} conversationUid
     */

    /**
     *
     * @typedef TinyCommentsLookupRespComment
     * @property {string} author
     * @property {?string} authorName
     * @property {string} createdAt
     * @property {string} modifiedAt
     * @property {string} content
     * @property {string} uid
     */

    /**
     *
     * @typedef TinyCommentsLookupRespConversation
     * @property {string} uid
     * @property {TinyCommentsLookupRespComment[]} comments
     */

    /**
     *
     * @typedef TinyCommentsLookupResp
     * @property {TinyCommentsLookupRespConversation} conversation
     */

    /**
     * Conversation "lookup" function. Retreives an existing conversation
     * via a conversation unique ID. Asynchronously returns the conversation
     * via the "done" callback.
     *
     * @param {TinyCommentsLookupReq} req
     * @param {done<TinyCommentsLookupResp>} done
     * @param {fail} fail
     */
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
          editor.execCommand('ToggleSidebar', false, 'showcomments', {
            skip_focus: true,
          });
        });
      },
    });
  }
);

/******************************
 * Mock server implementation *
 ******************************/

(function (Polly, FetchAdapter) {
  Polly.register(FetchAdapter);
  var polly = new Polly('test', {
    adapters: ['fetch']
  });
  var server = polly.server;

  server.any().on('request', function (req) {
    console.log("Server request:", req);
  });

  server.any().on('beforeResponse', function (req, res) {
    console.log("Server response:", res);
  });

  /* Server knows the author */
  var currentUserId = 'demo';
  /* Our server "database"*/
  var store = {
    "96pewyxd0h5": [
      {
        "user": "other",
        "comment": "A tiny comment inside Tiny."
      }
    ]
  };

  function randomString() {
    /* ~62 bits of randomness, so very unlikely to collide for <100K uses*/
    return Math.random().toString(36).substring(2, 14);
  }

  function getConversation(uid) {
    console.log("DB get:", uid, store[uid]);
    return {uid: uid, comments: store[uid]};
  }

  function setConversation(uid, conversation) {
    console.log("DB set:", uid, store[uid], conversation);
    store[uid] = conversation;
  }

  function deleteConversation(uid) {
    console.log("DB delete:", uid);
    delete store[uid];
  }

  server.host('https://api.example', function () {
    server.post('/conversations/').intercept(function (req, res) {
      try {
        var uid = randomString();
        setConversation(uid, [{
          user: currentUserId,
          comment: req.body
        }]);
        res.status(201);
        res.setHeader('Location', '/conversations/' + uid);
        res.json(getConversation(uid));
      } catch (e) {
        console.log("Server error:", e);
        res.status(500);
      }
    });

    server.patch('/conversations/:uid').intercept(function (req, res) {
      var uid = req.params.uid;
      try {
        var conversation = getConversation(uid);
        setConversation(uid, conversation.comments.concat([{
          user: currentUserId,
          comment: req.body
        }]));
        res.status(200);
      } catch (e) {
        console.log("Server error:", e);
        res.status(500);
      }
    });

    server.get('/conversations/:uid').intercept(function (req, res) {
      var conversation = getConversation(req.params.uid);
      if (conversation) {
        res.status(200).json(conversation);
      } else {
        res.status(404);
      }
    });

    server.delete('/conversations/:uid').intercept(function (req, res) {
      var uid = req.params.uid;
      var conversation = getConversation(uid);
      if (conversation) {
        if (conversation[0].user === currentUserId) {
          deleteConversation(uid);
          res.status(204);
        } else {
          res.status(403);
        }
      } else {
        res.status(404);
      }
    });

    server.get('/users/').intercept(function (req, res) {
      res.status(200).json({
        users: [
          {id: 'demo', displayName: 'Demo User'},
          {id: 'other', displayName: 'A Prior User'}
        ]
      });
    });
  });

  /* Connect using the `connectTo` API*/
  polly.connectTo('fetch');
})(window['@pollyjs/core'].Polly, window['@pollyjs/adapter-fetch']);

function example(contentSelector) {

  /********************************
   *   Tiny Comments functions    *
   * (must call "done" or "fail") *
   ********************************/

  /**
   * Conversation "create" function. Saves the comment as a new conversation,
   * and asynchronously returns a conversation unique ID via the "done"
   * callback.
   */
  function create(content, done, fail) {
    fetch(
      'https://api.example/conversations/',
      {method: 'POST', body: content}
    ).then(function (response) {
      return response.json();
    }).then(function (json) {
      done(json.uid);
    }).catch(function () {
      fail(new Error('Something has gone wrong...'));
    });
  }

  /**
   * Conversation "reply" function. Saves the comment as a reply to the
   * an existing conversation, and asynchronously returns via the "done"
   * callback when finished.
   */
  function reply(uid, content, done, fail) {
    fetch(
      'https://api.example/conversations/' + uid,
      {method: 'PATCH', body: content}
    ).then(function (response) {
      if (response.ok) {
        done();
      } else {
        fail(new Error('Something has gone wrong...'));
      }
    });
  }

  /**
   * Conversation "delete" function. Deletes an entire conversation.
   * Returns asynchronously whether the conversation was deleted.
   * Failure to delete due to permissions or business rules is indicated
   * by "false", while unexpected errors should be indicated using the
   * "fail" callback.
   */
  function del(uid, done, fail) {
    fetch(
      'https://api.example/conversations/' + uid,
      {method: 'DELETE'}
    ).then(function (response) {
      if (response.ok) {
        done(true);
      } else if (response.status === 403) {
        done(false)
      } else {
        fail(new Error('Something has gone wrong...'));
      }
    });
  }

  /**
   * Conversation "lookup" function. Retreives an existing conversation
   * via a conversation unique ID. Asynchronously returns the conversation
   * via the "done" callback.
   *
   * Conversation object structure:
   * {
   *   "comments": [
   *     <comment1>,
   *     <comment2>,
   *     ...
   *   ]
   * }
   *
   * Comment object structure:
   * {
   *   "author": "Author Display Name",
   *   "content": "This is the text of the comment"
   * }
   *
   */
  function lookup(uid, done, fail) {
    fetch('https://api.example/conversations/' + uid)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        var conversation = json.comments;
        return fetch('https://api.example/users/')
          .then(function (response) {
            return response.json();
          })
          .then(function (json) {
            var users = json.users;
            var unknown = {displayName: 'Unknown'};
            return conversation.map(function (item) {
              var user = users.find(function (v) {
                return v.id === item.user;
              });
              return {
                author: (user || unknown).displayName,
                content: item.comment
              };
            });
          });
      })
      .then(function (comments) {
        done({comments: comments});
      })
      .catch(function () {
        fail(new Error('Something has gone wrong...'));
      })
  }

  /*
  ** Adding some additional fonts to the TinyMCE fonts list
  ** to allow the editor content to match the surrounding content.
  */
  const fontList = 'Andale Mono=andale mono,monospace;' +
    'Aileron=aileron,sans-serif;' +
    'Arial=arial,helvetica,sans-serif;' +
    'Arial Black=arial black,sans-serif;' +
    'Avenir=Avenir W01,sans-serif;' +
    'Book Antiqua=book antiqua,palatino,serif;' +
    'Comic Sans MS=comic sans ms,sans-serif;' +
    'Courier New=courier new,courier,monospace;' +
    'Georgia=georgia,palatino,serif;' +
    'Helvetica=helvetica,arial,sans-serif;' +
    'Impact=impact,sans-serif;' +
    'Symbol=symbol;' +
    'Tahoma=tahoma,arial,helvetica,sans-serif;' +
    'Terminal=terminal,monaco,monospace;' +
    'Times New Roman=times new roman,times,serif;' +
    'Trebuchet MS=trebuchet ms,geneva,sans-serif;' +
    'Verdana=verdana,geneva,sans-serif;' +
    'Webdings=webdings;' +
    'Wingdings=wingdings,zapf dingbats';

  // Initialize the TinyMCE editor
  tinymce.init({
    selector: contentSelector,
    font_formats: fontList,
    content_css: '//www.tiny.cloud/css/codepen.min.css',
    toolbar: 'bold italic underline | tinycomments',
    plugins: 'tinycomments',

    content_style: '.mce-annotation { background: #fff0b7; } .tc-active-annotation {background: #ffe168; color: black; }',
    tinycomments_create: create,
    tinycomments_reply: reply,
    tinycomments_delete: del,
    tinycomments_lookup: lookup
  });
}

example('#tinycomments-realtime .editor');

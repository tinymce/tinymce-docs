function example(contentSelector, commentSelector) {

  /********************
   * Helper functions *
   ********************/

  function getConversation(uid) {
    var el = document.querySelector(commentSelector);
    return JSON.parse(el.value)[uid];
  }

  function setConversation(uid, conversation) {
    var el = document.querySelector(commentSelector);
    var store = JSON.parse(el.value);
    store[uid] = conversation;
    el.value = JSON.stringify(store, null, 2);
  }

  function deleteConversation(uid) {
    var el = document.querySelector(commentSelector);
    var store = JSON.parse(el.value);
    delete store[uid];
    el.value = JSON.stringify(store, null, 2);
  }

  function getAuthorDisplayName(authorId) {
    var authors = {
      'other': 'A Prior User',
      'demo': 'Demo User'
    };
    return authors[authorId] || 'Unknown';
  }

  function randomString() {
    /* ~62 bits of randomness, so very unlikely to collide for <100K uses*/
    return Math.random().toString(36).substring(2, 14);
  }

  var authorId = 'demo';

  /********************************
   *   Tiny Comments functions    *
   * (must call "done" or "fail") *
   ********************************/

  function create(content, done, fail) {
    if (content === 'fail') {
      fail(new Error('Something has gone wrong...'));
    } else {
      var uid = 'annotation-' + randomString();
      setConversation(
        uid,
        [{user: authorId, comment: content}]
      );
      done(uid);
    }
  }

  var reply = function (uid, content, done, fail) {
    var comments = getConversation(uid);
    comments.push({
      user: authorId,
      comment: content
    });
    setConversation(uid, comments);
    done();
  };

  function del(uid, done, fail) {
    /* only allow first commenter to delete*/
    if (getConversation(uid)[0].user === authorId) {
      deleteConversation(uid);
      done(true);
    } else {
      done(false);
    }
  }

  function lookup(uid, done, fail) {
    var comments = getConversation(uid).map(function (item) {
      return {
        author: getAuthorDisplayName(item.user),
        content: item.comment
      };
    });
    done({comments: comments});
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

example('#tinycomments-save .editor', '#tinycomments-save-debug-ui .comments');

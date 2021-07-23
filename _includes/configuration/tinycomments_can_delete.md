### `tinycomments_can_delete`

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

#### Example: Using `tinycomments_can_delete`

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


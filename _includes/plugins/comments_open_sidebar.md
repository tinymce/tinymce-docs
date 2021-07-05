## Show the comments sidebar when TinyMCE loads

To show the comments sidebar when the editor is loaded or to display the sidebar by default, add a callback to open the sidebar once the editor 'skin' is loaded.

For example:

{% if page.name == "comments_callback_mode.md" %}
```js
tinymce.init({
  selector: '#editor',
  plugins: 'tinycomments',
  tinycomments_mode: 'callback',
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
      editor.execCommand("ToggleSidebar", false, "showcomments");
    })
  }
});
```
{% else %}
```js
tinymce.init({
  selector: '#editor',
  plugins: 'tinycomments',
  tinycomments_mode: 'embedded',
  tinycomments_author: currentAuthor,
  tinycomments_can_resolve: canResolveCommentsCallback,
  /* The following setup callback opens the comments sidebar when the editor loads */
  setup: function (editor) {
    editor.on('SkinLoaded', function () {
      editor.execCommand("ToggleSidebar", false, "showcomments");
    })
  }
});
```
{% endif %}
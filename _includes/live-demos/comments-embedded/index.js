var currentAuthor = 'A Tiny User';
var userAllowedToResolve = 'Admin1';

tinymce.init({
  selector: 'textarea#comments-embedded',
  toolbar: 'bold italic underline | addcomment showcomments',
  menubar: 'file edit view insert format tools tc',
  menu: {
    tc: {
      title: 'Comments',
      items: 'addcomment showcomments deleteallconversations'
    }
  },
  plugins: 'code tinycomments',
  tinycomments_mode: 'embedded',
  tinycomments_author: currentAuthor,
  tinycomments_can_resolve: function (req, done, fail) {
    var allowed = req.comments.length > 0 &&
                  req.comments[0].author === currentAuthor;
    done({
      canResolve: allowed || currentAuthor === userAllowedToResolve
    });
  },
  content_style: {{site.liveDemoIframeCSSStyles}},
  /* The following setup callback opens the comments sidebar when the editor loads */
  setup: function (editor) {
    editor.on('SkinLoaded', function () {
      editor.execCommand("ToggleSidebar", false, "showcomments", { skip_focus: true });
    })
  }
});
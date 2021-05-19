var currentAuthor = 'A Tiny User';
var userAllowedToResolve = 'Admin1';

tinymce.init({
  selector: '#tiny-ui .editor',
  toolbar: 'bold italic underline | addcomment showcomments',
  menubar: 'file edit view insert format tools tc',
  menu: {
    tc: {
      title: 'TinyComments',
      items: 'addcomment showcomments deleteallconversations'
    }
  },
  plugins: 'paste code tinycomments',
  tinycomments_mode: 'embedded',
  tinycomments_author: currentAuthor,
  tinycomments_can_resolve: function (req, done, fail) {
    var allowed = req.comments.length > 0 &&
                  req.comments[0].author === currentAuthor;
    done({
      canResolve: allowed || currentAuthor === userAllowedToResolve
    });
  },
  content_style: {{site.liveDemoIframeCSSStyles}}
});
const currentAuthor = 'A Tiny User';
const userAllowedToResolve = 'Admin1';

tinymce.init({
  selector: 'textarea#comments-embedded',
  plugins: 'code tinycomments',
  toolbar: 'addcomment showcomments | bold italic underline',
  menubar: 'file edit view insert format tools tc',
  menu: {
    tc: {
      title: 'Comments',
      items: 'addcomment showcomments deleteallconversations'
    }
  },
  tinycomments_mode: 'embedded',
  tinycomments_author: currentAuthor,
  tinycomments_can_resolve: (req, done, fail) => {
    const allowed = req.comments.length > 0 &&
                  req.comments[0].author === currentAuthor;
    done({
      canResolve: allowed || currentAuthor === userAllowedToResolve
    });
  },
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
});

const currentAuthor = 'A Tiny User';
const userAllowedToResolve = 'Admin1';

tinymce.init({
  selector: 'textarea#comments-embedded',
  plugins: 'code tinycomments quickbars link lists image',
  toolbar: 'addcomment showcomments | bold italic underline',
  menubar: 'file edit view insert format tools tc',
  menu: {
    tc: {
      title: 'Comments',
      items: 'addcomment showcomments deleteallconversations'
    }
  },
  quickbars_selection_toolbar: 'alignleft aligncenter alignright | addcomment showcomments',
  quickbars_image_toolbar: 'alignleft aligncenter alignright | rotateleft rotateright | imageoptions',
  tinycomments_mode: 'embedded',
  sidebar_show: 'showcomments',
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

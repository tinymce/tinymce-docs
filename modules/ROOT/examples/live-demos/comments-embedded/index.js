const API_URL = 'https://demouserdirectory.tiny.cloud/v1/users';

const user_id = 'james-wilson';

const tinycomments_can_resolve = (req, done, _fail) => {
  const allowed = req.comments.length > 0 && req.comments[0].author === user_id;
  done({ canResolve: allowed });
};

tinymce.init({
  selector: 'textarea#comments-embedded',
  plugins: [ 'tinycomments', 'help', 'code', 'quickbars', 'link', 'lists', 'image' ],
  toolbar: 'addcomment showcomments code | bold italic underline',
  menubar: 'file edit view insert format tools tc',
  menu: {
    tc: {
      title: 'Comments',
      items: 'addcomment showcomments deleteallconversations'
    }
  },
  quickbars_selection_toolbar: 'alignleft aligncenter alignright | addcomment showcomments',
  quickbars_image_toolbar: 'alignleft aligncenter alignright | rotateleft rotateright | imageoptions',
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
  tinycomments_mode: 'embedded',
  sidebar_show: 'showcomments',
  tinycomments_can_resolve,
  tinycomments_author: user_id,
  tinycomments_author_name: 'James Wilson',
  tinycomments_author_avatar: 'https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_james-wilson_128_52f19412.jpg'
});
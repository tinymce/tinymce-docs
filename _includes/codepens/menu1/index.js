// Initialize the TinyMCE editor
tinymce.init({
  selector: 'textarea#menu1',
  menu: {
    edit: {title: 'Edit', items: 'undo redo | selectall'}
  },
  content_css: '//www.tiny.cloud/css/codepen.min.css',
});
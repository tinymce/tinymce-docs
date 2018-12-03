tinymce.init({
  selector: "textarea",
  height: 500,
  plugins: 'wordcount',
  toolbar: false,
  menubar: "tools",
  content_css: [
    '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
    '//www.tiny.cloud/css/codepen.min.css'
  ],

  setup: function (editor) {
    editor.addMenuItem('myitem', {
      text: 'My menu item',
      context: 'tools',
      onclick: function () {
        editor.insertContent('&nbsp;Here\'s some content!&nbsp;');
      }
    });
  }
});
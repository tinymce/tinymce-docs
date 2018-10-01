tinymce.init({
  selector: 'textarea',
  height: 500,
  toolbar: 'mybutton',
  plugins: 'wordcount',
  menubar: false,
  content_css: [
    '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
    '//www.tiny.cloud/css/codepen.min.css'],
  
  setup: function (editor) {

    /* adding a toolbar button */
    editor.ui.registry.addButton('mybutton', {
      icon: 'user',
      onAction: function () {
        editor.insertContent('&nbsp;<b>It\'s my button!</b>&nbsp;');
      }
    });

  }
});
tinymce.init({
  selector: "textarea",
  height: 500,
  toolbar: "mybutton",
  plugins: 'wordcount',
  menubar: false,
    content_css: [
    '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
    '//www.tiny.cloud/css/codepen.min.css'],
  
  setup: function(editor) {
    editor.addButton('mybutton', {
      type: 'splitbutton',
      text: 'My button',
      icon: false,
      onclick: function() {
        editor.insertContent('&nbsp;<strong>You clicked the button!</strong>');
      },
      menu: [{
        text: 'Menu item 1',
        onclick: function() {
          editor.insertContent('&nbsp;<em>You clicked menu item 1!</em>');
        }
      }, {
        text: 'Menu item 2',
        onclick: function() {
          editor.insertContent('&nbsp;You clicked menu item 2!');
        }
      }]
    });
  }
});
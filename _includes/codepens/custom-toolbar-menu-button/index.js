tinymce.init({
  selector: 'textarea',
  height: 500,
  toolbar: 'mybutton',
  menubar: false,
    content_css: [
    '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
    '//www.tiny.cloud/css/codepen.min.css'],
  
  setup: function(editor) {
    editor.ui.registry.addButton('mybutton', {
      type: 'menubutton',
      text: 'My button',
      icon: false,
      menu: [{
        text: 'Menu item 1',
        onclick: function() {
          editor.insertContent('&nbsp;<strong>Menu item 1 text inserted here!</strong>&nbsp;');
        }
      }, {
        text: 'Menu item 2',
        menu: [{
          text: 'Submenu item 1',
          onclick: function() {
            editor.insertContent('&nbsp;<em>Submenu item 1 text inserted here!</em>&nbsp;');
          }
        }]
      }]
    });
  }
});
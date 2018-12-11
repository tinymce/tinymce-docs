tinymce.init({
  selector: 'textarea',
  height: 500,
  toolbar: 'mybutton',
  plugins: 'wordcount',
  menubar: false,
  content_css: [
    '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
    '//www.tiny.cloud/css/codepen.min.css'
  ],

  setup: function (editor) {
    editor.addButton('mybutton', {
      type: 'listbox',
      text: 'My listbox',
      icon: false,
      onselect: function (e) {
        editor.insertContent(this.value());
      },
      values: [
        { text: 'Menu item 1', value: '&nbsp;<strong>Some bold text!</strong>' },
        { text: 'Menu item 2', value: '&nbsp;<em>Some italic text!</em>' },
        { text: 'Menu item 3', value: '&nbsp;Some plain text ...' }
      ],
      onPostRender: function () {
        /* Select the second item by default */
        this.value('&nbsp;<em>Some italic text!</em>');
      }
    });
  }
});
tinymce.init({
  selector: 'textarea#custom-toolbar-split-button',
  height: 620,
  plugins: [
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'myButton | undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
  setup: (editor) => {
    editor.ui.registry.addSplitButton('myButton', {
      text: 'My Button',
      icon: 'info',
      tooltip: 'Execute my action',
      chevronTooltip: 'My Button menu options',
      onAction: () => editor.insertContent('<p>You clicked the main button</p>'),
      onItemAction: (api, value) => editor.insertContent(value),
      fetch: (callback) => {
        const items = [
          {
            type: 'choiceitem',
            icon: 'notice',
            text: 'Menu item 1',
            value: '&nbsp;<em>You clicked menu item 1!</em>'
          },
          {
            type: 'choiceitem',
            icon: 'warning',
            text: 'Menu item 2',
            value: '&nbsp;<em>You clicked menu item 2!</em>'
          }
        ];
        callback(items);
      }
    });
  },
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css']
});

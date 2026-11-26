tinymce.init({
  selector: 'textarea#custom-menu-item',
  height: 600,
  plugins: [
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
  menubar: 'file edit view insert format tools table custom help',
  menu: {
    custom: { title: 'Custom menu', items: 'basicitem nesteditem toggleitem' }
  },
  setup: (editor) => {
    let toggleState = false;

    editor.ui.registry.addMenuItem('basicitem', {
      text: 'My basic menu item',
      onAction: () => editor.insertContent(`<p>Here's some content inserted from a basic menu!</p>`)
    });

    editor.ui.registry.addNestedMenuItem('nesteditem', {
      text: 'My nested menu item',
      getSubmenuItems: () => [
        {
          type: 'menuitem',
          text: 'My submenu item',
          onAction: () => editor.insertContent(`<p>Here's some content inserted from a submenu item!</p>`)
        }
      ]
    });

    editor.ui.registry.addToggleMenuItem('toggleitem', {
      text: 'My toggle menu item',
      onAction: () => {
        toggleState = !toggleState;
        editor.insertContent(`<p class="toggle-item">Here's some content inserted from a toggle menu!</p>`);
      },
      onSetup: (api) => {
        api.setActive(toggleState);
        return () => {};
      }
    });
  },
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css']
});

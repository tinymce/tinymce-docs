// Load custom icon pack inline (for live demo compatibility)
tinymce.IconManager.add('my-icon-pack', {
  icons: {
      'audio': '<svg width="24" height="24"><path d="M10.8 19q.9 0 1.5-.7t.7-1.5V13h3v-2h-4v3.9l-.6-.3-.6-.1q-1 0-1.7.7t-.6 1.6q0 .9.7 1.5t1.6.7ZM6 22q-.8 0-1.4-.6T4 20V4q0-.8.6-1.4T6 2h8l6 6v12q0 .8-.6 1.4T18 22H6Zm7-13h5l-5-5v5Z"/></svg>',
      'bold': '<svg width="24" height="24"><path fill-rule="evenodd" d="M3.6 2.3a1.4 1.4 0 0 0-1.4 1.3v16.8c0 .7.7 1.4 1.4 1.4h16.8a1.4 1.4 0 0 0 1.4-1.4V3.6a1.4 1.4 0 0 0-1.4-1.3H3.6Zm6 4a1.4 1.4 0 0 0-1.3 1.3v9.3c0 .7.6 1.4 1.3 1.4H12v-.8.8a2.5 2.5 0 0 0 .2 0 4.6 4.6 0 0 0 1.6-.5c.5-.2 1-.5 1.3-1 .4-.5.7-1.2.7-2 0-.9-.3-1.6-.7-2a3.2 3.2 0 0 0-.8-.9 2.8 2.8 0 0 0 .4-.5c.4-.5.5-1.1.5-1.9s-.1-1.4-.5-1.9a3 3 0 0 0-1.1-1 3.9 3.9 0 0 0-1.6-.3H9.6Zm.1 6.5H12a3.2 3.2 0 0 1 1.2.2l.7.6c.2.2.4.6.4 1.1s-.2 1-.4 1.2a1.8 1.8 0 0 1-.7.6 3.2 3.2 0 0 1-1.1.2H9.7v-4Zm2.3 4Zm0-5.6H9.7V7.8H12l1 .2.5.5c.1.2.3.5.3 1s-.2.8-.3 1a1.4 1.4 0 0 1-.6.5 2.3 2.3 0 0 1-.9.2Z" clip-rule="evenodd"/></svg>',
      'italic': '<svg width="24" height="24"><path fill-rule="evenodd" d="M3.6 2.3a1.4 1.4 0 0 0-1.4 1.3v16.8c0 .7.7 1.4 1.4 1.4h16.8a1.4 1.4 0 0 0 1.4-1.4V3.6a1.4 1.4 0 0 0-1.4-1.3H3.6ZM16 6.8h-1.5L11 17.1h1a.8.8 0 0 1 0 1.6H8a.8.8 0 0 1 0-1.6h1.5L13 6.8h-1a.8.8 0 0 1 0-1.5h4a.8.8 0 0 1 0 1.5Z" clip-rule="evenodd"/></svg>',
  }
});

// Default Icons Editor
tinymce.init({
selector: '#default-editor',
icons: 'material', // use material icon pack
plugins: 'lists link image code',
toolbar: 'undo redo | bold italic underline | bullist numlist | link image code',
height: 500,
// license_key: 'gpl'
});

// Custom Icons Editor
tinymce.init({
selector: '#custom-editor',
icons: 'my-icon-pack',
plugins: 'lists link image code',
toolbar: 'undo redo | myButton1 myButton2 myButton3 | bullist numlist | link image code',
height: 500,
setup: (editor) => {
  editor.ui.registry.addButton('myButton1', {
    icon: 'bold',    // the 'bold' icon created from 'bold.svg'
    onAction: (_) => {
      editor.insertContent('&nbsp;<strong>It\'s my custom bold icon button!</strong>&nbsp;');
    }
  });
  editor.ui.registry.addButton('myButton2', {
    icon: 'italic',    // the 'italic' icon created from 'italic.svg'
    onAction: (_) => {
      editor.insertContent('&nbsp;<strong>It\'s my custom italic icon button!</strong>&nbsp;');
    }
  });
  editor.ui.registry.addButton('myButton3', {
    icon: 'audio',    // the 'audio' icon created from 'audio.svg'
    onAction: (_) => {
      editor.insertContent('&nbsp;<strong>It\'s my custom audio icon button!</strong>&nbsp;');
    }
  });
}
});

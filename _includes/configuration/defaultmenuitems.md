```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  menu: {
    file: { title: 'File', items: 'newdocument restoredraft | preview | print ' },
    edit: { title: 'Edit', items: 'undo redo | cut copy paste | selectall | searchreplace' },
    view: { title: 'View', items: 'code | visualaid visualchars visualblocks | spellchecker | preview fullscreen' },
    insert: { title: 'Insert', items: 'image link media template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor toc | insertdatetime' },
    format: { title: 'Format', items: 'bold italic underline strikethrough superscript subscript codeformat | formats blockformats fontformats fontsizes align lineheight | forecolor backcolor | removeformat' },
    tools: { title: 'Tools', items: 'spellchecker spellcheckerlanguage | code wordcount' },
    table: { title: 'Table', items: 'inserttable | cell row column | tableprops deletetable' },
    help: { title: 'Help', items: 'help' }
  }
});
```
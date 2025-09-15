tinymce.init({
    selector: '#advlist-demo',
    plugins: [
        'advlist', 'anchor', 'autolink', 'charmap', 'code', 'fullscreen',
        'help', 'image', 'insertdatetime', 'link', 'lists', 'media',
        'preview', 'searchreplace', 'table', 'visualblocks', 'wordcount'
    ],
    toolbar: 'undo redo | styles | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | code | fullscreen | help',
    menubar: 'file edit view insert format tools table help',
    height: 600,

    setup: (editor) => {
      editor.ui.registry.addContextToolbar('textselection', {
        predicate: () => !editor.selection.isCollapsed(),
        items: 'bullist numlist',
        position: 'selection', // 'selection' | 'node' | 'line'
        scope: 'node'
      });
    }
});

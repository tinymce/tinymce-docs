tinymce.init({
    selector: 'textarea#autocorrect',
    plugins: 'autocorrect',
    menu: {
      autocorrect: { title: 'Autocorrect', items: 'autocorrect capitalization' }
    },
    menubar: 'autocorrect',
    autocorrect_autocorrect: true,
    autocorrect_capitalize: true
});
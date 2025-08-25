tinymce.init({
    selector: 'textarea#autoresize',
    plugins: "autoresize lists code",
    toolbar: 'undo redo | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent',
    // Autoresize options
    min_height: 100,
    max_height: 400,
    autoresize_bottom_margin: 20,
    autoresize_overflow_padding: 10,
  });
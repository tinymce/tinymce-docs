tinymce.init({
  selector: 'textarea#editable-class',
  height: 500,
  content_style: `
  body { font-family:Helvetica,Arial,sans-serif; font-size:16px }
  .editable { border: 0.1rem solid green; border-radius: 0.8rem; padding: 0.2rem; }
  `,
  editable_root: false,
  editable_class: 'editable',
});

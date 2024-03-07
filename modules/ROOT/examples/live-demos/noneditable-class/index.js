tinymce.init({
  selector: 'textarea#noneditable-class',
  height: 500,
  content_style: `
  body { font-family:Helvetica,Arial,sans-serif; font-size:16px }
  .myclass { border: 0.1rem solid green; border-radius: 0.8rem; padding: 0.2rem; }
  .non-editable { border-color: red; }
  `,
  noneditable_class: 'non-editable',
});

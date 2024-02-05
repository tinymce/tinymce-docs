tinymce.init({
  selector: 'textarea#noneditable-regexp',
  height: 500,
  content_style: `
  body { font-family:Helvetica,Arial,sans-serif; font-size:16px }
  .green { border: 0.1rem solid green; border-radius: 0.8rem; padding: 0.2rem; }
  .red * { border: 0.1rem solid red; border-radius: 0.8rem; padding: 0.2rem; }
  `,
  noneditable_regexp: /apikey|\d{3}-\d{3}-\d{3}/g,
});

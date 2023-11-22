tinymce.init({
  selector: "textarea#advanced-template-mce-clipboard",
  plugins: [ "advtemplate", ],
  toolbar: "undo redo | inserttemplate",
  advtemplate_templates: [
    {
      title: 'Without an mce-clipboard marker',
      content: '<p>Your clipboard content will <strong>not be inserted</strong> after this marker</p><p><em> or before this marker when using mce-clipboard new advanced template paste feature.</em></p>'
    },
    {
      title: 'With an mce-clipboard marker',
      content: '<p>Your clipboard content will <strong>be inserted</strong> after this marker {{mce-clipboard}} </p><p><em> and, before this marker when using mce-clipboard new advanced template paste feature.</em></p>'
    }
  ],
});
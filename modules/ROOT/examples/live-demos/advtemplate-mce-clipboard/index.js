tinymce.init({
  selector: "textarea#advanced-template-mce-clipboard",
  plugins: [ "advtemplate", ],
  toolbar: "undo redo | inserttemplate",
  advtemplate_templates: [
    {
      title: 'Without an mce-clipboard marker',
      items: [
        {
          title: 'Paste your clipboard',
          content: '<p><strong>Paste your content here:</strong></p><p><em> using mce-clipboard new advanced template paste feature.</em></p>'
        },
      ],
    },
    {
      title: 'With an mce-clipboard marker',
      items: [
        {
          title: 'Paste your clipboard',
          content: '<p><strong>Paste your content here:</strong>{{mce-clipboard}}</p><p><em> using mce-clipboard new advanced template paste feature.</em></p>'
        },
      ],
    },
  ],
});
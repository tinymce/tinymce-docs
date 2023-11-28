tinymce.init({
  selector: "textarea#advanced-template-mce-clipboard",
  plugins: [ "advtemplate", "code", "help"],
  toolbar: "undo redo | inserttemplate",
  advtemplate_templates: [
    {
      title: 'Without an mce-clipboard marker',
      content: '<p>Hi , Thank you for visiting this page. We truly appreciate and value your feedback and any feature requests you may have While you are here, take a moment to explore mce-cursor, its another powerful tool designed for Advanced Templates</p>'
    },
    {
      title: 'With an mce-clipboard marker',
      content: '<p>Hi {\{mce-clipboard\}}, Thank you for visiting this page. We truly appreciate and value your feedback and any feature requests you may have While you are here, take a moment to explore mce-cursor {\{mce-clipboard\}}, its another powerful tool designed for Advanced Templates</p>'
    }
  ],
});
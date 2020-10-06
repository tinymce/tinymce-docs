tinymce.init({
  selector: 'textarea#template',
  height: 600,
  plugins: 'template',
  menubar: 'insert',
  toolbar: 'template',
  template_mdate_format: '%m/%d/%Y : %H:%M',
  template_replace_values: {
    username: 'Jack Black',
    staffid: '991234',
    inboth_username: 'Famous Person',
    inboth_staffid: '2213',
  },
  template_preview_replace_values: {
    preview_username: 'Jack Black',
    preview_staffid: '991234',
    inboth_username: 'Famous Person',
    inboth_staffid: '2213',
  },
  templates : [
    {
      title: 'Date modified example',
      description: 'Adds a timestamp indicating the last time the document modified.',
      content: '<p>Last Modified: <time class="mdate">This will be replaced with the date modied.</time></p>'
    },
    {
      title: 'Replace values example',
      description: 'These values will be replaced when the template is inserted into the editor content.',
      content: '<p>Name: {$username}, StaffID: {$staffid}</p>'
    },
    {
      title: 'Replace values preview example',
      description: 'These values are replaced in the preview, but not when inserted into the editor content.',
      content: '<p>Name: {$preview_username}, StaffID: {$preview_staffid}</p>'
    },
    {
      title: 'Replace values preview and content example',
      description: 'These values are replaced in the preview, and in the content.',
      content: '<p>Name: {$inboth_username}, StaffID: {$inboth_staffid}</p>'
    }
  ],
  content_style: {{ site.liveDemoIframeCSSStyles }}
});

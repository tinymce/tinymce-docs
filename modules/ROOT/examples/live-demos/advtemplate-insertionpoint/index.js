tinymce.init({
  selector: 'textarea#template-insertionpoint',
  height: 640,
  plugins: [
    'advtemplate', 'mergetags',
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'inserttemplate | mergetags | undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'link table | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  advtemplate_templates: [
    {
      title: 'With an insertion point marker',
      items: [
        {
          title: 'Follow-up email',
          content: '<p>{{prefix}}Current.Date{{suffix}}</p><p>Hi {{prefix}}Prospect.FirstName{{suffix}},</p><p>{{prefix}}mce-cursor{{suffix}}&nbsp;</p><p>Best regards,</p><p>{{prefix}}Rep.Name{{suffix}}<br>{{prefix}}Rep.Title{{suffix}}<br>{{prefix}}Rep.Phone{{suffix}}</p>'
        },
        {
          title: 'Meeting notes',
          content: '<h2>Meeting notes</h2><table style="border-collapse: collapse; width: 100%;" border="1"><colgroup><col style="width: 30.9%;"><col style="width: 69.1%;"></colgroup><tbody><tr><th>Date</th><td>{{prefix}}Current.Date{{suffix}}</td></tr><tr><th>Attendees</th><td>{{prefix}}mce-cursor{{suffix}}&nbsp;</td></tr><tr><th>Recorded by</th><td>{{prefix}}Rep.Name{{suffix}}</td></tr></tbody></table><h3>Decisions</h3><ul><li>&nbsp;</li></ul><h3>Action items</h3><ul><li>&nbsp;</li></ul>'
        }
      ]
    },
    {
      title: 'Without an insertion point marker',
      items: [
        {
          title: 'Follow-up email',
          content: '<p>{{prefix}}Current.Date{{suffix}}</p><p>Hi {{prefix}}Prospect.FirstName{{suffix}},</p><p>&nbsp;</p><p>Best regards,</p><p>{{prefix}}Rep.Name{{suffix}}<br>{{prefix}}Rep.Title{{suffix}}<br>{{prefix}}Rep.Phone{{suffix}}</p>'
        },
        {
          title: 'Meeting notes',
          content: '<h2>Meeting notes</h2><table style="border-collapse: collapse; width: 100%;" border="1"><colgroup><col style="width: 30.9%;"><col style="width: 69.1%;"></colgroup><tbody><tr><th>Date</th><td>{{prefix}}Current.Date{{suffix}}</td></tr><tr><th>Attendees</th><td>&nbsp;</td></tr><tr><th>Recorded by</th><td>{{prefix}}Rep.Name{{suffix}}</td></tr></tbody></table><h3>Decisions</h3><ul><li>&nbsp;</li></ul><h3>Action items</h3><ul><li>&nbsp;</li></ul>'
        }
      ]
    }
  ],
  mergetags_list: [
    { value: 'Current.Date', title: 'Current date' },
    {
      title: 'Prospect',
      menu: [
        { value: 'Prospect.FirstName', title: 'First name' },
        { value: 'Prospect.LastName', title: 'Last name' },
        { value: 'Prospect.Company', title: 'Company' }
      ]
    },
    {
      title: 'Sales rep',
      menu: [
        { value: 'Rep.Name', title: 'Full name' },
        { value: 'Rep.Title', title: 'Job title' },
        { value: 'Rep.Phone', title: 'Phone number' }
      ]
    }
  ]
});

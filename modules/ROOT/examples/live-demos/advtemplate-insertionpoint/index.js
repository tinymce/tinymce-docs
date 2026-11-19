tinymce.init({
  selector: 'textarea#template-insertionpoint',
  height: 640,
  plugins: 'advtemplate mergetags lists link advlist autolink image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table help wordcount',
  toolbar: 'inserttemplate | mergetags | undo redo | blocks | bold italic | ' +
    'bullist numlist | link | backcolor | ' +
    'alignleft aligncenter alignright alignjustify | outdent indent | ' +
    'removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  advtemplate_templates: [
    {
      title: 'With an insertion point marker',
      items: [
        {
          title: 'Customer letter',
          content: '<p>{{prefix}}Current.Date{{suffix}}</p><p>Dear {{prefix}}Customer.Honorific{{suffix}} {{prefix}}Customer.LastName{{suffix}},</p><p>{{prefix}}mce-cursor{{suffix}}&nbsp;</p><p>Kind regards,</p><p>{{prefix}}Staff.Name{{suffix}}<br>{{prefix}}Staff.Title{{suffix}}<br>{{prefix}}Staff.Email{{suffix}}</p>'
        },
        {
          title: 'Meeting notes',
          content: '<h2>Meeting notes</h2><table><tbody><tr><th>Date</th><td>{{prefix}}Current.Date{{suffix}}</td></tr><tr><th>Attendees</th><td>{{prefix}}mce-cursor{{suffix}}&nbsp;</td></tr><tr><th>Recorded by</th><td>{{prefix}}Staff.Name{{suffix}}</td></tr></tbody></table><h3>Decisions</h3><ul><li>&nbsp;</li></ul><h3>Action items</h3><ul><li>&nbsp;</li></ul>'
        }
      ]
    },
    {
      title: 'Without an insertion point marker',
      items: [
        {
          title: 'Customer letter',
          content: '<p>{{prefix}}Current.Date{{suffix}}</p><p>Dear {{prefix}}Customer.Honorific{{suffix}} {{prefix}}Customer.LastName{{suffix}},</p><p>&nbsp;</p><p>Kind regards,</p><p>{{prefix}}Staff.Name{{suffix}}<br>{{prefix}}Staff.Title{{suffix}}<br>{{prefix}}Staff.Email{{suffix}}</p>'
        },
        {
          title: 'Meeting notes',
          content: '<h2>Meeting notes</h2><table><tbody><tr><th>Date</th><td>{{prefix}}Current.Date{{suffix}}</td></tr><tr><th>Attendees</th><td>&nbsp;</td></tr><tr><th>Recorded by</th><td>{{prefix}}Staff.Name{{suffix}}</td></tr></tbody></table><h3>Decisions</h3><ul><li>&nbsp;</li></ul><h3>Action items</h3><ul><li>&nbsp;</li></ul>'
        }
      ]
    }
  ],
  mergetags_list: [
    { value: 'Current.Date', title: 'Current date' },
    {
      title: 'Customer',
      menu: [
        { value: 'Customer.Honorific', title: 'Honorific' },
        { value: 'Customer.FirstName', title: 'First name' },
        { value: 'Customer.LastName', title: 'Last name' }
      ]
    },
    {
      title: 'Staff',
      menu: [
        { value: 'Staff.Name', title: 'Full name' },
        { value: 'Staff.Title', title: 'Job title' },
        { value: 'Staff.Email', title: 'Email address' }
      ]
    }
  ]
});

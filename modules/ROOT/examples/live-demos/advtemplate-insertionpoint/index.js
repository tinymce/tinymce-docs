tinymce.init({
  selector: "textarea#advanced-template-insertionpoint",
  plugins: [ "advtemplate", "mergetags", ],
  toolbar: "inserttemplate | mergetags",
  advtemplate_templates: [
    {
      title: 'Without an insertion point marker',
      items: [
        {
          title: 'Name entry prompt',
          content: '<p><strong>Enter your name:</strong></p><p><em>Include both your given and family names, in your preferred order.</em></p>'
        },
        {
          title: 'Letter outline',
          content: '<p>{{Current.Date}}</p><p>{{Honorific}} {{Person.Name.Last}},</p><p></p><p>&nbsp;</p><p>Regards,</p><p>{{staff.digital.signature}}</p><p>{{Staff.Name}}</p><p>{{Staff.Email}}</p>'
        },
      ],
    },
    {
      title: 'With an insertion point marker',
      items: [
        {
          title: 'Name entry prompt',
          content: '<p><strong>Enter your name:</strong>{{mce-cursor}}</p><p><em>Include both your given and family names, in your preferred order.</em></p>'
        },
        {
          title: 'Letter outline',
          content: '<p>{{Current.Date}}</p><p>{{Honorific}} {{Person.Name.Last}},</p><p>{{mce-cursor}}&nbsp;</p><p>Regards,</p><p>{{staff.digital.signature}}</p><p>{{Staff.Name}}</p><p>{{Staff.Email}}</p>'
        },
      ],
    },
  ],
  mergetags_list: [
    {
      value: 'Current.Date',
      title: 'Current date in DD/MM/YYYY format'
    },
    {
      value: 'Current.Time',
    },
    {
      value: 'Honorific',
    },
    {
      title: 'Person',
      menu: [
        {
          value: 'Customer.Name.Given',
          title: 'customer first name'
        },
        {
          value: 'Customer.Name.Family',
          title: 'customer family name'
        },
        {
          value: 'Customer.Name.Full',
          title: 'customer full name'
        },
        {
          value: 'Staff.Name.Full',
          title: 'staff full name'
        },
        {
          value: 'Staff.Digital.Signature',
          title: 'staff digital signaure'
        },
        {
          title: 'Email',
          menu: [
            {
              value: 'Customer.Email'
            },
            {
              value: 'Staff.Email'
            }
          ]
        }
      ]
    }
  ]
});
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
          content: '<p>{{prefix}}Current.Date{{suffix}}</p><p>{{prefix}}Honorific{{suffix}} {{prefix}}Person.Name.Last{{suffix}},</p><p></p><p>&nbsp;</p><p>Regards,</p><p>{{prefix}}staff.digital.signature{{suffix}}</p><p>{{prefix}}Staff.Name{{suffix}}</p><p>{{prefix}}Staff.Email{{suffix}}</p>'
        },
      ],
    },
    {
      title: 'With an insertion point marker',
      items: [
        {
          title: 'Name entry prompt',
          content: '<p><strong>Enter your name:</strong>{{prefix}}mce-cursor{{suffix}}</p><p><em>Include both your given and family names, in your preferred order.</em></p>'
        },
        {
          title: 'Letter outline',
          content: '<p>{{prefix}}Current.Date{{suffix}}</p><p>{{prefix}}Honorific{{suffix}} {{prefix}}Person.Name.Last{{suffix}},</p><p>{{prefix}}mce-cursor{{suffix}}&nbsp;</p><p>Regards,</p><p>{{prefix}}staff.digital.signature{{suffix}}</p><p>{{prefix}}Staff.Name{{suffix}}</p><p>{{prefix}}Staff.Email{{suffix}}</p>'
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

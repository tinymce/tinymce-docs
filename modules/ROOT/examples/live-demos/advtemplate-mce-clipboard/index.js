tinymce.init({
  selector: 'textarea#template-mce-clipboard',
  height: 600,
  plugins: [
    'advtemplate',
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'inserttemplate | undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'link table | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  advtemplate_templates: [
    {
      title: 'With an mce-clipboard marker',
      items: [
        {
          title: 'Showing confirmation',
          content: '<p>Hi Priya,</p><p>Thank you for your interest in {{prefix}}mce-clipboard{{suffix}}. The home is still available, and showings run on Saturday and Sunday between 10:00 AM and 4:00 PM.</p><p>To book a time, reply with two preferred times, or schedule a showing from the listing page for {{prefix}}mce-clipboard{{suffix}}.</p><p>Kind regards,<br>Jordan Reyes<br>Harbor Point Realty, (555) 010-0142</p>'
        },
        {
          title: 'Showing log entry',
          content: '<table style="border-collapse: collapse; width: 100%;" border="1"><colgroup><col style="width: 23.8%;"><col style="width: 76.2%;"></colgroup><tbody><tr><th>Property</th><td>{{prefix}}mce-clipboard{{suffix}}</td></tr><tr><th>Status</th><td>Showing requested</td></tr><tr><th>Next step</th><td>Confirm a weekend showing within one business day</td></tr></tbody></table>'
        }
      ]
    },
    {
      title: 'Without an mce-clipboard marker',
      items: [
        {
          title: 'Showing confirmation',
          content: '<p>Hi Priya,</p><p>Thank you for your interest in the property. The home is still available, and showings run on Saturday and Sunday between 10:00 AM and 4:00 PM.</p><p>To book a time, reply with two preferred times, or schedule a showing from the listing page.</p><p>Kind regards,<br>Jordan Reyes<br>Harbor Point Realty, (555) 010-0142</p>'
        }
      ]
    }
  ]
});

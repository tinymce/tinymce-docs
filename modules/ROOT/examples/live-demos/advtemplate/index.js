const advtemplate_templates = [
  {
    id: '1',
    title: 'Quick replies',
    items: [
      {
        id: '2',
        title: 'Message received',
        content: '<p dir="ltr">{{Customer.FirstName}}</p>\n<p dir="ltr">Just a quick note to say we&rsquo;ve received your message, and will get back to you within 48 hours.</p>\n<p dir="ltr">For reference, your ticket number is: {{Ticket.Number}}</p>\n<p dir="ltr">Should you have any questions in the meantime, just reply to this email and it will be attached to this ticket.</p>\n<p><strong>&nbsp;</strong></p>\n<p dir="ltr">Regards,</p>\n<p dir="ltr">{{Agent.FirstName}}</p>'
      },
      {
        id: '3',
        title: 'Thanks for the feedback',
        content: '<p dir="ltr">{{Customer.FirstName}},</p>\n<p dir="ltr">We appreciate you taking the time to provide feedback on {{Product.Name}}.</p>\n<p dir="ltr">It sounds like it wasn&rsquo;t able to fully meet your expectations, for which we apologize. Rest assured our team looks at each piece of feedback and uses it to decide what to focus on next with {{Product.Name}}.</p>\n<p dir="ltr"><strong>&nbsp;</strong></p>\n<p dir="ltr">All the best, and let us know if there&rsquo;s anything else we can do to help.</p>\n<p dir="ltr">-{{Agent.FirstName}}</p>'
      },
      {
        id: '6',
        title: 'Still working on case',
        content: '<p dir="ltr"><img src="https://lh4.googleusercontent.com/-H7w_COxrsy2fVpjO6RRnoBsujhaLyg6AXux5zidqmQ_ik1mrE6BtnaTUdWYQuVbtKpviRqQiuPBOHNGUsEXvrRliEHc4-hKDrCLgQQ9Co-MI4uY2ehUvYtU1nn3EeS0WiUzST-7MQB2Z5YFXrMDwRk" width="320" height="240"></p>\n<p><strong>&nbsp;</strong></p>\n<p dir="ltr">{{Customer.FirstName}},</p>\n<p dir="ltr">Just a quick note to let you know we&rsquo;re still working on your case. It&rsquo;s taking a bit longer than we hoped, but we&rsquo;re aiming to get you an answer in the next 48 hours.</p>\n<p dir="ltr">Stay tuned,</p>\n<p dir="ltr">{{Agent.FirstName}}</p>'
      }
    ]
  },
  {
    id: '4',
    title: 'Closing tickets',
    items: [
      {
        id: '7',
        title: 'Closing ticket',
        content: '<p dir="ltr">Hi {{Customer.FirstName}},</p>\n<p dir="ltr">We haven&rsquo;t heard back from you in over a week, so we have gone ahead and closed your ticket, {{Ticket.Number}}.</p>\n<p dir="ltr">If you&rsquo;re still running into issues, reply to this email and we will re-open the ticket.</p>\n<p><strong>&nbsp;</strong></p>\n<p dir="ltr">All the best,</p>\n<p dir="ltr">{{Agent.FirstName}}</p>'
      },
      {
        id: '8',
        title: 'Post-call survey',
        content: '<p dir="ltr">Hey {{Customer.FirstName}}!</p>\n<p dir="ltr">&nbsp;</p>\n<p dir="ltr">How did we do?</p>\n<p dir="ltr">If you have a few moments, we&rsquo;d love you to fill out our post-support survey: {{Survey.Link}}</p>\n<p><strong>&nbsp;</strong></p>\n<p dir="ltr">Thanks in advance!<br>{{Company.Name}} Customer Support</p>'
      }
    ]
  },
  {
    id: '5',
    title: 'Product support',
    items: [
      {
        id: '9',
        title: 'How to find the model number',
        content: '<p dir="ltr">{{Customer.FirstName}},</p>\n<p><strong>&nbsp;</strong></p>\n<p dir="ltr">My name is {{Agent.FirstName}} and I will be assisting you today.</p>\n<p dir="ltr">To troubleshoot your issue, we first need the model number</p>\n<p>This can be found on the underside of your product immediately below the safety warning label.&nbsp;</p>\n<p dir="ltr">It should look something like the following: XX.XXXXX.X</p>\n<p dir="ltr">Once you send it over, I will advise on the next steps.</p>\n<p><strong>&nbsp;</strong></p>\n<p dir="ltr">Thanks!</p>\n<p dir="ltr">{{Agent.FirstName}}</p>'
      },
      {
        id: '10',
        title: 'Support escalation',
        content: '<p dir="ltr"><img src="https://lh3.googleusercontent.com/z4hleIymnERrS9OQQMBwmkqVne8kYZA0Kly9Ny64pp4fi47CWWUy30Q0-UkjGf-K-50zrfR-wltHUTbExzZ7VUSUAUG60Fll5f2E0UZcKjKoa-ZVlIcuOoe-RRckFWqiihUOfVds7pXtM8Y59uy2hpw" width="295" height="295"></p>\n<p><strong>&nbsp;</strong></p>\n<p dir="ltr">{{Customer.FirstName}},</p>\n<p dir="ltr">We have escalated your ticket {{Ticket.Number}} to second-level support.</p>\n<p dir="ltr">You should hear back from the new agent on your case, {{NewAgent.FirstName}}, shortly.</p>\n<p><strong>&nbsp;</strong></p>\n<p dir="ltr">Thanks,</p>\n<p dir="ltr">{{Company.Name}} Customer Support</p>'
      }
    ]
  }
];

tinymce.init({
  selector: "textarea#advanced-template",
    plugins: [
        "advlist", "anchor", "autolink", "charmap", "code", "fullscreen", 
        "help", "image", "insertdatetime", "link", "lists", "media", 
        "preview", "searchreplace", "table", "visualblocks", "advtemplate"
    ],
	advtemplate_templates,
  toolbar: "addtemplate inserttemplate | undo redo | styles | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image"
  contextmenu: 'addtemplate',
});

const advtemplate_templates = [
  {
    title: 'Interviews',
    items: [
      {
        title: 'Interview invitation',
        content: '<p>Hi {{prefix}}Candidate.FirstName{{suffix}},</p><p>Thank you for applying for the {{prefix}}Role.Title{{suffix}} position. The hiring team would like to invite you to an interview.</p><table style="border-collapse: collapse; width: 100%;" border="1"><colgroup><col style="width: 22.6%;"><col style="width: 77.4%;"></colgroup><tbody><tr><th>Date</th><td>{{prefix}}Interview.Date{{suffix}}</td></tr><tr><th>Time</th><td>{{prefix}}Interview.Time{{suffix}}</td></tr><tr><th>Location</th><td>{{prefix}}Interview.Location{{suffix}}</td></tr><tr><th>Panel</th><td>{{prefix}}Role.HiringManager{{suffix}} and {{prefix}}Recruiter.Name{{suffix}}</td></tr></tbody></table><p>The interview takes about 45 minutes and has three parts:</p><ol><li>A short introduction to the {{prefix}}Role.Department{{suffix}} team.</li><li>A walkthrough of two recent projects from your portfolio.</li><li>Time for your questions about the role.</li></ol><p>Please reply to confirm the time, or to ask for a different one.</p><p>Kind regards,<br>{{prefix}}Recruiter.Name{{suffix}}</p>'
      },
      {
        title: 'Interview reschedule',
        content: '<p>Hi {{prefix}}Candidate.FirstName{{suffix}},</p><p>The interview for the {{prefix}}Role.Title{{suffix}} position needs to move. The new time is {{prefix}}Interview.Date{{suffix}} at {{prefix}}Interview.Time{{suffix}}, at the same location.</p><p>Apologies for the change, and please reply if the new time does not work.</p><p>Kind regards,<br>{{prefix}}Recruiter.Name{{suffix}}</p>'
      }
    ]
  },
  {
    title: 'Offers',
    items: [
      {
        title: 'Offer summary',
        content: '<h2>Offer of employment</h2><p>Dear {{prefix}}Candidate.FirstName{{suffix}} {{prefix}}Candidate.LastName{{suffix}},</p><p>Following the interview process, Ashbourne Design is pleased to offer you the position of {{prefix}}Role.Title{{suffix}} in the {{prefix}}Role.Department{{suffix}} team.</p><h3>Key terms</h3><ul><li>Start date: {{prefix}}Role.StartDate{{suffix}}</li><li>Annual salary: {{prefix}}Role.Salary{{suffix}}</li><li>Reports to: {{prefix}}Role.HiringManager{{suffix}}</li><li>Paid time off: 20 days, plus 11 company holidays</li></ul><h3>Next steps</h3><ol><li>Sign and return the attached offer letter.</li><li>Complete the background check form.</li><li>Choose a laptop from the equipment list.</li></ol><p>Kind regards,<br>{{prefix}}Recruiter.Name{{suffix}}</p>'
      },
      {
        title: 'Offer accepted',
        content: '<p>Hi {{prefix}}Candidate.FirstName{{suffix}},</p><p>Welcome to the {{prefix}}Role.Department{{suffix}} team. The signed offer letter has been received, and the onboarding pack will arrive two weeks before {{prefix}}Role.StartDate{{suffix}}.</p><p>Kind regards,<br>{{prefix}}Recruiter.Name{{suffix}}</p>'
      }
    ]
  },
  {
    title: 'Application outcomes',
    items: [
      {
        title: 'Application received',
        content: '<p>Hi {{prefix}}Candidate.FirstName{{suffix}},</p><p>Thank you for applying for the {{prefix}}Role.Title{{suffix}} position. Applications close at the end of the month, and every applicant will hear back within two weeks after that.</p><p>Kind regards,<br>{{prefix}}Recruiter.Name{{suffix}}</p>'
      },
      {
        title: 'Not shortlisted',
        content: '<p>Hi {{prefix}}Candidate.FirstName{{suffix}},</p><p>Thank you for your interest in the {{prefix}}Role.Title{{suffix}} position. After reviewing all applications, the hiring team has decided not to progress your application on this occasion.</p><p>Your details will be kept on file for twelve months, and the team may be in touch about future roles.</p><p>Kind regards,<br>{{prefix}}Recruiter.Name{{suffix}}</p>'
      }
    ]
  }
];

const mergetags_list = [
  {
    title: 'Candidate',
    menu: [
      { value: 'Candidate.FirstName', title: 'First name' },
      { value: 'Candidate.LastName', title: 'Last name' }
    ]
  },
  {
    title: 'Role',
    menu: [
      { value: 'Role.Title', title: 'Job title' },
      { value: 'Role.Department', title: 'Department' },
      { value: 'Role.HiringManager', title: 'Hiring manager' },
      { value: 'Role.StartDate', title: 'Start date' },
      { value: 'Role.Salary', title: 'Salary' }
    ]
  },
  {
    title: 'Interview',
    menu: [
      { value: 'Interview.Date', title: 'Date' },
      { value: 'Interview.Time', title: 'Time' },
      { value: 'Interview.Location', title: 'Location' }
    ]
  },
  { value: 'Recruiter.Name', title: 'Recruiter name' }
];

tinymce.init({
  selector: 'textarea#template-predefined',
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
  mergetags_list,
  advtemplate_templates
});

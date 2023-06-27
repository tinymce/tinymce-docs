tinymce.init({
  selector: 'textarea#template-creation',
  plugins: 'anchor autolink link lists image code advcode mergetags wordcount',
  toolbar: 'undo redo | blocks | bold italic strikethrough backcolor | link image | align bullist numlist | code | mergetags',
  height: 900,
  editable_root: false,
  editable_class: 'editable',
  content_css: 'styles.css',
  elementpath: false,
  newdocument_content: '<section class="cover"><header><img src="images/template-document-logo_2x.png" alt="demo document logo with triangle shapes" width="160" height="106"></header><main class="editable"><h1>Project proposal template</h1><p>{{client.givenname}} {{client.familyname}}</p><p>{{client.company}}</p></main><footer><p><small>Confidential</small></p></footer></section><section><main class="editable"><h1>Executive summary</h1><p>{{client.company}} has requested assistance with asserting, building and implementing X which may include</p><ul><li>Deliverable 1</li><li>Deliverable 2</li><li>Deliverable 3</li></ul><p>Our team has significant experience in your industry and has a successful track record with similar clients and projects. We pride ourselves on delivering only the best results for our clients so that they see an increase in productivity that has lasting results for their business.</p><p>{{submission.date}}</p></main></section><section><main class="editable"><h1>Process</h1><p>We work closely with you to build and fulfill the project’s needs by {{completion.date}}.</p><p>We do this by establishing clear goals and a comprehensive solution based on {{client.company}}’s needs.</p><p>Our process is as follows.</p><h2>Phase 1: initial consultation</h2><p>Our expert team reviews any and all project-related systems and determines:<p><ul><li>existing pain points; and</li><li>existing leverage opportunities.</li></ul><p>Based on this initial consultation we develop a solutions list.</p><h2>Phase 2: solution model</h2><p>Working with your team we implement the selected solution.</p><p>This allows us to tailor the solution specifically for {{client.company}}’s needs, ensuring the solution does not include services you do not need and should not pay for.</p><h2>Phase 3: implementation</h2><p>Once we have agreed on a solution, our team implements the project plan.</p><p>We will first deliver a detailed outline of the plan with a timeline that includes and all relevant due dates and deliverables.</p></main></section><section class="end"><main class="editable"><p><span style="font-size: 20px;">Acme Projects have been helping customers for over 20 years. Since the beginning the focus has always been quality and delivery. Over six thousand customers over 4 continents, Acme is there for you, when you need it.</span></p><p>&nbsp;</p><p><span style="font-size: 20px;">Please reach out to our region associates for any inquiries</span></p><p>&nbsp;</p><p>&nbsp;</p><p><img src="images/template-document-fredrik_2x.png" alt="profile picture of one staff member" width="84" height="84"></p><p>Fredrik Danielsson <br>+46 70 4454452 <br><a href="mailto:fredrik.danielsson@example.com">fredrik.danielsson@example.com</a></p><p>&nbsp;</p><p><img src="images/template-document-viola_2x.png" alt="profile picture of a second staff member" width="84" height="84"></p><p>Viola From <br>046 70 4454462 <br><a href="mailto:viola.from@example.com">viola.from@example.com</a></p></main></section>',
mergetags_prefix: '{{',
mergetags_suffix: '}}',
mergetags_list: [
  {
    title: 'Client',
    menu: [
          {
            value: 'client.givenname',
            title: 'Given name'
          },
          {
            value: 'client.familyname',
            title: 'Family name'
          },
          {
            value: 'client.company',
            title: 'Company'
          }
          ]
  },
  {
    title: 'Schedule',
    menu: [
          {
            value: 'submission.date',
            title: 'Submission date'
          },
          {
            value: 'completion.date',
            title: 'Completion date'
          }
          ]
  },
],
});

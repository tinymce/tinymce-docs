const content_style = `

/* In a more typical environment this constant would be a file, style.css,
   referenced in the tinymce.init configuration with the content_css option. */

body {
  background-color: #f0eeee;
}

section {
  padding: 4rem 4rem 1rem;
  box-sizing: border-box;
  max-width: 1050px;
  min-width: 720px;
  min-height: 600px;
  margin: 2rem auto;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  background-image: url("{{imagesdir}}/ie-template-creation/template-document-body-landscape_2x.png");
  background-size: 100%;
  background-position: right bottom;
  background-repeat: no-repeat;
  display: grid;
  grid-template-columns: auto 220px;
  grid-template-rows: auto 60px;
  column-gap: 2rem;
  row-gap: 1rem;
}

section header,
section aside {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
}

section main {
  position: relative;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

section footer {
  grid-column: 1 / 3;
  grid-row: 2 / 3;
}

section main:empty::before,
section main:has(> br[data-mce-bogus]:first-child)::before {
  content: "Write something...";
  position: absolute;
  top: 0;
  left: 0;
  color: #999;
}

section main > * {
  margin: 0;
}

section main > * + * {
  margin-top: .5rem;
}

section.cover {
  background-color: #fed330;
  background-image: url("{{imagesdir}}/ie-template-creation/template-document-cover-landscape_2x.png");
  background-size: cover;
  background-position: right bottom;
  background-repeat: no-repeat;
}

section.cover main {
  align-self: center;
}

section.cover h1 {
  font-weight: 900;
  font-size: 5rem;
  letter-spacing: -1px;
  line-height: 1em;
  margin-bottom: 2.5rem;
}

section.end {
  background-color: #2C3A47;
  background-image: url("{{imagesdir}}/ie-template-creation/template-document-end-landscape_2x.png");
  background-size: 100%;
  background-position: right bottom;
  background-repeat: no-repeat;
  color: #C0C4C8;
}

section.end  a {
  color: #fff;
}

.editable:hover:not(:focus) {
  outline: 3px solid #b4d7ff;
  outline-offset: 8px;
}

.editable:focus {
  outline: none;
}
`;

tinymce.init({
  selector: 'textarea#template-creation',
  height: 900,
  plugins: [
    'mergetags',
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'advcode', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'mergetags | undo redo | blocks | ' +
    'bold italic strikethrough backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'link image | code | removeformat | help',
  editable_root: false,
  editable_class: 'editable',
  content_style,
  elementpath: false,
  newdocument_content: '<section class="cover"><header><img src="{{imagesdir}}/ie-template-creation/template-document-logo_2x.png" alt="Riverside Farmers Market logo: a white triangle and circle on a yellow background" width="160" height="106"></header><main class="editable"><h1>Vendor agreement</h1><p>*{vendor.givenname}* *{vendor.familyname}*</p><p>*{vendor.business}*</p></main><footer><p><small>Riverside Farmers Market, season 2027</small></p></footer></section><section><main class="editable"><h1>Welcome to the market</h1><p>Thank you for applying to sell at Riverside Farmers Market. This agreement confirms a weekly stall for *{vendor.business}* from *{season.opening}* until the last market day in October.</p><p>Each stall includes:</p><ul><li>A 10-by-10-foot space on the paved plaza</li><li>Access to shared electrical outlets and handwashing stations</li><li>A listing on the market website and printed map</li></ul><p>Stall fee: $35 per market day, invoiced monthly.</p><p>Application received: *{application.date}*</p></main></section><section><main class="editable"><h1>Market day rules</h1><h2>Setup</h2><p>Vendors arrive between 6:30 AM and 7:30 AM. Vehicles must leave the plaza by 7:45 AM, before the market opens at 8 AM.</p><h2>During market hours</h2><ul><li>Display prices clearly on every product.</li><li>Sell only products grown, raised, or made by *{vendor.business}*.</li><li>Keep tent weights of at least 25 pounds on each leg.</li></ul><h2>Pack-down</h2><p>The market closes at 1 PM. Leave the stall clean and take all waste with you.</p></main></section><section class="end"><main class="editable"><p><span style="font-size: 20px;">Riverside Farmers Market has brought local growers and shoppers together every Saturday since 2009.</span></p><p><span style="font-size: 20px;">Contact the market team with any questions about this agreement.</span></p><p><img src="{{imagesdir}}/ie-template-creation/template-document-fredrik_2x.png" alt="Portrait of Fredrik Danielsson" width="84" height="84"></p><p>Fredrik Danielsson, market manager<br>(555) 010-0174<br><a href="mailto:fredrik.danielsson@example.com">fredrik.danielsson@example.com</a></p><p><img src="{{imagesdir}}/ie-template-creation/template-document-viola_2x.png" alt="Portrait of Viola From" width="84" height="84"></p><p>Viola From, vendor coordinator<br>(555) 010-0175<br><a href="mailto:viola.from@example.com">viola.from@example.com</a></p></main></section>',
  mergetags_prefix: '*{',
  mergetags_suffix: '}*',
  mergetags_list: [
    {
      title: 'Vendor',
      menu: [
        { value: 'vendor.givenname', title: 'Given name' },
        { value: 'vendor.familyname', title: 'Family name' },
        { value: 'vendor.business', title: 'Business name' }
      ]
    },
    {
      title: 'Dates',
      menu: [
        { value: 'application.date', title: 'Application date' },
        { value: 'season.opening', title: 'Opening day' }
      ]
    }
  ]
});

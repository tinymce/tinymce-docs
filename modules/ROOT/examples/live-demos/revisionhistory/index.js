const revisions = [
  {
    revisionId: '4',
    createdAt: '2023-11-29T10:11:21.578Z',
    content: `
      <h2>The world&rsquo;s first Rich Text Editor in the cloud</h2>
      <p>&nbsp;</p>
      <div><em>Have you heard about Tiny Cloud? It&rsquo;s the first step in our journey to help you deliver fantastic content creation experiences, no matter your level of expertise. 50,000 developers already agree. They get free access to our global CDN, image proxy services and auto updates to the TinyMCE editor. They&rsquo;re also ready for some exciting updates coming soon.</em></div>
      <h3>An editor for every project</h3>
      <p>Here are some of our customer&rsquo;s most common use cases for TinyMCE:</p>
      <ol>
      <li>Content Management Systems (<em>e.g. WordPress, Umbraco</em>)</li>
      <li>Customer Relationship Management and marketing automation (<em>e.g. Marketo</em>)</li>
      <li>Email marketing (<em>e.g. Constant Contact</em>)</li>
      <li>Content creation in SaaS systems (<em>e.g. Eventbrite, Evernote, GoFundMe, Zendesk</em>)</li>
      </ol>
    `,
  },
  {
    revisionId: '3',
    createdAt: '2023-11-25T08:30:21.578Z',
    content: `
      <h2>The world&rsquo;s first rich text editor in the cloud</h2>
      <p>&nbsp;</p>
      <div>Have you heard about Tiny Cloud? It&rsquo;s the first step in our journey to help you deliver great content creation experiences, no matter your level of expertise. 50,000 developers already agree. They get free access to our global CDN, image proxy services and auto updates to the TinyMCE editor. They&rsquo;re also ready for some exciting updates coming soon.</div>
      <p>&nbsp;</p>
      <h3>An editor for every project</h3>
      <p>Here are some of our customer&rsquo;s most common use cases for TinyMCE:</p>
      <ol>
      <li>Content Management Systems (<em>e.g. WordPress, Umbraco</em>)</li>
      <li>Learning Management Systems (<em>e.g. Blackboard</em>)</li>
      <li>Customer Relationship Management and marketing automation (<em>e.g. Marketo</em>)</li>
      <li>Email marketing (<em>e.g. Constant Contact</em>)</li>
      <li>Content creation in SaaS systems (<em>e.g. Eventbrite, Evernote, GoFundMe, Zendesk</em>)</li>
      </ol>
      <p>&nbsp;</p>
      <p>And those use cases are just the start. TinyMCE is incredibly flexible, and with hundreds of APIs there&rsquo;s likely a solution for your editor project. If you haven&rsquo;t experienced Tiny Cloud, get started today. You&rsquo;ll even get a free trial of our premium plugins &ndash; no credit card required!</p>
    `,
  },
  {
    revisionId: '2',
    createdAt: '2023-11-24T22:26:21.578Z',
    content: `
      <h2>The world&rsquo;s first rich text editor in the cloud</h2>
      <p>&nbsp;</p>
      <div>Have you heard about Tiny Cloud? It&rsquo;s the first step in our journey to help you deliver great content creation experiences, no matter your level of expertise. 50,000 developers already agree. They get free access to our global CDN, image proxy services and auto updates to the TinyMCE editor. They&rsquo;re also ready for some exciting updates coming soon.</div>
      <p>&nbsp;</p>
      <p>One of these enhancements is <strong>Tiny Drive</strong>: imagine file management for TinyMCE, in the cloud, made super easy. Learn more at <a href="https://www.tiny.cloud/drive/">Tiny Cloud - Tiny Drive</a>, where you&rsquo;ll find a working demo and an opportunity to provide feedback to the product team.</p>
      <h3>An editor for every project</h3>
      <p>Here are some of our customer&rsquo;s most common use cases for TinyMCE:</p>
      <ul>
      <li>Content Management Systems (<em>e.g. WordPress, Umbraco</em>)</li>
      <li>Learning Management Systems (<em>e.g. Blackboard</em>)</li>
      <li>Customer Relationship Management and marketing automation (<em>e.g. Marketo</em>)</li>
      <li>Email marketing (<em>e.g. Constant Contact</em>)</li>
      <li>Content creation in SaaS systems (<em>e.g. Eventbrite, Evernote, GoFundMe, Zendesk</em>)</li>
      </ul>
      <p>&nbsp;</p>
      <p>And those use cases are just the start. TinyMCE is incredibly flexible, and with hundreds of APIs there&rsquo;s likely a solution for your editor project. If you haven&rsquo;t experienced Tiny Cloud, get started today. You&rsquo;ll even get a free trial of our premium plugins &ndash; no credit card required!</p>
    `,
  },
  {
    revisionId: '1',
    createdAt: '2023-11-23T20:26:21.578Z',
    content: `
      <!--
        <h2>The world&rsquo;s first rich text editor in the cloud</h2>
        <p>&nbsp;</p>
        <div>Have you heard about Tiny Cloud? It&rsquo;s the first step in our journey to help you deliver great content creation experiences, no matter your level of expertise. 50,000 developers already agree. They get free access to our global CDN, image proxy services and auto updates to the TinyMCE editor. They&rsquo;re also ready for some exciting updates coming soon.</div>
        <p>&nbsp;</p>
        <p>One of these enhancements is <strong>Tiny Drive</strong>: imagine file management for TinyMCE, in the cloud, made super easy. Learn more at <a href="https://www.tiny.cloud/drive/">Tiny Cloud - Tiny Drive</a>, where you&rsquo;ll find a working demo and an opportunity to provide feedback to the product team.</p>
        <h3>An editor for every project</h3>
        <p>Here are some of our customer&rsquo;s most common use cases for TinyMCE:</p>
        <ul>
        <li>Content Management Systems (<em>e.g. WordPress, Umbraco</em>)</li>
        <li>Learning Management Systems (<em>e.g. Blackboard</em>)</li>
        <li>Customer Relationship Management and marketing automation (<em>e.g. Marketo</em>)</li>
        <li>Email marketing (<em>e.g. Constant Contact</em>)</li>
        <li>Content creation in SaaS systems (<em>e.g. Eventbrite, Evernote, GoFundMe, Zendesk</em>)</li>
        </ul>
        <p>&nbsp;</p>
        <p>And those use cases are just the start. TinyMCE is incredibly flexible, and with hundreds of APIs there&rsquo;s likely a solution for your editor project. If you haven&rsquo;t experienced Tiny Cloud, get started today. You&rsquo;ll even get a free trial of our premium plugins &ndash; no credit card required!</p>
      -->
    `,
  }
];

const get_revisions = () => new Promise((resolve) => {
    setTimeout(() => {
      resolve(revisions.sort((a, b) => new Date(a.createdAt) < new Date(b.createdAt) ? -1 : 1).reverse());
    }, 1000);
  });


tinymce.init({
  selector: 'textarea#revisionhistory',
  height: 800,
  plugins: 'revisionhistory',
  toolbar: 'revisionhistory',
  revisionhistory_fetch: get_revisions,
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
});
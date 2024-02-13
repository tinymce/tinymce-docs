const revisions = [
  {
    revisionId: '3',
    createdAt: '2023-11-29T10:11:21.578Z',
    content: `
      <h2>Welcome to TinyMCE Docs!</h2>
      <p>Here is some content that is <strong>bold</strong> and <em>italic</em>.</p>
    `,
  },
  {
    revisionId: '2',
    createdAt: '2023-11-25T08:30:21.578Z',
    content: `
      <p>Welcome to TinyMCE Docs!</p>
      <p>Here is some content that is bold and italic.</p>
    `,
  },
  {
    revisionId: '1',
    createdAt: '2023-11-24T22:26:21.578Z',
    content: `
      <p>Welcome to Tinymce!</p>
    `,
  },
];

const get_revisions = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(revisions.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)));
    }, 1000);
  });
}


tinymce.init({
  selector: 'textarea#revisionhistory',
  height: 800,
  plugins: 'revisionhistory',
  toolbar: 'revisionhistory',
	revisionhistory_fetch: get_revisions,
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
});
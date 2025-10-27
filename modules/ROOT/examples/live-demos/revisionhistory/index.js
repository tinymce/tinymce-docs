const API_URL = 'https://demouserdirectory.tiny.cloud/v1/users';

const fakeDelay = 200;

const revisions = [
  {
    revisionId: '3',
    createdAt: '2023-11-24T22:26:21.578Z',
    author: {
      id: 'james-wilson',
      name: 'James Wilson',
      avatar: 'https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_james-wilson_128_52f19412.jpg',
    },
    content: `
      <p><img style="display: block; margin-left: auto; margin-right: auto;" title="Tiny Logo" src="https://www.tiny.cloud/docs/images/logos/android-chrome-256x256.png" alt="TinyMCE Logo" width="128" height="128"></p>
      <h2 style="text-align: center;">Welcome to the TinyMCE editor demo!</h2>
      <h2>A simple table to play with</h2>
      <table style="border-collapse: collapse; width: 100%;" border="1">
      <thead>
      <tr>
      <th>Product</th>
      <th>Cost</th>
      <th>Really?</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>TinyMCE</td>
      <td>Free</td>
      <td>YES!</td>
      </tr>
      <tr>
      <td>Plupload</td>
      <td>Free</td>
      <td>YES!</td>
      </tr>
      </tbody>
      </table>
      <h2>Found a bug?</h2>
      <p>If you think you have found a bug please create an issue on the <a href="https://github.com/tinymce/tinymce/issues">GitHub repo</a> to report it to the developers.</p>
      <h2>Finally ...</h2>
      <p><s>Don't forget to check out our other product <a href="http://www.plupload.com" target="_blank" rel="noopener">Plupload</a>, your ultimate upload solution featuring HTML5 upload support.</s></p>
      <p>Thanks for supporting TinyMCE! We hope it helps you and your users create great content.<br>All the best from the TinyMCE team.</p>
    `,
  },
  {
    revisionId: '2',
    createdAt: '2023-11-25T08:30:21.578Z',
    author: {
      id: 'mia.andersson',
      name: 'Mia Andersson',
      avatar: 'https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_mia-andersson_128_e6f9424b.jpg',
    },
    content: `
      <p><img style="display: block; margin-left: auto; margin-right: auto;" title="Tiny Logo" src="https://www.tiny.cloud/docs/images/logos/android-chrome-256x256.png" alt="TinyMCE Logo" width="128" height="128"></p>
      <h2 style="text-align: center;">Welcome to the TinyMCE editor demo!</h2>
      <h2>Got questions or need help?</span></h2>
      <ol>
      <li>Our <a href="../">documentation</a> is a great resource for learning how to configure TinyMCE.</li>
      <li>Have a specific question? Try the <a href="https://stackoverflow.com/questions/tagged/tinymce" target="_blank" rel="noopener"><code>tinymce</code> tag at Stack Overflow</a>.</li>
      <li>We also offer enterprise grade support as part of <a href="../../../../pricing">TinyMCE premium plans</a>.</li>
      </ol>
      <h2>A simple table to play with</h2>
      <table style="border-collapse: collapse; width: 100%;" border="1">
      <thead>
      <tr>
      <th>Product</th>
      <th>Cost</th>
      <th>Really?</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>TinyMCE</td>
      <td>Free</td>
      <td>YES!</td>
      </tr>
      <tr>
      <td>Plupload</td>
      <td>Free</td>
      <td>YES!</td>
      </tr>
      </tbody>
      </table>
      <h2>Found a bug?</h2>
      <p>If you think you have found a bug please create an issue on the <a href="https://github.com/tinymce/tinymce/issues">GitHub repo</a> to report it to the developers.</p>
      <h2>Finally ...</h2>
      <p>Don't forget to check out our other product <a href="http://www.plupload.com" target="_blank" rel="noopener">Plupload</a>, your ultimate upload solution featuring HTML5 upload support.</p>
      <p>Thanks for supporting TinyMCE! We hope it helps you and your users create great content.<br>All the best from the TinyMCE team.</p>
    `,
  },
  {
    revisionId: '1',
    createdAt: '2023-11-29T10:11:21.578Z',
    author: {
      id: 'mia.andersson',
      name: 'Mia Andersson',
      avatar: 'https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_mia-andersson_128_e6f9424b.jpg',
    },
    content: `
      <p><img style="display: block; margin-left: auto; margin-right: auto;" title="Tiny Logo" src="https://www.tiny.cloud/docs/images/logos/android-chrome-256x256.png" alt="TinyMCE Logo" width="128" height="128"></p>
      <h2 style="text-align: center;">Welcome to the TinyMCE editor demo!</h2>
      <h2>Got questions or need help?</h2>
      <ul>
      <li>Our <a href="../">documentation</a> is a great resource for learning how to configure TinyMCE.</li>
      <li>Have a specific question? Try the <a href="https://stackoverflow.com/questions/tagged/tinymce" target="_blank" rel="noopener"><code>tinymce</code> tag at Stack Overflow</a>.</li>
      <li>We also offer enterprise grade support as part of <a href="../../../../pricing">TinyMCE premium plans</a>.</li>
      </ul>
      <h2>A simple table to play with</h2>
      <table style="border-collapse: collapse; width: 100%;" border="1">
      <thead>
      <tr>
      <th>Product</th>
      <th>Cost</th>
      <th>Really?</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>TinyMCE</td>
      <td>Free</td>
      <td>YES!</td>
      </tr>
      <tr>
      <td>Plupload</td>
      <td>Free</td>
      <td>YES!</td>
      </tr>
      </tbody>
      </table>
      <h2>Found a bug?</h2>
      <p>If you think you have found a bug please create an issue on the <a href="https://github.com/tinymce/tinymce/issues">GitHub repo</a> to report it to the developers.</p>
      <h2>Finally ...</h2>
      <p>Don't forget to check out our other product <a href="http://www.plupload.com" target="_blank" rel="noopener">Plupload</a>, your ultimate upload solution featuring HTML5 upload support.</p>
      <p>Thanks for supporting TinyMCE! We hope it helps you and your users create great content.<br>All the best from the TinyMCE team.</p>
    `,
  }
];

const revisionhistory_fetch = () => new Promise((resolve) => {
  setTimeout(() => {
    const sortedRevisions = revisions
      .sort((a, b) => new Date(a.createdAt) < new Date(b.createdAt) ? -1 : 1);
    resolve(sortedRevisions);
  }, fakeDelay);
});

const revisionhistory_fetch_revision = (_editor, revision) => new Promise((resolve, reject) => {
  setTimeout(() => {
    const revision = revisions.find((r) => r.revisionId === revision.revisionId);
    if (revision) {
      resolve(revision);
    } else {
      reject(`Revision ${revision.revisionId} is not found`);
    }
  }, fakeDelay);
});

tinymce.init({
  selector: 'textarea#revisionhistory',
  height: 800,
  plugins: 'revisionhistory help code link lists image',
  toolbar: 'undo redo | styles | bold italic underline | revisionhistory | link image | code',
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
  revisionhistory_fetch,
  revisionhistory_fetch_revision,
  revisionhistory_display_author: true,
  user_id: 'kai-nakamura',
  fetch_users: (userIds) => Promise.all(userIds
    .map((userId) =>
      fetch(`${API_URL}/${userId}`)
        .then((response) => response.json())
        .catch(() => ({ id: userId })))),
});

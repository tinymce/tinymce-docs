const API_URL = 'https://demouserdirectory.tiny.cloud/v1/users';

const fakeDelay = 200;

// The same callout appears at the top of every revision, so it never shows as a change
const tryIt = '<blockquote><p><strong>Try it:</strong> select a revision in the list to see what changed since the revision before it, including added and removed text, formatting changes, and new table rows. Select <strong>Restore this version</strong> to load an earlier revision into the editor, or <strong>Close</strong> to return to the latest version. After editing, select <strong>Revision history</strong> in the toolbar again to compare the unsaved draft with the approved version.</p></blockquote>';

// Saved revisions of the document, newest first. In an application, these come from the server.
const revisions = [
  {
    revisionId: '5',
    createdAt: '2026-11-09T16:45:00.000Z',
    author: {
      id: 'david-kim',
      name: 'David Kim',
      avatar: 'https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_david-kim_128_6ffcba2c.jpg'
    },
    metadata: { tags: [ { label: 'APPROVED' } ] },
    content: `
      ${tryIt}
      <h1>Customer data retention policy</h1>
      <p>This policy sets how long customer data is kept and when it is deleted. It applies to every team that stores customer data.</p>
      <h2>Summary</h2>
      <ul>
      <li>Invoices and payment records are kept for 7 years.</li>
      <li>Deletion requests are completed within 30 days.</li>
      <li>Data under a legal hold is kept until the hold is lifted.</li>
      </ul>
      <h2>Retention periods</h2>
      <table>
      <thead>
      <tr><th>Data type</th><th>Retention period</th><th>Owner</th></tr>
      </thead>
      <tbody>
      <tr><td>Account profiles</td><td>Until the account is closed</td><td>Customer Success</td></tr>
      <tr><td>Support tickets</td><td>2 years</td><td>Customer Success</td></tr>
      <tr><td>Invoices</td><td>7 years</td><td>Finance</td></tr>
      <tr><td>Payment records</td><td>7 years</td><td>Finance</td></tr>
      </tbody>
      </table>
      <h2>Deletion requests</h2>
      <p>Customers can ask for their data to be deleted from the account settings page or by contacting support. Deletion requests are completed within <strong>30 days</strong>.</p>
      <p>Data under a legal hold is kept until the hold is lifted, even after a deletion request.</p>
      <h2>Review</h2>
      <p>The Operations team reviews this policy every year.</p>
    `
  },
  {
    revisionId: '4',
    createdAt: '2026-11-04T11:20:00.000Z',
    author: {
      id: 'daniel-long',
      name: 'Daniel Long',
      avatar: 'https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_daniel-long_128_732bc263.jpg'
    },
    metadata: { source: 'ai' },
    content: `
      ${tryIt}
      <h1>Customer data retention policy</h1>
      <p>This policy sets how long customer data is kept and when it is deleted. It applies to every team that stores customer data.</p>
      <h2>Summary</h2>
      <ul>
      <li>Invoices and payment records are kept for 7 years.</li>
      <li>Deletion requests are completed within 30 days.</li>
      <li>Data under a legal hold is kept until the hold is lifted.</li>
      </ul>
      <h2>Retention periods</h2>
      <table>
      <thead>
      <tr><th>Data type</th><th>Retention period</th><th>Owner</th></tr>
      </thead>
      <tbody>
      <tr><td>Account profiles</td><td>Until the account is closed</td><td>Customer Success</td></tr>
      <tr><td>Support tickets</td><td>2 years</td><td>Customer Success</td></tr>
      <tr><td>Invoices</td><td>7 years</td><td>Finance</td></tr>
      <tr><td>Payment records</td><td>7 years</td><td>Finance</td></tr>
      </tbody>
      </table>
      <h2>Deletion requests</h2>
      <p>Customers can ask for their data to be deleted from the account settings page or by contacting support. Deletion requests are completed within <strong>30 days</strong>.</p>
      <p>Data under a legal hold is kept until the hold is lifted, even after a deletion request.</p>
      <h2>Review</h2>
      <p>The Operations team reviews this policy every two years.</p>
    `
  },
  {
    revisionId: '3',
    createdAt: '2026-11-02T09:10:00.000Z',
    author: {
      id: 'anastasia-reed',
      name: 'Anastasia Reed',
      avatar: 'https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_anastasia-reed_128_691ff889.jpg'
    },
    metadata: { tags: [ { label: 'LEGAL' } ] },
    content: `
      ${tryIt}
      <h1>Customer data retention policy</h1>
      <p>This policy sets how long customer data is kept and when it is deleted. It applies to every team that stores customer data.</p>
      <h2>Retention periods</h2>
      <table>
      <thead>
      <tr><th>Data type</th><th>Retention period</th><th>Owner</th></tr>
      </thead>
      <tbody>
      <tr><td>Account profiles</td><td>Until the account is closed</td><td>Customer Success</td></tr>
      <tr><td>Support tickets</td><td>2 years</td><td>Customer Success</td></tr>
      <tr><td>Invoices</td><td>7 years</td><td>Finance</td></tr>
      <tr><td>Payment records</td><td>7 years</td><td>Finance</td></tr>
      </tbody>
      </table>
      <h2>Deletion requests</h2>
      <p>Customers can ask for their data to be deleted from the account settings page or by contacting support. Deletion requests are completed within 30 days.</p>
      <p>Data under a legal hold is kept until the hold is lifted, even after a deletion request.</p>
      <h2>Review</h2>
      <p>The Operations team reviews this policy every two years.</p>
    `
  },
  {
    revisionId: '2',
    createdAt: '2026-10-28T14:30:00.000Z',
    author: {
      id: 'amanda-jenkins',
      name: 'Amanda Jenkins',
      avatar: 'https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_amanda-jenkins_128_854588ac.jpg'
    },
    content: `
      ${tryIt}
      <h1>Customer data retention policy</h1>
      <p>This policy sets how long customer data is kept and when it is deleted. It applies to every team that stores customer data.</p>
      <h2>Retention periods</h2>
      <table>
      <thead>
      <tr><th>Data type</th><th>Retention period</th><th>Owner</th></tr>
      </thead>
      <tbody>
      <tr><td>Account profiles</td><td>Until the account is closed</td><td>Customer Success</td></tr>
      <tr><td>Support tickets</td><td>3 years</td><td>Customer Success</td></tr>
      <tr><td>Invoices</td><td>7 years</td><td>Finance</td></tr>
      <tr><td>Payment records</td><td>7 years</td><td>Finance</td></tr>
      </tbody>
      </table>
      <h2>Deletion requests</h2>
      <p>Customers can ask for their data to be deleted by contacting support.</p>
      <h2>Review</h2>
      <p>The Operations team reviews this policy every two years.</p>
    `
  },
  {
    revisionId: '1',
    createdAt: '2026-10-26T10:00:00.000Z',
    author: {
      id: 'daniel-long',
      name: 'Daniel Long',
      avatar: 'https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_daniel-long_128_732bc263.jpg'
    },
    content: `
      ${tryIt}
      <h1>Customer data retention policy</h1>
      <p>This policy sets how long customer data is kept and when it is deleted. It applies to every team that stores customer data.</p>
      <h2>Retention periods</h2>
      <table>
      <thead>
      <tr><th>Data type</th><th>Retention period</th><th>Owner</th></tr>
      </thead>
      <tbody>
      <tr><td>Account profiles</td><td>Until the account is closed</td><td>Customer Success</td></tr>
      <tr><td>Support tickets</td><td>3 years</td><td>Customer Success</td></tr>
      <tr><td>Invoices</td><td>5 years</td><td>Finance</td></tr>
      </tbody>
      </table>
      <h2>Deletion requests</h2>
      <p>Customers can ask for their data to be deleted by contacting support.</p>
      <h2>Review</h2>
      <p>The Operations team reviews this policy every two years.</p>
    `
  }
];

// Return the list of revisions. Only the latest revision includes its content;
// the content of older revisions is loaded on demand by revisionhistory_fetch_revision.
const revisionhistory_fetch = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(revisions.map(({ content, ...revision }, index) =>
      index === 0 ? { ...revision, content } : revision
    ));
  }, fakeDelay);
});

const revisionhistory_fetch_revision = (_editor, revision) => new Promise((resolve, reject) => {
  setTimeout(() => {
    const saved = revisions.find((r) => r.revisionId === revision.revisionId);
    if (saved) {
      resolve(saved);
    } else {
      reject(`Revision ${revision.revisionId} was not found`);
    }
  }, fakeDelay);
});

tinymce.init({
  selector: 'textarea#revisionhistory',
  height: 720,
  plugins: 'revisionhistory lists link advlist autolink image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table help wordcount',
  toolbar: 'revisionhistory | undo redo | blocks | bold italic | bullist numlist | ' +
    'link | backcolor | alignleft aligncenter alignright alignjustify | ' +
    'outdent indent | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],

  revisionhistory_fetch,
  revisionhistory_fetch_revision,
  revisionhistory_display_author: true,
  view_show: 'revision',

  // The signed-in user, shown as the author of the unsaved draft.
  // Replace with the ID of the user in your application.
  user_id: 'daniel-long',
  fetch_users: (userIds) => Promise.all(userIds
    .map((userId) =>
      fetch(`${API_URL}/${userId}`)
        .then((response) => response.json())
        .catch(() => ({ id: userId }))))
});

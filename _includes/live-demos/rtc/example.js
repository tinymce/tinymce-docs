/*
 * Initial content for the editor, to be loaded into the editor using the
 * optional `rtc_initial_content_provider` option. This could pulled from
 * a database when using the editor in production.
 */
const initialEditorContent = '{{site.logoForDemosHTML}}<h2 style="text-align: center;">Welcome to the TinyMCE Real-Time Collaboration demo!</h2><p>This editor is collaborating with the other editor on the page. Try editing the content by adding images, lists, or any other currently supported content, it should appear in the other editor too!</p><p>All network requests made by this demo, fake or real, are logged in the browser console using <a href="https://netflix.github.io/pollyjs" target="_blank" rel="noopener">Polly.js</a> (the browser console is typically accessed using the F12 key).</p><h2>Got questions or need help?</h2><ul><li>Our <a class="mceNonEditable" href="../../">documentation</a> is a great resource for learning how to configure TinyMCE.</li><li>Have a specific question? Try the <a href="https://stackoverflow.com/questions/tagged/tinymce" target="_blank" rel="noopener"><code>tinymce</code> tag at Stack Overflow</a>.</li></ul><h2>Found a bug?</h2><p>If you think you have found a bug please create an issue on the <a href="https://github.com/tinymce/tinymce/issues">GitHub repo</a> to report it to the developers.</p><h2>Finally,</h2><p>Thanks for supporting TinyMCE! We hope it helps you and your users create great content.<br />All the best from the TinyMCE team.</p>';

/* Set up a connected users object for maintaining a list of connected users */
const connectedUsers = {};

tinymce.init({
  selector: 'textarea#rtc',
  plugins:
    'rtc advlist charmap emoticons help hr image insertdatetime link ' +
    'lists powerpaste save tabfocus visualblocks wordcount',
  menubar: 'file edit insert view format table tools help',
  toolbar:
    'undo redo | formatselect | bold italic underline | ' +
    'alignleft aligncenter alignright | bullist numlist | insert | help',
  height: 400,
  toolbar_groups: {
    insert: {
      icon: 'plus',
      tooltip: 'Insert',
      items: 'link | charmap emoticons | image | insertdatetime',
    },
  },
  rtc_document_id: documentID,
  rtc_encryption_provider: ({ documentId, keyHint }) =>
    fetch('https://api.example/getEncryptionKey/', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ documentId, keyId: keyHint }),
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) =>
        console.log('Failed to return encryption key\n' + error)
      ),
  rtc_token_provider: () =>
    fetch('https://api.example/getJwtToken/', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userID }),
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => console.log('Failed to return a JWT\n' + error)),
  rtc_user_details_provider: ({ userId }) => {
    return fetch('https://api.example/getUserDetails/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId }),
    }).then((response) => {
      return response.json();
    });
  },
  rtc_initial_content_provider: () =>
    Promise.resolve({ content: initialEditorContent }),
  rtc_client_connected: ({
    userDetails,
    userId,
    caretNumber,
    clientId,
  }) => {
    connectedUsers[clientId] = {
      caretNumber,
      userDetails,
      userId,
    };
    /* Adds the collaborator above the editor and logs details to the console */
    document.getElementById(collaboratorUsernameElem).innerText =
      userDetails.fullName;
    console.log(
      `Fake user ${userDetails.fullName} (${userDetails.email}) connected with caret number ${caretNumber}`
    );
  },
  rtc_client_disconnected: ({ clientId, userDetails }) => {
    delete connectedUsers[clientId];
    /* Removes collaborator from above the editor and logs to the console */
    document.getElementById(collaboratorUsernameElem).innerText =
      userDetails.fullName;
    console.log(
      `Fake user ${userDetails.fullName} (${userDetails.email}) disconnected`
    );
  },
});
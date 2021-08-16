/* Script to import faker.js for generating random data for demonstration purposes */
tinymce.ScriptLoader.loadScripts([
  'https://cdn.jsdelivr.net/npm/faker@5/dist/faker.min.js',
  'https://cdn.jsdelivr.net/npm/pouchdb@7/dist/pouchdb.min.js',
  'https://cdn.jsdelivr.net/npm/jsrsasign@10.3.0/lib/jsrsasign-all-min.js',
  '//unpkg.com/@pollyjs/core@5.1.1',
  '//unpkg.com/@pollyjs/adapter-fetch@5.1.1',
  '//unpkg.com/@pollyjs/persister-local-storage@5.1.1',
  ], () => {

  /**********************************
   * Mock web server implementation *
   **********************************/

  function randomString() {
    /*
     * Generating a random string to use as a document ID.
     * This can be any string, but must be unique.
     */
    return Math.random().toString(32).split('.')[1]
  }

  /* Generate a document ID */
  const documentID = randomString();

  /* Generating random encryption key and keyHint for demonstration purposes */
  const demoEncryptionKeyPair = {
    key: randomString(),
    keyHint: randomString(),
  };

  /*
    * Warning: Do not generate keypairs in the browser for a production
    * environment. This is for demonstration purposes only.
    */
  /* Using jsrsasign https://kjur.github.io/jsrsasign/api/symbols/KEYUTIL.html */
  const insecurePrivateKeyForJWT = KEYUTIL.getKeyFromPlainPrivatePKCS8PEM();

  function jwtGenerator(user, documentID, algorithm, privateKey) {
    const header = {alg: algorithm, typ: 'JWT'};
    let payload = new Object();
    const generationTime = KJUR.jws.IntDate.get('now');
    const expirationTime = KJUR.jws.IntDate.get('now + 1hour');
    payload.sub = user;
    payload.exp = expirationTime;
    payload.iss = "example.com";
    payload.nbf = generationTime;
    payload.iat = generationTime;
    payload.did = documentID;

    const stringHeader = JSON.stringify(header),
          stringPayload = JSON.stringify(payload);
    return KJUR.jws.JWS.sign(algorithm, stringHeader, stringPayload, privateKey)
  }

  let { Polly } = window['@pollyjs/core'];
  let FetchAdapter = window['@pollyjs/adapter-fetch'];
  let LocalStoragePersister = window['@pollyjs/persister-local-storage'];

  Polly.register(FetchAdapter);
  Polly.register(LocalStoragePersister);
  let polly = new Polly('docs-rtc-demo', {
    adapters: ['fetch'],
    persister: 'local-storage',
    logging: true,
  });
  let server = polly.server;

  server.host('https://api.example', () => {
    /* JWT provider - basic example */
    server.post('/getJwtToken/')
      .intercept((req, res) => {
        const { documentID, userID } = JSON.parse(req.body);
        try {
          res.status(200).json({
            token: jwtGenerator(userID, documentID, 'RS256', insecurePrivateKeyForJWT)
          });
        } catch { (error) => {
          console.log('JWT server error:', error);
          res.status(404);
        }
      };
    });
    server.post('/getEncryptionKey/')
      .intercept((req, res) => {
        const { documentID, keyHint } = JSON.parse(req.body);
        try {
          res.status(200).json({
            key: demoEncryptionKeyPair.key,
            keyHint: demoEncryptionKeyPair.keyHint,
          });
        } catch { (error) => {
          console.log('Encryption Key server error:', error);
          res.status(404);
        }
      };
    });
  }); /* server.host */

  /* Connect using the `connectTo` API */
  polly.connectTo('fetch');

  /***********************************
   * Mock user server implementation *
   ***********************************/

  function generateUser () {
    /* Generating a random 'user' using the faker.js library */
    const firstName = faker.name.firstName(),
          lastName = faker.name.lastName();
    return {
      _id: faker.internet.userName(firstName, lastName),
      firstname: firstName,
      lastname: lastName,
      fullname: faker.name.findName(firstName, lastName),
      email: faker.internet.email(firstName, lastName)
    }
  };

  function createUserArray (length) {
    /* Creating an array of 'users' for the mock identity server */
    let userArray = new Array();
    for (let id = 0; id < length; id++) {
      userArray.push(generateUser());
    };
    return userArray;
  };

  /* Create a list of users and set 'user' for each editor. */
  const userArray = createUserArray(2);
  const currentUser1 = userArray[0]["_id"],
        currentUser2 = userArray[1]["_id"];

  /*
   * Create a fake identity server using PouchDB for
   * simulating queries for user data
   */
  const usersServer = new PouchDB('userServer').destroy()
  .then(() => new PouchDB('userServer'))
  .then(db => db.bulkDocs(userArray))
  .catch(err => console.log('User database failed to initialize:\n' + err));

  /*  */
  function getUserDetails(userId) {
    usersServer.get(userID)
    .then((result) => {
      return {
        fullName: result.fullname,
        firstName: result.firstname,
        lastName: result.lastname,
        email: result.email,
      }
    })
    .catch((err) => {
      console.log('Failed to retrieve user details:\n' + err);
    });
  }

  /***********************************************
   * Mock document/content server implementation *
   ***********************************************/

  /*
   * Initial content for the editor, to be added to the document database and
   * loaded into the editor using the optional `rtc_initial_content_provider`
   * option.
   */
  const initialEditorContent = '<p><img style="display: block; margin-left: auto; margin-right: auto;" title="Tiny Logo" src="../../../labs/android-chrome-256x256.png" alt="TinyMCE Logo" width="128" height="128" /></p><h2 style="text-align: center;">Welcome to the TinyMCE Real-Time Collaboration demo!</h2><p>This editor is collaborating with the other editor on the page. Try editing the content by adding images, lists, or any other currently supported content, it should appear in the other editor too!</p><h2>Got questions or need help?</h2><ul><li>Our <a class="mceNonEditable" href="../../">documentation</a> is a great resource for learning how to configure TinyMCE.</li><li>Have a specific question? Try the <a href="https://stackoverflow.com/questions/tagged/tinymce" target="_blank" rel="noopener"><code>tinymce</code> tag at Stack Overflow</a>.</li></ul><h2>Found a bug?</h2><p>If you think you have found a bug please create an issue on the <a href="https://github.com/tinymce/tinymce/issues">GitHub repo</a> to report it to the developers.</p><h2>Finally,</h2><p>Thanks for supporting TinyMCE! We hope it helps you and your users create great content.<br />All the best from the TinyMCE team.</p>';

  /*
   * Create a fake content ('document') server using PouchDB for simulating
   * a self-hosted document storage for user documents.
   */
    const contentServer = new PouchDB('contentServer').destroy().then(
      () => {
        return new PouchDB('contentServer')
      }).then(
        /* Add initial content for the editor (not required) */
        (db) => {
          db.put({
            _id: documentID,
            content: initialEditorContent,
            snapshot_version: null,
          })
          .catch((err) => {
        console.log('Content database failed to initialize:\n' + err);
      });
    });

    /* Get document */
    function getDoc (documentID) {
      contentServer.get(documentID)
      .then((result) => {
        return {
          doc_id: result._id,
          doc_content: result.content,
          snapshot_version: result.snapshot_version,
        }
      })
      .catch((err) => {
        console.log('Failed to get content from the document database:\n' + err);
      });
    }

    /*
     * TinyMCE init function. Wrapped in a function to allow the same
     * configuration to be used for two 'independent' editors on the same page.
     */
  function createTinyMCEInstance (parent_attr,editorID,userID) {
    tinymce.init({
      selector: editorID,
      plugins: 'rtc advlist autoresize charmap emoticons help hr image insertdatetime link lists powerpaste print save tabfocus visualblocks wordcount',
      menubar: 'file edit insert view format table tools help',
      toolbar: 'formatting alignment | bullist numlist | insert | help',
      toolbar_groups: {
        formatting: {
          icon: 'bold',
          tooltip: 'Formatting',
          items: 'bold italic underline | superscript subscript'
        },
        insert: {
          icon: 'plus',
          tooltip:'Insert',
          items: 'link | charmap emoticons | image | insertdatetime'
        },
        alignment: {
          icon: 'align-left',
          tooltip: 'Alignment',
          items: 'alignleft aligncenter alignright | alignjustify'
        }
      },
      setup: function(editor) {
        editor.on('init', function(e) {
          /*
           * Set the editor to visible once external scripts used for fake
           * server-side components have loaded (such as faker.js, polly.js
           * and pouchdb).
           */
          document.querySelectorAll(parent_attr).forEach((node) => {
            node.style.display = 'block';
          });
        });
      },
      rtc_document_id: documentID,
      rtc_encryption_provider: ({documentId, keyHint}) => {
        fetch('https://api.example/getEncryptionKey/', {
          method: 'POST',
          credentials: 'include',
          body: JSON.stringify({ documentId, newKey, keyId: keyHint })
        })
       .then(
         (response) => { response.json() }
       )
       .then(
         ({keyId, secret}) => {
           ({ key: secret, keyHint: keyId })
          })},
      rtc_token_provider: () =>
        fetch('https://api.example/getJwtToken/', {
          method: 'POST',
          credentials: 'include',
          body: JSON.stringify({ documentID, userID })
        })
      .then(
        (response) => {
          return response.json() }
        )
        .catch((error) => console.log('Failed to return a JWT\n' + error)),
      /* rtc_server_disconnected
      rtc_user_details_provider: (userId) => Promise.resolve(getUserDetails(userId)),
      rtc_snapshot: () =>
      rtc_initial_content_provider: (docID) => Promise.resolve(getDoc(docID))
      rtc_client_info
      rtc_client_connected
      rtc_client_disconnected */
    });
  }
  createTinyMCEInstance('[rtc-editor-parent]', 'textarea#rtc-editor-1', currentUser1);
  createTinyMCEInstance('[rtc-editor-parent]', 'textarea#rtc-editor-2', currentUser2);
});
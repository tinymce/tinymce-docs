/* The following functions are used for randomizing data in this demo */
/* Random number generator */
const getRandomInt = (max) =>
  Math.floor(Math.random() * max);


/* Used for selecting two users at random */
const getTwoRandomInt = (max) => {
  /* Generates two random numbers (with removal). */
  let tempArray = [...Array(max).keys()];
  const valueOne = getRandomInt(tempArray.length);
  tempArray = tempArray.filter((item) => item !== valueOne);
  const valueTwo = tempArray[getRandomInt(tempArray.length)];
  return [valueOne, valueTwo];
};

/*
 * Generating a random string to use as a document ID, Encryption key, and
 * Encryption keyHint (randomized for demonstration purposes only).
 * These values can be any string, but must be unique.
 */
const randomString = () =>
  Math.random().toString(32).split('.')[1];


/*
 * Initial content for the editor, to be loaded into the editor using the
 * optional `rtc_initial_content_provider` option. This could pulled from
 * a database when using the editor in production.
 */
const initialEditorContent = '{{logofordemoshtml}}<h2 style="text-align: center;">Welcome to the TinyMCE Real-Time Collaboration demo!</h2><p>This editor is collaborating with the other editor on the page. Try editing the content by adding images, lists, or any other currently supported content, it should appear in the other editor too!</p><p>All network requests made by this demo, fake or real, are logged in the browser console using <a href="https://netflix.github.io/pollyjs" target="_blank" rel="noopener">Polly.js</a> (the browser console is typically accessed using the F12 key).</p><h2>Got questions or need help?</h2><ul><li>Our <a class="mceNonEditable" href="../../">documentation</a> is a great resource for learning how to configure TinyMCE.</li><li>Have a specific question? Try the <a href="https://stackoverflow.com/questions/tagged/tinymce" target="_blank" rel="noopener"><code>tinymce</code> tag at Stack Overflow</a>.</li></ul><h2>Found a bug?</h2><p>If you think you have found a bug please create an issue on the <a href="https://github.com/tinymce/tinymce/issues">GitHub repo</a> to report it to the developers.</p><h2>Finally,</h2><p>Thanks for supporting TinyMCE! We hope it helps you and your users create great content.<br />All the best from the TinyMCE team.</p>';

/*
 * The following JWTs have been pre-generated for demonstration purposes.
 * These JWTs are passed to TinyMCE through the getJwtToken endpoint/server.
 */
const fakeJWTs = [
  { _id: 'melyna_hartmann28', token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtZWx5bmFfaGFydG1hbm4yOCIsImV4cCI6MjA4Mjc1ODM5OSwiaXNzIjoiZXhhbXBsZS5jb20iLCJuYmYiOjE2MjUwOTc2MDAsImlhdCI6MTYyNTA5NzYwMH0.G9Zq2TYpnn--V_OKF5zBLktzaBDO7YwPM3jR2uNuWgv6rkkyufxgog72znfMYREBWiEDtFKOP3vovwAu_-hASUL-wP8WLq82Rl9z8EawDuotka_FO0jHeVpBsIGc5nb-qWzIdp861uiVk5Fwml-P0Lt7LOQupYl83FDCT2oONyWpNVWGcyBbhB8riIQ-w2ZPTrTVsm2rRMlnH-7FeNWMznAlFAGCMe5_m66KxzAHxPqzG0h53M_sVeZboRohbIUQm6EnmaFqdHYg7T21TPApdmXrNAx7v0YKsHgvmgg5mtzJdK4jt1ZHGsRMaV7iKregBVglJ8vsxJw62MoP-Llu2A' },
  { _id: 'nettie_kuhic', token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJuZXR0aWVfa3VoaWMiLCJleHAiOjIwODI3NTgzOTksImlzcyI6ImV4YW1wbGUuY29tIiwibmJmIjoxNjI1MDk3NjAwLCJpYXQiOjE2MjUwOTc2MDB9.Sg3Bz0Vb9w1eYqLBkQDpw5cwl4JN6iml9zaj4-ZdXkn7eWPCrj_rCaHJmp8dIzTEVJb0BpT0L0YgOj_FsdZvm_vIYMIFbIfgERqUiimSj_RfpuNOsMjgVmfwkI0-N1RTJDxM1vLEbfZ0T89rMGNaNX5tJvsFrSyMFjxdJTw50S1-K3AiqNGwaLFmESZg9qsjsRyyMurpUp8--gvqKCvecFD0jNxbCJg1CxmU0WQk1yWNqgyzK5HdjlbRfLWwavumBC7ZW_j1oqSxYZKh93BzlfVAWo91xgDjzAGzkmHWUysG-dTUvSCDXEJd5zGskaU46E_lMeFVgUm11O2ji4Ugmw' },
  { _id: 'piper6', token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJwaXBlcjYiLCJleHAiOjIwODI3NTgzOTksImlzcyI6ImV4YW1wbGUuY29tIiwibmJmIjoxNjI1MDk3NjAwLCJpYXQiOjE2MjUwOTc2MDB9.wCl0UQi4zhAEy0Cw9zivdU5nzglmQ8IJAK-6iALzZtiQanjjlWwbRVFf3e4lJVKLaHS7LwUaQYfg5Ok5oMWR2A_7X2l_Pt5Y21wEFgQsLgGeUr6aaSKpgnIuYQEFetKLLxBrTKqvOZIAPxFYYGK-NKt36CqMmXCQ0tbAOt24Q1aDHt_qTuf_ckVSbiArDU2mBasvAQepaXk-f7knYl9tinIlgjZJYo6e6Ru6lXs6XVcw3znSX-fRBpU1GI-gvy_Oy-ju7P7tMBgO4aNh1OzOya2cMFCL_4p960m_ogWqc_QJUFwgRjgR8WCLUOslrMBXP1wRcgkJRqS9nBSReuGDFw' },
  { _id: 'ansley84', token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhbnNsZXk4NCIsImV4cCI6MjA4Mjc1ODM5OSwiaXNzIjoiZXhhbXBsZS5jb20iLCJuYmYiOjE2MjUwOTc2MDAsImlhdCI6MTYyNTA5NzYwMH0.qXzdIMPLBlW0e_MGnzJARCxzzwhJMwESGFdJP7eKF7_uQBC5lYwA6LOexAldhyctLwkKAhNDf7ykYZMDv9hCPSpqbIXPV8I9cY0ZDVnYIUJihX5-75OcwFHK9HUZ40PZrUeR1fYxqSjX18p0UvXubwcCEVjyCOaRt4gZPDd-J_KftrbmhH3Qv8s-0hpJTFhBV8siLYi_H7mLRXgVOuQlN7_Q9BmvTUT5o0hLNlJNvXEoQ1HTMDv0hz9GGSFe0YcmNJOpOb-LQvhosn6GyURnaDPiK3U4YPryXo8iXhBZ3q9YJPQ4WUhZCBI5DnPJlaprDN3eJq-Fl-i_09SGYtSDAg' },
  { _id: 'brandy_reinger24', token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJicmFuZHlfcmVpbmdlcjI0IiwiZXhwIjoyMDgyNzU4Mzk5LCJpc3MiOiJleGFtcGxlLmNvbSIsIm5iZiI6MTYyNTA5NzYwMCwiaWF0IjoxNjI1MDk3NjAwfQ.weRLJ7b1AlmtMqw6Jeq5bMaJbHzAT0HHPS42WM_92RUR-SufMycYPBVHngM7-JufgtPGjAY5-U5iUz5HAjxTe5OH6vXWI3TH-uRoxA8zs7M0oP-LyZrE0j5EOvOm0XJYYrFjeJyuevp-HcCsMA6BgEQLvtVjLaMNHKxzNb3b433IBpFRjZtVUM4ReruZcRrQ1Zpg3mvSsx1JcOyA9eZucDi539KuC2LeP6XR9XaesEx5YA7uliN6HzmXDhRIWeB1_GOjo3dzGT-pHGMqs3gyI9cCl1lhzv8j2KQbumzA4Gx4arRhotnYQ8So_7Uqgx3cXOefNWz6e1v7lvkHCScRkg' },
  { _id: 'selmer.luettgen72', token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzZWxtZXIubHVldHRnZW43MiIsImV4cCI6MjA4Mjc1ODM5OSwiaXNzIjoiZXhhbXBsZS5jb20iLCJuYmYiOjE2MjUwOTc2MDAsImlhdCI6MTYyNTA5NzYwMH0.RKYzcoB1lE8q_jhNBi3En8WcX0hgRYLR3naJLw-HYVGOldTHxWyPURDF80ZO-5AEH5vD0cm4xFSxYnq-BcofDXiBrs7GP38NXzC30h9ghYrjhpMzMgmdUyF_0_LCwhLkHWDpvsOkSE7KGh2F0rRV6uuuwk52_19g6moKuS-h_GuzF2E2VC3x98MRFHYTJ_zhZKVN-iYpwWdMvFi8Msiqu-CIvsiXPd8fc2E-Lf3_YwfJrBRKOPfnPv8CmkWaU-dp_z-btkg7azDKdFiSE2MVN06ya3N_HA34BJ2qdZhCFxcrJfc6ea23mn9TAyzCNzSiS4moMxGyL_0hS5rI_LPwpQ' },
  { _id: 'mikayla_dibbert', token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtaWtheWxhX2RpYmJlcnQiLCJleHAiOjIwODI3NTgzOTksImlzcyI6ImV4YW1wbGUuY29tIiwibmJmIjoxNjI1MDk3NjAwLCJpYXQiOjE2MjUwOTc2MDB9.S8MiiH5JJLH3Q6pGbttvZYhi1O4xn9qwLBuG1hwIahrCXOV-qoLX4AJEvLGs1HJQavUGwhoMur3zZEpPyzR5UqCFa38MGyJ-QsdHfnnrGaTdaBgEz9i_I6qbjG4jSZuKsUZxl6WgZJoUc0vMBF6GIxsDgaTNMbj6lP9yAG4qc2ofsbOzmoTygim50M9qgc7itciDKtoflavuPdJvMp35KI62aJhflcRwin4nNdytFf1bqgRJ8U5wVkPcSPsyUreQqtr9uCFbCQAvRx-vSEJhBAtLsts3m9dqpzK3xh3bGP4lMRPBrtlXUlNihRazsefbhH82HhVyWh1Zeb7BVxjZDA' },
  { _id: 'mabelle.robel39', token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtYWJlbGxlLnJvYmVsMzkiLCJleHAiOjIwODI3NTgzOTksImlzcyI6ImV4YW1wbGUuY29tIiwibmJmIjoxNjI1MDk3NjAwLCJpYXQiOjE2MjUwOTc2MDB9.GSyXFDUsZpM8C2ofEvFydh2QUstiGtrG-KdkLy0VA_a_9en9HQn8OndgpD4Zw46tZbYnmlEAcmK6RitChtecGrkIawK2_cO4Z1hyOnlQPuhCJ2lpJU3IsP1kAZFHmoDB5CVxAQmNTAuP7caEmwfgV62mEdgrCEIkEotSd3BzYizr7WUvhAuRahQ3igBBgJmtvyUsmQ9tfjQs6EVcwvRuiqVAZ0ot7EzD6eOYTi8PQhNJGG7Qh3GvEbRGEfTraUZzkKyqNwF9OrHZNF7MYcW7Qn6pYhX0nSlISb5i7J0QirTddaLHx9Uq3on32qKfvEJedRLBs5nfmpRgwugvsINbeA' },
  { _id: 'dino.davis', token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaW5vLmRhdmlzIiwiZXhwIjoyMDgyNzU4Mzk5LCJpc3MiOiJleGFtcGxlLmNvbSIsIm5iZiI6MTYyNTA5NzYwMCwiaWF0IjoxNjI1MDk3NjAwfQ.u8cchiaZLjVFdXvP14Hhjw4HeU8smXPXcIccdc8BcUtOoOqyEZKS9sohYcgPK3v8LFHTM2dh6epm0BDhijNQsOS1k5ftBqgXQpOpu6oZioU0Rl85SdbWYbN5JmgdObiXm21Yf4R9kDjU4RZxoId-oDlZnwYOFEKARHqctk5GY_7FDYg9er6jNCIuAqv42jCNFeFlDDStN_vARLY6rLbWhrSBzPShStC20-SxYkOQ67hENBJHeckNJ7zgINHvBHu8sszCSAgLaOeTxcRgQmemo9PNDkYeJ7slRwf7tK1ZNhf28xN_OKwt-gXXjI-NjAaUC2w0Wvr5omb4njiJv0VckQ' },
  { _id: 'josie.bergstrom', token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqb3NpZS5iZXJnc3Ryb20iLCJleHAiOjIwODI3NTgzOTksImlzcyI6ImV4YW1wbGUuY29tIiwibmJmIjoxNjI1MDk3NjAwLCJpYXQiOjE2MjUwOTc2MDB9.kw6lGoa692MnVGlC124cX2-Yu5rRd4VoBi1PpYxMEP2zjpARwXPAEWQB-vBUPrz71tNhgKnfLfZy-5A3EVTFrj0Q9p-1mE9P-D27rzPQLMY_V6aT-UmU_E1Upf8tNz0g_DIjBNXJ8ozp_h9vx-WA8urxSNkxeufigt-GmolsKKpLGQErc3pcE-ZCsFN0JBeoL9VVpLXtK2GYTRTzUXwMMySS2cDrQrUhoJdWmmv0ebAOB8Uv0MD6HwBxPFgYcN_xH12TDOMw1lWl3X3oMoUTcLHUVylHCVboD4SuAdVm2hQf9sm4YHTp2Hao7pFvuRcfSt7PVUkRiQJoctpYQ98nwQ' },
  { _id: 'guadalupe48', token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJndWFkYWx1cGU0OCIsImV4cCI6MjA4Mjc1ODM5OSwiaXNzIjoiZXhhbXBsZS5jb20iLCJuYmYiOjE2MjUwOTc2MDAsImlhdCI6MTYyNTA5NzYwMH0.TmtHW1iNjAD7bzVfSOKPt3I5uDOHxbpqh6zIJdP28NpRxWKacrgUdBHvudr-LoIHt4mFtD3J1A2hLlG4t6woCDxvZ-M1f3sLdSMj0M0_kSWfx1-NgDd5OBirlHVLyIkT5AnTrwsWsjLI6EMpk8MR34jIjL-xZ_ejH7MukWLnyJh2Z99Fz3TV9JNHigMzv4q7jHBUEBa12obua9Y8B2_TcY1i8VXiDtqDT8X0Kzd3xztCv2qqPaNICZ6Y8lZ6cD2YV5-iF78BzS4QV19JpzRZJjm2fJjLOYHh8HcT1YbGUehxrjx5xOdKpi5UzU2nfyUZI9hPLQY0YoTXCJ-q8sYyjA' },
  { _id: 'jayde92', token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqYXlkZTkyIiwiZXhwIjoyMDgyNzU4Mzk5LCJpc3MiOiJleGFtcGxlLmNvbSIsIm5iZiI6MTYyNTA5NzYwMCwiaWF0IjoxNjI1MDk3NjAwfQ.E9vfaoSccchvyQGi0lchMc9Yy3RHWq2LJaGPZdT78p073PvCxnS1FSzGVGdJ1k2mV_Wr_1XADvVHn4Sw1llXqaqGHu4NDT72s651FlorIaJ5yhWtXs1dWZgMo0HsFWJ7L5Gj0mv-XDd1ywMw5blMNPLlv6vMpVNHvPgXvShpsWmBHa2qh-Zj83JvpTZ5PTnaIZWmV7apGFySV-ethhKK6IdCajCNKH5JrfypKgFobgMrksX-wHF-Q6-RFzMcnAW0-bKPuNXheZSlSSN01CzrAee08TqJLIvi6_31l2qxtIvcWtCGHDyDk1lj1yqSR1Gpe_VV5bELC2HmAxFi30tFpA' }
];

/*
 * A set of pregenerated fake users. The user details are passed to TinyMCE
 * using the getUserDetails endpoint/server so full names or other details can
 * be presented in the UI.
 */
const fakeUsers = [
  { _id: 'melyna_hartmann28', firstname: 'Melyna', lastname: 'Hartmann', fullname: 'Miss Melyna Hartmann', email: 'melyna62@hotmail.com' },
  { _id: 'nettie_kuhic', firstname: 'Nettie', lastname: 'Kuhic', fullname: 'Nettie Kuhic Jr.', email: 'nettie.kuhic@gmail.com' },
  { _id: 'piper6', firstname: 'Piper', lastname: 'Dare', fullname: 'Piper Dare', email: 'piper_dare@hotmail.com' },
  { _id: 'ansley84', firstname: 'Ansley', lastname: 'Schaden', fullname: 'Ansley Schaden', email: 'ansley_schaden89@gmail.com' },
  { _id: 'brandy_reinger24', firstname: 'Brandy', lastname: 'Reinger', fullname: 'Brandy Reinger', email: 'brandy90@hotmail.com' },
  { _id: 'selmer.luettgen72', firstname: 'Selmer', lastname: 'Luettgen', fullname: 'Selmer Luettgen', email: 'selmer.luettgen69@yahoo.com' },
  { _id: 'mikayla_dibbert', firstname: 'Mikayla', lastname: 'Dibbert', fullname: 'Mikayla Dibbert', email: 'mikayla.dibbert@yahoo.com' },
  { _id: 'mabelle.robel39', firstname: 'Mabelle', lastname: 'Robel', fullname: 'Mabelle Robel', email: 'mabelle73@gmail.com' },
  { _id: 'dino.davis', firstname: 'Dino', lastname: 'Davis', fullname: 'Dino Davis', email: 'dino89@hotmail.com' },
  { _id: 'josie.bergstrom', firstname: 'Josie', lastname: 'Bergstrom', fullname: 'Josie Bergstrom Jr.', email: 'josie4@yahoo.com' },
  { _id: 'guadalupe48', firstname: 'Guadalupe', lastname: 'Reilly', fullname: 'Guadalupe Reilly', email: 'guadalupe51@gmail.com' },
  { _id: 'jayde92', firstname: 'Jayde', lastname: 'Gutkowski', fullname: 'Jayde Gutkowski', email: 'jayde11@gmail.com' }
];

/* Generate a document ID */
const documentID = randomString() + Date.now();

/* Generating random encryption key and keyHint for demonstration purposes */
const demoEncryptionKeyPair = {
  key: randomString(),
  keyHint: randomString(),
};

/* Retrieve random two users, one for each editor. */
const sessionUsers = getTwoRandomInt(fakeUsers.length);
const currentUser1 = fakeUsers[sessionUsers[0]]._id;
const currentUser2 = fakeUsers[sessionUsers[1]]._id;

/*
 * Add the "current user" of the editor above each instance, outside the
 * editor, for reference purposes only
 */
document.getElementById('fakedemouser1').innerText = fakeUsers.find(
  (user) => user._id === currentUser1
).fullname;
document.getElementById('fakedemouser2').innerText = fakeUsers.find(
  (user) => user._id === currentUser2
).fullname;

/* Set up a connected users object for maintaining a list of connected users */
const connectedUsers = {};

/* Script to import polly.js for simulating servers and logging requests to the console */
tinymce.ScriptLoader.loadScripts(
  [
    '//unpkg.com/@pollyjs/core@5.1.1',
    '//unpkg.com/@pollyjs/adapter-fetch@5.1.1',
    '//unpkg.com/@pollyjs/persister-local-storage@5.1.1',
  ],
  () => {

    /**********************************
     * Mock web server implementation *
     **********************************/

    const { Polly } = window['@pollyjs/core'];
    const FetchAdapter = window['@pollyjs/adapter-fetch'];
    const LocalStoragePersister = window['@pollyjs/persister-local-storage'];

    Polly.register(FetchAdapter);
    Polly.register(LocalStoragePersister);
    const polly = new Polly('docs-rtc-demo', {
      adapters: ['fetch'],
      persister: 'local-storage',
      logging: true,
    });
    const server = polly.server;

    server.host('https://api.example', () => {
      /*
       * JWT provider/endpoint. A real JWT endpoint would generate a JWT
       * and it to user's editor, rather than using a static list.
       */
      server.post('/getJwtToken/').intercept((req, res) => {
        const { userID } = JSON.parse(req.body);
        try {
          res.status(200).json({
            token: fakeJWTs.find((user) => user._id === userID).token,
          });
        } catch {
          (error) => {
            console.log('JWT server error:', error);
            res.status(404);
          };
        }
      });
      /*
       * Encryption key endpoint. These should be generated for each document.
       * The same encryption key needs to be sent to all users on the document and
       * is not sent to the RTC server.
       */
      server.post('/getEncryptionKey/').intercept((req, res) => {
        const { documentID, keyHint } = JSON.parse(req.body);
        try {
          res.status(200).json({
            key: demoEncryptionKeyPair.key,
            keyHint: demoEncryptionKeyPair.keyHint,
          });
        } catch (error) {
          console.log('Encryption Key server error:', error);
          res.status(404);
        }
      });
      /*
       * This endpoint is for sending user details to TinyMCE for the
       * collaborator's username shown on the caret in the editors and can be used
       * in the rtc_client_connected and rtc_client_disconnected options.
       */
      server.post('/getUserDetails/').intercept((req, res) => {
        const { userId } = JSON.parse(req.body);
        try {
          const userDetails = fakeUsers.find((user) => user._id === userId);
          res.status(200).json({
            fullName: userDetails.fullname,
            firstName: userDetails.firstname,
            lastName: userDetails.lastname,
            email: userDetails.email,
          });
        } catch (error) {
          console.log('Error getting user details:', error);
          res.status(404);
        }
      });
    }); /* server.host */

    /* Connect using the `connectTo` API */
    polly.connectTo('fetch');

    /*
     * TinyMCE init function. Wrapped in a function to allow the same
     * configuration to be used for two 'independent' editors on the same page.
     */
    const createTinyMCEInstance = (
      parent_attr,
      editorID,
      userID,
      collaboratorUsernameElem
    ) => {
      tinymce.init({
        selector: editorID,
        plugins:
          'rtc advlist charmap emoticons help image insertdatetime link ' +
          'lists powerpaste save visualblocks wordcount',
        menubar: 'file edit insert view format table tools help',
        toolbar:
          'undo redo | blocks | bold italic underline | ' +
          'alignleft aligncenter alignright | bullist numlist | insert | help',
        height: 400,
        toolbar_groups: {
          insert: {
            icon: 'plus',
            tooltip: 'Insert',
            items: 'link | charmap emoticons | image | insertdatetime',
          },
        },
        setup: (editor) => {
          editor.on('init', (e) => {
            /*
             * Set the editor to visible once external scripts used for fake
             * server-side components have loaded (such as polly.js).
             */
            document.querySelectorAll(parent_attr).forEach((node) => {
              node.style.display = 'block';
            });
          });
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
            .then((response) => response.json())
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
            .then((response) => response.json())
            .catch((error) => console.log('Failed to return a JWT\n' + error)),
        rtc_user_details_provider: ({ userId }) => fetch('https://api.example/getUserDetails/', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId }),
        })
          .then((response) => response.json()),
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
    };
    /* Create the two separate editors */
    createTinyMCEInstance(
      '[rtc-editor-parent]',
      'textarea#rtc-editor-1',
      currentUser1,
      'otherfakeuser1'
    );
    createTinyMCEInstance(
      '[rtc-editor-parent]',
      'textarea#rtc-editor-2',
      currentUser2,
      'otherfakeuser2'
    );
  }
);

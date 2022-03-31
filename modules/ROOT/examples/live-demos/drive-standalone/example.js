/*
 * Upload content to a Tiny Drive with tinydrive.upload
 */
const uploadToTinyDrive = () => {
  tinydrive.upload({
    token_provider: '/your-server-endpoint/jwt-provider',
    path: '/hello',
    name: 'hello.txt',
    blob: new Blob(['Hello world!']),
    onprogress: (progress) => {
      percent.innerHTML = Math.round(progress.loaded / progress.total * 100) + '%';
    }
  }).then((result) => {
    const uploadResultText = `<p><strong><code>${result.file.name}</code> has uploaded to Tiny Drive.</strong></p>`;
    uploadResult.innerHTML = uploadResultText;
    console.log('File is uploaded.\n', result);
  });
};

const percent = document.querySelector('.live_demo_progress');
const uploadResult = document.querySelector('#upload-done');
const uploadButton = document.querySelector('.drive-standalone-upload');
uploadButton.addEventListener('click', uploadToTinyDrive, false);

/*
 * Browse the content on a Tiny Drive with tinydrive.browse
 */
const browseTinyDrive = () => {
  tinydrive.browse({
    token_provider: '/your-server-endpoint/jwt-provider'
  }).then(() => {
    console.log('Dialog closed');
  });
};

const browseButton = document.querySelector('.drive-standalone-browse');
browseButton.addEventListener('click', browseTinyDrive, false);

/*
 * Retrieve or download content from a Tiny Drive with tinydrive.pick
 */
const retrieveFromTinyDrive = () => {
  tinydrive.pick({
    token_provider: '/your-server-endpoint/jwt-provider',
    filetypes: ['image'],
  }).then((result) => {
    output.src = result.files[0].url;
    console.log('Tiny Drive pick result:\n', result);
  });
};

const output = document.querySelector('img.drive_output');
const insertButton = document.querySelector('.drive-standalone-pick');
insertButton.addEventListener('click', retrieveFromTinyDrive, false);

/*
 * Add the file manager to a page with tinydrive.start
 */
(() => {
  tinydrive.start({
    target: 'div#drive-standalone-start',
    token_provider: '/your-server-endpoint/jwt-provider'
  });
})();

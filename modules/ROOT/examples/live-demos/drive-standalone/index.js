const myFakeTokenProvider = (success) => {
  success({ token: 'fake-token' });
};

/*
 * Upload content to a Tiny Drive with tinydrive.upload
 */
const uploadToTinyDrive = () => {
  tinydrive.upload({
    demo_files_url: '{{imagesdir}}/tiny-drive-demo/demo_files.json',
    token_provider: myFakeTokenProvider,
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
    demo_files_url: '{{imagesdir}}/tiny-drive-demo/demo_files.json',
    token_provider: myFakeTokenProvider,
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
    demo_files_url: '{{imagesdir}}/tiny-drive-demo/demo_files.json',
    token_provider: myFakeTokenProvider,
    filetypes: ['image'],
  }).then((result) => {
    output.src = result.files[0].url;
    result.files[0].url = 'https://drive.tiny.cloud/1/h0ed4hzbe69rfcrnj0uwvwi73e8y5m70jlolaalzkssog63b/48bda29d-ed1f-488f-adf7-b597dd3a8791';
    console.log('Tiny Drive pick result:\n', result);
    input.value = 'https://drive.tiny.cloud/1/h0ed4hzbe69rfcrnj0uwvwi73e8y5m70jlolaalzkssog63b/48bda29d-ed1f-488f-adf7-b597dd3a8791';
  });
};

const input = document.querySelector('.drive-standalone-input');
const output = document.querySelector('img.drive_output');
const insertButton = document.querySelector('.drive-standalone-pick');
insertButton.addEventListener('click', retrieveFromTinyDrive, false);

/*
 * Add the file manager to a page with tinydrive.start
 */
(() => {
  tinydrive.start({
    demo_files_url: '{{imagesdir}}/tiny-drive-demo/demo_files.json',
    target: 'div#drive-standalone-start',
    token_provider: (success) => {
      success({ token: 'fake-token' });
    },
  });
})();

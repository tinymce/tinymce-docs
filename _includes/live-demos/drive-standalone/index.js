function myFakeTokenProvider (success) { success({ token: 'fake-token' }); };

/*
 * Upload content to a Tiny Drive with tinydrive.upload
 */
function uploadToTinyDrive () {
  tinydrive.upload({
    demo_files_url: '{{ site.baseurl }}/images/tiny-drive-demo/demo_files.json',
    token_provider: myFakeTokenProvider,
    path: '/hello',
    name: 'hello.txt',
    blob: new Blob(['Hello world!']),
    onprogress: function (progress) {
      percent.innerHTML = Math.round(progress.loaded / progress.total * 100) + '%';
    }
  }).then(function (result) {
    var uploadResultText = '<p><strong><code>' + result.file.name + '</code> has uploaded to Tiny Drive.</strong></p>';
    uploadResult.innerHTML = uploadResultText;
    console.log('File is uploaded.\n', result);
  });
};

var uploadButton = document.querySelector('.drive-standalone-upload');
    uploadButton.addEventListener('click', uploadToTinyDrive, false);
var percent = document.querySelector('.live_demo_progress');
var uploadResult = document.querySelector('#upload-done');

/*
 * Browse the content on a Tiny Drive with tinydrive.browse
 */
function browseTinyDrive () {
  tinydrive.browse({
    demo_files_url: '{{ site.baseurl }}/images/tiny-drive-demo/demo_files.json',
    token_provider: myFakeTokenProvider,
  }).then(function () {
    console.log('Dialog closed');
  });
};

var browseButton = document.querySelector('.drive-standalone-browse');
    browseButton.addEventListener('click', browseTinyDrive, false);

/*
 * Retrieve or download content from a Tiny Drive with tinydrive.pick
 */
function retrieveFromTinyDrive () {
  tinydrive.pick({
    demo_files_url: '{{ site.baseurl }}/images/tiny-drive-demo/demo_files.json',
    token_provider: myFakeTokenProvider,
    filetypes: ['image'],
  }).then(function(result) {
    output.src = result.files[0].url;
    result.files[0].url = 'https://drive.tiny.cloud/1/h0ed4hzbe69rfcrnj0uwvwi73e8y5m70jlolaalzkssog63b/48bda29d-ed1f-488f-adf7-b597dd3a8791';
    console.log("Tiny Drive pick result:\n", result);
    input.value = 'https://drive.tiny.cloud/1/h0ed4hzbe69rfcrnj0uwvwi73e8y5m70jlolaalzkssog63b/48bda29d-ed1f-488f-adf7-b597dd3a8791';
  });
};

var downloadButton = document.querySelector('.drive-standalone-pick');
    downloadButton.addEventListener('click', retrieveFromTinyDrive, false);
var output = document.querySelector('img.drive_output');

var input = document.querySelector('.drive-standalone-input');


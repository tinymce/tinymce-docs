/*
 * Upload content to a Tiny Drive with tinydrive.upload
 */
function uploadToTinyDrive () {
  tinydrive.upload({
    token_provider: '/your-server-endpoint/jwt-provider',
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

var percent = document.querySelector('.live_demo_progress');
var uploadResult = document.querySelector('#upload-done');
var uploadButton = document.querySelector('.drive-standalone-upload');
    uploadButton.addEventListener('click', uploadToTinyDrive, false);

/*
 * Browse the content on a Tiny Drive with tinydrive.browse
 */
function browseTinyDrive () {
  tinydrive.browse({
    token_provider: '/your-server-endpoint/jwt-provider'
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
    token_provider: '/your-server-endpoint/jwt-provider',
    filetypes: ['image'],
  }).then(function(result) {
    output.src = result.files[0].url;
    console.log("Tiny Drive pick result:\n", result);
  });
};

var output = document.querySelector('img.drive_output');
var insertButton = document.querySelector('.drive-standalone-pick');
    insertButton.addEventListener('click', retrieveFromTinyDrive, false);

/*
 * Add the file manager to a page with tinydrive.start
 */
(function () {
  tinydrive.start({
    target: 'div#drive-standalone-start',
    token_provider: '/your-server-endpoint/jwt-provider'
  });
})();
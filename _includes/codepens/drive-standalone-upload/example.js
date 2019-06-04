var button = document.querySelector('.tinydrive-standalone-demo-upload');
var percent = document.querySelector('.tinydrive-standalone-demo-percent');

button.addEventListener('click', function () {
  tinydrive.upload({
    token_provider: '/your-local/jwt-provider',
    path: '/hello',
    name: 'hello.txt',
    blob: new Blob(['Hello world!']),
    onprogress: function (progress) {
      percent.innerHTML = Math.round(progress.loaded / progress.total * 100) + '%';
    }
  }).then(function () {
    console.log('File is uploaded.');
  });
}, false);

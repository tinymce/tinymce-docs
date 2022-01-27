(function () {
  var button = document.querySelector('.tinydrive-standalone-demo-upload');
  var percent = document.querySelector('.live_demo_progress');

  button.addEventListener('click', function () {
    tinydrive.upload({
      demo_files_url: '{{ site.baseurl }}/images/tiny-drive-demo/demo_files.json',
      token_provider: function (success) { success({ token: 'fake-token' }); },
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
})();

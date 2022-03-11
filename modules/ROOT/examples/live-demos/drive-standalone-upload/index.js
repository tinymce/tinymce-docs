(() => {
  const button = document.querySelector('.tinydrive-standalone-demo-upload');
  const percent = document.querySelector('.live_demo_progress');

  button.addEventListener('click', () => {
    tinydrive.upload({
      demo_files_url: '{{baseimagesurl}}/tiny-drive-demo/demo_files.json',
      token_provider: (success) => success({ token: 'fake-token' }),
      path: '/hello',
      name: 'hello.txt',
      blob: new Blob(['Hello world!']),
      onprogress: (progress) => {
        percent.innerHTML = Math.round(progress.loaded / progress.total * 100) + '%';
      }
    }).then(() => {
      console.log('File is uploaded.');
    });
  }, false);
})();

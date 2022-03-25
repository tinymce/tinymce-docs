const button = document.querySelector('.tinydrive-standalone-demo-upload');
const percent = document.querySelector('.live_demo_progress');

button.addEventListener('click', () => {
  tinydrive.upload({
    token_provider: '/your-local/jwt-provider',
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

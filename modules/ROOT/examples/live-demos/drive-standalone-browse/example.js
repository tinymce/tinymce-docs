const button = document.querySelector('.tinydrive-standalone-demo-browse');

button.addEventListener('click', () => {
  tinydrive.browse({
    token_provider: '/your-local/jwt-provider'
  }).then(() => {
    console.log('Dialog closed');
  });
}, false);

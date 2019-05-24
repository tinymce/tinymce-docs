var button = document.querySelector('.tinydrive-standalone-demo-start');

button.addEventListener('click', function () {
  tinydrive.start({
    token_provider: '/your-local/jwt-provider'
  });
}, false);

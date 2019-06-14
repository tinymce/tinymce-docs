var button = document.querySelector('.tinydrive-standalone-demo-browse');

button.addEventListener('click', function () {
  tinydrive.browse({
    token_provider: '/your-local/jwt-provider'
  }).then(function () {
    console.log('Dialog closed');
  });
}, false);

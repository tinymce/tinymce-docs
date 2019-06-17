var button = document.querySelector('.tinydrive-standalone-demo-pick');
var input = document.querySelector('.tinydrive-standalone-demo-input');

button.addEventListener('click', function () {
  tinydrive.pick({
    token_provider: '/your-local/jwt-provider'
  }).then(function(result) {
    input.value = result.files[0].url;
  });
}, false);

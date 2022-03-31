const button = document.querySelector('.tinydrive-standalone-demo-pick');
const input = document.querySelector('.tinydrive-standalone-demo-input');

button.addEventListener('click', () => {
  tinydrive.pick({
    token_provider: '/your-local/jwt-provider'
  }).then((result) => {
    input.value = result.files[0].url;
  });
}, false);

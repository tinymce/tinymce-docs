(() => {
  const button = document.querySelector('.tinydrive-standalone-demo-browse');

  button.addEventListener('click', () => {
    tinydrive.browse({
      demo_files_url: '{{imagesdir}}/tiny-drive-demo/demo_files.json',
      token_provider: (success) => success({ token: 'fake-token' }),
    }).then(() => {
      console.log('Dialog closed');
    });
  }, false);
})();

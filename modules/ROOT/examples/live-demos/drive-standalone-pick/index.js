(() => {
  const button = document.querySelector('.tinydrive-standalone-demo-pick');
  const input = document.querySelector('.tinydrive-standalone-demo-input');

  button.addEventListener('click', () => {
    tinydrive.pick({
      demo_files_url: '{{baseimagesurl}}/tiny-drive-demo/demo_files.json',
      token_provider: (success) => {
        success({ token: 'fake-token' });
      },
    }).then((result) => {
      /* input.value = result.files[0].url; */
      input.value = 'https://drive.tiny.cloud/1/h0ed4hzbe69rfcrnj0uwvwi73e8y5m70jlolaalzkssog63b/48bda29d-ed1f-488f-adf7-b597dd3a8791';
    });
  }, false);
})();

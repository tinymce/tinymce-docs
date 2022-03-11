(() => {
  tinydrive.start({
    demo_files_url: '{{baseimagesurl}}/tiny-drive-demo/demo_files.json',
    dropbox_app_key: 'jee1s9eykoh752j',
    token_provider: (success) => success({ token: 'fake-token' }),
    target: 'div#drive-standalone-dropbox'
  });
})();

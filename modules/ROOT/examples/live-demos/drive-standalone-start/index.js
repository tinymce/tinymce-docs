(function () {
  tinydrive.start({
    demo_files_url: '{{baseurl}}/images/tiny-drive-demo/demo_files.json',
    target: 'div#drive-standalone-start',
    token_provider: function (success) { success({ token: 'fake-token' }); },
  });
})();

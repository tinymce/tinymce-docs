(function () {
  tinydrive.start({
    demo_files_url: '{{ site.baseurl }}/images/tiny-drive-demo/demo_files.json',
    google_drive_key: 'AIzaSyAsVRuCBc-BLQ1xNKtnLHB3AeoK-xmOrTc',
    google_drive_client_id: '748627179519-p9vv3va1mppc66fikai92b3ru73mpukf.apps.googleusercontent.com',
    token_provider: function (success) { success({ token: 'fake-token' }); },
    target: 'div#drive-standalone-googledrive'
  });
})();
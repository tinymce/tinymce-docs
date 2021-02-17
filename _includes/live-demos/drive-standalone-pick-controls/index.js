(function () {
  var button = document.querySelector('.tinydrive-standalone-demo-pick');
  var input = document.querySelector('.tinydrive-standalone-demo-input');

  button.addEventListener('click', function () {
    var controls = tinydrive.controls.pick({
      demo_files_url: '{{ site.baseurl }}/demo/tiny-drive-demo/demo_files.json',
      token_provider: function (success) { success({ token: 'fake-token' }); },
    }, function (result) {
      /* input.value = result[0].url; */
      input.value = 'https://drive.tiny.cloud/1/h0ed4hzbe69rfcrnj0uwvwi73e8y5m70jlolaalzkssog63b/48bda29d-ed1f-488f-adf7-b597dd3a8791';
  
      setTimeout(function () {
        controls.close();
      }, 0);
    }, function (error) {
      console.error(error);
  
      setTimeout(function () {
        controls.close();
      }, 0);
    });
  }, false);
})();

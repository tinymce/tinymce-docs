{% case apiname %}
{% when "upload" %}
}).then(function (result) {
  console.log('File is uploaded.\n', result);
});
{% when "browse" %}
}).then(function () {
  console.log('Dialog closed');
});
{% when "pick" %}
}).then(function(result) {
  outputImg.src = result.files[0].url;
  console.log("Tiny Drive pick result:\n", result);
});
{% when "start" %}
});
{% else %}
});
{% endcase %}
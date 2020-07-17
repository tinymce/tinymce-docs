var specialChars = [
  { text: 'exclamation mark', value: '!' },
  { text: 'at', value: '@' },
  { text: 'hash', value: '#' },
  { text: 'dollars', value: '$' },
  { text: 'percent sign', value: '%' },
  { text: 'caret', value: '^' },
  { text: 'ampersand', value: '&' },
  { text: 'asterisk', value: '*' }
];

tinymce.init({
  selector: 'textarea#autocompleter',
  content_css: '//www.tiny.cloud/css/codepen.min.css',
  height: 250,
  setup: function (editor) {
    /* An autocompleter that allows you to insert special characters */
    editor.ui.registry.addAutocompleter('specialchars', {
      ch: ':',
      minChars: 1,
      columns: 'auto',
      fetch: function (pattern) {
        var matchedChars = specialChars.filter(function (char) {
          return char.text.indexOf(pattern) !== -1;
        });

        return new tinymce.util.Promise(function (resolve) {
          var results = matchedChars.map(function (char) {
            return {
              value: char.value,
              text: char.text,
              icon: char.value
            }
          });
          resolve(results);
        });
      },
      onAction: function (autocompleteApi, rng, value) {
        editor.selection.setRng(rng);
        editor.insertContent(value);
        autocompleteApi.hide();
      }
    });
  }
});

/*
** Adding some additional fonts to the TinyMCE fonts list
** to allow the editor content to match the surrounding content.
*/
const fontList = 'Andale Mono=andale mono,monospace;' + 
  'Aileron=aileron,sans-serif;' +
  'Arial=arial,helvetica,sans-serif;' +
  'Arial Black=arial black,sans-serif;' +
  'Avenir=Avenir W01,sans-serif;' +
  'Book Antiqua=book antiqua,palatino,serif;' +
  'Comic Sans MS=comic sans ms,sans-serif;' +
  'Courier New=courier new,courier,monospace;' +
  'Georgia=georgia,palatino,serif;' +
  'Helvetica=helvetica,arial,sans-serif;' +
  'Impact=impact,sans-serif;' +
  'Symbol=symbol;' +
  'Tahoma=tahoma,arial,helvetica,sans-serif;' +
  'Terminal=terminal,monaco,monospace;' +
  'Times New Roman=times new roman,times,serif;' +
  'Trebuchet MS=trebuchet ms,geneva,sans-serif;' +
  'Verdana=verdana,geneva,sans-serif;' +
  'Webdings=webdings;' +
  'Wingdings=wingdings,zapf dingbats';

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

// Initialize the TinyMCE editor
tinymce.init({
  selector: 'textarea#autocompleter',
  height: 250,
  font_formats: fontList,
  content_css: '//www.tiny.cloud/css/codepen.min.css',
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
  },
});

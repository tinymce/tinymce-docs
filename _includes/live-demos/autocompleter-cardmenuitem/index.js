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
  selector: 'textarea#autocompleter-cardmenuitem',
  height: 250,
  setup: function (editor) {
    var onAction = function (autocompleteApi, rng, value) {
      editor.selection.setRng(rng);
      editor.insertContent(value);
      autocompleteApi.hide();
    };

    var getMatchedChars = function (pattern) {
      return specialChars.filter(function (char) {
        return char.text.indexOf(pattern) !== -1;
      });
    };

    /**
     * An autocompleter that allows you to insert special characters.
     * Items are built using the CardMenuItem.
     */
    editor.ui.registry.addAutocompleter('specialchars_cardmenuitems', {
      ch: '-',
      minChars: 1,
      columns: 1,
      highlightOn: ['char_name'],
      onAction: onAction,
      fetch: function (pattern) {
        return new tinymce.util.Promise(function (resolve) {
          var results = getMatchedChars(pattern).map(function (char) {
            return {
              type: 'cardmenuitem',
              value: char.value,
              label: char.text,
              items: [
                {
                  type: 'cardcontainer',
                  direction: 'vertical',
                  items: [
                    {
                      type: 'cardtext',
                      text: char.text,
                      name: 'char_name'
                    },
                    {
                      type: 'cardtext',
                      text: char.value
                    }
                  ]
                }
              ]
            }
          });
          resolve(results);
        });
      }
    });
  }
});

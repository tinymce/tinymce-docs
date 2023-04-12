const specialChars = [
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
  setup: (editor) => {
    const onAction = (autocompleteApi, rng, value) => {
      editor.selection.setRng(rng);
      editor.insertContent(value);
      autocompleteApi.hide();
    };

    const getMatchedChars = (pattern) => {
      return specialChars.filter(char => char.text.indexOf(pattern) !== -1);
    };

    /**
     * An autocompleter that allows you to insert special characters.
     * Items are built using the CardMenuItem.
     */
    editor.ui.registry.addAutocompleter('specialchars_cardmenuitems', {
      trigger: '-',
      minChars: 1,
      columns: 1,
      highlightOn: ['char_name'],
      onAction: onAction,
      fetch: (pattern) => {
        return new Promise((resolve) => {
          const results = getMatchedChars(pattern).map(char => ({
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
          }));
          resolve(results);
        });
      }
    });
  }
});

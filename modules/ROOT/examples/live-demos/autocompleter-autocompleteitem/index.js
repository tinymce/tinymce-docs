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
  selector: 'textarea#autocompleter-autocompleteitem',
  height: 250,
  setup: (editor) => {
    const onAction = (autocompleteApi, rng, value) => {
      editor.selection.setRng(rng);
      editor.insertContent(value);
      autocompleteApi.hide();
    };

    const getMatchedChars = (pattern) => {
      return specialChars.filter((char) => char.text.indexOf(pattern) !== -1);
    };

    /* An autocompleter that allows you to insert special characters */
    editor.ui.registry.addAutocompleter('specialchars', {
      trigger: ':',
      minChars: 1,
      columns: 'auto',
      onAction: onAction,
      fetch: (pattern) => {
        return new Promise((resolve) => {
          const results = getMatchedChars(pattern).map((char) => ({
            type: 'autocompleteitem',
            value: char.value,
            text: char.text,
            icon: char.value
          }));
          resolve(results);
        });
      }
    });
  }
});

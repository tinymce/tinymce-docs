#### `casechange_title_case_minors`

The `casechange_title_case_minors` option is used to customize the rules while using **Title Case.** This option makes it possible to configure what words not to capitalize. All other words not specified by this rule set will be capitalized overriding the default **Title Case** rule set.

**Type:** Array

**Default:** _A rule set based on [Wikipedia Title Case](https://titlecaseconverter.com/rules/#WP)_

##### Example: Using `casechange_title_case_minors`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'casechange',
  toolbar: 'casechange',
  casechange_title_case_minors: [
    'at', 'by', 'in', 'of', 'on', 'up', 'to', 'en', 're', 'vs',
    'but', 'off', 'out', 'via', 'bar', 'mid', 'per', 'pro', 'qua', 'til',
    'from', 'into', 'unto', 'with', 'amid', 'anit', 'atop', 'down', 'less', 'like', 'near', 'over', 'past', 'plus', 'sans', 'save', 'than', 'thru', 'till', 'upon',
    'for', 'and', 'nor', 'but', 'or', 'yet', 'so', 'an', 'a', 'some', 'the'
  ]
});
```

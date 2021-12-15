## `gecko_spellcheck`

> Gecko Spell Check was deprecated in TinyMCE v4.3 (consider using  [#browser_spellcheck](#browser_spellcheck)). This option will be removed in {{site.productname}} 6.0.

This option allows you to disable [Gecko](https://en.wikipedia.org/wiki/Gecko_(software)) based browsers' internal spell checker from being used in {{site.productname}}.

Type
: `Boolean`

Default Value
: `true`

Possible Values
: `true`, `false`

### Example: Using `gecko_spellcheck`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  gecko_spellcheck: false
});
```

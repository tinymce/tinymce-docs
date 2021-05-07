## gecko_spellcheck

> Gecko Spell Check was deprecated in TinyMCE v4.3 (consider using  [#browser_spellcheck](#browser_spellcheck)).

This option allows you to disable [Gecko](https://en.wikipedia.org/wiki/Gecko_(software)) based browsers' internal spell checker from being used in TinyMCE.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  gecko_spellcheck: false
});
```

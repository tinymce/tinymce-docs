## `<configuration_option>`
{% comment %} Replace content in angled brackets (<>) and remove my comments before committing!!! {% endcomment %}

{{ site.requires_5_Yv }} {% comment %} Update or remove {% endcomment %}

What does the option do? Is a plugin required? Why/when use it?
What is the values you can use and what do they do?
Is there any risks? (But explain them without saying the word `risk` or similar. Use warnings if needed.)

**Type:** `'String'` `Boolean` `Array` `Function` `Object` `Number`

**Default Value:** `'auto'` `true` `0` `JavaScript Function`

```js
Use a codeblock if the default is an Array or Object.
```

{% comment %} Remove "Possible values" where there is not a discrete set of possible values {% endcomment%}
**Possible values:** `'auto'`, `'top'`, `'bottom'`, `true`, `false`

### Example: Using `<configuration_option>`

{% comment %} This should be a working configuration. Please test. {% endcomment %}
```js
tinymce.init({
  selector: 'textarea',  // change this value according to your html
  <configuration_option>: 'bottom'
});
```

{% comment %} Remove if not required. add additional examples as required. {% endcomment %}
##### Example: Disabling the <feature>

To disable the <feature>, set the `<configuration_option>` to `false`.
{% comment %} This should be a working configuration. Please test. {% endcomment %}
```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  <configuration_option>: false
});
```
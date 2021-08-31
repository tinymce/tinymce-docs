## `<configuration_option>`

{% comment %} Replace content in angled brackets (<>) and remove my comments before committing!!! {% endcomment %}

{{ site.requires_5_Yv }} {% comment %} Update or remove {% endcomment %}

What does the option do? Why/when use it?
What is the values you can use and what do they do?
Is there any risks? (But explain them without saying the word `risk` or similar. Use warnings if needed.) For longer, complicated 'risks' and issues, use the limitations section.

{%comment%}Is a plugin required? Update ELSE Remove {%endcomment%}
{% if plugincode != "<plugincode>" %}
Required plugin
: [<plugin name> (`<plugin_code>`)](link/to/ppp/)
{% endif %}

Type
: String, Boolean, Number, Function, Object, Array,or Regexp

{% comment %} Remove "Possible values" where there is not a discrete set of possible values {% endcomment%}
Possible values
: `'string1'`, `'string2'`, `false`

Default value
: `false`
: `10`
: `/^\w{6}/`
: `'str'`
  ```js
  {
    default: 'object'
  }
  ```
  ```js
  [
    'array',
    'default',
    1
  ]
  ```
  ```js
  (editor) => {
    console.log(editor);
  }
  ```

Input parameters
: | Field | Type | Description |
|---|:---:|----|
| `id` | `string` | The id description. |

Return data
: | Field | Type | Required or optional | Description |
|---|:---:|:---:|----|
| `data` | `string` | required | The data description. |

### Example: Using `<configuration_option>`

{% comment %} This should be a working configuration. Please test. {% endcomment %}
```js
tinymce.init({
  selector: 'textarea',  // change this value according to your html
  <configuration_option>: 'bottom'
});
```

{% comment %} Remove if not required. add additional examples as required. {% endcomment %}
### Example: Disabling the <feature>

To disable the <feature>, set the `<configuration_option>` to `false`.
{% comment %} This should be a working configuration. Please test. {% endcomment %}
```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  <configuration_option>: false
});
```

{% comment %} Remove if not applicable {% endcomment %}
### Limitation of the `<configuration_option>` option

The `<configuration_option>` option has the following limitations.

<List the things we can't or wont fix, as well as complicated complications and risks>

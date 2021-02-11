## `advtable_value_series`
{{ site.requires_5_8 }}

{% if pluginname != "Advanced Tables" %}
> **Note**: The `advtable_value_series` option requires the Advanced Tables plugin.
{% endif %}

The `advtable_value_series` option allows values series to be configured that can be used to populate cells in a table.

**Type:** `Object`

**Default Value:**
 - `numbers` - a natural number series.
 - `alpha` - a base26 letter series.

```js
{
  numbers: {
    update: true,
    resizable: false,
    generator: ...
  },
  alpha: {
    update: true,
    resizable: false,
    generator: ...
  },
}
```

### Series configuration

| Name | Value | Requirement | Description |
| ---- | ----- | ----------- | ----------- |
| update | `boolean` | Optional | default: `false` - Specifies whether the table cells that are part of the series should update after changes are made to the table. |
| resizable | `boolean` | Optional | default: `true` - Specifies whether the table cells that are part of the series are resizable when using the resize bars. |
| generator | `(info: GeneratorInfo, rowIndex: number, columnIndex: number) => GeneratorResult` | Required | [Usage of generator](#usageofgenerator). |

#### Usage of generator

The `generator` is a callback function that is used to specify how a table cell that is part of the series should be updated. The callback is passed information relating to the generator and table cell, the row index and column index of the table cell. For more details, see: [GeneratorInfo](#generatorinfo).
The callback should return an object containing the value and optionally, the classes and attributes that should be applied on the table cell. For more details, see: [GeneratorResult](#generatorresult).

##### GeneratorInfo

| Name | Value | Description |
| ---- | ----- | ----------- |
| rowType | `'thead'`, `'tbody'` or '`tfoot'` | The section of the table cell. |
| cellType | `'td'` or `'th'` | The type of the table cell. |
| direction | `'row'` or `'column'` | The direction of the generator. |
| prevSeriesValue | `string` or `undefined` | The previous value calculated from the generator. |

##### GeneratorResult

| Name | Value | Requirement | Description |
| ---- | ----- | ----------- | ----------- |
| classes | `string[]` | Optional | The classes that should be applied on the table cell. |
| attributes | `Record<string, string, boolean, number or null>` | Optional | The attributes that should be applied or removed on the table cell. |
| value | `string`, `number` or `undefined` | Optional | The value of the table cell. If the given value is `undefined`, it will attempt to use the previous value of the table cell. |

### Example: Using `advtable_value_series`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your html
  plugins: 'table advtable',
  menubar: 'table',
  advtable_value_series: {
    numbers: {
      update: true,
      resizable: false,
      generator: function (info, rowIndex, columnIndex) {
        return {
          value: rowIndex + 1
        };
      }
    },
  }
});
```

{% comment %} TODO: Do I need to make a note that this option is used in conjuction with the mceTableToggleSeries command? {% endcomment %}
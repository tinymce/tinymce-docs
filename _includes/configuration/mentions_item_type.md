### `mentions_item_type`

{{site.requires_5_6v}}

This option sets which user interface item type to use when displaying the list of users.

- The `name` item will only display the user's name.
- The `profile` item will display the user's name and can display an optional image and description.

For information on the properties required for the user object provided to [`mentions_fetch`](#mentions_fetch), see: [User properties](#userproperties).

**Type:** `String`

**Default Value:** `name`

**Possible Values:** `name`, `profile`

#### Example: Using `mentions_item_type`

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'mentions',
  mentions_item_type: 'name'
});
```

##### User properties

The following table describes the properties available for user objects provided to the [`mentions_fetch` callback](#mentions_fetch). Properties may be required, optional, or not available; depending on the [`mentions_item_type`](#mentions_item_type) and [`mentions_select`](#mentions_select) options.

| Name | Value | `name` | `profile` | Description |
| ---- | ----- | ----------- | ----------- | ----------- |
| id | string | required | required | Used to identify the user mention in different callbacks |
| name | string | required | required |  Name to display and highlight matches |
| image | string | not available | optional | Image source for user avatar |
| description | string | not available | optional | Description to display |


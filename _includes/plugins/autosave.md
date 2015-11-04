## autosave

// adds menu control (under File menu)

This plugin gives the user a warning if they made modifications to a editor instance but didn't submit them. (This plugin will most likely be extended in the future to provide AJAX auto save support.) It also adds a menu item `Restore last draft` under the `File` menu.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "autosave"
});
```

### Options

These settings affect the execution of the `autoSave` plugin. The settings here will affect the interval, duration and behavior of locally stored drafts of the current editor instance.

### `autosave_ask_before_unload`

This option allows you to set whether the editor should prompt the user to advise them that they have unsaved changes when attempting to close the current window. By default this option is enabled and an example of disabling this setting is included below.

**Type**: `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "autosave",
    autosave_ask_before_unload: false
});
```

### `autosave_interval`

This option enables you to specify the time it should wait between making snapshots of the current contents and store it into local storage. The syntax is to append the letter `s` to the end of a number value. For example, "30s" for 30 seconds.

**Type**: `String`

**Default Value:** `"30s"`

**Example**:

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    autosave_interval: "20s"
});
```

### `autosave_prefix`

This option allows you to set the prefix that is used for local storage keys.

**Type**: `String`

**Default Value**: `"tinymce-autosave-{path}{query}-{id}-"`

**Example**:

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "autosave",
    autosave_prefix: "tinymce-autosave-{path}{query}-{id}-"
});
```

### `autosave_restore_when_empty`

This option enables you to specify if TinyMCE should automatically restore the contents stored in local storage when the editor is empty on initialization. This can be useful for users who don't know that they can restore lost work if the browser crashed by selecting `Restore last draft` from the `File` menu.

**Type**: `Boolean`

**Default Value**: `true`

**Possible Values**: `true`, `false`

**Example**:

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "autosave",
    autosave_restore_when_empty: false
});
```

### `autosave_retention`

This option lets you to specify the duration editor content should remain in local storage. Content older than the set time it will be ignored. The syntax is to append the letter `m` to the end of a number value. For example, "20m" for 20 minutes.

**Type**: `String`

**Default Value**: "20m"

**Example**:

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "autosave",
    autosave_retention: "30m"
});
```


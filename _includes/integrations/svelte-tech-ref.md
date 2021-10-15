## TinyMCE Svelte integration technical reference

Covered in this section:

* [Configuring the TinyMCE Svelte integration](#configuringthetinymcesvelteintegration)
* [Component binding](#componentbinding)
* [Event binding](#eventbinding)

### Configuring the TinyMCE Svelte integration

The `tinymce-svelte` `Editor` component accepts the following properties:

```jsx
<Editor
  apiKey="api-key"
  channel="5"
  id="uuid"
  inline=false
  disabled=false
  scriptSrc=undefined
  conf={}
  modelEvents="input change undo redo"
  value="value"
  text="readonly-text-output"
/>
```

#### apiKey

{{site.cloudname}} API key. Required for deployments using the {{site.cloudname}} to provide the {{site.productname}} editor.

Default value
: `"no-api-key"`

Type
: String

##### Example using apiKey

```jsx
<Editor
  apiKey="your-api-key"
/>
```

#### channel

Specifies the {{site.cloudname}} channel to use. For information on {{site.cloudname}} deployment channels, see: [Specifying the {{site.productname}} editor version deployed from Cloud]({{site.baseurl}}/cloud-deployment-guide/editor-plugin-version/).

Default value
: `"5"`

Type
: String

##### Example using channel

```jsx
<Editor
  channel="5-dev"
/>
```

#### id

Specified an Id for the editor. Used for retrieving the editor instance using the `tinymce.get('ID')` method.

Default value
: Automatically generated UUID

Type
: String

##### Example using id

```jsx
<Editor
  id="my-unique-identifier"
/>
```

#### inline

Set the editor to inline mode.

Default value
: `false`

Type
: Boolean

##### Example using inline

```jsx
<Editor
  inline=true
/>
```

#### disabled

Set the editor to readonly mode.

Default value
: `false`

Type
: Boolean

##### Example using disabled

```jsx
<Editor
  disabled=true
/>
```

#### scriptSrc

Use the `scriptSrc` property to specify the location of {{site.productname}} to lazy load when the application is not using {{site.cloudname}}. This setting is required if the application uses a self-hosted version of {{site.productname}}, such as the {{site.productname}} npm package or a .zip package of {{site.productname}}.

Type
: String

##### Example using scriptSrc

```jsx
<Editor
  scriptSrc="/path/to/tinymce.min.js"
/>
```

#### conf

Specify a set of properties for the `Tinymce.init` method to initialize the editor.

Default value
: `{}`

Type
: Object

##### Example using conf

```jsx
<script>
 let conf = {
   toolbar: 'undo redo',
   menubar: false
 }
</script>
<main>
  <Editor
    {conf}
  />
</main>
```

### Component binding

#### Input binding

The editor component allows developers to bind the contents of editor to a variable. By specifying the `bind:value`, developers can create a two-way binding on a selected variable.

#### Example of input binding

```jsx
<script>
let value = 'some content';
</script>
<main>
  <Editor bind:value={value} />
  <div>{@html value}</div>
  <textarea bind:value={value}></textarea>
</main>
```

#### Binding text output

The editor exposes the `text` property, which developers can `bind` to retrieve a read-only value of the editor content as text. Changes will not propagate up to the editor if the `text` bound variable changes. It will only propagate changes from the editor.

#### Example of text binding

```jsx
<script>
let text = '';
</script>
<main>
  <Editor bind:text={text} />
  <div>{text}</div>
</main>
```

### Event binding

Functions can be bound to editor events, such as:

```jsx
<Editor on:resizeeditor={this.handlerFunction} />
```

When the handler is called (**handlerFunction** in this example), it is called with two arguments:

`event`
: The {{site.productname}} event object.

`editor`
: A reference to the editor.

Ensure event names are specified in lower-case (event names are case-sensitive).

The following events are available:

* `activate`
* `addundo`
* `beforeaddundo`
* `beforeexeccommand`
* `beforegetcontent`
* `beforerenderui`
* `beforesetcontent`
* `beforepaste`
* `blur`
* `change`
* `clearundos`
* `click`
* `contextmenu`
* `copy`
* `cut`
* `dblclick`
* `deactivate`
* `dirty`
* `drag`
* `dragdrop`
* `dragend`
* `draggesture`
* `dragover`
* `drop`
* `execcommand`
* `focus`
* `focusin`
* `focusout`
* `getcontent`
* `hide`
* `init`
* `keydown`
* `keypress`
* `keyup`
* `loadcontent`
* `mousedown`
* `mouseenter`
* `mouseleave`
* `mousemove`
* `mouseout`
* `mouseover`
* `mouseup`
* `nodechange`
* `objectresizestart`
* `objectresized`
* `objectselected`
* `paste`
* `postprocess`
* `postrender`
* `preprocess`
* `progressstate`
* `redo`
* `remove`
* `reset`
* `resizeeditor`
* `savecontent`
* `selectionchange`
* `setattrib`
* `setcontent`
* `show`
* `submit`
* `undo`
* `visualaid`

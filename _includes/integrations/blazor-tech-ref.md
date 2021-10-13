## TinyMCE Blazor integration technical reference

Covered in this section:

* [Configuring the TinyMCE Blazor integration](#configuringthetinymceblazorintegration)
* [Component binding](#componentbinding)

### Configuring the TinyMCE Blazor integration

The `TinyMCE.Blazor` `Editor` component accepts the following properties:

```cs
<Editor
  Id="uuid"
  Inline=false
  CloudChannel="5"
  Value=""
  Disable=false
  JsConfSrc="path_to_jsObj"
  Conf="@yourConf"
  ApiKey="your-api-key"
  ClassName="tinymce-wrapper"
/>
```

None of the configuration properties are required for the TinyMCE Blazor integration to work.

#### ApiKey

{{site.cloudname}} API key. Required for deployments using the {{site.cloudname}} to provide the {{site.productname}} editor.

Default value
: `"no-api-key"`

Type
: String

##### Example using ApiKey

```cs
<Editor
  ApiKey="your-api-key"
/>
```

#### CloudChannel

Specifies the {{site.cloudname}} channel to use. For information on {{site.productname}} development channels, see: [Specifying the {{site.productname}} editor version deployed from Cloud]({{site.baseurl}}/cloud-deployment-guide/editor-plugin-version/).

Default value
: `"5"`

Type
: String

##### Example using CloudChannel

```cs
<Editor
  CloudChannel="5-dev"
/>
```

#### Id

Specified an Id for the editor. Used for retrieving the editor instance using the `tinymce.get('ID')` method.

Default value
: Automatically generated UUID

Type
: String

##### Example using Id

```cs
<Editor
  Id="my-unique-identifier"
/>
```

#### ClassName

Specifies the class of the Editor's container `div` in the component. This `div` is the parent of the Editor and adding styles to it will not add styles to the editor.

Default value
: `"tinymce-wrapper"`

Type
: String

##### Examples using ClassName

Setting a static class name:

```cs
<Editor ClassName="my-editor-container" />
```

Setting a dynamic class name:

```cs
<Editor ClassName="@((isEditorActive) ? "active-editor-div" : "default-editor-div")" />
```

#### Inline

Set the editor to inline mode.

Default value
: `false`

Type
: Boolean

##### Example using Inline

```cs
<Editor
  Inline=true
/>
```

#### Disable

Set the editor to readonly mode.

Default value
: `false`

Type
: Boolean

##### Example using Disable

```cs
<Editor
  Disable=@disable
/>
<button @onclick="@(() => disable = !disable)">Toggle</button>
```

#### JsConfSrc

Use a JS object as base configuration for the editor by specifying the path to the object relative to the window object.

Default
: `null`

Type
: String

##### Example using JsConfSrc

In your `_Host.cshtml`:

```cs
window.sample = {
  height: 300,
  toolbar: 'undo redo | bold italic'
}
```

In your component:

```cs
<Editor
  JsConfSrc="sample"
/>
```

#### ScriptSrc

Use the `ScriptSrc` property to specify the location of {{site.productname}} to lazy load when the application is not using {{site.cloudname}}. This setting is required if the application uses a self-hosted version of {{site.productname}}, such as the [{{site.productname}} NuGet package](https://www.nuget.org/packages/TinyMCE/) or a .zip package of {{site.productname}}.

Type
: String

##### Example using ScriptSrc

```cs
<Editor
  ScriptSrc="/path/to/tinymce.min.js"
/>
```

#### Conf

Specify a set of properties for the `Tinymce.init` method to initialize the editor.

Default value
: `null`

Type
: Dictionary&#60;string, object&#62;

##### Example using Conf

```cs
<Editor
  Conf="@editorConf"
/>

@code {
  private Dictionary<string. object> editorConf = new Dictionary<string, object>{
    {"toolbar", "undo redo | bold italic"},
    {"width", 400}
  };
}
```

### Component binding

#### Input binding

The editor component allows developers to bind the contents of editor to a variable. By specifying the `@bind-Value` directive, developers can create a two-way binding on a selected variable.

##### Example using input binding

```cs
<Editor
  @bind-Value=content
/>

<textarea @bind=content @bind:event="oninput"></textarea>

@code {
  private string content = "<p>Hello world</p>";
}
```

#### Binding Text output

Starting from TinyMCE.Blazor v0.0.4, the editor exposes the `@bind-Text` property, which developers can `bind` to retrieve a read-only value of the editor content as text. Changes will not propagate up to the editor if the `text` bound variable changes. It will only propagate changes from the editor.

```cs
<Editor
  @bind-Text=content
/>

<textarea @bind=content @bind:event="oninput"></textarea>

@code {
  private string content = "";
}
```

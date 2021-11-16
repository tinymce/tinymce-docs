1. Verify the installation by checking the `ItemGroup` references in `BlazorApp.csproj`, such as:

    _File:_ `BlazorApp.csproj`

    ```xml
    <ItemGroup>
      <PackageReference Include="TinyMCE.Blazor" Version="X.Y.Z" />
    </ItemGroup>
    ```

1. Add the `tinymce-blazor.js` script to `Pages/_Host.cshtml`, for example:

    ```html
    <script src="_framework/blazor.server.js"></script>
    <script src="_content/TinyMCE.Blazor/tinymce-blazor.js"></script>
    ```

1. Add the `Editor` component to a page by either:

    * Using the `using` directive

        ```cs
        @using TinyMCE.Blazor
        <Editor />
        ```

    * Using the full component and package name

        ```cs
        <TinyMCE.Blazor.Editor />
        ```

    For example:

    _File:_ `Pages/Index.razor`

    ```cs
    @page "/"
    @using TinyMCE.Blazor

    <h1>Hello, world!</h1>
    Welcome to your new app.
    <Editor />
    ```
{% if productSource != "cloud" %}
1. To load {{site.productname}} from the self-hosted package instead of the {{site.cloudname}}, configure the `ScriptSrc` property:

    ```cs
    <Editor
      ScriptSrc="/path/to/tinymce.min.js"
    />
    ```
{% endif %}
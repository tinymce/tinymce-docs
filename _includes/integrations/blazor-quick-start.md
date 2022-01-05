
The [Official {{site.productname}} Blazor component](https://github.com/tinymce/tinymce-blazor) integrates {{site.productname}} into [Blazor applications](https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor).
This procedure creates a basic Blazor application and adds a {{site.productname}} editor using the {{site.productname}} Blazor integration. The basic Blazor application is based on the following tutorial: [Microsoft .NET Blazor Tutorial - Build your first Blazor app](https://dotnet.microsoft.com/learn/aspnet/blazor-tutorial/).

Select from the following guides:

* [Using Visual Studio](#usingvisualstudio)
* [Using a command prompt or terminal](#usingacommandpromptorterminal)

### Using Visual Studio

#### Prerequisites

This procedure requires:

* [Microsoft Visual Studio](https://docs.microsoft.com/en-us/visualstudio/windows/)
* [Microsoft .NET](https://docs.microsoft.com/en-us/dotnet/core/install/)

#### Procedure

1. On the Visual Studio toolbar, click the [**New Project** button](https://docs.microsoft.com/en-us/visualstudio/ide/create-new-project).
1. Select the **Blazor Server App** template.
1. Use the NuGet package manager console to install the `TinyMCE.Blazor` package, such as:

    ```sh
    Install-Package TinyMCE.Blazor
    ```
{% if productSource == "package-manager" %}
1. Use the NuGet package manager console to install the `{{site.productname}}` package, such as:

    ```sh
    Install-Package TinyMCE
    ```
{% endif %}
{% include integrations/blazor-postinstall.md %}

1. To test the application, run the application by pressing **Ctrl+F5**.

### Using a command prompt or terminal

#### Prerequisites

This procedure requires:

* [Microsoft .NET](https://docs.microsoft.com/en-us/dotnet/core/install/)

#### Procedure

1. Create a new Blazor project:

    ```sh
    dotnet new blazorserver -o BlazorApp --no-https
    ```

1. Change into the new application directory:

    ```sh
    cd BlazorApp
    ```

1. Install the {{site.productname}} Blazor integration:

    ```sh
    dotnet add package TinyMCE.Blazor
    ```
{% if productSource == "package-manager" %}
1. Install the `{{site.productname}}` package, such as:

    ```sh
    dotnet add package TinyMCE
    ```
{% endif %}
{% include integrations/blazor-postinstall.md %}

1. Test the application using the .NET development server.

    * To start the development server, in the project's root directory, run:

        ```sh
        dotnet watch run
        ```

        This will start a local development server, accessible at http://localhost:5000.

     * To stop the development server, select on the command line or command prompt and press _Ctrl+C_.

### Next Steps

For information on customizing the integration, see:

* [{{site.productname}} basic setup]({{site.baseurl}}/how-to-guides/learn-the-basics/basic-setup/).
* [The {{site.productname}} Blazor integration technical reference]({{site.baseurl}}/how-to-guides/environment-setup/blazor/blazor-ref/).
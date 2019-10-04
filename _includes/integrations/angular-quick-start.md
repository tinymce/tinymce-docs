## TinyMCE Angular integration quick start guide

The [Official TinyMCE Angular component](https://github.com/tinymce/tinymce-angular) integrates TinyMCE into Angular projects.
This procedure creates a [basic Angular application](https://angular.io/guide/setup-local) containing a TinyMCE editor based on our [Basic TinyMCE example]({{site.baseurl}}/docs/demo/basic-example/).

For examples of the TinyMCE Angular integration, visit [the tinymce-angular storybook](https://tinymce.github.io/tinymce-angular/).

### Prerequisites

This procedure requires:
* [Node.js (and npm)](https://nodejs.org/).
* Access to `tinymce.min.js` on either:

    * [Tiny Cloud]({{site.baseurl}}/cloud-deployment-guide/editor-and-features/).
    * TinyMCE Self-hosted. See [Advanced installation choices]({{site.baseurl}}/general-configuration-guide/advanced-install/) for details on self-hosting TinyMCE.

### Procedure

1. On a command line or command prompt, install the [Angular CLI Tool](https://angular.io/cli) package.

    ```
    $ npm install -g @angular/cli
    ```
2. Create a new Angular project named `tinymce-angular-demo`.

    ```
    $ ng new --defaults --skip-git tinymce-angular-demo
    ```
3. Change into the newly created directory.

    ```
    $ cd tinymce-angular-demo
    ```
4. Install the `tinymce-angular` package and save it to your `package.json` with `--save`.

    ```
    $ npm install --save @tinymce/tinymce-angular
    ```
5. Using a text editor, open `/path/to/tinymce-angular-demo/src/app/app.module.ts` and replace the contents with:

    ```js
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { EditorModule } from '@tinymce/tinymce-angular';
    import { AppComponent } from './app.component';

    @NgModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        EditorModule
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }
    ```

6. Using a text editor, open `/path/to/tinymce-angular-demo/src/app/app.component.html` and replace the contents with:

    ```html
    <h1>TinyMCE 5 Angular Demo</h1>
    <editor
      initialValue="<p>This is the initial content of the editor</p>"
      [init]="{
           height: 500,
           menubar: false,
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount'
           ],
           toolbar:
             'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help'
         }"
      >
    </editor>
    ```
    This TinyMCE editor configuration should replicate the example on the [Basic example page]({{site.baseurl}}/demo/basic-example/).
7. Provide access to TinyMCE using Tiny Cloud or by self-hosting TinyMCE.

    * **Tiny Cloud**

        Include the `apiKey` option in the editor element and include your [TinyMCE API key]({{site.shared_baseurl}}/signup/).

        Such as:

        ```js
        <Editor apiKey="your-api-key" [init]={% raw %}{{% endraw %} /* your other settings */ {% raw %}}{% endraw %} />
        ```

    * **TinyMCE Self-hosted**

      TinyMCE can be self-hosted by: deploying TinyMCE independent of the Angular application, or bundling TinyMCE with the Angular application.

      * **Deploy TinyMCE independent of the Angular application**

        To use an independent deployment of TinyMCE, add a script to either the `<head>` or the end of the `<body>` of the HTML file, such as:
        ```html
        <script src="/path/to/tinymce.min.js"></script>
        ```

        To use an independent deployment of TinyMCE with the create a Angular application, add the script to `/path/to/tinymce-angular-demo/src/app/app.component.html`.

        For information on self-hosting TinyMCE, see: [Advanced installation choices]({{site.baseurl}}/general-configuration-guide/advanced-install/).

      * **Bundling TinyMCE with the Angular application using a module loader**

        To bundle TinyMCE using a module loader (such as Webpack and Browserify), see: [Usage with module loaders]({{site.baseurl}}/advanced/usage-with-module-loaders/).

      * **Including TinyMCE with the Application**

        For details, see: [Including TinyMCE within the Angular application](#includingtinymcewithintheangularapplication).

7. Test the application using the Angular development server.
    * To start the development server, navigate to the `tinymce-angular-demo` directory and run:

        ```
        $ ng serve --open
        ```

    * To stop the development server, select on the command line or command prompt and press _Ctrl+C_.

### Deploying the application to a HTTP server.
The application will require further configuration before it can be deployed to a production environment. For information on configuring the application for deployment, see: [Angular Docs - Building and serving Angular apps](https://angular.io/guide/build) or [Angular Docs - Deployment](https://angular.io/guide/deployment).

To deploy the application to a local HTTP Server:

1. Navigate to the `tinymce-angular-demo` directory and run:

    ```
    $ ng build
    ```

2. Copy the contents of the `tinymce-angular-demo/dist` directory to the root directory of the web server.

The application has now been deployed on the web server.

> **Note:** Additional configuration is required to deploy the application outside the web server root directory, such as http://localhost:&#60;port&#62;/my_angular_application.

### Next Steps

* For examples of the TinyMCE integration, see: [the tinymce-angular storybook](https://tinymce.github.io/tinymce-angular/).
* For information on customizing:

    * TinyMCE, see: [Basic setup]({{site.baseurl}}/general-configuration-guide/basic-setup/).
    * The Angular application, see: [the Angular documentation](https://angular.io/docs).
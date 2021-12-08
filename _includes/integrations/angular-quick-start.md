The [Official {{site.productname}} Angular component](https://github.com/tinymce/tinymce-angular) integrates {{site.productname}} into Angular projects.
This procedure creates a [basic Angular application](https://angular.io/guide/setup-local) containing a {{site.productname}} editor.

For examples of the {{site.productname}} Angular integration, visit [the tinymce-angular storybook](https://tinymce.github.io/tinymce-angular/).

## Prerequisites

This procedure requires:

* [Node.js (and npm)](https://nodejs.org/).

## Procedure

1. On a command line or command prompt, install the [Angular CLI Tool](https://angular.io/cli) package.

    ```sh
    npm install -g @angular/cli
    ```

2. Create a new Angular project named `tinymce-angular-demo`.

    ```
    ng new --defaults --skip-git tinymce-angular-demo
    ```

3. Change into the newly created directory.

    ```sh
    cd tinymce-angular-demo
    ```

4. Install the `tinymce-angular` package and save it to your `package.json` with `--save`.

    ```sh
    npm install --save @tinymce/tinymce-angular
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

    ```jsx
    <h1>{{site.productname}} {{site.productmajorversion}} Angular Demo</h1>
    <editor
      [init]="{ plugins: 'lists link image code help wordcount' }"
    ></editor>
    ```

{% if productSource == "cloud" %}
7. Include the `apiKey` option in the editor element and include your [{{site.cloudname}} API key]({{site.accountsignup}}).

    Such as:

    ```jsx
    <editor apiKey="your-api-key" [init]={% raw %}{{% endraw %} /* your other settings */ {% raw %}}{% endraw %} ></editor>
    ```

{% elsif productSource == "package-manager" %}
1. Install the `tinymce-angular` package and save it to your `package.json` with `--save`.

    ```sh
    npm install --save tinymce
    ```

2. Using a text editor; open `angular.json` and add {{site.productname}} to the `assets` property.

    ```json
    "assets": [
      { "glob": "**/*", "input": "node_modules/tinymce", "output": "/tinymce/" }
    ]
    ```

3. Load TinyMCE.
    * To load TinyMCE when the editor is initialized (also known as lazy loading), add a dependency provider to the module using the `TINYMCE_SCRIPT_SRC` token.

        ```js
        import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
        /* ... */
        @NgModule({
          /* ... */
          imports: [
            EditorModule
          ],
          providers: [
            { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
          ]
        })
        ```

    * To load TinyMCE when the page or application is loaded:

        1. Open `angular.json` and add {{site.productname}} to the *global scripts* tag.

            ```json
            "scripts": [
              "node_modules/tinymce/tinymce.min.js"
            ]
            ```

        2. Update the editor configuration to include the `base_url` and `suffix` options.

            ```html
            <editor [init]="{
              base_url: '/tinymce', // Root for resources
              suffix: '.min'        // Suffix to use when loading resources
            }"></editor>
            ```

{% else %}
1. Add the `tinymce` global to the application by: Deploying {{site.productname}} independent of the Angular application, or bundling {{site.productname}} with the Angular application.

    * Deploy {{site.productname}} independent of the Angular application

      To use an independent deployment of {{site.productname}}, add a script to either the `<head>` or the end of the `<body>` of the HTML file, such as:

      ```html
      <script src="/path/to/tinymce.min.js"></script>
      ```

      To use an independent deployment of {{site.productname}} with the create a Angular application, add the script to `/path/to/tinymce-angular-demo/src/app/app.component.html`.

      For information on self-hosting {{site.productname}}, see: [Installing {{ site.productname }}]({{site.baseurl}}/general-configuration-guide/advanced-install/).

    <a id="bundle" class="anchor"></a>
    * Bundling {{site.productname}} with the Angular application using a module loader (such as Webpack).

{% include integrations/bundling-angular.md depth='2' %}
{% endif %}
8. Test the application using the Angular development server.
    * To start the development server, navigate to the `tinymce-angular-demo` directory and run:

        ```sh
        ng serve --open
        ```

    * To stop the development server, select on the command line or command prompt and press _Ctrl+C_.

{% if productSource == "package-manager" %}
## Bunding {{site.productname}} with an Angular application

{% include integrations/bundling-angular.md %}
{% endif %}

## Deploying the application to a HTTP server

The application will require further configuration before it can be deployed to a production environment. For information on configuring the application for deployment, see: [Angular Docs - Building and serving Angular apps](https://angular.io/guide/build) or [Angular Docs - Deployment](https://angular.io/guide/deployment).

To deploy the application to a local HTTP Server:

1. Navigate to the `tinymce-angular-demo` directory and run:

    ```sh
    ng build
    ```

2. Copy the contents of the `tinymce-angular-demo/dist` directory to the root directory of the web server.

The application has now been deployed on the web server.

> **Note:** Additional configuration is required to deploy the application outside the web server root directory, such as http://localhost:&#60;port&#62;/my_angular_application.

## Next Steps

* For examples of the {{site.productname}} integration, see: [the tinymce-angular storybook](https://tinymce.github.io/tinymce-angular/).
* For information on customizing:
  * {{site.productname}} integration, see: [Angular framework Technical Reference]({{site.baseurl}}/how-to-guides/environment-setup/angular/angular-ref/).
  * {{site.productname}}, see: [Basic setup]({{site.baseurl}}/general-configuration-guide/basic-setup/).
  * The Angular application, see: [the Angular documentation](https://angular.io/docs).

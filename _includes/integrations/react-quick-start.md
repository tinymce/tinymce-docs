## TinyMCE React integration quick start guide

The [Official {{site.productname}} React component](https://github.com/tinymce/tinymce-react) integrates {{site.productname}} into React projects.
This procedure creates a [basic React application](https://github.com/facebook/create-react-app) containing a {{site.productname}} editor based on our [Basic example]({{site.baseurl}}/demo/basic-example/).

For examples of the {{site.productname}} integration, visit [the tinymce-react storybook](https://tinymce.github.io/tinymce-react/).

### Prerequisites

This procedure requires:

* [Node.js (and npm)](https://nodejs.org/).
* Access to `tinymce.min.js` on either:
    * [{{site.cloudname}}]({{site.baseurl}}/cloud-deployment-guide/editor-and-features/).
    * {{site.productname}} Self-hosted. See:
        * [Installing {{ site.productname }} - Package Managers]({{site.baseurl}}/general-configuration-guide/advanced-install/#packagemanagerinstalloptions).
        * [Installing {{ site.productname }} - Self-Hosted Download / Install]({{site.baseurl}}/general-configuration-guide/advanced-install/#self-hostedinstall).

### Procedure

1. On a command line or command prompt, install the [Create React App](https://github.com/facebook/create-react-app) package.

    ```sh
    $ npm install -g create-react-app
    ```

2. Create a new React project named `tinymce-react-demo`.

    ```sh
    $ create-react-app tinymce-react-demo
    ```

3. Change into the newly created directory.

    ```sh
    $ cd tinymce-react-demo
    ```

4. Install the `tinymce-react` package and save it to your `package.json` with `--save`.

    ```sh
    $ npm install --save @tinymce/tinymce-react
    ```

5. Using a text editor, open `/path/to/tinymce-react-demo/src/App.js` and replace the contents with:

    ```jsx
    import React, { useRef } from 'react';
    import { Editor } from '@tinymce/tinymce-react';

    export default function App() {
      const edRef = useRef(null);
      const log = () => {
        if (edRef.current) {
          console.log(edRef.current.getContent());
        }
      };
      return (
        <>
        <Editor
          onInit={(evt, editor) => edRef.current = editor}
          initialValue="<p>This is the initial content of the editor.</p>"
          init={% raw %}{{{% endraw %}
            height: 500,
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount'
            ],
            toolbar: 'undo redo | formatselect | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          {% raw %}}}{% endraw %}
        />
        <button onClick={log}>Log editor content</button>
        </>
      );
    }
    ```
    This JavaScript file will create the class `App` containing a {{site.productname}} editor configured to replicate the example on the [Basic example page]({{site.baseurl}}/demo/basic-example/).

6. Provide access to {{site.productname}} using either {{site.cloudname}} or by self-hosting {{site.productname}}.

    * **{{site.cloudname}}**

        Include the `apiKey` option in the editor element and include your [{{site.cloudname}} API key]({{site.accountsignup}}).

        Such as:

        ```jsx
        <Editor apiKey='your-api-key' init={% raw %}{{{% endraw %} /* your other settings */ {% raw %}}}{% endraw %} />
        ```

    * **{{site.productname}} Self-hosted**

      {{site.productname}} can be self-hosted by: deploying {{site.productname}} independent of the React application, or bundling {{site.productname}} with the React application.

      * **Deploy {{site.productname}} independent of the React application**

        To use an independent deployment of {{site.productname}}, add a script to either the `<head>` or the end of the `<body>` of the HTML file, such as:
        ```html
        <script src="/path/to/tinymce.min.js"></script>
        ```

        To use an independent deployment of {{site.productname}} with the create a React application, add the script to `/path/to/tinymce-react-demo/public/index.html`.

        For information on self-hosting {{site.productname}}, see: [Installing {{ site.productname }}]({{site.baseurl}}/general-configuration-guide/advanced-install/).

      * **Bundling {{site.productname}} with the React application using a module loader**

          To bundle {{site.productname}} using a module loader (such as Webpack and Browserify), see: [Usage with module loaders]({{site.baseurl}}/advanced/usage-with-module-loaders/).

7. Test the application using the Node.js development server.
    * To start the development server, navigate to the `tinymce-react-demo` directory and run:

        ```sh
        $ npm run start
        ```

    * To stop the development server, select on the command line or command prompt and press _Ctrl+C_.

### Deploying the application to a HTTP server.
The application will require further configuration before it can be deployed to a production environment. For information on configuring the application for deployment, see: [Create React App - Deployment](https://create-react-app.dev/docs/deployment).

To deploy the application to a local HTTP Server:

1. Navigate to the `tinymce-react-demo` directory and run:

    ```sh
    $ npm run build
    ```

2. Copy the contents of the `tinymce-react-demo/build` directory to the root directory of the web server.

The application has now been deployed on the web server.

> **Note:** Additional configuration is required to deploy the application outside the web server root directory, such as http://localhost:&#60;port&#62;/my_react_application.

### Next Steps

* For examples of the {{site.productname}} integration, see: [the tinymce-react storybook](https://tinymce.github.io/tinymce-react/).
* For information on customizing:
    * {{site.productname}}, see: [Basic setup]({{site.baseurl}}/general-configuration-guide/basic-setup/).
    * The React application, see: [Create React App](https://create-react-app.dev/docs/getting-started) or [the React documentation](https://reactjs.org/docs/getting-started.html).

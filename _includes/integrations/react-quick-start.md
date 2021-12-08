## TinyMCE React integration quick start guide

The [Official {{site.productname}} React component](https://github.com/tinymce/tinymce-react) integrates {{site.productname}} into React projects.
This procedure creates a [basic React application](https://github.com/facebook/create-react-app) containing a {{site.productname}} editor.

For examples of the {{site.productname}} integration, visit [the tinymce-react storybook](https://tinymce.github.io/tinymce-react/).

### Prerequisites

This procedure requires:

* [Node.js (and npm)](https://nodejs.org/).

### Procedure

1. Use the [Create React App](https://github.com/facebook/create-react-app) package to create a new React project named `tinymce-react-demo`.

    ```sh
    npx create-react-app tinymce-react-demo
    ```

2. Change to the newly created directory.

    ```sh
    cd tinymce-react-demo
    ```

3. Install the `tinymce-react` package and save it to your `package.json` with `--save`.

    ```sh
    npm install --save @tinymce/tinymce-react
    ```

4. Using a text editor, open `./src/App.js` and replace the contents with:

    ```jsx
    import React, { useRef } from 'react';
    import { Editor } from '@tinymce/tinymce-react';

    export default function App() {
      const editorRef = useRef(null);
      const log = () => {
        if (editorRef.current) {
          console.log(editorRef.current.getContent());
        }
      };
      return (
        <>
          <Editor
            onInit={(evt, editor) => editorRef.current = editor}
            initialValue="<p>This is the initial content of the editor.</p>"
            init={% raw %}{{{% endraw %}
              plugins: 'lists link image table code help wordcount'
            {% raw %}}}{% endraw %}
          />
          <button onClick={log}>Log editor content</button>
        </>
      );
    }
    ```

    This JavaScript file will create a component "`App`" containing a {{site.productname}} editor configured with basic features.
{% if productSource == "cloud" %}
5. Include the `apiKey` option in the editor element and include your [{{site.cloudname}} API key]({{site.accountsignup}}).

    Such as:

    ```jsx
    <Editor apiKey='your-api-key' init={% raw %}{{{% endraw %} /* your other settings */ {% raw %}}}{% endraw %} />
    ```

{% elsif productSource == "package-manager" %}
5. Bundle {{site.productname}} with the React application using a module loader (such as Webpack).

{% include integrations/bundling-react.md depth='1' %}
{% else %}
5. {{site.productname}} can be self-hosted by either: [Deploying {{site.productname}} independent of the React application](#deployingtinymceindependent), or [Bundling {{site.productname}} with the React application](#bundle).
    <a id="deployingtinymceindependent" class="anchor"></a>
    * Deploying {{site.productname}} independent of the React application. To use a {{site.productname}} instance that has been deployed independent of the React application, use: [the `tinymceScriptSrc` prop](#usingthetinyscriptsrcprop), or [an HTML `<script>` tag](#usinganhtmlscripttag).
        <a id="usingthetinyscriptsrcprop" class="anchor"></a>
        * Using the `tinymceScriptSrc` prop:

            1. To use an independent deployment of {{site.productname}}, add the `tinymceScriptSrc` prop to specify the path to the {{site.productname}} script, such as:

                ```jsx
                <Editor tinymceScriptSrc="/path/to/tinymce.min.js" />
                ```

            1. To use `tinymceScriptSrc` with the `create-react-app` project, put the {{site.productname}} distribution in `./public` folder and reference the path to the `public` folder using the environment variable `process.env.PUBLIC_URL`, such as:

                ```jsx
                <Editor tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}>
                ```

        <a id="usinganhtmlscripttag" class="anchor"></a>
        * Using an HTML `<script>` tag:

            1. Add a script to either the `<head>` or the end of the `<body>` of the HTML file, such as:

                ```html
                <script src="/path/to/tinymce.min.js"></script>
                ```

            1. To use the independently sourced {{site.productname}} with create-react-app, add the script tag to `./public/index.html`.

                Normally the tinymce distribution would be put in the `public` folder and referenced using the URL `%PUBLIC_URL%/tinymce/tinymce.min.js`, such as:

                ```html
                <script src="%PUBLIC_URL%/tinymce/tinymce.min.js"></script>
                ```

    <a id="bundle" class="anchor"></a>
    * Bundle {{site.productname}} with the React application using a module loader (such as Webpack).

{% include integrations/bundling-react.md depth='2' %}
{% endif %}
6. Test the application using the Node.js development server.
    * To start the development server, navigate to the `tinymce-react-demo` directory and run:

        ```sh
        npm run start
        ```

    * To stop the development server, select on the command line or command prompt and press _Ctrl+C_.

### Deploying the application to a HTTP server

The application will require further configuration before it can be deployed to a production environment. For information on configuring the application for deployment, see: [Create React App - Deployment](https://create-react-app.dev/docs/deployment).

To deploy the application to a local HTTP Server:

1. Navigate to the `tinymce-react-demo` directory and run:

    ```sh
    npm run build
    ```

2. Copy the contents of the `tinymce-react-demo/build` directory to the root directory of the web server.

The application has now been deployed on the web server.

> **Note:** Additional configuration is required to deploy the application outside the web server root directory, such as http://localhost:&#60;port&#62;/my_react_application.

### Next Steps

* For examples of the {{site.productname}} integration, see: [the tinymce-react storybook](https://tinymce.github.io/tinymce-react/).
* For information on customizing:
  * {{site.productname}} integration, see: [React framework Technical Reference]({{site.baseurl}}/how-to-guides/environment-setup/react/react-ref/).
  * {{site.productname}}, see: [Basic setup]({{site.baseurl}}/general-configuration-guide/basic-setup/).
  * The React application, see: [Create React App](https://create-react-app.dev/docs/getting-started) or [the React documentation](https://reactjs.org/docs/getting-started.html).

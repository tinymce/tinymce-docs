## TinyMCE React integration quick start guide

The [Official TinyMCE React component](https://github.com/tinymce/tinymce-react) integrates TinyMCE into React projects.
This procedure creates a [basic React application](https://github.com/facebook/create-react-app) containing a TinyMCE editor based on our [Basic example]({{site.baseurl}}/docs/demo/basic-example/).

For examples of the TinyMCE integration, visit [the tinymce-react storybook](https://tinymce.github.io/tinymce-react/).

### Prerequisites

This procedure requires:
* [Node.js (and npm)](https://nodejs.org/).
* Access to `tinymce.min.js` on either:

    * [Tiny Cloud]({{site.baseurl}}/cloud-deployment-guide/editor-and-features/).
    * TinyMCE Self-hosted. See [Advanced installation choices]({{site.baseurl}}/general-configuration-guide/advanced-install/) for details on self-hosting TinyMCE.

### Procedure

1. On a command line or command prompt, install the [Create React App](https://github.com/facebook/create-react-app) package.

    ```
    $ npm install -g create-react-app
    ```
2. Create a new React project named `tinymce-react-demo`.

    ```
    $ create-react-app tinymce-react-demo
    ```
3. Change into the newly created directory.

    ```
    $ cd tinymce-react-demo
    ```
4. Install the `tinymce-react` package and save it to your `package.json` with `--save`.

    ```
    $ npm install --save @tinymce/tinymce-react
    ```
5. Using a text editor, open `/path/to/tinymce-react-demo/src/App.js` and replace the contents with:

    ```js
    import React from 'react';
    import { Editor } from '@tinymce/tinymce-react';

    class App extends React.Component {
      handleEditorChange = (e) => {
        console.log('Content was updated:', e.target.getContent());
      }

      render() {
        return (
          <Editor
            initialValue="<p>This is the initial content of the editor</p>"
            init={% raw %}{{{% endraw %}
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
            {% raw %}}}{% endraw %}
            onChange={this.handleEditorChange}
          />
        );
      }
    }

    export default App;
    ```
    This JavaScript file will create the class `App` containing a TinyMCE editor configured to replicate the example on the [Basic example page]({{site.baseurl}}/docs/demo/basic-example/).
6. Provide access to TinyMCE using Tiny Cloud or by self-hosting TinyMCE.

    * **Tiny Cloud**

        Include the `apiKey` option in the editor element and include your [TinyMCE API key]({{site.shared_baseurl}}/signup/).

        Such as:

        ```js
        <Editor apiKey='your-api-key' init={% raw %}{{{% endraw %} /* your other settings */ {% raw %}}}{% endraw %} />
        ```

    * **TinyMCE Self-hosted**

      TinyMCE can be self-hosted by: deploying TinyMCE independent of the React application, or bundling TinyMCE with the React application.

      * **Deploy TinyMCE independent of the React application**

        To use an independent deployment of TinyMCE, add a script to either the `<head>` or the end of the `<body>` of the HTML file, such as:
        ```html
        <script src="/path/to/tinymce.min.js"></script>
        ```

        To use an independent deployment of TinyMCE with the create a React application, add the script to `/path/to/tinymce-react-demo/public/index.html`.

        For information on self-hosting TinyMCE, see: [Advanced installation choices]({{site.baseurl}}/general-configuration-guide/advanced-install/).

      * **Bundling TinyMCE with the React application using a module loader**

          To bundle TinyMCE using a module loader (such as Webpack and Browserify), see: [Usage with module loaders]({{site.baseurl}}/advanced/usage-with-module-loaders/).

7. Test the application using the Node.js development server.
    * To start the development server, navigate to the `tinymce-react-demo` directory and run:

        ```
        $ npm run start
        ```

    * To stop the development server, select on the command line or command prompt and press _Ctrl+C_.

### Deploying the application to a HTTP server.
The application will require further configuration before it can be deployed to a production environment. For information on configuring the application for deployment, see: [Create React App - Deployment](https://create-react-app.dev/docs/deployment).

To deploy the application to a local HTTP Server:

1. Navigate to the `tinymce-react-demo` directory and run:

    ```
    $ npm run build
    ```

2. Copy the contents of the `tinymce-react-demo/build` directory to the root directory of the web server.

The application has now been deployed on the web server.

> **Note:** Additional configuration is required to deploy the application outside the web server root directory, such as http://localhost:<port>/my_react_application.

### Next Steps

* For examples of the TinyMCE integration, see: [the tinymce-react storybook](https://tinymce.github.io/tinymce-react/).
* For information on customizing:

    * TinyMCE, see: [Basic setup]({{site.baseurl}}/general-configuration-guide/basic-setup/).
    * The React application, see: [Create React App](https://create-react-app.dev/docs/getting-started) or [the React documentation](https://reactjs.org/docs/getting-started.html).
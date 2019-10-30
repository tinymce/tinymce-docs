## TinyMCE Vue.js integration quick start guide

The [Official TinyMCE Vue.js component](https://github.com/tinymce/tinymce-vue) integrates TinyMCE into Vue.js projects.
This procedure creates a [basic Vue.js application](https://cli.vuejs.org/guide/creating-a-project.html#vue-create) containing a TinyMCE editor based on our [Basic example]({{site.baseurl}}/demo/basic-example/).

For examples of the TinyMCE integration, visit [the tinymce-vue storybook](https://tinymce.github.io/tinymce-vue/).

### Prerequisites

This procedure requires:
* [Node.js (and npm)](https://nodejs.org/).
* Access to `tinymce.min.js` on either:

    * [{{site.cloudname}}]({{site.baseurl}}/cloud-deployment-guide/editor-and-features/).
    * TinyMCE Self-hosted. See [Advanced installation choices]({{site.baseurl}}/general-configuration-guide/advanced-install/) for details on self-hosting TinyMCE.

### Procedure

1. On a command line or command prompt, install the [Vue CLI Tool](https://cli.vuejs.org/#getting-started) package.

    ```
    $ npm install -g @vue/cli
    ```
2. Create a new Vue.js project named `tinymce-vue-demo`.

    ```
    $ vue create --default tinymce-vue-demo
    ```
3. Change into the newly created directory.

    ```
    $ cd tinymce-vue-demo
    ```
4. Install the `tinymce-vue` package and save it to your `package.json` with `--save`.

    ```
    $ npm install --save @tinymce/tinymce-vue
    ```
5. Using a text editor, open `/path/to/tinymce-vue-demo/src/App.vue`.

    1. Add a TinyMCE configuration to the `<template>` using the `<editor>` tag.
    2. Add `import Editor from '@tinymce/tinymce-vue'` to the start of the `<script>`.
    3. Add `editor: Editor` to the `default {components}`.

    For example:

    ```xml
    <template>
      <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <editor
          api-key="no-api-key"
          initialValue="<p>This is the initial content of the editor</p>"
          :init="{% raw %}{{% endraw %}
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
          {% raw %}}{% endraw %}"
          ></editor>
      </div>
    </template>

    <script>
    import Editor from '@tinymce/tinymce-vue'

    export default {
      name: 'app',
      components: {
        'editor': Editor
      }
    }
    </script>
    ```
    This TinyMCE editor configuration should replicate the example on the [Basic example page]({{site.baseurl}}/demo/basic-example/).
6. Provide access to TinyMCE using {{site.cloudname}} or by self-hosting TinyMCE.

    * **{{site.cloudname}}**

        Include the `api-key` option in the editor element and include your [TinyMCE API key]({{site.shared_baseurl}}/signup/).

        Such as:

        ```js
        <editor api-key='your-api-key' :init="{% raw %}{{% endraw %} /* your other settings */ {% raw %}}{% endraw %}" />
        ```

    * **TinyMCE Self-hosted**

      TinyMCE can be self-hosted by: deploying TinyMCE independent of the Vue.js application, or bundling TinyMCE with the Vue.js application.

      * **Deploy TinyMCE independent of the Vue.js application**

        To use an independent deployment of TinyMCE, add a script to either the `<head>` or the end of the `<body>` of the HTML file, such as:
        ```html
        <script src="/path/to/tinymce.min.js"></script>
        ```

        To use an independent deployment of TinyMCE with the create a Vue.js application, add the script to `/path/to/tinymce-vue-demo/public/index.html`.

        For information on self-hosting TinyMCE, see: [Advanced installation choices]({{site.baseurl}}/general-configuration-guide/advanced-install/).

      * **Bundling TinyMCE with the Vue.js application using a module loader**

          To bundle TinyMCE using a module loader (such as Webpack and Browserify), see: [Usage with module loaders]({{site.baseurl}}/advanced/usage-with-module-loaders/).

7. Test the application using the Node.js development server.
    * To start the development server, navigate to the `tinymce-vue-demo` directory and run:

        ```
        $ npm run serve
        ```

    * To stop the development server, select on the command line or command prompt and press _Ctrl+C_.

### Deploying the application to a HTTP server.
The application will require further configuration before it can be deployed to a production environment. For information on configuring the application for deployment, see: [Vue.js - Production Deployment](https://vuejs.org/v2/guide/deployment.html).

### Next Steps

* For examples of the TinyMCE integration, see: [the tinymce-vue storybook](https://tinymce.github.io/tinymce-vue/).
* For information on customizing:

    * TinyMCE, see: [Basic setup]({{site.baseurl}}/general-configuration-guide/basic-setup/).
    * The Vue.js application, see: [Vue.js Documentation](https://vuejs.org/v2/guide/).

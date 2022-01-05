The [Official {{site.productname}} Vue.js component](https://github.com/tinymce/tinymce-vue) integrates {{site.productname}} into Vue.js projects.
This procedure creates a [basic Vue.js application](https://cli.vuejs.org/guide/creating-a-project.html#vue-create) containing a {{site.productname}} editor.

Version 4 of the `tinymce-vue` package supports Vue.js 3.x, but does not support Vue.js 2.x. For Vue.js 2.x applications, use `tinymce-vue` version 3.

## TinyMCE Vue.js integration live examples

For examples of the {{site.productname}} Vue.js 2.x integration, visit: [the tinymce-vue storybook](https://tinymce.github.io/tinymce-vue/).

For examples of the {{site.productname}} Vue.js 3.x integration:

1. Clone the `tinymce/tinymce-vue` GitHub repository. For example:

    ```sh
    git clone https://github.com/tinymce/tinymce-vue.git
    ```

2. Install the required packages using `yarn`. For example:

    ```sh
    yarn install
    ```

3. To start the demo server, run:

    ```sh
    yarn demo
    ```

The `tinymce-vue` demo is now running. Visit: <http://localhost:3001>.

## Prerequisites

This procedure requires [Node.js (and npm)](https://nodejs.org/).

## Procedure

1. On a command line or command prompt, install the [Vue CLI Tool](https://cli.vuejs.org/#getting-started) package.

    ```sh
    npm install -g @vue/cli
    ```

2. Create a new Vue.js project named `tinymce-vue-demo`.

    * To use the interactive prompt, run:

      ```sh
      vue create tinymce-vue-demo
      ```

    * To skip the interactive prompt:

      * For Vue.js 3.x users:

        ```sh
        vue create --inlinePreset '{ "vueVersion": "3", "plugins": {} }' tinymce-vue-demo
        ```

      * For Vue.js 2.x users:

        ```sh
        vue create --inlinePreset '{ "vueVersion": "2", "plugins": {} }' tinymce-vue-demo
        ```

3. Change into the newly created directory.

    ```sh
    cd tinymce-vue-demo
    ```

{% if productSource == "package-manager" %}
3. Install the `tinymce` and `tinymce-vue` packages and save them to your `package.json` with `--save`.

    * For Vue.js 3.x users:

      ```sh
      npm install --save tinymce "@tinymce/tinymce-vue@^4"
      ```

    * For Vue.js 2.x users:

      ```sh
      npm install --save tinymce "@tinymce/tinymce-vue@^3"
      ```
{% else %}

4. Install the `tinymce-vue` package and save it to your `package.json` with `--save`.

    * For Vue.js 3.x users:

      ```sh
      npm install --save "@tinymce/tinymce-vue@^4"
      ```

    * For Vue.js 2.x users:

      ```sh
      npm install --save "@tinymce/tinymce-vue@^3"
      ```
{% endif %}

5. Using a text editor, open `/path/to/tinymce-vue-demo/src/App.vue`.

    1. Add a {{site.productname}} configuration to the `<template>` using the `<editor>` tag.
    2. Add `import Editor from '@tinymce/tinymce-vue'` to the start of the `<script>`.
    3. Add `editor: Editor` to the `default {components}`.

    For example:

    ```jsx
    <template>
      <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <editor
          api-key="no-api-key"
          :init="{% raw %}{{% endraw %}
            plugins: 'lists link image table code help wordcount'
          {% raw %}}{% endraw %}"
        />
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

{% if productSource == "cloud" %}
6. Include the `api-key` option in the editor element and include your [{{site.cloudname}} API key]({{site.accountsignup}}/).

    Such as:

    ```html
    <editor api-key='your-api-key' :init="{% raw %}{{% endraw %} /* your other settings */ {% raw %}}{% endraw %}" />
    ```

{% elsif productSource == "package-manager" %}
6. Bundle {{site.productname}} with the Vue.js application using a module loader (such as Webpack).

{% include integrations/bundling-integration.md package="tinymce-vue" depth='1' %}
{% else %}
6. {{site.productname}} can be self-hosted by either: [Deploying {{site.productname}} independent of the Vue.js application](#deployingtinymceindependent), or [Bundling {{site.productname}} with the Vue.js application](#bundle).
    <a id="deployingtinymceindependent" class="anchor"></a>
    * Deploying {{site.productname}} independent of the Vue.js application. To use a {{site.productname}} instance that has been deployed independent of the Vue.js application, use an HTML `<script>` tag.

        To use an independent deployment of {{site.productname}}, add a script to either the `<head>` or the end of the `<body>` of the HTML file, such as:

        ```html
        <script src="/path/to/tinymce.min.js"></script>
        ```

        To use an independent deployment of {{site.productname}} with the example create a Vue.js application, add the script to `/path/to/tinymce-vue-demo/public/index.html`.

    <a id="bundle" class="anchor"></a>
    * Bundle {{site.productname}} with the Vue.js application using a module loader (such as Webpack).

{% include integrations/bundling-integration.md package="tinymce-vue" depth='2' %}
{% endif %}
7. Test the application using the Node.js development server.
    * To start the development server, navigate to the `tinymce-vue-demo` directory and run:

        ```sh
        npm run serve
        ```

    * To stop the development server, select on the command line or command prompt and press _Ctrl+C_.

## Deploying the application to a HTTP server

The application will require further configuration before it can be deployed to a production environment. For information on configuring the application for deployment, see: [Vue.js - Production Deployment](https://vuejs.org/v2/guide/deployment.html).

## Next Steps

* For examples of the {{site.productname}} integration, see: [the tinymce-vue storybook](https://tinymce.github.io/tinymce-vue/).
* For information on customizing:
  * {{site.productname}} integration, see: [Vue.js framework Technical Reference]({{site.baseurl}}/how-to-guides/environment-setup/vue/vue-ref/).
  * {{site.productname}}, see: [Basic setup]({{site.baseurl}}/how-to-guides/learn-the-basics/basic-setup/).
  * The Vue.js application, see: [Vue.js Documentation](https://vuejs.org/v2/guide/).

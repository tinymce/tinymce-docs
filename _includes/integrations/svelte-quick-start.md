The [Official {{site.productname}} Svelte component](https://github.com/tinymce/tinymce-svelte) integrates {{site.productname}} into [Svelte applications](https://svelte.dev/).
This procedure creates a basic Svelte application using the [`sveltejs/template` project](https://github.com/sveltejs/template) adds a {{site.productname}} editor based using the {{site.productname}} Svelte integration.

For examples of the {{site.productname}} integration, visit [the tinymce-svelte storybook](https://tinymce.github.io/tinymce-svelte/).

## Prerequisites

This procedure requires [Node.js (and npm)](https://nodejs.org/).

## Procedure

1. Create a Svelte application using the [Svelte template project](https://github.com/sveltejs/template), for example:

    ```sh
    npx degit sveltejs/template my-tiny-app
    cd my-tiny-app
    ```

{% if productSource == "package-manager" %}
1. Install the `tinymce` and the `tinymce-svelte` editor component, such as:

    ```sh
    npm install tinymce @tinymce/tinymce-svelte
    ```
{% else %}
1. Install the `tinymce-svelte` editor component, such as:

    ```sh
    npm install @tinymce/tinymce-svelte
    ```

{% endif %}
{% if productSource == "cloud" %}
1. Open `src/App.svelte` and add:
    * An `import` statement for the {{site.productname}} component.
    * The `<Editor />` as a placeholder for the editor.

    For example:

    _File:_ `src/App.svelte`

    ```html
    <script lang="ts">
    import Editor from '@tinymce/tinymce-svelte';
    </script>
    <main>
      <h1>Hello Tiny</h1>
      <Editor
        apiKey="your-tiny-cloud-api-key"
      />
    </main>
    ```

{% elsif productSource == "package-manager" %}

1. Install the `rollup-plugin-copy` development dependency, such as:

    ```sh
    npm install rollup-plugin-copy -D
    ```

1. Open `rollup.config.js` and configure the rollup copy plugin `rollup-plugin-copy` to copy {{site.productname}} to the `public/` directory, such as:

    ```js
    /* Existing import statements */
    import copy from 'rollup-plugin-copy'

    /* Skip to the export statement, `plugins` item and add `copy`*/
    export default {
    /* Existing key: values... */
    plugins: [
        copy({
          targets: [
            { src: 'node_modules/tinymce/*', dest: 'public/tinymce'}
          ]
        }),
        /* More existing configuration... */
    ]
    }

    ```

1. Open `src/App.svelte` and add:

    * An `import` statement for the {{site.productname}} component.
    * The `<Editor />` as a placeholder for the editor.
    * The [`scriptSrc`]({{site.baseurl}}/how-to-guides/environment-setup/svelte/svelte-ref/#scriptsrc) property for the `Editor` placeholder.

    For example:

    _File:_ `src/App.svelte`

    ```html
    <script lang="ts">
    import Editor from '@tinymce/tinymce-svelte';
    </script>
    <main>
      <h1>Hello Tiny</h1>
      <Editor
        scriptSrc='tinymce/tinymce.min.js'
      />
    </main>
    ```

{% else %}

1. Open `src/App.svelte` and add:

    * An `import` statement for the {{site.productname}} component.
    * The `<Editor />` as a placeholder for the editor.
    * The [`scriptSrc`]({{site.baseurl}}/how-to-guides/environment-setup/svelte/svelte-ref/#scriptsrc) property for the `Editor` placeholder.

    For example:

    _File:_ `src/App.svelte`

    ```html
    <script lang="ts">
    import Editor from '@tinymce/tinymce-svelte';
    </script>
    <main>
      <h1>Hello Tiny</h1>
      <Editor
        scriptSrc="/path/or/url/to/tinymce.min.js"
      />
    </main>
    ```
{% endif %}

1. Test the application using the Node.js development server.

    * To start the development server, in the project's root directory, run:

        ```sh
        npm run dev
        ```

        This will start a local development server, accessible at <http://localhost:5000>.

    * To stop the development server, select on the command line or command prompt and press _Ctrl+C_.

## Next Steps

* For examples of the {{site.productname}} integration, see: [the tinymce-svelte storybook](https://tinymce.github.io/tinymce-svelte/).
* For information on customizing, see:
  * [{{site.productname}} basic setup]({{site.baseurl}}/how-to-guides/learn-the-basics/basic-setup/).
  * [The {{site.productname}} Svelte integration technical reference]({{site.baseurl}}/how-to-guides/environment-setup/svelte/svelte-ref/).

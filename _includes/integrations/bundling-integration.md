{% if include.depth == "1" %}

    > **Important**: {{site.companyname}} does not recommend bundling `tinymce` and `{{include.package}}` with a module loader. Bundling these packages can be complex and error prone.

    To bundle {{site.productname}} using a module loader (such as Webpack, Rollup, or Browserify), import or require the `tinymce` package, followed by the `{{include.package}}` package, then the other required {{site.productname}}-related imports.

    Example of bundling:

    ```js
    /* Add the {{include.package}} wrapper to the bundle */
    import { Editor } from '@tinymce/{{include.package}}';
    /* For instructions on bundling TinyMCE, see the Bundling TinyMCE documentation. */
    ```

    For instructions on bundling {{site.productname}}, see: [Bundling {{site.productname}}]({{site.baseurl}}/how-to-guides/usage-with-module-loaders/).

{% elsif include.depth == "2" %}

        > **Important**: {{site.companyname}} does not recommend bundling `tinymce` and `{{include.package}}` with a module loader. Bundling these packages can be complex and error prone.

        To bundle {{site.productname}} using a module loader (such as Webpack, Rollup, or Browserify), import or require the `tinymce` package, followed by the `{{include.package}}` package, then the other required {{site.productname}}-related imports.

        Example of bundling:

        ```js
        /* Add the {{include.package}} wrapper to the bundle */
        import { Editor } from '@tinymce/{{include.package}}';
        /* For instructions on bundling TinyMCE, see the Bundling TinyMCE documentation. */
        ```

        For instructions on bundling {{site.productname}}, see: [Bundling {{site.productname}}]({{site.baseurl}}/how-to-guides/usage-with-module-loaders/).

{% else %}

> **Important**: {{site.companyname}} does not recommend bundling `tinymce` and `{{include.package}}` with a module loader. Bundling these packages can be complex and error prone.

To bundle {{site.productname}} using a module loader (such as Webpack, Rollup, or Browserify), import or require the `tinymce` package, followed by the `{{include.package}}` package, then the other required {{site.productname}}-related imports.

Example of bundling:

```js
/* Add the {{include.package}} wrapper to the bundle */
import { Editor } from '@tinymce/{{include.package}}';
/* For instructions on bundling TinyMCE, see the Bundling TinyMCE documentation. */
```

For instructions on bundling {{site.productname}}, see: [Bundling {{site.productname}}]({{site.baseurl}}/how-to-guides/usage-with-module-loaders/).

{% endif %}

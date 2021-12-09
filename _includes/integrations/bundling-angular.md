{% if include.depth == "1" %}

    > **Important**: {{site.companyname}} does not recommend bundling `tinymce` and `tinymce-angular` with a module loader. Bundling these packages can be complex and error prone.

    To bundle {{site.productname}} using a module loader (such as Webpack, Rollup, or Browserify), import or require the `tinymce-angular` package, followed by the `tinymce` package and the other required imports.

    Example of bundling:

    ```js
    import { Editor } from '@tinymce/tinymce-angular';
    /* The rest of the bundling script  */
    ```

    For instructions on bundling {{site.productname}}, see: [Bundling {{site.productname}}]({{site.baseurl}}/advanced/usage-with-module-loaders/).

{% elsif include.depth == "2" %}

        > **Important**: {{site.companyname}} does not recommend bundling `tinymce` and `tinymce-angular` with a module loader. Bundling these packages can be complex and error prone.

        To bundle {{site.productname}} using a module loader (such as Webpack, Rollup, or Browserify), import or require the `tinymce-angular` package, followed by the `tinymce` package and the other required imports.

        Example of bundling:

        ```js
        import { Editor } from '@tinymce/tinymce-angular';
        /* The rest of the bundling script  */
        ```

        For instructions on bundling {{site.productname}}, see: [Bundling {{site.productname}}]({{site.baseurl}}/advanced/usage-with-module-loaders/).

{% else %}

> **Important**: {{site.companyname}} does not recommend bundling `tinymce` and `tinymce-angular` with a module loader. Bundling these packages can be complex and error prone.

To bundle {{site.productname}} using a module loader (such as Webpack, Rollup, or Browserify), import or require the `tinymce-angular` package, followed by the `tinymce` package and the other required imports.

Example of bundling:

```js
import { Editor } from '@tinymce/tinymce-angular';
/* The rest of the bundling script  */
```

For instructions on bundling {{site.productname}}, see: [Bundling {{site.productname}}]({{site.baseurl}}/advanced/usage-with-module-loaders/).

{% endif %}

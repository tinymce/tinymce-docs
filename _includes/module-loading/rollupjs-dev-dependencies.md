{% if is_zip_install == true %}
1. Add the following development dependencies to the project.

    - [`postcss`](https://www.npmjs.com/package/postcss)
    - [`rollup`](https://www.npmjs.com/package/rollup)
    - [`@rollup/plugin-commonjs`](https://www.npmjs.com/package/@rollup/plugin-commonjs)
    - [`rollup-plugin-css-bundle`](https://www.npmjs.com/package/rollup-plugin-css-bundle)
    - [`rollup-plugin-postcss`](https://www.npmjs.com/package/rollup-plugin-postcss)
    - [`rollup-plugin-string`](https://www.npmjs.com/package/rollup-plugin-string)

    For example:

    ```sh
    npm install --save-dev \
      postcss \
      rollup \
      @rollup/plugin-commonjs \
      rollup-plugin-css-bundle \
      rollup-plugin-postcss \
      rollup-plugin-string
    ```
{% else %}
1. Add `tinymce` and the following development dependencies to the project.

    - [`postcss`](https://www.npmjs.com/package/postcss)
    - [`rollup`](https://www.npmjs.com/package/rollup)
    - [`@rollup/plugin-commonjs`](https://www.npmjs.com/package/@rollup/plugin-commonjs)
    - [`@rollup/plugin-node-resolve`](https://www.npmjs.com/package/@rollup/plugin-node-resolve)
    - [`rollup-plugin-css-bundle`](https://www.npmjs.com/package/rollup-plugin-css-bundle)
    - [`rollup-plugin-postcss`](https://www.npmjs.com/package/rollup-plugin-postcss)
    - [`rollup-plugin-string`](https://www.npmjs.com/package/rollup-plugin-string)

    For example:

    ```sh
    npm install tinymce &&
    npm install --save-dev \
      postcss \
      rollup \
      @rollup/plugin-commonjs \
      @rollup/plugin-node-resolve \
      rollup-plugin-css-bundle \
      rollup-plugin-postcss \
      rollup-plugin-string
    ```
{% endif %}
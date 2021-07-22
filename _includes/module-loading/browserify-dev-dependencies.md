{% if is_zip_install == true %}
1. Add the following development dependencies to the project.

    - [`promise-polyfill`](https://www.npmjs.com/package/promise-polyfill)
    - [`browserify`](https://www.npmjs.com/package/browserify)
    - [`browserify-css`](https://www.npmjs.com/package/browserify-css)
    - [`brfs`](https://www.npmjs.com/package/brfs)

    For example:

    ```sh
    npm install \
      promise-polyfill \
      browserify \
      browserify-css \
      brfs \
      --save-dev
    ```
{% else %}
1. Add `tinymce` and the following development dependencies to the project.

    - [`promise-polyfill`](https://www.npmjs.com/package/promise-polyfill)
    - [`browserify`](https://www.npmjs.com/package/browserify)
    - [`browserify-css`](https://www.npmjs.com/package/browserify-css)
    - [`brfs`](https://www.npmjs.com/package/brfs)

    For example:

    ```sh
    npm install \
      tinymce \
      promise-polyfill \
      browserify \
      browserify-css \
      brfs \
      --save-dev
    ```
{% endif %}
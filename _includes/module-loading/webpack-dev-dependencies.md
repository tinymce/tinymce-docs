{% if is_zip_install == true %}
1. Add the following development dependencies to the project.

    - [`webpack`](https://www.npmjs.com/package/webpack)
    - [`webpack-cli`](https://www.npmjs.com/package/webpack-cli)
    - [`mini-css-extract-plugin`](https://www.npmjs.com/package/mini-css-extract-plugin)
    - [`html-webpack-plugin`](https://www.npmjs.com/package/html-webpack-plugin)
    - [`css-loader`](https://www.npmjs.com/package/css-loader)

    For example:

    ```sh
    npm install --save-dev \
      webpack \
      webpack-cli \
      mini-css-extract-plugin \
      html-webpack-plugin \
      css-loader
    ```
{% else %}
1. Add `tinymce` and the following development dependencies to the project.

    - [`webpack`](https://www.npmjs.com/package/webpack)
    - [`webpack-cli`](https://www.npmjs.com/package/webpack-cli)
    - [`mini-css-extract-plugin`](https://www.npmjs.com/package/mini-css-extract-plugin)
    - [`html-webpack-plugin`](https://www.npmjs.com/package/html-webpack-plugin)
    - [`css-loader`](https://www.npmjs.com/package/css-loader)

    For example:

    ```sh
    npm install tinymce &&
    npm install --save-dev \
      webpack \
      webpack-cli \
      mini-css-extract-plugin \
      html-webpack-plugin \
      css-loader
    ```
{% endif %}
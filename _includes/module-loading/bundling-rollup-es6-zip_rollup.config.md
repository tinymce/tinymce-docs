1. Update the project Rollup.js configuration to load the {{site.productname}} CSS.

    Example `rollup.config.js`

    ```js
    import postcss from 'rollup-plugin-postcss';
    import commonjs from '@rollup/plugin-commonjs';

    export default {
      input: 'src/index.js',
      plugins: [
        commonjs(),
        postcss({
          include: "**/skin.css",
          inject: false,
          extract: true
        }),
        postcss({
          include: "**/content.css",
          inject: false,
          extract: false
        })
      ],
      output: {
        file: 'public/main.bundle.js',
        format: 'umd'
      }
    };
    ```
1. Update the project Rollup.js configuration to load the {{site.productname}} CSS.

    Example `rollup.config.js`

    ```js
    import postcss from 'rollup-plugin-postcss';
    import commonjs from '@rollup/plugin-commonjs';
    import { nodeResolve } from '@rollup/plugin-node-resolve';

    export default {
      input: 'src/index.js',
      plugins: [
        nodeResolve(),
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
        file: 'dist/main.bundle.js',
        format: 'umd'
      }
    };
    ```
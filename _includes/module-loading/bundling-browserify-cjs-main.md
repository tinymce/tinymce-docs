1. Add the {{site.productname}} assets and configuration into the project and provide a target element to initialize the editor.

    Example `src/main.js`

    ```js
    var editor = require('./editor.js');
    /* Create a parent element for the textarea */
    var parent = document.createElement('p');
    /* Create a textarea with id="editor" for the TinyMCE `selector` option */
    function editorArea() {
      var element = document.createElement('textarea');
      element.id = 'editor';
      return element
    }
    /* Add elements to page */
    parent.appendChild(editorArea());
    document.body.appendChild(parent);
    /* Initialize TinyMCE */
    editor.render();
    ```

    Example `demo.html`

    ```html
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>TinyMCE Browserify Demo</title>
      </head>
      <body>
        <h1>TinyMCE Browserify Demo</h1>
        <script src="main.bundle.js"></script>
      </body>
    </html>
    ```
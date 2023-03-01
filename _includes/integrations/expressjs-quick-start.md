This quick start guide walks through creating a [basic Express JS application](https://expressjs.com/en/starter/generator.html) containing a {{site.productname}} editor based on our [Basic example]({{site.baseurl}}/demo/basic-example/).

> **NOTE**: {{site.cloudname}} users should use the [{{site.cloudname}} quick start guide]({{site.baseurl}}/quick-start/).

### Prerequisites

This procedure requires:

* [Node.js (and npm)](https://nodejs.org/).

### Procedure

1. On a command line or command prompt, create a basic Express JS application:

    ```sh
    $ npx express-generator --git --no-view my_{{site.prodnamecode}}_app
    ```

1. Change into the newly created directory.

    ```sh
    $ cd my_{{site.prodnamecode}}_app
    ```

1. Add the `tinymce` package to your `package.json` with `--save`.

    ```sh
    $ npm install --save tinymce
    ```

1. Download and install the {{site.productname}} and Express JS Node modules (and their dependencies):

    ```sh
    $ npm install
    ```

1. Using a text editor, open `/path/to/my_{{site.prodnamecode}}_app/app.js` and add the following route:

    ```js
    app.use('/tinymce', express.static(path.join(__dirname, 'node_modules', 'tinymce')));
    ```

    For example:

    ```js
    var express = require('express');
    var path = require('path');
    var cookieParser = require('cookie-parser');
    var logger = require('morgan');

    var indexRouter = require('./routes/index');
    var usersRouter = require('./routes/users');

    var app = express();

    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));

    /* New Route to the {{site.productname}} Node module */
    app.use('/tinymce', express.static(path.join(__dirname, 'node_modules', 'tinymce')));

    app.use('/', indexRouter);
    app.use('/users', usersRouter);

    module.exports = app;
    ```

1. Create a new javascript file containing the {{site.productname}} configuration (`tinymce.init`), such as:

    Linux/macOS/Unix:

    ```sh
    $ touch public/javascripts/my-{{site.prodnamecode}}-config.js
    ```

    Windows:
    ```sh
    > type nul >public/javascripts/my-{{site.prodnamecode}}-config.js
    ```

1. Add the {{site.productname}} configuration to the newly created javascript file (`my-{{site.prodnamecode}}-config.js`):

    ```js
    tinymce.init({
      selector: 'textarea#my-expressjs-{{site.prodnamecode}}-app',
      height: 500,
      menubar: false,
      plugins: [
        'advlist autolink lists link image charmap print preview anchor',
        'searchreplace visualblocks code fullscreen',
        'insertdatetime media table code help wordcount'
      ],
      toolbar: 'undo redo | formatselect | ' +
      'bold italic backcolor | alignleft aligncenter ' +
      'alignright alignjustify | bullist numlist outdent indent | ' +
      'removeformat | help'
    });
    ```

1. Update `public/index.html` to include:
    - The document type declaration, `<!DOCTYPE html>`.
    - A `<script>` element sourcing `tinymce.min.js`.
    - A `<script>` element sourcing the {{site.productname}} configuration (`my-{{site.prodnamecode}}-config.js`).
    - A `<textarea>` element with an `id` attribute matching the `selector` option in the {{site.productname}} configuration (`my-expressjs-{{site.prodnamecode}}-app`).

    For example:

    ```html
    <!DOCTYPE html> <!-- Required for TinyMCE to function as intended -->
    <html>

      <head>
        <title>{{site.productname}} Demo</title>
        <link rel="stylesheet" href="/stylesheets/style.css">
      </head>

      <body>
        <h1>{{site.productname}} Demo</h1>
        <!-- Text area matching the selector specified in the TinyMCE configuration -->
        <textarea id="my-expressjs-{{site.prodnamecode}}-app">Hello, World!</textarea>
      </body>

      <!-- Script element sourcing TinyMCE -->
      <script type="application/javascript" src= "/tinymce/tinymce.min.js"></script>
      <!-- Script element sourcing the TinyMCE configuration -->
      <script type="application/javascript" src= "/javascripts/my-{{site.prodnamecode}}-config.js"></script>
    </html>
    ```

1. Test the application using the Node.js development server.
    * To start the development server, navigate to the `my_{{site.prodnamecode}}_app` directory and run:

        ```sh
        $ npm start
        ```

    * Visit http://localhost:3000 to view the application.

    * To stop the development server, select on the command line or command prompt and press _Ctrl+C_.

### Next Steps

* For information on customizing:
    * {{site.productname}}, see: [Basic setup]({{site.baseurl}}/general-configuration-guide/basic-setup/).
    * The Express JS application, see: [the Express JS Documentation](https://expressjs.com/).

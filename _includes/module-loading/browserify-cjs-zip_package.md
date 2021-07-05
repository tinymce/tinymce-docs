{
  "name": "browserify-demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "bundle": "browserify -t brfs -g browserify-css src/main.js -o dist/main.bundle.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "promise-polyfill": "8.2.0",
    "tinymce": "^5.8.2"
  },
  "devDependencies": {
    "brfs": "^2.0.2",
    "browserify": "^17.0.0",
    "browserify-css": "^0.15.0"
  }
}

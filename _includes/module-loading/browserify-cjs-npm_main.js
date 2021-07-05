var render = require('./editor.js');
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
render();
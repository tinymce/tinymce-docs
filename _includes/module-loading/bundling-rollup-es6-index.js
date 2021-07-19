import * as editor from './editor';

const parent = document.createElement('p');

function editorArea() {
  const element = document.createElement('textarea');
  element.id = 'editor';
  return element
}

parent.appendChild(editorArea());
document.body.appendChild(parent);

editor.render();
const fs = require('fs');
const path = require('path');
const { Liquid } = require('liquidjs');

/**
 Makes an embedded editor example with tabs, including an "Edit on CodePen" tab.

 params:

 id (required). Picks folder for files, and used in css classes.
 type (optional) - Specifies if the example is `tinymce` or `tinydrive` specific default is `tinymce`
 tab (optional - default to "run"), "run", "html", "css" or "js". The first tab to open.
 height (optional - no default). min-height in pixels.
 script_url_override (optional - no default).
 - Override the full tinymce.min.js URL, including api key.
 - Useful for testing things that aren't in the main channel, yet.
 - Remove this setting once the feature is in the main channel.

 Files required under codepens/id/

 index.html
 index.js
 index.css optional file
 example.js optional file

 if index.css is omitted, the css tab will not display

 example.js purpose:
 when the file is present the codepen js will display the contents of example.js, while the real demo code executes with index.js
 Useful for when we want to hide actual api-keys or tokens: 'example-token'.
 When the example.js file is present, the link to the external codepen site is disabled
 */


const validContent = {
  html: 'index.html',
  js: 'index.js',
  examplejs: 'example.js',
  css: 'style.css'
};

const defaultTabs = [
  {
    name: 'run',
  },
  {
    name: 'html',
    text: 'HTML'
  },
  {
    name: 'css',
    text: 'CSS'
  },
  {
    name: 'js',
    text: 'JS'
  }
];

const getDemoTitle = (type) => {
  switch (type) {
    case 'tinydrive':
      return 'Tiny Drive';
    case 'tinymce':
    default:
      return 'TinyMCE'
  }
};

const getScript = (type, docAttrs) => {
  switch (type) {
    case 'tinydrive':
      return docAttrs['tinydrive_codepen_url'];
    case 'tinymce':
    default:
      return docAttrs['tinymce_codepen_url'];
  }
};

const getTabs = (type, contentData, initialTab) => {
  const tabs = defaultTabs.filter((d) => {
    return d.name === 'run' || contentData.hasOwnProperty(d.name);
  }).map((d) => ({
    ...d,
    text: d.name === 'run' ? getDemoTitle(type) : d.text,
    class: initialTab === d.name ? 'codepen_tab_selected' : 'codepen_tab_deselected'
  }));

  if (!contentData.hasExamplejs) {
    tabs.push({
      name: 'codepen',
      text: 'Edit on CodePen',
      class: 'codepen_tab_deselected ie11_optional'
    })
  }

  return tabs;
};

const loadContent = (engine, root, id, docAttrs) => {
  const data = {};
  Object.entries(validContent).forEach(([type, file]) => {
    const filePath = path.join(id, file);
    const hasKey = 'has' + type[0].toUpperCase() + type.slice(1);

    // If the file exists, then render the content
    if (fs.existsSync(path.join(root, filePath))) {
      data[type] = engine.renderFileSync(filePath, { site: docAttrs }, { root: root });
      data[hasKey] = true;
    } else {
      data[hasKey] = false;
    }
  });

  if (!data.hasOwnProperty('examplejs')) {
    data['examplejs'] = data['js'];
  }

  return data;
};

module.exports = function() {
  this.blockMacro(function() {
    const engine = new Liquid();
    engine.registerFilter('uri_escape', (url) => encodeURIComponent(url));
    const scriptsLoaded = {};

    const self = this;
    this.named('codepen');
    this.process((parent, target, attrs) => {
      // Get the data to pass to the template
      const docAttrs = parent.document.getAttributes();
      const rootCodepenDir = path.join(docAttrs['page-origin-start-path'], 'modules', docAttrs['page-module'], 'codepens');
      const type = attrs.type || 'tinymce';
      const contentData = loadContent(engine, rootCodepenDir, target, docAttrs);
      const initialTab = attrs.tab || 'run';
      const scriptUrl = attrs.script_url_override || getScript(type, docAttrs);

      // Render the template
      const renderedContent = engine.renderFileSync('codepen.adoc', {
        site: {
          ...docAttrs
        },
        codepen: {
          ...attrs,
          type: type,
          id: target,
          content: contentData,
          initialTab: initialTab,
          script: {
            include: scriptsLoaded[scriptUrl] !== true,
            url: scriptUrl,
          },
          tabs: getTabs(type, contentData, initialTab)
        }
      }, { root: rootCodepenDir });
      scriptsLoaded[scriptUrl] = true;

      // Parse the content using AsciiDoctor
      const wrapper = self.createBlock(parent, 'open', [], {});
      self.parseContent(wrapper, renderedContent, null);
      return wrapper;
    })
  })
};
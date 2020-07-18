const fs = require('fs');
const path = require('path');
const { Liquid, Tokenizer } = require('liquidjs');

const codepenTabs = {
  'codepen-tabs': [
    {
      name: 'run'
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
  ]
};

const codepenLiquidPlugin = function() {
  this.registerTag('file_exists', {
    parse (token) {
      this.path = token.args.replace(/^'|'$/g, '').trim();
    },
    render (context) {
      const url = this.liquid.parseAndRenderSync(this.path, context.environments, context.opts);
      return fs.existsSync(path.join(context.opts.root[0], url)).toString();
    }
  });

  // Pulled from the builtin assign, but modified to set the variables on the global property instead
  this.registerTag('assign', {
    parse (token) {
      const tokenizer = new Tokenizer(token.args);
      this.key = tokenizer.readWord().content;
      tokenizer.skipBlank();
      tokenizer.advance();
      this.value = tokenizer.remaining();
    },
    render (ctx) {
      ctx.globals[this.key] = this.liquid.evalValueSync(this.value, ctx);
    }
  });

  this.registerFilter('uri_escape', (url) => encodeURIComponent(url));
};

module.exports = function() {
  this.blockMacro(function () {
    const engine = new Liquid({
      root: 'docs/modules/ROOT/codepens/',
      globals: {}
    });
    engine.plugin(codepenLiquidPlugin);

    const self = this;
    this.named('codepen');
    this.process((parent, target, attrs) => {
      const docAttrs = parent.document.getAttributes();
      const renderedContent = engine.renderFileSync('codepen.adoc', {
        site: {
          ...docAttrs,
          data: { ...codepenTabs }
        },
        include: {
          ...attrs,
          id: target
        }
      });
      const wrapper = self.createBlock(parent, 'open', [], {});
      self.parseContent(wrapper, renderedContent, null);
      return wrapper;
    })
  })
};
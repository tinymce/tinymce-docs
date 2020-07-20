const process = (parent, context, f) => {
  const blocks = parent.getBlocks();
  if (blocks.length !== 0) {
    blocks.forEach((block) => {
      if (block.context === context) {
        f(block, blocks);
      } else {
        process(block, context, f);
      }
    });
  }
};

const transformListItem = (li) => {
  // Replace the changelog keyword with a passthrough that wraps the keyword in a span
  li.text = li.text.replace(/^(fixed)/i, 'pass:[<span class="fixed">$1</span>]')
    .replace(/^(added|improved)/i, 'pass:[<span class="added">$1</span>]')
    .replace(/^(removed)/i, 'pass:[<span class="removed">$1</span>]')
    .replace(/^(rewrote|changed|updated)/i, 'pass:[<span class="rewrote">$1</span>]');
};

module.exports = function() {
  this.treeProcessor(function() {
    this.process((doc) => {
      if (doc.getAttribute('docfile').endsWith('changelog.adoc')) {
        doc.setAttribute('docrole', doc.getAttribute('class') || 'changelog');
        // Walk down the tree to find the list items to highlight
        process(doc, 'ulist',  (ul) => {
          process(ul, 'list_item', transformListItem);
        });
        return doc;
      } else {
        return doc;
      }
    });
  });
};
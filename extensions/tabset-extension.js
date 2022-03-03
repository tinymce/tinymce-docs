/**
 * Extends the AsciiDoc syntax to support a tabset element. The tabset is
 * created from a dlist that is enclosed in an example block marked with the
 * tabs style.
 *
 * Usage:
 *
 * :selected: Tab A (default selected tab)
 *  [tabs]
 *  ====
 *  Tab A::
 *  +
 *  --
 *  Contents of tab A.
 *  --
 *  Tab B::
 *  +
 *  --
 *  Contents of tab B.
 *  --
 *  ====
 *
 * To use this extension, register the extension.js file with Antora (i.e.,
 * list it as an AsciiDoc extension in the Antora playbook file), combine
 * styles.css with the styles for the site, and combine tabset.js with the
 * JavaScript loaded by the page.
 *
 * @author Dan Allen <dan@opendevise.com>
 * 
 * Co-author
 * @author Amit Saini <amit.saini@tiny.cloud>
 * description of change:
 *  - Remove Opal operations
 *  - Raw HTML injection
 *  - Default selection Tab 
 */
const IdSeparatorChar = '-'
const InvalidIdCharsRx = /[^a-zA-Z0-9_]/g
const ACTIVE_CLASS = "is-active";

const generateUUID =()=> Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
const generateId = (str, idx) => `tabset${idx}_${str.toLowerCase().replace(InvalidIdCharsRx, IdSeparatorChar)}_${generateUUID()}`

//check if tab name exist in list of tabs
function tabExistsInList(tabNameList, defaultTabName){
  if(tabNameList && tabNameList.includes(defaultTabName)){
    return true;
  }
  return false;
}

// get list of all the tabs names
function getTabNameList(sourceTabs){
  const Items = sourceTabs.getItems();
  const TabList = Items.map(([[title]]) =>{
    const text = title.getText();
    if(text) return text;
  })
  return TabList;
}

function tabsBlock() {
  // on example block
  this.onContext('example')
  this.process((parent, reader, attrs) => {
    const defaultTabName  = parent.getAttribute('default-tab');
    const createHtmlFragment = (html) => this.createBlock(parent, 'pass', html)
    const tabsetIdx = parent.getDocument().counter('idx-tabset')
    const nodes = []
    nodes.push(createHtmlFragment('<div class="tabset is-loading">'))
    const container = this.parseContent(this.createBlock(parent, 'open'), reader)
    const sourceTabs = container.getBlocks()[0]
    if (!(sourceTabs && sourceTabs.getContext() === 'dlist' && sourceTabs.getItems().length)) return
    nodes.push(createHtmlFragment('<div class="ulist tabs">'));
    const panes = {}
    nodes.push(createHtmlFragment('<ul>'));
    const tabNameList = getTabNameList(sourceTabs);

    //check if there is a default selection for a tab
    const isDefault = !defaultTabName || defaultTabName.length<0 || !tabExistsInList(tabNameList, defaultTabName);
    
    sourceTabs.getItems().map(([[title], details], index) => {
      const tabText = title.getText();
      //set class name to list items
      const getClassName = () =>{
        if(!isDefault){
          if( tabText === defaultTabName){
            return ACTIVE_CLASS;
          }
          return "";
        }
        if(index === 0){
          return ACTIVE_CLASS;
        }
        return "";
      }
      const id = generateId(title.getText(), tabsetIdx)
      const ListItemId =`${id}`
      const ListItem = createHtmlFragment(`<li class="${getClassName()}" id="${ListItemId}"><p>${title.getText()}</p></li>`);
      nodes.push(ListItem);
      let blocks = details.getBlocks()
      const numBlocks = blocks.length
      if (numBlocks) {
        if (blocks[0].context === 'open' && numBlocks === 1) {
          blocks = blocks[0].getBlocks()
        }
        panes[id] = blocks.map((block) => (block.parent = parent) && block)
      }
    });
    nodes.push(createHtmlFragment("</ul>"));
    nodes.push(createHtmlFragment("</div>"));
    nodes.push(createHtmlFragment('<div class="content">'))
    Object.entries(panes).forEach(([id, blocks]) => {
      nodes.push(createHtmlFragment(`<div class="tab-pane" aria-labelledby="${id}">`))
      nodes.push(...blocks)
      nodes.push(createHtmlFragment('</div>'))
    })
    nodes.push(createHtmlFragment('</div>'))
    nodes.push(createHtmlFragment('</div>'))
    parent.blocks.push(...nodes)
  })
}

module.exports.register = (registry, context) => {
  registry.block('tabs', tabsBlock)
}

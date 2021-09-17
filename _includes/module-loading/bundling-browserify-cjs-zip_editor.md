1. Create a new source file for importing the required components from {{site.productname}} and configuring the editor.

    {% include module-loading/bundling-required-components.md %}

    Example `src/editor.js`

    ```js
    var fs = require('fs');

    /* Import TinyMCE */
    var tinymce = require('../tinymce/js/tinymce/tinymce.js');

    /* Default icons are required. Also import custom icons if applicable */
    require('../tinymce/js/tinymce/icons/default/icons.js');

    /* A editor theme (required) - customize the editor appearance by creating a 'skin' */
    require('../tinymce/js/tinymce/themes/silver/theme.js');

    require('../tinymce/js/tinymce/skins/ui/oxide/skin.css');

    /* Import plugins - include the relevant plugin in the 'plugins' option. */
    require('../tinymce/js/tinymce/plugins/advlist/plugin.js');
    require('../tinymce/js/tinymce/plugins/code/plugin.js');
    require('../tinymce/js/tinymce/plugins/emoticons/plugin.js');
    require('../tinymce/js/tinymce/plugins/emoticons/js/emojis');
    require('../tinymce/js/tinymce/plugins/link/plugin.js');
    require('../tinymce/js/tinymce/plugins/lists/plugin.js');
    require('../tinymce/js/tinymce/plugins/table/plugin.js');

    /* Import content CSS */
    var contentCssUi = fs.readFileSync('tinymce/js/tinymce/skins/ui/oxide/content.css', {encoding: 'UTF-8'});
    /* Import the default content CSS, replace with the CSS for the editor content. */
    var contentCss = fs.readFileSync('tinymce/js/tinymce/skins/content/default/content.css', {encoding: 'UTF-8'});

    /* Initialize TinyMCE */
    exports.render = function () {
      tinymce.init({
        selector: 'textarea#editor',
        /* All plugins need to be imported and added to the plugins option. */
        plugins: 'advlist code emoticons link lists table',
        toolbar: 'bold italic | bullist numlist | link emoticons',
        skin: false,
        content_css: false,
        content_style: contentCss.toString() + '\n' + contentCssUi.toString(),
      });
    };
    ```
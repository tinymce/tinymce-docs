1. Create a new source file for importing the required components from {{site.productname}} and configuring the editor.

    {% include module-loading/bundling-required-components.md %}

    Example `src/editor.js`

    ```js
    /* Import TinyMCE */
    var tinymce = require('../tinymce/js/tinymce/tinymce.js');

    /* Default icons are required for TinyMCE 5.3 or above. Also import custom icons if applicable */
    require('../tinymce/js/tinymce/icons/default/icons.js');

    /* A editor theme (required) - customize the editor appearance by creating a 'skin' */
    require('../tinymce/js/tinymce/themes/silver/theme.js');

    /* Import the editor skin - replace with a custom skin if applicable. */
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
    var contentUiCss = require('../tinymce/js/tinymce/skins/ui/oxide/content.css').toString();

    /* Import the default content CSS, replace with the CSS for the editor content. */
    var contentCss = require('../tinymce/js/tinymce/skins/content/default/content.css').toString();

    /* Initialize TinyMCE */
    exports.render = function () {
      tinymce.init({
        selector: 'textarea#editor',
        /* All plugins need to be imported and added to the plugins option. */
        plugins: 'advlist code emoticons link lists table',
        toolbar: 'bold italic | bullist numlist | link emoticons',
        skin: false,
        content_css: false,
        content_style: contentUiCss + '\n' + contentCss,
      });
    };
    ```
1. Create a new source file for importing the required components from {{site.productname}} and configuring the editor.

    Example `src/editor.js`

    ```js
    // Import TinyMCE
    import tinymce from 'tinymce';

    // Default icons are required for TinyMCE 5.3 or above
    import 'tinymce/icons/default';

    // A theme is also required
    import 'tinymce/themes/silver';

    // Import the skin
    import 'tinymce/skins/ui/oxide/skin.css';

    // Import plugins
    import 'tinymce/plugins/advlist';
    import 'tinymce/plugins/code';
    import 'tinymce/plugins/emoticons';
    import 'tinymce/plugins/emoticons/js/emojis';
    import 'tinymce/plugins/link';
    import 'tinymce/plugins/lists';
    import 'tinymce/plugins/table';

    // Import premium plugins
    // NOTE: Download separately and add these to /src/plugins
    // import './plugins/checklist/plugin';
    // import './plugins/powerpaste/plugin';
    // import './plugins/powerpaste/js/wordimport';

    // Import content css
    import contentUiCss from 'tinymce/skins/ui/oxide/content.css';
    import contentCss from 'tinymce/skins/content/default/content.css';

    // Initialize TinyMCE
    export function render () {
      tinymce.init({
        selector: 'textarea#editor',
        plugins: 'advlist code emoticons link lists table',
        toolbar: 'bold italic | bullist numlist | link emoticons',
        skin: false,
        content_css: false,
        content_style: contentUiCss.toString() + '\n' + contentCss.toString(),
      });
    };
    ```
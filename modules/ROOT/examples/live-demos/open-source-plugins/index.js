tinymce.init({
  selector: 'textarea#open-source-plugins',
  height: 720,
  plugins: [
    'accordion', 'advlist', 'anchor', 'autolink', 'autosave', 'charmap', 'code',
    'codesample', 'directionality', 'emoticons', 'fullscreen', 'help', 'image',
    'importcss', 'insertdatetime', 'link', 'lists', 'media',
    'nonbreaking', 'pagebreak', 'preview', 'quickbars', 'save', 'searchreplace',
    'table', 'visualblocks', 'visualchars', 'wordcount'
  ],
  toolbar: 'undo redo | accordion accordionremove | blocks fontfamily fontsize | ' +
    'bold italic underline strikethrough | align numlist bullist | link image | ' +
    'table media | lineheight outdent indent | forecolor backcolor removeformat | ' +
    'charmap emoticons | code fullscreen preview | save print | ' +
    'pagebreak anchor codesample | ltr rtl | help',
  toolbar_mode: 'sliding',
  font_family_formats: 'Inter=inter, sans-serif; Andale Mono=andale mono, monospace; ' +
    'Arial=arial, helvetica, sans-serif; Arial Black=arial black, sans-serif; ' +
    'Book Antiqua=book antiqua, palatino, serif; Comic Sans MS=comic sans ms, sans-serif; ' +
    'Courier New=courier new, courier, monospace; Georgia=georgia, palatino, serif; ' +
    'Helvetica=helvetica, arial, sans-serif; Impact=impact, sans-serif; Symbol=symbol; ' +
    'Tahoma=tahoma, arial, helvetica, sans-serif; Terminal=terminal, monaco, monospace; ' +
    'Times New Roman=times new roman, times, serif; Trebuchet MS=trebuchet ms, geneva, sans-serif; ' +
    'Verdana=verdana, geneva, sans-serif; Webdings=webdings; Wingdings=wingdings, zapf dingbats',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  autosave_interval: '20s',
  autosave_retention: '30m',
  autosave_prefix: '{path}{query}-{id}-',
  image_advtab: true,
  image_caption: true,
  image_list: [
    { title: 'TinyMCE logo', value: 'https://www.tiny.cloud/docs/tinymce/latest/_images/logos/android-chrome-256x256.png' },
    { title: 'Laptop with code', value: 'https://www.tiny.cloud/images/medium-pic.jpg' }
  ],
  link_list: [
    { title: 'My page 1', value: 'https://www.tiny.cloud' },
    { title: 'My page 2', value: 'http://www.moxiecode.com' }
  ],
  file_picker_types: 'file image',
  file_picker_callback: (callback, value, meta) => {
    /* Provide file and text for the link dialog */
    if (meta.filetype === 'file') {
      callback('https://www.tiny.cloud/docs/tinymce/latest/_images/logos/android-chrome-256x256.png', { text: 'TinyMCE logo' });
    }
    /* Provide image and alt text for the image dialog */
    if (meta.filetype === 'image') {
      callback('https://www.tiny.cloud/docs/tinymce/latest/_images/logos/android-chrome-256x256.png', { alt: 'TinyMCE logo' });
    }
  },
  quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
  contextmenu: 'link image table'
});

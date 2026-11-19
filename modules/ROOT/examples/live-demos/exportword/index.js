const headerFooterCss = 'p { font-family: Calibri, Arial, sans-serif; font-size: 9pt; color: #4b5676; }';

tinymce.init({
  selector: 'textarea#exportword',
  height: 720,
  plugins: 'exportword pagebreak lists table advlist autolink link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media help wordcount',
  toolbar: 'exportword pagebreak | undo redo | blocks | bold italic | ' +
    'alignleft aligncenter alignright | bullist numlist | table | backcolor | ' +
    'alignjustify | outdent indent | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  // Page breaks are exported as Word page breaks.
  pagebreak_separator: '<div style="break-after: page"></div>',
  pagebreak_split_block: true,
  exportword_converter_options: {
    document: {
      size: 'Letter',
      orientation: 'portrait',
      margins: {
        top: '0.8in',
        bottom: '0.8in',
        left: '1in',
        right: '1in'
      }
    },
    headers: {
      first: {
        html: '<p>Greenfield Medical Group | Lattice &amp; Pine Studio</p>',
        css: headerFooterCss + ' p { text-align: right; font-weight: bold; }'
      },
      default: {
        html: '<p>SOW-2026-014 | Website migration | Confidential</p>',
        css: headerFooterCss + ' p { text-align: right; }'
      }
    },
    footers: {
      default: {
        html: '<p>Page <span class="pageNumber"></span> of <span class="totalPages"></span></p>',
        css: headerFooterCss + ' p { text-align: center; }'
      }
    },
    watermark: {
      source: 'http://moxiecode.cachefly.net/tinymce/v9/images/logo.png',
      washout: true
    }
  },
  // Word uses the fonts installed on the reader's computer, so swap the web font for a standard one.
  exportword_converter_style: '* { font-family: Calibri, Arial, sans-serif !important; }',
  setup: (editor) => {
    // Leave the "Try it" note out of the exported Word file only.
    editor.on('PreInit', () => {
      editor.serializer.addNodeFilter('blockquote', (nodes, name, args) => {
        if (args.export === 'word') {
          nodes.forEach((node) => {
            if (node.attr('data-demo-note')) {
              node.remove();
            }
          });
        }
      });
    });
  }
});

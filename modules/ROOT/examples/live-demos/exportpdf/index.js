const headerFooterCss = 'p { margin: 0; padding: 0 20mm; font-family: Arial, sans-serif; font-size: 9pt; color: #4b5676; }';

tinymce.init({
  selector: 'textarea#exportpdf',
  height: 720,
  plugins: 'exportpdf pagebreak lists table advlist autolink link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media help wordcount',
  toolbar: 'exportpdf pagebreak | undo redo | blocks | bold italic | ' +
    'alignleft aligncenter alignright | bullist numlist | table | backcolor | ' +
    'alignjustify | outdent indent | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  // Page breaks are exported as CSS page breaks.
  pagebreak_separator: '<div style="break-after: page"></div>',
  pagebreak_split_block: true,
  exportpdf_converter_options: {
    version: '2',
    document: {
      size: 'A4',
      orientation: 'portrait',
      margins: {
        top: '25mm',
        bottom: '25mm',
        left: '20mm',
        right: '20mm'
      }
    },
    headers: {
      first: {
        html: '<p>Confidential: prepared for the Harborline Logistics board</p>',
        css: headerFooterCss + ' p { text-align: right; font-weight: bold; }'
      },
      default: {
        html: '<p>Harborline Logistics | Q3 2026 quarterly report</p>',
        css: headerFooterCss + ' p { text-align: right; }'
      }
    },
    footers: {
      default: {
        html: '<p>Page <span class="pageNumber"></span> of <span class="totalPages"></span></p>',
        css: headerFooterCss + ' p { text-align: center; }'
      }
    },
    // Wait for the photo and the web font to finish loading before rendering.
    rendering: {
      wait_for_network: true
    },
    metadata: {
      title: 'Q3 2026 quarterly report',
      author: 'Harborline Logistics Finance',
      subject: 'Quarterly results and Q4 priorities',
      keywords: [ 'quarterly report', 'Q3 2026', 'logistics' ],
      custom_fields: { Department: 'Finance' }
    }
  },
  // Load the web font used by the content styles so the PDF matches the editor.
  exportpdf_converter_style: "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');",
  setup: (editor) => {
    // Leave the "Try it" note out of the exported PDF only.
    editor.on('PreInit', () => {
      editor.serializer.addNodeFilter('blockquote', (nodes, name, args) => {
        if (args.export === 'pdf') {
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

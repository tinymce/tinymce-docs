tinymce.init({
  selector: 'textarea#exportword',
  height: 760,
  plugins: [
    'exportword', 'pagebreak',
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'exportword pagebreak | undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'table | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
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
        html: '<p>Ridgeline Cycles | Press release</p>',
        css: 'p { font-family: Calibri, Arial, sans-serif; font-size: 9pt; font-weight: bold; color: #17224f; text-align: right; }'
      },
      default: {
        html: '<p>Ridgeline Cycles introduces the Summit 2</p>',
        css: 'p { font-family: Calibri, Arial, sans-serif; font-size: 9pt; color: #17224f; text-align: right; }'
      }
    },
    footers: {
      default: {
        html: '<p>Page <span class="pageNumber"></span> of <span class="totalPages"></span></p>',
        css: 'p { font-family: Calibri, Arial, sans-serif; font-size: 9pt; color: #17224f; text-align: center; }'
      }
    },
    watermark: {
      source: 'http://moxiecode.cachefly.net/tinymce/v9/images/logo.png',
      washout: true
    }
  },
  exportword_converter_style: '* { font-family: Calibri, Arial, sans-serif !important; }'
});

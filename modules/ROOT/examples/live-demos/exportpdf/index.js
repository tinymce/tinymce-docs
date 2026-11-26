tinymce.init({
  selector: 'textarea#exportpdf',
  height: 760,
  plugins: [
    'exportpdf', 'pagebreak',
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'exportpdf pagebreak | undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'table | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  pagebreak_separator: '<div style="break-after: page"></div>',
  pagebreak_split_block: true,
  exportpdf_converter_options: {
    version: '2',
    document: {
      size: 'Letter',
      orientation: 'portrait',
      margins: {
        top: '0.9in',
        bottom: '0.9in',
        left: '1.1in',
        right: '0.8in',
        enable_mirror_margins: true
      }
    },
    headers: {
      first: {
        html: '<p>Hollis &amp; Grant Architects</p>',
        css: 'p { margin: 0; padding: 0 1in; font-family: Arial, sans-serif; font-size: 9pt; font-weight: bold; color: #17224f; text-align: right; }'
      },
      default: {
        html: '<p>Cedar Hollow Trailhead Pavilion | Design proposal</p>',
        css: 'p { margin: 0; padding: 0 1in; font-family: Arial, sans-serif; font-size: 9pt; color: #17224f; text-align: center; }'
      }
    },
    footers: {
      odd: {
        html: '<p>Page <span class="pageNumber"></span> of <span class="totalPages"></span></p>',
        css: 'p { margin: 0; padding: 0 1in; font-family: Arial, sans-serif; font-size: 9pt; color: #17224f; text-align: right; }'
      },
      even: {
        html: '<p>Page <span class="pageNumber"></span> of <span class="totalPages"></span></p>',
        css: 'p { margin: 0; padding: 0 1in; font-family: Arial, sans-serif; font-size: 9pt; color: #17224f; text-align: left; }'
      }
    },
    metadata: {
      title: 'Design proposal: Cedar Hollow Trailhead Pavilion',
      author: 'Hollis and Grant Architects',
      subject: 'Trailhead pavilion design proposal for Pine Ridge County Parks and Recreation',
      keywords: ['architecture', 'proposal', 'pavilion', 'trailhead'],
      custom_fields: { Project: 'HG-2026-118' }
    }
  },
  exportpdf_converter_style: "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');"
});

tinymce.init({
  selector: 'textarea#advanced-typography',
  height: 760,
  plugins: [
    'typography',
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'typography | undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'link table | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  typography_default_lang: 'en-US',
  typography_langs: [ 'en-US', 'en-GB', 'de', 'es' ],
  typography_ignore: [ 'code' ],
  // Every available rule except common/symbols/copy, so the license notice keeps "(c)" as written.
  typography_rules: [
    'common/punctuation/quote',
    'en-US/dash/main',
    'common/nbsp/afterParagraphMark',
    'common/nbsp/afterShortWord',
    'common/nbsp/beforeShortLastNumber',
    'common/nbsp/beforeShortLastWord',
    'common/nbsp/dpi',
    'common/punctuation/apostrophe',
    'common/space/delBeforePunctuation',
    'common/space/afterComma',
    'common/space/afterColon',
    'common/space/delBetweenExclamationMarks',
    'common/space/afterExclamationMark',
    'common/space/afterQuestionMark',
    'common/space/afterSemicolon',
    'common/space/beforeBracket',
    'common/space/bracket',
    'common/space/delBeforeDot',
    'common/space/delBeforePercent',
    'common/space/squareBracket',
    'common/number/mathSigns',
    'common/number/times',
    'common/number/fraction',
    'common/symbols/arrow',
    'common/symbols/cf',
    'common/punctuation/delDoublePunctuation',
    'common/punctuation/hellip',
    'common/nbsp/afterSectionMark'
  ]
});

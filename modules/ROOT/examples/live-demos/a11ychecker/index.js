tinymce.init({
  selector: 'textarea#a11ychecker',
  height: 760,
  plugins: [
    'a11ychecker',
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'a11ycheck | undo redo | blocks | ' +
    'bold italic forecolor backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'link image table | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  a11ychecker_level: 'aaa',
  a11ychecker_html_version: 'html5',
  a11ychecker_allow_decorative_images: true,
  a11ychecker_alt_text_max_length: 100,
  a11ychecker_ignored_rules: 'T1',
  a11ychecker_filter_issue: (issue) => issue.element.closest('.legal') === null,
  a11ychecker_issue_url_callback: (ruleId) => `https://www.tiny.cloud/docs/tinymce/latest/a11ychecker/#${ruleId.replace(/^D5[ABC]$/, 'D5')}`,
  a11y_advanced_options: true
});

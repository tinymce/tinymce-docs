tinymce.init({
  selector: 'textarea#linkchecker',
  plugins: 'linkchecker ' + /* Enables the link checker plugin */
    'autolink ' + /* Converts URL-like text to hyperlinks as you type */
    'link ' + /* Allows users to add/remove hyperlinks using a dialog */
    'code',
  toolbar: 'link code',
  content_style: {{site.liveDemoIframeCSSStyles}}
});
tinymce.init({
  selector: 'textarea#export',
  plugins: 'export pagebreak code emoticons image table lists advlist checklist link hr charmap directionality',
  toolbar: 'export pagebreak | formatselect fontselect fontsizeselect bold italic underline strikethrough forecolor backcolor subscript superscript | alignleft aligncenter alignright alignjustify indent outdent rtl ltr | bullist numlist checklist | emoticons image table link hr charmap',
  height: 500,
  toolbar_mode: 'sliding',
  content_style: {{site.liveDemoIframeCSSStyles}}
});
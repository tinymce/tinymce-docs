tinymce.init({
  selector: 'textarea#export',
  plugins: 'export pagebreak code emoticons image table lists advlist checklist link charmap directionality',
  toolbar: 'export pagebreak | blocks fontfamily fontsize | bold italic underline strikethrough | forecolor backcolor | subscript superscript | alignleft aligncenter alignright alignjustify indent outdent rtl ltr | bullist numlist checklist | emoticons image table link hr charmap',
  height: 500,
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
});

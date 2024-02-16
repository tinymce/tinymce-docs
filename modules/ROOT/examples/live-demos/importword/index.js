tinymce.init({
  selector: 'textarea#importword',
  plugins: [ 
  	'importword', 'code'
	],
  toolbar: 'importword | pagebreak | blocks fontfamily fontsize | bold italic underline strikethrough | forecolor backcolor | subscript superscript | alignleft aligncenter alignright alignjustify indent outdent rtl ltr | bullist numlist checklist | emoticons image table link hr charmap',
  height: 600,
});
tinymce.init({
  selector: 'textarea#default',
  plugins: [
    "advlist", "autolink", "charmap", "codesample", "emoticons", "help",
    "image", "link", "lists", "searchreplace", "table", "wordcount",
    // Premium features
    "advcode", "autocorrect", "footnotes", "mediaembed", 
    "powerpaste", "tinymcespellchecker", "casechange", "checklist", 
    "formatpainter", "permanentpen", "advtable", "tableofcontents", "exportpdf"
  ],
  toolbar: "exportpdf | spellcheckdialog | styles | bold italic underline strikethrough | align bullist numlist | link image emoticons footnotes checklist formatpainter permanentpen tableofcontents",
});
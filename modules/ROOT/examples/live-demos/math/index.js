tinymce.init({
  selector: "textarea#math_demo",
  plugins: [
      "math", "advlist", "anchor", "autolink", "charmap", "code", "codesample", "fullscreen",
      "help", "image", "insertdatetime", "link", "lists", "media",
      "preview", "searchreplace", "table", "visualblocks",
  ],
  toolbar: "math | codesample | undo redo | styles | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
});
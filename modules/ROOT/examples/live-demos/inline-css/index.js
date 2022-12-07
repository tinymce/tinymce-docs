const settings = {
  plugins: [
    "advlist", "anchor", "autolink", "charmap", "code", "fullscreen",
    "help", "image", "insertdatetime", "link", "lists", "media",
    "preview", "searchreplace", "table", "visualblocks", "inlinecss"
  ],
  toolbar: "undo redo | styles | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
  content_style: `
    .red {
      color: red;
    }
    .blue {
      color: blue;
    }
    .blue-background {
      background-color: blue;
    }
    .red-background {
      background-color: red;
    }
  `
};

tinymce.init({
  selector: "textarea.classic",
  ...settings
});

const button = document.getElementById('inline-css-btn');
const outputTextArea = document.getElementById('output-text-area');

button.addEventListener('click', () => {
  const pluginAPI = tinymce.get(0).plugins.inlinecss;
  const outputIframe = document.getElementById('outputIframe');
  const rawDoc = outputIframe.contentWindow.document;
  pluginAPI.getContent().then((content) => {
    outputTextArea.value = content.html;

    if (rawDoc) {
      rawDoc.open();
      rawDoc.write(content.html);
      rawDoc.close();
    }
  });
});

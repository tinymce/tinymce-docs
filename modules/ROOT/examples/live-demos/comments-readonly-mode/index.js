let editor;

tinymce.init({
  selector: "textarea#comment-readonly-ui-mode",
  plugins: [
    "tinycomments", "advlist", "anchor", "autolink", "charmap", "code", "fullscreen",
    "help", "image", "insertdatetime", "link", "lists", "media",
    "preview", "searchreplace", "table", "visualblocks",
  ],
  toolbar: "addcomment showcomments togglereadonly | undo redo | styles | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
  tinycomments_mode: 'embedded',
  tinycomments_access: '',
  setup: (ed) => {
    editor = ed;  // Assign the editor instance globally
  }
});

const button = document.getElementById('toggle-readonly-mode');

button.addEventListener('click', () => {
  const isReadonly = editor.mode.get() === 'readonly';
 tinymce.get(0).mode.set(isReadonly ? 'design' : 'readonly');
});
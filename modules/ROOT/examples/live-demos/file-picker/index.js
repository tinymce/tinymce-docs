tinymce.init({
  selector: 'textarea#file-picker',
  height: 760,
  plugins: [
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'image | undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
  /* enable title field in the Image dialog */
  image_title: true,
  /* enable automatic uploads of images represented by blob or data URIs */
  automatic_uploads: true,
  /*
    URL of the upload handler (for more details see:
    https://www.tiny.cloud/docs/tinymce/latest/image-upload/#images_upload_url)
    images_upload_url: 'postAcceptor.php',
    here the custom file picker is added to the Image dialog only
  */
  file_picker_types: 'image',
  /* and here is the custom image picker */
  file_picker_callback: (cb, value, meta) => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');

    input.addEventListener('change', (e) => {
      const file = e.target.files[0];

      const reader = new FileReader();
      reader.addEventListener('load', () => {
        /*
          Register the blob in the editor's image blob cache,
          so the editor can upload it like a pasted image.
        */
        const id = 'blobid' + (new Date()).getTime();
        const blobCache =  tinymce.activeEditor.editorUpload.blobCache;
        const base64 = reader.result.split(',')[1];
        const blobInfo = blobCache.create(id, file, base64);
        blobCache.add(blobInfo);

        /* call the callback and populate the Title field with the file name */
        cb(blobInfo.blobUri(), { title: file.name });
      });
      reader.readAsDataURL(file);
    });

    input.click();
  },
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css']
});

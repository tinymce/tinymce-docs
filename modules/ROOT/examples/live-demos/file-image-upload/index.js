tinymce.init({
  selector: 'textarea#file-image-upload',
  height: 780,
  plugins: [
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'image | undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
  automatic_uploads: true,
  images_file_types: 'jpeg,jpg,png,webp',
  // Simulates an upload with progress. A real handler sends blobInfo.blob() to a server
  // and resolves with the URL of the stored image.
  images_upload_handler: (blobInfo, progress) => new Promise((resolve) => {
    let percent = 0;
    const timer = setInterval(() => {
      percent += 20;
      progress(percent);
      if (percent >= 100) {
        clearInterval(timer);
        resolve(blobInfo.blobUri());
      }
    }, 200);
  }),
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css']
});

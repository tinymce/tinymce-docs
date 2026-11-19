tinymce.init({
  selector: 'textarea#file-image-upload',
  height: 680,
  plugins: 'image link lists advlist autolink charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table help wordcount',
  toolbar: 'image link | undo redo | blocks | bold italic | bullist numlist | ' +
    'backcolor | alignleft aligncenter alignright alignjustify | ' +
    'outdent indent | removeformat | help',
  automatic_uploads: true,
  images_file_types: 'jpeg,jpg,png,gif,webp',
  file_picker_types: 'image file',
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
  // Simulates a media library. A real callback opens a file browser and passes the chosen file to callback().
  file_picker_callback: (callback, value, meta) => {
    if (meta.filetype === 'image') {
      callback('https://tiny.ucarecdn.com/ab5fa504-67d7-4905-ac98-537ef63006f4/-/preview/', { alt: 'Turquoise cove with a row of white boathouses below wooded cliffs' });
    }
    if (meta.filetype === 'file') {
      callback('https://www.example.com/', { text: 'Booking terms' });
    }
  },
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css']
});

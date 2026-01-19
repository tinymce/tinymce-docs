tinymce.init({
  selector: 'textarea',
  plugins: 'uploadcare link',
  toolbar: "undo redo | styles | bold italic underline | forecolor | bullist numlist | link uploadcare uploadcare-video | code preview",
  uploadcare_public_key: '<your-public-key>',
  documents_file_types: [
    { mimeType: 'application/msword', extensions: [ 'doc' ] },
    { mimeType: 'application/vnd.ms-excel', extensions: [ 'xls' ] },
    { mimeType: 'application/vnd.ms-powerpoint', extensions: [ 'ppt', 'pps' ] },
    { mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', extensions: [ 'docx' ] },
    { mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', extensions: [ 'xlsx' ] },
    { mimeType: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', extensions: [ 'pptx' ] },
    { mimeType: 'application/pdf', extensions: [ 'pdf' ] },
    { mimeType: 'application/rtf', extensions: [ 'rtf' ] },
    { mimeType: 'text/plain', extensions: [ 'txt' ] },
    { mimeType: 'application/vnd.apple.keynote', extensions: [ 'key' ] },
    { mimeType: 'application/vnd.apple.pages', extensions: [ 'pages' ] },
    { mimeType: 'application/vnd.apple.numbers', extensions: [ 'numbers' ] },
    { mimeType: 'audio/wav', extensions: [ 'wav', 'wave' ] },
    { mimeType: 'audio/mpeg', extensions: [ 'mp3' ] },
    { mimeType: 'audio/ogg', extensions: [ 'ogg' ] },
    { mimeType: 'application/zip', extensions: [ 'zip' ] },
    { mimeType: 'application/gzip', extensions: [ 'gz', 'gzip' ] },
    { mimeType: 'application/x-tar', extensions: [ 'tar' ] },
    { mimeType: 'application/x-gtar', extensions: [ 'tar.gz', 'tgz' ] },
    { mimeType: 'application/x-compressed-tar', extensions: [ 'tar.gz', 'tgz' ] },
    { mimeType: 'application/x-7z-compressed', extensions: [ '7z' ] },
    { mimeType: 'application/vnd.rar', extensions: [ 'rar' ] }
  ]
});


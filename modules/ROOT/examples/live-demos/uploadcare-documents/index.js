tinymce.init({
  selector: "textarea#uploadcare-documents",
  plugins: 'uploadcare link',
  toolbar: 'link',
  uploadcare_public_key: '630992ad50fe2291c406',
  uploadcare_cdn_base_url: 'https://tiny.ucarecdn.com',
  uploadcare_store_type: 'temporary',
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
  ],
  height: 700,
  content_style: `
    body { max-width: 920px; margin: 1.5rem auto; padding: 0 2vw; }
    h1 { font-size: 1.5em; }
    h2 { font-size: 1.17em; }
    h1, h2, h3, h4, h5, h6 { font-weight: 500; margin: 0 0 0.75rem; }
    p + h1, p + h2, p + h3, p + h4, p + h5, p + h6 { margin-top: 2rem; }
    p { line-height: 1.6; margin: 0; } 
    p + p { margin-top: 1rem; }
    a { color: #2b70e3; }
    blockquote { color: #4e5c73; font-weight: 200; font-size: 1.3rem; margin: 1rem 2rem; padding: 0 0 0 1rem; border-left: 2px solid #2b70e3 !important; }
    ul, ol { margin: 0.5rem 0; padding-left: 2rem; }
    li { margin: 0.25rem 0; }
  `
});


tinymce.init({
  selector: "textarea#uploadcare-video",
  plugins: [ "uploadcare", "code", "link", "preview", "lists" ],
  uploadcare_public_key: '630992ad50fe2291c406',
	uploadcare_cdn_base_url: 'https://tiny.ucarecdn.com',
	uploadcare_store_type: 'temporary',
  // Video configuration
  uploadcare_video_properties: {
    controls: true,
    autoplay: false,
    loop: false,
    muted: false,
    playsInline: true,
    preload: 'metadata',
    showLogo: false
  },
  uploadcare_supported_files: [
    { mimeType: 'video/mp4', extensions: ['mp4'] },
    { mimeType: 'video/webm', extensions: ['webm'] }
  ],
  a11y_advanced_options: true,
  toolbar: "undo redo | uploadcare uploadcare-video | styles | bold italic underline | forecolor | bullist numlist| link | code preview",
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
    figcaption {font-size: 0.875em;}
    uc-video { 
      display: block; 
      margin: 1rem 0; 
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  `
});

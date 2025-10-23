tinymce.init({
  selector: "textarea#uploadcare-image",
  plugins: [ "uploadcare", "code", "link", "preview", "lists" ],
  uploadcare_public_key: '<your-public-key>',
  uploadcare_filters: [
    { name: 'none' }, // No filter applied
    { name: 'adaris', amount: -100 }, // Adaris with inverted effect (amount -100), label defaults to 'adaris'
    { name: 'adaris', amount: -100, label: 'Vintage Fade' }, // Adaris with inverted effect (amount -100), label reads 'Vintage Fade'
    { name: 'adaris', amount: 0, label: 'Base' }, // Adaris with neutral effect (amount 0), label reads 'Base'
    { name: 'adaris', amount: 50, label: 'Light' }, // Adaris with light effect (amount 50), label reads 'Light'
    { name: 'adaris', amount: 100, label: 'Standard' }, // Adaris with standard effect (amount 100), label reads 'Standard'
    { name: 'adaris', amount: 200, label: 'Intense' }, // Adaris with intense effect (amount 200), label reads 'Intense'
    { name: 'zevcen', amount: 200, label: 'Glow Boost' }, // Zevcen with intense effect (amount 200), label reads 'Glow Boost'
    { name: 'galen', amount: 80, label: 'Soft Focus' }, // Galen with softening effect (amount 80), label reads 'Soft Focus'
    { name: 'carris', amount: 120, label: 'Sharp Contrast' }, // Carris with high contrast (amount 120), label reads 'Sharp Contrast'
    { name: 'ferand', amount: 60, label: 'Light Touch' }, // Ferand with light enhancement (amount 60), label reads 'Light Touch'
    { name: 'sorahel', amount: -50, label: 'Night Mood' } // Sorahel with darkened effect (amount -50), label reads 'Night Mood'
  ],
  a11y_advanced_options: true,
  toolbar: "undo redo | uploadcare | styles | bold italic underline | forecolor | bullist numlist| link | code preview",
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
  `
  });

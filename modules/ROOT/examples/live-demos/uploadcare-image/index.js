tinymce.init({
  selector: "textarea#uploadcare-image",
  plugins: [
    'uploadcare', 'code', 'link', 'preview', 'lists', 'advlist', 'autolink',
    'charmap', 'anchor', 'searchreplace', 'visualblocks', 'fullscreen',
    'insertdatetime', 'table', 'help', 'wordcount'
  ],
  uploadcare_public_key: '630992ad50fe2291c406',
	uploadcare_cdn_base_url: 'https://tiny.ucarecdn.com',
	uploadcare_store_type: 'temporary',
  uploadcare_filters: [
    { name: 'adaris', amount: -100 }, // Adaris with inverted effect (amount -100), label defaults to 'adaris'
    { name: 'adaris', amount: -100, label: 'Vintage' }, // Adaris with inverted effect (amount -100), label reads 'Vintage'
    { name: 'adaris', amount: 0, label: 'Base' }, // Adaris with neutral effect (amount 0), label reads 'Base'
    { name: 'adaris', amount: 50, label: 'Light' }, // Adaris with light effect (amount 50), label reads 'Light'
    { name: 'adaris', amount: 200, label: 'Intense' }, // Adaris with intense effect (amount 200), label reads 'Intense'
    { name: 'galen', amount: 80, label: 'Soft' }, // Galen with softening effect (amount 80), label reads 'Soft'
    { name: 'carris', amount: 120, label: 'Sharp' }, // Carris with high contrast (amount 120), label reads 'Sharp'
    { name: 'sorahel', amount: -50, label: 'Night' }, // Sorahel with darkened effect (amount -50), label reads 'Night'
    { name: 'none' }, // No filter applied
  ],
  a11y_advanced_options: true,
  toolbar: 'undo redo | uploadcare | styles | bold italic underline | forecolor | ' +
    'bullist numlist | link | code preview | blocks | backcolor | ' +
    'alignleft aligncenter alignright alignjustify | outdent indent | ' +
    'removeformat | help',
  height: 700,	
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css']
});

tinymce.init({
  selector: 'textarea#trackchanges',
  height: 500,
  plugins: 'trackchanges',
  toolbar: 'trackchanges',
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }', 
  trackchanges_uid: 'adamhenderson',
  trackchanges_access: 'read', //change this value to set permission to the Suggested Edits view
  readonly: false //set to true to restrict a user's editing permission
});
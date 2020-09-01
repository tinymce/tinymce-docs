## TinyMCE web-component quick start guide
In the following example replace `no-api-key` with your TinyMCE API key.
If you don’t yet have one, you can get a [free API key](https://www.tiny.cloud/auth/signup) now.
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8"/>
    <title>TinyMCE Web Component Example</title>
    <script src="https://cdn.jsdelivr.net/npm/@tinymce/tinymce-webcomponent@1/dist/tinymce-webcomponent.js"></script>
  </head>

  <body>
  <h1>TinyMCE Web Component Example</h1>
  <tinymce-editor 
    api-key="no-api-key" 
    height="500"
    menubar="false"
    plugins="advlist autolink lists link image charmap print preview anchor 
    searchreplace visualblocks code fullscreen 
    insertdatetime media table paste code help wordcount"
    toolbar="undo redo | formatselect | bold italic backcolor | 
    alignleft aligncenter alignright alignjustify | 
    bullist numlist outdent indent | removeformat | help"
    content_css="//www.tiny.cloud/css/codepen.min.css">
    &lt;p&gt;Initial content&lt;/p&gt;
    </tinymce-editor>
  </body>
</html>

```
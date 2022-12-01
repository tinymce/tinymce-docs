<script type="text/javascript">

const settings = {
	plugins: [
        "advlist", "anchor", "autolink", "charmap", "code", "fullscreen", 
        "help", "image", "insertdatetime", "link", "lists", "media", 
        "preview", "searchreplace", "table", "visualblocks", "inlinecss"
    ],
    toolbar: "undo redo | styles | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
	content_style: `
	  .red {
		  color: red;
	  }
	  .blue {
	  	color: blue;
	  }
	  .blue-background {
	  	background-color: blue;
	  }
	  .red-background {
	  	background-color: red;
	  }
	`,
	// inlinecss_selector_filter: 'red',
	// inlinecss_file_filter: '',
	/* init_instance_callback: (editor) => {
      editor.insertContent(
       `
	   <p class="red">Red text</p>
		<p class="red blue-background">Red text - blue background</p>
	  	<p class="blue">Blue text</p>
		<p class="blue red-background">Blue text - red background</p>
	  `
      );
    }, */
};

tinymce.init({
    selector: "textarea.classic",
	...settings
});

  
</script>

<form method="post" action="dump.php">
	<h1>Editor — classic mode</h1>
    <textarea cols="30" rows="10" class="classic"></textarea>
	<br/>
	<br/>
	
</form>

<div id="inlinecss-api-runner">
	<h1> Click the button to export content with CSS inlined</h1>
	<button id="inline-css-btn" style="margin: 10px">Inline CSS</button>
	<br/>
	<br/>
	
	<h2>Raw HTML output</h2>
	<textarea style="display: block;" id='output-text-area' cols="100" rows="20"></textarea>
	<br/>
	<br/>
	
	<h2>Rendered output </h2>
	<div style="height: 400px; display: flex; flex-direction: column; overflow: hidden;">
		<iframe style="flex: 1; height: 100%; width: 100%" id="outputIframe"></iframe>
	</div>
</div>

<script>
	const outputIframe = document.getElementById('outputIframe');
	const rawDoc = outputIframe.contentWindow.document;
	const button = document.getElementById('inline-css-btn');
	const outputTextArea = document.getElementById('output-text-area');

	button.addEventListener('click', () => {
		const pluginAPI = tinymce.get(0).plugins.inlinecss;
		pluginAPI.getContent().then((content) => {
		  	outputTextArea.value = content.html;
		
			if (rawDoc) {
				rawDoc.open();
				rawDoc.write(content.html);
				rawDoc.close();
			}
		});
	});
	
</script>

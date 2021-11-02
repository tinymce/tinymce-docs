### `filetypes`

This option restricts the files displayed based on the following file type categories:

{% include plugins/tinydrive-filetypeslist.md %}

For example: If the application is using {{site.cloudfilemanager}} to insert images, then set `['image']` in the file types array.

Type
: `Array<string>`

#### Interactive example: Using `filetypes` to restrict {{site.cloudfilemanager}} to image formats

{% include live-demo.html id="drive-plugin-pick-images" %}
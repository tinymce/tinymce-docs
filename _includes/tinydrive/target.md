### `target`

Use this option to set the CSS selector for the target element to render {{site.cloudfilemanager}} on. If the container has `display: flex`, then the container will be filled with the {{site.cloudfilemanager}} UI. This could be used to position the {{site.cloudfilemanager}} UI inside a web application.

Type
: `String`

#### Example: Using `target`

```html
<script>
tinydrive.{{apiname}}({
  target: '.my-custom-div',
  token_provider: '/your-local/jwt-provider'{% include tinydrive/then_code_chunk.md %}</script>
<div class="my-custom-div" style="display: flex; width: 800px; height: 600px">
</div>
```

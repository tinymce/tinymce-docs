{{site.productname}} comes with four content CSS files:

- `default`
- `dark`
- `document`
- `writer`

These content CSS files can be enabled in the editor using the [`content_css` configuration option]({{site.baseurl}}/configure/content-appearance/#content_css).

For example:

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  content_css : 'writer'
});
```

These content CSS files can also be used as a template for creating a custom content CSS file for the editor. For the CSS files, see: [{{site.prodnamecode}}-dist GitHub Repository - Content CSS files](https://github.com/tinymce/tinymce-dist/tree/master/skins/content).

{{site.companyname}} also provides content CSS files with the premium skins, for a list of premium content CSS files, see:
[{{site.prem_skins_icons}}]({{site.baseurl}}/enterprise/premium-skins-and-icon-packs/).

{{site.companyname}} recommends using the same CSS for both the editor and the page where the editor content will be rendered.
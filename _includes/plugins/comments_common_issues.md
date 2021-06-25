## Configuring the commented text properties

The highlight styles are now a part of the overall content skin and are changed through customizing the skin.

{{site.productname}} open source project [oxide](https://github.com/tinymce/oxide/blob/master/src/less/theme/content/comments/comments.less) (default skin), defines the variables used for changing the annotation colours.

Refer to the [documentation]({{site.baseurl}}/advanced/creating-a-skin/#creatingaskin) for building a skin using this repo.

For more information on configuring {{site.productname}} formats, refer to the [formats]({{site.baseurl}}/configure/content-formatting/#formats) section.

## Using Comments embedded mode with the Full Page plugin

Developers have to be cautious when deciding the order in which the plugins are added in the plugins list.

Comments can cause an issue if the [Full Page]({{site.baseurl}}/plugins/opensource/fullpage/) plugin `fullpage` appears before Comments plugin `tinycomments` in the plugin list, and `tinycomments` is configured to use `embedded mode`.

The order that the plugins appear affects the order that the `getContent` hooks are processed in. This creates an issue with `tinycomments` working as expected since the `fullpage` plugin adds outer `<html>` elements before `tinycomments` adds its comment data. This leads to the comment data being in the wrong place. The consequence of this situation is that when a saved document is re-opened, the comment data is lost (but the highlights are still there).

For a workaround, please ensure that `tinycomments` is listed before `fullpage` in the plugins list. This should result in `tinycomments` working properly.

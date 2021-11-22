
{{site.productname}} 5.0 was released for {{site.enterpriseversion}} and {{site.cloudname}} on Tuesday, February 5<sup>th</sup>, 2019. It includes {{site.productname}} 5.0.0 and additional changes to premium plugins. The Release Notes provide high-level coverage of the improvements and additions that have been implemented in {{site.productname}} 5.0 and document known problems in this release, as well as notable bug fixes, deprecated functionality, and other details.

TinyMCE 5.0 has an ARIA [WCAG 2.1 standards](https://www.w3.org/WAI/standards-guidelines/wcag/) compliant user interface to make the user interface controls and dynamic content more accessible. In TinyMCE 5.0, more complex controls or dialogs can be written in the new API style while keeping the more straightforward methods of adding buttons and windows.

### Get TinyMCE 5.0

Include this line of code in the <head> of the HTML page and link to the tinymce.min.js source file. Substitute 'no-api-key' with your api key.

```html
<script src="{{ site.cdnurl }}" referrerpolicy="origin"></script>
```

Signing up for a free API key provides entitlements to all our free plugins. This includes advanced functionality such as the [Image tools]({{site.baseurl}}/plugins/opensource/imagetools/) plugin, which requires a cloud image proxy server to already be configured. Premium plugins can be purchased at any time once the API key has been set up.

Refer to the [Quick start]({{site.baseurl}}/quick-start) docs for more information.

### Upgrade

Developers can upgrade their TinyMCE 4.x instances to TinyMCE 5.0 with little or no fuss. For instructions on how to migrate, refer to the [Migration guide]({{site.baseurl}}/migration-from-4x/).

> Note:  An instance of TinyMCE with heavy customizations could take longer to upgrade. Please contact [Customer Support](https://support.tiny.cloud) if encountering issues with the upgrade.

Try out TinyMCE 5.0 demo to explore the new UI.

### TinyMCE 5.0 demo

{% include live-demo.html id="full-featured" height="750" %}


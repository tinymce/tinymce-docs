## Upgrading to the latest version of TinyMCE 6
The procedure for upgrading to the latest version of {{site.productname}} {{site.productmajorversion}} depends on the deployment type.

* [Upgrading Tiny Cloud](#upgradingtinycloud).{% if enterprise != true %}
* [Upgrading TinyMCE Self-hosted using a package manager](##upgradingtinymceself-hostedusingapackagemanager).{% endif %}
* [Upgrading TinyMCE Self-hosted manually](#upgradingtinymceself-hostedmanually).

### Upgrading Tiny Cloud

{{site.cloudname}} provides the latest enterprise version of {{site.productname}}. For information on configuring {{site.cloudname}}, see: [the Cloud deployment guide]({{site.baseurl}}/cloud-deployment-guide/).

{% if enterprise != true %}

### Upgrading TinyMCE Self-hosted using a package manager
Select from the following package managers.

* [Yarn](#yarn)
* [npm](#npm)
* [Composer](#composer)
* [NuGet](#nuget)
* [Bower](#bower)

#### Yarn
To upgrade to {{site.productname}} {{site.productminorversion}} using Yarn, run:
```sh
$ yarn upgrade {{site.prodnamecode}}
```

#### npm
To upgrade to {{site.productname}} {{site.productminorversion}} using npm, run:
```sh
$ npm install {{site.prodnamecode}}@latest --save
```

#### Composer
To upgrade to {{site.productname}} {{site.productminorversion}} using Composer, run:
```sh
$ php composer.phar update "{{site.prodnamecode}}/{{site.prodnamecode}}"
```

#### NuGet
To upgrade to {{site.productname}} {{site.productminorversion}} using NuGet, run:
```sh
$ Install-Package {{site.productname}}
```

#### Bower
To upgrade to {{site.productname}} {{site.productminorversion}} using Bower, run:
```sh
$ bower install {{site.prodnamecode}}#{{site.productminorversion}} --save
```

{% endif %}

### Upgrading TinyMCE Self-hosted manually
To upgrade to {{site.productname}} {{site.productminorversion}} using a manually downloaded package:

1. Backup the `{{site.prodnamecode}}/` directory so any customizations can be restored after the upgrade.

    Customizations for {{site.productname}} are typically stored in the following directories:

    ```sh
    tinymce/
    ├── icons/
    ├── langs/
    ├── plugins/
    ├── skins/
    │   ├── content/
    │   └── ui/
    └── themes/
    ```

1. Download the latest version of {{site.productname}}.

    * For the {{site.productname}} Community Version, download `{{site.prodnamecode}}_<VERSION>.zip` from [Get {{site.productname}} - Self-hosted releases]({{site.gettiny}}/self-hosted/), where _`<VERSION>`_ is the latest version of {{site.productname}}.
    * For the {{site.productname}} Enterprise Version, download the **{{site.productname}} Enterprise Bundle** from [{{site.accountpage}} > Downloads]({{site.accountpageurl}}/downloads/). The downloaded file will be named `enterprise_latest.zip`.

1. Extract the downloaded `.zip` file to a temporary location.
1. (If required) Install the latest language packs from [Get {{site.productname}} - Language Packages]({{site.gettiny}}/language-packages/).
1. Copy customizations to the new `{{site.prodnamecode}}/` directory. Ensure that _only custom changes_ are added the new `{{site.prodnamecode}}/` directory, such as:

    * Custom icons packs
    * Custom plugins
    * Custom skins
    * Custom themes
1. Delete the existing `{{site.prodnamecode}}/` directory and replace with the new `{{site.prodnamecode}}/`.

> **Note**: To simplify the upgrade process to future versions of {{site.productname}}:
>
>1. Host the {{site.productname}} customizations outside of the `{{site.prodnamecode}}/` directory.
>1. Update your {{site.productname}} configuration as required:
>
>    * Set the location of content CSS customizations using [`content_css`]({{site.baseurl}}/configure/content-appearance/#content_css).
>    * Set the location of custom plugins using [`external_plugins`]({{site.baseurl}}/configure/integration-and-setup/#external_plugins).
>    * Set the location of custom icon packages using [`icons_url`]({{site.baseurl}}/configure/editor-appearance/#icons_url) instead of `icons`.
>    * Set the location of custom localization packages using [`language_url`]({{site.baseurl}}/configure/localization/#language_url) instead of `language`.
>    * Set the location of custom skin packages using [`skin_url`]({{site.baseurl}}/configure/editor-appearance/#skin_url) instead of `skin`.
>    * Set the location of custom themes using [`theme_url`]({{site.baseurl}}/configure/editor-appearance/#theme_url) instead of `theme`.
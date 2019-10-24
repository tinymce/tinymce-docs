## Upgrading to the latest version of TinyMCE 5
The procedure for upgrading to the latest version of {{site.productname}} {{site.productversion}} depends on the deployment type.

* [Upgrading Tiny Cloud](#upgradingtinycloud).
* [Upgrading TinyMCE Self-hosted using a package manager](##upgradingtinymceself-hostedusingapackagemanager).
* [Upgrading TinyMCE Self-hosted manually](#upgradingtinymceself-hostedmanually).

### Upgrading Tiny Cloud

{{site.cloudname}} provides the latest enterprise version of {{site.productname}}. For information on configuring {{site.cloudname}}, see: [the Cloud deployment guide]({{site.baseurl}}/cloud-deployment-guide/).
### Upgrading TinyMCE Self-hosted using a package manager
Select from the following package managers.

* [Yarn](#yarn)
* [npm](#npm)
* [Composer](#composer)
* [NuGet](#nuget)
* [Bower](#bower)

#### Yarn
To upgrade to {{site.productname}} {{site.releaseversion}} using Yarn, run:
```sh
$ yarn upgrade {{site.prodnamecode}}
```

#### npm
To upgrade to {{site.productname}} {{site.releaseversion}} using npm, run:
```sh
$ npm install {{site.prodnamecode}}@latest --save
```

#### Composer
To upgrade to {{site.productname}} {{site.releaseversion}} using Composer, run:
```sh
$ php composer.phar update "{{site.prodnamecode}}/{{site.prodnamecode}}"
```

#### NuGet
To upgrade to {{site.productname}} {{site.releaseversion}} using NuGet, run:
```sh
$ Install-Package {{site.productname}}
```

#### Bower
To upgrade to {{site.productname}} {{site.releaseversion}} using Bower, run:
```sh
$ bower install {{site.prodnamecode}}#{{site.releaseversion}} --save
```

### Upgrading TinyMCE Self-hosted manually
To upgrade to {{site.productname}} {{site.releaseversion}} using a manually downloaded package:

1. Backup the `{{site.prodnamecode}}/` directory.

  langs/
  icons/
  skins/content/
  skins/ui/
  themes/
  plugins/

    /configure/integration-and-setup/#base_url
    /configure/content-appearance/#content_css
    /configure/integration-and-setup/#external_plugins
    icons -> /configure/editor-appearance/#icons_url
    language -> /colanguagenfigure/localization/#language_url
    skin -> /configure/editor-appearance/#skin_url
    theme -> /configure/editor-appearance/#theme_url

1. Download the latest version of {{site.productname}}.

    * For the {{site.productname}} Community Version, download `{{site.prodnamecode}}_<VERSION>.zip` from [Get {{site.productname}} - Self-hosted releases](https://www.tiny.cloud/get-tiny/self-hosted/), where _`<VERSION>`_ is the latest version of {{site.productname}}.
    * For the {{site.productname}} Enterprise Version, download the **{{site.productname}} Enterprise Bundle** from [My Account > Downloads](https://www.tiny.cloud/my-account/downloads/). The downloaded file will be named `enterprise_latest.zip`.

1. (If required) Download updated language packs from [Get {{site.productname}} - Language Packages](https://www.tiny.cloud/get-tiny/language-packages/).
1. Extract the downloaded `.zip` file for deployment.

1. Reapply any customizations
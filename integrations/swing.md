---
layout: default
title: TinyMCE for Swing integration
title_nav: Swing
description: Seamlessly integrates TinyMCE into Swing applications.
keywords: integration integrate swing
---

Users can easily configure the {{site.productname}} editor in Swing through the **{{site.productname}} for Swing** integration.

## Getting the TinyMCE for Swing integration

To start using {{site.productname}} for Swing as your new rich text editor, the first step is to obtain a copy of the **Integration**.

Contact [{{site.supportname}}]({{site.supporturl}}) to discuss how to get started with our latest release.

## Get started with our TinyMCE in Swing integration

To include our {{site.productname}} in Swing integration in your Java project just follow the steps below:

### 1. Copy TinyMCE in Swing libraries

From the release `zip` file, select all the Java libraries under the `lib` folder and import them into your project. This libraries contain everything needed to run our integration.

### 2. Select a deployment and create a configuration

The Swing integration allows the user to select the origin of the {{site.productname}} code: **embedded** (recommended), **cloud**, or **external**.

* Embedded deployments use the version of {{site.productname}} prepackaged with the current release of the integration. This is guaranteed to be compatible with the integration specific plugins.

  ```java
  final Config myTinyConfiguration = Config.embedded();
  ```

* Cloud deployments pull {{site.productname}} from the {{site.cloudname}}. Use this option by passing your API key and [specifying the {{site.cloudname}} version]({{site.baseurl}}/cloud-deployment-guide/editor-plugin-version/#specifyingthetinymceeditorversiondeployedfromcloud).

  ```java
  final Config myTinyConfiguration = Config.cloud("<my_api_key>", "{{site.productmajorversion}}-stable");
  ```

* External deployments allow to use a local version of {{site.productname}} by giving the address of the location where {{site.productname}} is being served.

  ```java
  final Config myTinyConfiguration = Config.external("http://<my_server>/<path>/tinymce.min.js");
  ```

The configuration can be customized purely in Java:

```java
final Path contentPath = Paths.get(System.getProperty("user.home"));
final Config myConfig = Config.embedded()
    .setContentPath(contentPath)
    .setImageSaverLocal(contentPath)
    .addPlugins(
      "advcode advlist autolink lists link image imagetools charmap emoticons " +
      "anchor searchreplace insertdatetime media table powerpaste help wordcount")
    .putProperty("width", 800)
    .putProperty("height", 600)
    .putProperty("menubar", false)
    .putProperty("toolbar",
      "undo redo | formatselect | bold italic backcolor | " +
      "alignleft aligncenter alignright alignjustify | " +
      "bullist numlist outdent indent | removeformat | link image | help")
    .putProperty("images_reuse_filename", true);
```

Or by passing Javascript that returns a {{site.productname}} configuration object.

**config.js**:
```js
(function() {
  return {
    width: 800,
    height: 600,
    plugins: [
      'advcode advlist autolink lists link image imagetools charmap emoticons',
      'anchor searchreplace insertdatetime media table powerpaste help wordcount'
    ],
    menubar: false,
    toolbar: [
      'undo redo | formatselect | bold italic backcolor | alignleft aligncenter ',
      'alignright alignjustify | bullist numlist outdent indent | removeformat | ',
      'link image | help'
    ].join(''),
    images_reuse_filename: true
  };
})()
```

Snippet of **Edit.java**:
```java
final Path contentPath = Paths.get(System.getProperty("user.home"));
final Config myConfig = Config.embedded()
    .setContentPath(contentPath)
    .setImageSaverLocal(contentPath)
    .setInitConf(Edit.class, "config.js"); // load config.js using class loader

```

### 3. Create the editor and add it to your view

Create the editor by passing a configuration object. The editor initialization is asynchronous so starting a new editor will return a future value that can be accessed as a normal future value.

```java
final Config myConfig = Config.embedded();
final TinyMCE editor = TinyMCE.futureEditor(myConfig).get();
editor.setHtml("<p>Hello World!</p>");
final JPanel holder = new JPanel(new BorderLayout());
holder.add(editor.component(), BorderLayout.CENTER);
```

Once the editor has been extracted from the future value you can use its component (JComponent) to position it in your view.

For more examples check the [GitHub repository](https://github.com/tinymce/tinymce-swing-codesamples).

## Explore other resources

* [GitHub repository](https://github.com/tinymce/tinymce-swing-codesamples) - Refer to this link for examples on how to use {{site.productname}} for Swing.

* An additional set of documentation is shipped with the integration in a `zip` file containing a library of `Javadocs` and API reference guides which help in understanding and applying the concepts. The `zip` file includes the following documents:

  * `readme.txt` - This file has general information about {{site.productname}} for Swing integration.
  * `license.txt` - This file has all the license details about {{site.productname}} for Swing as a commercial software.
  * `release-notes.txt` - This file has information about the integrations and enhancements that have been implemented in {{site.productname}} for Swing integration.
  * `change-log.md` - This file lists all user impacting and major changes for every release of {{site.productname}} for Swing integration.
  * `jar` files - The `jar` files that implement the integration can be found under `lib/`
  * `javadoc` - The `javadoc` can be found at `docs/javadoc/index.html`.

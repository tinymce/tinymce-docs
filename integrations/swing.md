---
layout: default
title: TinyMCE for Swing integration
title_nav: Swing
description: Seamlessly integrates TinyMCE into Swing applications.
keywords: integration integrate swing
---

Users can easily configure the TinyMCE editor in Swing through the **TinyMCE for Swing** integration. 

## Getting the TinyMCE for Swing integration

To start using TinyMCE for Swing as your new rich text editor, the first step is to obtain a copy of the **Integration**. 

Contact [customer support](https://www.tiny.cloud/contact/) to discuss how to get started with our latest release.

## Get started with our TinyMCE in Swing integration

To include our TinyMCE in Swing integration in your Java project just follow the steps below:

### 1. Copy TinyMCE in Swing libraries

From the release `zip` file, select all the Java libraries under the `lib` folder and import them into your project. This libraries contain everything needed to run our integration.

### 2. Select a deployment and create a configuration

The Swing integration allows the user to select the origin of the TinyMCE code: **cloud**, **embedded**, or **external**.

* Cloud deployments pull the latest release of TinyMCE from the channel of your choice. Use this option by passing your API key and selecting a release channel.

  ```
  final Config myTinyConfiguration = Config.cloud("<my_api_key>", "5-stable");
  ```

* Embedded deployments use the version of TinyMCE prepackaged with the current release of the integration.

  ```
  final Config myTinyConfiguration = Config.embedded();
  ```

* External deployments allow to use a local version of TinyMCE by giving the address of the location where TinyMCE is being served.

  ```
  final Config myTinyConfiguration = Config.external("http://<my_server>/<path>/tinymce.min.js");
  ```

The configuration can be customized via Java or by passing Javascript function that returns a TinyMCE configuration object.

```
final HashMap<String, String> tinyProperties = new HashMap<>();
tinyProperties.put("menubar", "false");
tinyProperties.put("plugins", "advlist autolink lists link image anchor searchreplace visualblocks code insertdatetime media table powerpaste code help");
tinyProperties.put("toolbar", "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help");
final Config myConfig = Config.embedded().addProperties(tinyProperties);
```

### 3. Create the editor and add it to your view

Create the editor by passing a configuration object. The editor initialization is asynchronous so starting a new editor will return a future value that can be accessed as a normal future value.

```
final Config myConfig = Config.embedded();
final TinyMCE editor = TinyMCE.futureEditor(myConfig).get();
editor.setBody("Hello World!");
final JPanel holder = new JPanel(new BorderLayout());
holder.add(editor.component(), BorderLayout.CENTER);
```

Once the editor has been extracted from the future value you can use its component (JComponent) to position it in your view.

For more examples check the [GitHub repository](https://github.com/tinymce/tinymce-swing-codesamples).

## Explore other resources

* [GitHub repository](https://github.com/tinymce/tinymce-swing-codesamples) - Refer to this link for examples on how to use TinyMCE for Swing.

* An additional set of documentation is shipped with the integration in a `zip` file containing a library of `Javadocs` and API reference guides which help in understanding and applying the concepts. The `zip` file includes the following documents:

  * `readme.txt` - This file has general information about TinyMCE for Swing integration.
  * `license.txt` - This file has all the license details about TinyMCE for Swing as a commercial software.
  * `release-notes.txt` - This file has information about the integrations and enhancements that have been implemented in TinyMCE for Swing integration.
  * `jar` files - The `jar` files that implement the integration can be found under lib/
  * `javadoc` - The `javadoc` can be found at `docs/javadoc/index.html`. 

#### A note about integrations

> Note: Tiny references to third-party integrations/code to help users build great products with the TinyMCE editor. For support related issues such as queries about this integration, please [contact support](https://support.tiny.cloud/hc/en-us/requests/new) or join the [TinyMCE Community](https://community.tiny.cloud/).

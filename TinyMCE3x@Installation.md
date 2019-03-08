---
layout: default
title: Installation
---

Installing TinyMCE is very simple; follow the instructions here. We give a few examples of how to integrate TinyMCE. You should also take a look at TinyMCE's extensive configuration options.

Recently added is the [For Dummies section](https://www.tiny.cloud/docs-3x/reference/for-dummies/).

## Requirements

TinyMCE has no direct requirements except for browser compatibility (see [TinyMCE:compatibility](https://www.tiny.cloud/docs-3x/extras/TinyMCE3x@Browser_compatiblity/) and, of course, having JavaScript enabled.

There is NO back-end code distributed with TinyMCE.

TinyMCE can be set up to use textareas in an HTML form as a workspace. When the form is submitted you can have your system do something with the content of the textarea such as save the HTML code to a database or file. Your frontend can also be set up to read in existing content so you can make changes to it. Refer to Configuration Options, General, [Mode](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@mode/) for more information.

## Windows specific Apache configuration

You may get errors like tinyMCE is not defined or missing } after property list on Windows installations.

Problem is caused by default Apache option EnableSendfile. You must turn it OFF by removing the # character in the `httpd.conf` file.

EnableSendfile off

Side note: tinyMCE is not defined or missing } after property list may also occur if you do not specify the correct filepath to the stored JavaScript files in the page header. Verify the filepath is correct before altering your Apache settings.

## Downloading

For download instructions check our [TinyMCE Website](https://www.tiny.cloud).

## Extracting the archives

On Windows you could use WinZip or something similar, and on other operating systems such as Linux you simply extract the archive with the tar command. You can find an example on how to extract the archived file on Linux below.

You should extract TinyMCE in your `wwwroot` or site domain root folder.

## Extract example using a shell

```
<pre>$ cd wwwroot
$ gzip -d tinymce_1_44.tar.gz
$ tar xvf tinymce_1_44.tar</pre>
```

## A folder structure looking like this is created

```
<pre>/tinymce/
/tinymce/docs/
/tinymce/docs/zh_cn/
/tinymce/examples/
/tinymce/examples/zh_cn/
/tinymce/jscripts/
/tinymce/jscripts/tiny_mce/
/tinymce/jscripts/tiny_mce/langs/
/tinymce/jscripts/tiny_mce/plugins/
/tinymce/jscripts/tiny_mce/plugins/<plugin folders>
/tinymce/jscripts/tiny_mce/themes/
/tinymce/jscripts/tiny_mce/themes/advanced/
/tinymce/jscripts/tiny_mce/themes/default/
/tinymce/jscripts/tiny_mce/themes/simple/</pre>
```

## Making changes on your web site

Once you have extracted the archive you will need to edit the pages to include the configuration and javascript for TinyMCE. Please note that you should probably only include the TinyMCE javascript on the pages that need it, not all the pages of the web site. Remember to change the URL to the .js below to match your installation path.

## The most basic page integration XHTML 1.1. valid (converts all textarea elements into editors)

Make sure you read the 2 html comments (starting with `<!--` ) before trying this code:

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" dir="ltr">
<head>
  <title>TinyMCE Test</title>
  <meta http-equiv="content-type" content="text/html; charset=utf-8"/>

  <!-- OF COURSE YOU NEED TO ADAPT NEXT LINE TO YOUR tiny_mce.js PATH -->
  <script type="text/javascript" src="../jscripts/tiny_mce/tiny_mce.js"></script>

  <script type="text/javascript">
    tinyMCE.init({
      mode : "textareas"
    });
    </script>
</head>
<body>

  <!-- OF COURSE YOU NEED TO ADAPT ACTION TO WHAT PAGE YOU WANT TO LOAD WHEN HITTING "SAVE" -->
  <form method="post" action="show.php">
    <p>
      <textarea name="content" cols="50" rows="15">This is some content that will be editable with TinyMCE.</textarea>
      <input type="submit" value="Save" />
    </p>
</form>

</body>
</html>
```

The Save button in this example sends the content of the textarea to the show.php page that will simply display it to you if you make it like this (of course you can adapt it to your needs to write the content to a file or database) :

```php
<?php
/* post.php : this page shows what insert.php has sent */
echo(stripslashes($_POST['content']));
?>
```

## Same example using some more buttons

Just change the following code :

```html
<script type="text/javascript">
  tinyMCE.init({
    mode : "textareas"
  });
</script>
```

which should be turned into :

```html
<script type="text/javascript">
  tinyMCE.init({
    theme : "advanced",
    mode : "textareas",
    plugins : "fullpage",
    theme_advanced_buttons3_add : "fullpage"
  });
</script>
```

Conclusion: this part will control the editor's look and functionalities. You can adapt it to your needs according to [TinyMCE:Configuration](https://www.tiny.cloud/docs-3x/reference/Configuration3x/).

## Examples

Go here to check out the [examples](https://www.tiny.cloud/docs/demo/full-featured/) of different ways you can implement TinyMCE.

If you have any problems, you should check the [forum](https://community.tiny.cloud).

---
layout: default
title: "For Dummies"
---

## Create a very simple TinyMCE WYSIWYG Editor

### Instructions

1. [Download TinyMCE tinymce_3_x_x.zip](https://www.tiny.cloud/get-tiny/older-releases/), it contains all you need for any editor.
2. Unzip and extract the `tinymce_3_x_x.zip` move the subdir `tinymce` to your desired local location.
3. Upload tinymce directory to your server with all it's contents.
4. Now create a simple test web page with code as below, upload to server, that's all, it should work.

##### 1. Include the following with the `<script>` calls within the `<head>` tags.

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" dir="ltr">

<head>
  <script type="text/javascript" src="insertYourPath/tinymce/jscripts/tiny_mce/tiny_mce.js"></script >
  <script type="text/javascript">
    tinyMCE.init({
      mode : "textareas",
      theme : "simple"   //(n.b. no trailing comma, this will be critical as you experiment later)
    });
  </script >
</head>
```

##### 2. Create a form with a `<textarea>`

```html
<body>
  <form>  
    <textarea name="content" cols="50" rows="15" >
      This is some content that will be editable with TinyMCE.
    </textarea>
  </form>
</body>
```

See an example of a simple form and in a few hours of experimentation you will have a form like this, as all the files have been uploaded.

Further more comprehensive instructions can be found on [Installation](https://www.tiny.cloud/docs-3x/TinyMCE3x@Installation/), which you can move on to when you have mastered the Dummies version! If you are not a Dummy don't edit, as us Dummies like simple instructions!

OK so let's move on to become a more advanced Dummy.

## Custom Advanced TinyMCE WYSIWYG Editor

### Instructions

1. Take your example above
2. Substitute

```html
<script type="text/javascript">
  tinyMCE.init({
    mode : "textareas",
    theme : "simple"    //(n.b. no trailing comma, this will be critical as you experiment later)
  });
</script>
```

With:

```html
<script type="text/javascript">
  tinyMCE.init({
    mode : "textareas",
    theme : "advanced",
    plugins : "emotions,spellchecker,advhr,insertdatetime,preview",

    // Theme options - button# indicated the row# only
    theme_advanced_buttons1 : "newdocument,|,bold,italic,underline,|,justifyleft,justifycenter,justifyright,fontselect,fontsizeselect,formatselect",
    theme_advanced_buttons2 : "cut,copy,paste,|,bullist,numlist,|,outdent,indent,|,undo,redo,|,link,unlink,anchor,image,|,code,preview,|,forecolor,backcolor",
    theme_advanced_buttons3 : "insertdate,inserttime,|,spellchecker,advhr,,removeformat,|,sub,sup,|,charmap,emotions",      
    theme_advanced_toolbar_location : "top",
    theme_advanced_toolbar_align : "left",
    theme_advanced_statusbar_location : "bottom",
      theme_advanced_resizing : true
    });
</script>
```

Now start experimenting, so open [Full Featured Example](https://www.tiny.cloud/docs/demo/full-featured/) and "view source", add feature and buttons which you like. You will also have downloaded this file so it should be in your `tinymce.dir` `tinymce/examples/full1.html`, open in your editor, so you can see the source, just copy and paste the bits you like.

It is also a good time to start looking at the Wiki in depth.

A few things to note:

1. Plugins are required for buttons that do more than a simple function.
2. Omit the trailing comma on the last line of the init code.
3. A common error when code is added is not replacing the comma after the original init code, so you have two commas omitted.
4. Resizing can be problematic, read the forum on this, there is a bug somewhere.


## Exercises

If you can do the following then you have a pretty good grasp of the fundamentals:

1. Incorporate a date button into the editor, then change its format !
2. Change the skin colour of the editor.

## Compressor

Read more about compressors for PHP here.

Posting data with PHP

`stripslashes()`

You will need in php to incorporate [stripslashes("$textarea");](http://php.net/manual/en/function.stripslashes.php) code, if it has been configured in your server, which it is likely.

See more on removing slashes here on posting with php, it is something you need to get your head around, else your posted code just won't work!

The result of posting to data/file of the following:

This is your text.

```
<span style="color:#ff0000">yourText</span>
```

Without stripping the slashes will be:

```
echo($_POST['content']);
<span style=\"color:#ff0000\">yourText</span>
```

While incorporating the [stripslashes("$textarea");](http://php.net/manual/en/function.stripslashes.php) php code will be:

```
echo(stripslashes($_POST['content']));
<span style="color:#ff0000">yourText</span>
```

The `\` is stripped.

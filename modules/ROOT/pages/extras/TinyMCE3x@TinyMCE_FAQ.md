---
layout: default
title: TinyMCE 3.x FAQ
---

**Note: This document was migrated from the deprecated tiny.cloud website and relates specifically to version 3.x TinyMCE. Some of this FAQ may no longer be accurate and we recommend you update your install to TinyMCE 4.x.**

## I have a question, what information should I provide so that somebody can help me with an answer?

Remember: People in the forum spend their spare time to help you. So make helping you as pleasant and easy for them as possible or you might get no help at all. Tell them as many useful (= relevant) details (e.g. what browsers you use for testing,what TinyMCE version you are using and the scope of your application) as you can think of right in your first posting. Include possible error messages which your browser tells you (you might need to search for them depending on which browser you use). It is especially tiresome if you ask a question that has been asked already many times so make sure you use the forum's search functionality before you post your problem!! And if you ask, don't ask in multiple threads because this will only split the process which makes it hard to follow - for both you and the willing helpers. Later when someone looks for the solution to your problem they, too, will have a hard time finding what they need.

For many questions (especially for beginners' questions) an answer can be found in the [documentation on the configuration settings of TinyMCE](https://www.tiny.cloud/docs-3x/reference/Configuration3x/). Often people just don't know (or simply don't realise) that the solution to their problems can be found there. They just need a hint on where to look for it. Therefore it is somehow mandatory that you provide the configuration code of your TinyMCE so that others can see how you have set up your editor and which changes can help solve your problem.

Now where is this code to be found? Have a look into the HTML source code of your editor's page and look for something like this:

```js
<!-- tinyMCE -->
<script language="javascript" type="text/javascript">//<![CDATA[
    tinyMCE.init({
        mode : "textareas",
        theme : "advanced"
    });
//]]></script>
<!-- /tinyMCE -->
```

When you have found your configuration then post this JavaScript code together with your question. It makes it much easier for people to help you, and sometimes it enables people to do so in the first place!

A link to a test page often is the most effective means to get help. Create a static page where users can test your TinyMCE implementation and might find errors or mistakes which so far have eluded you - and upload it to your server!

Don't write any excuses for your English language skills! The fewest people in the forum are English native speakers so you are in good company. Bad language skills might be a good reason to work on them though, because some people can hardly describe their problem in an understandable way which makes helping them nearly impossible.

<a name="Where_can_I_find_installation_instructions.3F"></a>

## Where can I find installation instructions ?

1.  [Fully detailed](https://www.tiny.cloud/docs-3x/TinyMCE3x@Installation/)
2.  [For Dummies](https://www.tiny.cloud/docs-3x/reference/for-dummies/)

<a name="How_can_I_upload_image_files_from_my_local_computer.3F"></a>

## How can I upload image files from my local computer?

Short answer: You can't!

Long answer: TinyMCE is just an editor to output (X)HTML code. It is by no means comparable to web editing desktop software such as Adobe Dreamweaver, Go Live! or Microsoft Web Expressions and the like. It runs on a user's browser (client-side) and not on a server. If you want to upload pictures to a server then you need a server-side component to process your image files. TinyMCE can't do that on its own since it doesn't run on the server but on the user's browser.

However there are two commercial plugins that enable you to upload files since they come with a server-side component. These are [MCImageManager](http://archive.tinymce.com/enterprise/mcimagemanager.php) and [MCFileManager](http://archive.tinymce.com/enterprise/mcfilemanager.php).

**These were merged into MoxieManager. Please visit (moxiemanager.com)[http://www.moxiemanager.com] to learn more.**

In addition, there are two Open Source plugins which accomplish this same purpose. These include [IMCE](http://drupal.org/project/imce) and [Ibrowser](http://visions4net.com/ibrowser.html). Note that these are both released under the GPL, which may not be acceptable for many commercial applications.

TinyMCE is a front-end for systems that need a client-side WYSIWYG editor (like many CMSes do). You can see it like an independent component that can be integrated into an existing system.

## TinyMCE is broken, what should I do?

There are a few things you should check before posting questions about your problem at the [forum](https://community.tiny.cloud) or [bugtracker](https://www.tiny.cloud/docs/enterprise/get-tinymce-bugs-fixed/).

*   Check that you haven't missed removing the last , (comma) character in your initialization code and that all the other rows have a trailing , character.
*   Does TinyMCE work on the TinyMCE website. Then you know that TinyMCE works with your browser.
*   Try to disable any other JavaScripts on the page, some scripts interfere with internal functions that TinyMCE uses. Those scripts are probably poorly written.
*   Verify that the path/URL to TinyMCE is correct, you can use the excellent tool [Fiddler](http://www.fiddlertool.com/fiddler/) for this or [Firebug](http://www.getfirebug.com/).
*   Do not cross domain load TinyMCE or any other script unless you really really must, since this will invoke various browser security features. In other words, try placing everything on the same server.
*   Don't place textareas within paragraph elements since this is not valid HTML and it will break MSIE and TinyMCE.

## I need to limit the number of characters a user can input

Answer yourself these two simple questions to understand that WYSIWYG and character count are in fact a contradiction.

1.  Why would you need to limit the number of characters a user can input into the editor?
2.  What do you need WYSIWYG for?

The interesting aspect about WYSIWYG and character count is how you "count out" the HTML code-related characters from the actual "text". And how do you intend to explain to your user why the character count has increased by 17 characters just because the user has turned something into bold print?

Read what main developer spocke [has to say](http://archive.tinymce.com/forum/viewtopic.php?pid=56639#p56639) about character limit in TinyMCE. If this doesn't satisfy you then read on [some posts later](http://archive.tinymce.com/forum/viewtopic.php?pid=67052#p67052).

## I need a language pack and have downloaded the XML file but it's not working!

You don't want the XML file! You want to check the checkboxes on the [language pack service page](https://www.tiny.cloud/get-tiny/language-packages/) in order to select the desired language packs and then you click the "download" button. This way you get a ZIP file which contains JavaScript files. It is those files you are after!

The XML file is for those who wish to complete or update/improve the already existing language files. These people can then work on the respective XML file and upload it back to the server so others can then re-download an updated language pack.

## Paths/URLs are incorrect, I want absolute/relative URLs?

These are the different configuration scenarios for URLs within TinyMCE. There is also an [example page](https://www.tiny.cloud/docs/demo/url-conversion/) illustrating these different options:

##### Relative URLs

This will convert all URLs within the same domain to relative URLs. The URLs will be relative from the [document_base_url](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@document_base_url/).

```js
relative_urls : true,
document_base_url : "http://www.site.com/path1/"
```

Example: `http://www.site.com/path1/path2/file.htm >> path2/file.htm`

##### Absolute URLs

This will convert all relative URLs to absolute URLs. The URLs will be absolute based on the [document_base_url](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@document_base_url/).

```js
relative_urls : false,
remove_script_host : true,
document_base_url : "http://www.site.com/path1/"
```

Example: `path2/file.htm >> /path1/path2/file.htm`

##### Domain Absolute URLs

This will convert all relative URLs to absolute URLs. The URLs will be absolute based on the [document_base_url](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@document_base_url/) with domain.

```js
relative_urls : false,
remove_script_host : false,
document_base_url : "http://www.site.com/path1/"
```

Example: `path2/file.htm >> http://www.site.com/path1/path2/file.htm`

##### No URL Conversion

This option will preserve the URLs as they are in a separate attribute while editing, since browsers tend to auto convert URLs.

```html
convert_urls : false
```

Example: `path2/file.htm` or `http://www.site.com/path1/path2/file.htm` will not be converted at all.

Note: Some versions of Internet Explorer may continue to convert URLs even with convert_urls set to false. Consider using the valid_elements initialization option and excluding the a (anchor) tag. See [this StackOverflow post](http://stackoverflow.com/questions/687552/prevent-tinymce-internet-explorer-from-converting-urls-to-links) for more on this issue.

## TinyMCE strip away attributes or tags from my source?

You need to check out the [valid_elements](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@valid_elements/) and [extended_valid_elements](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@extended_valid_elements/) option in the configuration. By default, TinyMCE only allows certain tags and attributes. TinyMCE also tries to follow the XHTML specification as much as possible, this can cause some unexpected source changes, there are however configuration options to battle this issue, study the configuration options in details.

## TinyMCE strips away or alters my server-side code

So you mix HTML markup with server-side logic? Moxiecode developer spocke [explains in the forum](http://archive.tinymce.com/forum/viewtopic.php?pid=53080#p53080) why this is a problem and cannot be overcome with TinyMCE in a sensible way. Remember: TinyMCE is an editor control which is made so _end users_ could edit content in a rich text environment. It is by no means meant to be an IDE! However there are third-party plugins which try to do exactly that...

## How do I change the default font size/face color of the editor?

We recommend that you have a look at the [content_css](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@content_css/) option, this enables you to switch the CSS file TinyMCE uses for its editing area with a file with your CSS rules for font size and so forth.

## How do I remove/add buttons/controls to TinyMCE?

There are quite a few options for this but a reference of all available buttons/control names can be found in the [button/control reference](https://www.tiny.cloud/docs-3x/reference/buttons/).

## TinyMCE adds BR elements to my content

No it should not, if you are using PHP, check so that you are not using [nl2br()](http://php.net/nl2br) function in PHP on the posted contents.

## TinyMCE produce P elements on enter/return instead of BR elements?

TinyMCE produced P tags on enter by default since all desktop and online word processors use the concept of paragraphs on enter and it also makes your content semantic. If you for some reason need BR elements use the [forced_root_block](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@forced_root_block/) option in TinyMCE 3.5.

So if you really really must use BR elements for some reason use this:

```js
tinyMCE.init({
   forced_root_block : false
});
```

## HTML output include lots of `\"` like `<a href=\"mylink.htm\">link</a>`?

This is probably because you are using PHP and it has a feature that's called magic quotes that is enabled by default. You can read more about this in the [PHP documentation](http://us3.php.net/manual/en/security.magicquotes.php).

A quick way to clean up magic quotes is to use

```js
stripslashes($_POST['text']);
```

You can also clean up all magic quotes with this (taken from the [PHP manual](http://us3.php.net/manual/en/security.magicquotes.disabling.php)):

```js
if (get_magic_quotes_gpc()) {
    function stripslashes_deep($value)
    {
        $value = is_array($value) ?
                    array_map('stripslashes_deep', $value) :
                    stripslashes($value);

        return $value;
    }

    $_POST = array_map('stripslashes_deep', $_POST);
    $_GET = array_map('stripslashes_deep', $_GET);
    $_COOKIE = array_map('stripslashes_deep', $_COOKIE);
    $_REQUEST = array_map('stripslashes_deep', $_REQUEST);
}
```

## TinyMCE encodes < and > characters in written text?

See the next question for details.

## TinyMCE removes &nbsp; entities from my content?

No, TinyMCE doesn't remove them it's the browser that converts them before the textarea is converted into an editor instance. This is because the contents in your textarea isn't properly entity encoded.

This is wrong, paragraphs can not be placed inside textareas check the W3C specs and the nbsp will be parsed away by the browser:

```html
<textarea><p>1 &nbsp; 2</p></textarea>
```

This is right, notice that both the nbsp and the paragraphs are now encoded:

```html
<textarea>&lt;p&gt;1 &amp;nbsp; 2&lt;/p&gt;</textarea>
```

To do this automatically use this line in PHP:

```html
<textarea><?php echo htmlentities($data);?></textarea>.
```

## TinyMCE isn't working in Internet Explorer but other browsers are fine?

The most common mistake is a trailing comma character after the last element in the init, e.g:

```html
<script language="javascript" type="text/javascript">//<![CDATA[
tinyMCE.init({
  theme : "advanced",
  mode : "textareas", // this comma is wrong!
});
//]]></script>
```

The last comma has to be removed!

## TinyMCE isn't working any more in any browser - what went wrong?

TinyMCE worked great in any browser, but all of a sudden it doesn't load any more. You coded a lot and don't know which of those changes might have caused that failure.

Most probably you added a new rule in the init (which you might not even remember) and forgot to add a comma at the end of the line, if it wasn't the last (see question before), e.g.:

```html
<script language="javascript" type="text/javascript">
tinyMCE.init({
  theme : "advanced",
  theme_advanced_resizing : true,
  tab_focus : ':prev,:next' <--
  invalid_elements : "a"    <--
});
</script>
```

Add a comma and everything's works like a breeze again!

## TinyMCE isn't working in one script but in others - what is wrong?

There may be many reasons for this, but one to look for is the definition of any referenced variables, like this:

```html
<script language="javascript" type="text/javascript">//<![CDATA[
tinyMCE.init({
  theme : "advanced",
  language : label_language, // this variable must exist already!
  skin_variant : "silver"
});
//]]</script>
```

Make sure that you define this variable before tinyMCE.init is called like this (otherwise tinyMCE will not appear):

```html
<script type="text/javascript">//<![CDATA[
  var label_language = "de";
//]]></script>
```

## Select if default text, then delete when typing starts?

To help and guide users, it might be wise first to set focus to the textarea, second to add a default text to it (with instructions or an affirmation) and highlight that default text, but only if the user has not provided any text of her own previously; of course, this default text should be erased if the user starts to edit (she should replace the default with her own content). How to do that?

Provide for the default before you initialize tinyMCE, for example like this:

```html
   <script type='text/javascript'>
       var default_value = <!-- Please replace this dummy content with your own!-->;
   </script>
```

Add this to your init:

```js
tinyMCE.init({
    mode : "textareas",
    theme : "advanced",
    //.................., and so on, then

    setup : function(ed) {
        var is_default = false;
        ed.onInit.add(function(ed) {
            ed.focus();

            // set the focus
            var cont = ed.getContent();

            // get the current content
            slen = cont.length;
            cont = cont.substring(3,slen-4);

            // cut off <p> and </p> to comply with XHTML strict
            // these can't be part of the default_value
            is_default = (cont == tiny_mce_default_value);

            // compare those strings
            if (!is_default)
                return;

            // nothing to do
            ed.selection.select(ed.dom.select('p')[0]);

            // select the first (and in this case only) paragraph
        });

        ed.onMouseDown.add(function(ed,e) {
            if (!is_default)
                return;

            // nothing to do
            ed.selection.setContent('');
            // replace the default content with nothing
        });

        // The onload-event in IE fires before TinyMCE has created the Editors,
        // so it is no good solution here.
    }
});
```

Make sure that this default content is given as value to your textarea at startup only.

## TinyMCE doesn't show styles in styles dropdown

So you want the styles dropdown to actually show how the element will look like when a certain class name gets applied to it? This could cause huge problems based on the style rules in your CSS. Read what main developer spocke [has written about this issue](http://archive.tinymce.com/forum/viewtopic.php?pid=71853#p71853).

## TinyMCE does not update the content when I set a new text in textarea by JavaScript

TinyMCE reads the content of the `<textarea>` element only on start, and writes it when the edition is done. If you want to change the edited content, do not update the `<textarea>`  but call editor's [setContent](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html/#setcontent) method.

You may also read the [How to load/save with Ajax in TinyMCE](https://www.tiny.cloud/docs-3x/howto/save_with_Ajax_in_TinyMCE/) article.

## Loading is slow, is there a way to make it load quicker?

There is a extra package for TinyMCE called [TinyMCE compressor](https://www.tiny.cloud/docs-3x/compressor/about/) that reduces download and initialization time dramatically by using GZip to compress the JavaScript files.

## Change default text color/editor background in TinyMCE?

You need to specify a content css file with the [content_css](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@content_css/) option in order to change the default text color or background of the editor. The specified CSS is loaded after the default CSS so you can use it to override. A good idea to check the CSS status of elements is to install Firebug addon to Firefox.

## Edit a full page (with <html> and <head> tags) in TinyMCE?

By default TinyMCE is only interested in your page's content which is contained within the document's <body> part. If you want to have TinyMCE edit every part of your document, especially the <head> section, then you'll need the [fullpage plugin](https://www.tiny.cloud/docs-3x/reference/plugins/Plugin3x@fullpage/).

## Can I use TinyMCE in my commercial application?

Yes you can, the LGPL license is a Free Software License. You can read the whole license on the [Free Software Foundation](http://www.fsf.org/) web site.

## Are there any restrictions to using TinyMCE in my commercial application?

Yes, there are restrictions including the following.

All copyright notices must be intact as Moxiecode Systems are the copyright owners of the source code.

You cannot use the source code in your applications without complying with the LGPL. According to the provisions of the LGPL, any modifications or add-ons you make to the source have to be released for the community's benefit. We recommend that you always contribute your changes back to the TinyMCE community, regardless of the situation.

If you start to make a lot of revenue from using TinyMCE, please remember the time and dedication that has been put into this by other developers, respect this and give credit to those who deserve it.

## I don't like LGPL, is there a commercial license available for me?

Yes, commercial licenses and premium support are available. Learn about your [commercial licensing options](https://www.tiny.cloud/pricing).

## Do you provide support?

We do not provide any non-commercial support outside the forum on the TinyMCE website. Learn about [paid, commercial support](https://www.tiny.cloud/pricing).

## Who made this software?

The major author of TinyMCE is [Moxiecode Systems AB](http://www.moxiecode.com/). Portions of the code have also been contributed by others. In July 2015 MoxieCode merged with Ephox. Read our [blog post](https://www.ephox.com/blog/moxiecode-the-makers-of-tinymce-join-forces-with-ephox/) to learn more.

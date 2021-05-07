---
layout: default
title: Implement a custom file browser
---

With TinyMCE you can implement your own file browser functionality. When the [file_browser_callback](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@file_browser_callback/) setting is defined, a browse button will appear in the dialogue windows where you can add a link or an image. Clicking this button will execute the function defined in this setting.

## The Necessary TinyMCE Settings

Let's have a look at the required part of tinyMCE.init:

```js
  tinyMCE.init({
    theme : ...,
    mode: ...,

    file_browser_callback : 'myFileBrowser'
  });
```

The value 'myFileBrowser' defines the name of the Javascript function which will be called every time a user clicks the browse button in one of the dialogue windows. This function can then open a new window calling a URL tailored to your server-side scripting.

**Note that this value can also be a reference to the function itself instead of a string containing the function name (think omitting the single quotes above)!**

Let's have a closer look at what this function could look like.

## The Custom Callback Function

This is a working example for a possible callback function in TinyMCE 2.x as can be defined in tinyMCE.init:

```js
  function myFileBrowser (field_name, url, type, win) {

    // alert("Field_Name: " + field_name + "nURL: " + url + "nType: " + type + "nWin: " + win); // debug/testing

    /* If you work with sessions in PHP and your client doesn't accept cookies you might need to carry
       the session name and session ID in the request string (can look like this: "?PHPSESSID=88p0n70s9dsknra96qhuk6etm5").
       These lines of code extract the necessary parameters and add them back to the filebrowser URL again. */

    /* Here goes the URL to your server-side script which manages all file browser things. */
    var cmsURL = window.location.pathname;     // your URL could look like "/scripts/my_file_browser.php"
    var searchString = window.location.search; // possible parameters
    if (searchString.length < 1) {
        // add "?" to the URL to include parameters (in other words: create a search string because there wasn't one before)
        searchString = "?";
    }

    // newer writing style of the TinyMCE developers for tinyMCE.openWindow

    tinyMCE.openWindow({
        file : cmsURL + searchString + "&type=" + type, // PHP session ID is now included if there is one at all
        title : "File Browser",
        width : 420,  // Your dimensions may differ - toy around with them!
        height : 400,
        close_previous : "no"
    }, {
        window : win,
        input : field_name,
        resizable : "yes",
        inline : "yes",  // This parameter only has an effect if you use the inlinepopups plugin!
        editor_id : tinyMCE.selectedInstance.editorId
    });
    return false;
  }
```

This is a working example for a possible callback function in TinyMCE 3.x as can be defined in tinyMCE.init:

```js
  function myFileBrowser (field_name, url, type, win) {

    // alert("Field_Name: " + field_name + "nURL: " + url + "nType: " + type + "nWin: " + win); // debug/testing

    /* If you work with sessions in PHP and your client doesn't accept cookies you might need to carry
       the session name and session ID in the request string (can look like this: "?PHPSESSID=88p0n70s9dsknra96qhuk6etm5").
       These lines of code extract the necessary parameters and add them back to the filebrowser URL again. */

    var cmsURL = window.location.toString();    // script URL - use an absolute path!
    if (cmsURL.indexOf("?") < 0) {
        //add the type as the only query parameter
        cmsURL = cmsURL + "?type=" + type;
    }
    else {
        //add the type as an additional query parameter
        // (PHP session ID is now included if there is one at all)
        cmsURL = cmsURL + "&type=" + type;
    }

    tinyMCE.activeEditor.windowManager.open({
        file : cmsURL,
        title : 'My File Browser',
        width : 420,  // Your dimensions may differ - toy around with them!
        height : 400,
        resizable : "yes",
        inline : "yes",  // This parameter only has an effect if you use the inlinepopups plugin!
        close_previous : "no"
    }, {
        window : win,
        input : field_name
    });
    return false;
  }
```

Remember that the custom filebrowser function opens a new (popup) window to offer an additional dialogue from which you can choose an image to insert or a file to link to.

What is important to know about the four values that come with the function call?

## The Values Carried With The Filebrowser Function Call

*   field_name is the name (and ID) of the dialogue window's input field which needs to be filled with the value your file browser is about to provide.
*   url carries the existing link URL if you modify a link (or image URL if you edit an image).
*   type is a string value which is either 'image', 'media' or 'file' (called respectively from image plugin, media plugin and link plugin insert/edit dialogs). With this value you can determine whether your file browser is called from a window that inserts images ("insert/edit image" dialogue), multimedia files (media plugin window) or a window that inserts hyperlinks ("insert/edit links" dialogue).
*   win is a reference to the dialogue window itself which is extremely important when it comes to writing back the retrieved value. You will need a combination of win and field_name to fill the required fields in the editor's dialogue window!
*   editor_id (only for TinyMCE2.x!!!) is the TinyMCE editor instance that is calling this function. This is required, as the advImage plug-in requires this value when the Browse button is pushed. Otherwise, you will get an "undefined" error.

## Your Server-Side Logic

Your callback function can determine whether the file browser is supposed to deliver the URL of an image or a file to link to. It can do this by using the type variable. Your server-side script will need to be given this information. My example above makes use of the GET method by adding ?type=image or ?type=file to the URL (depending on the value of type). You can of course use completely different URLs depending on type but it may be more convenient to differentiate the request inside your server-side script.

## Necessary HTML Output

Regardless of what your file browser functionality is supposed to be capable of - at some point you need to return some information to the editor's dialogue window because you were about to insert a link or an image. This means your HTML output of your custom popup window must contain certain elements without which you can't communicate with this dialogue window of the editor (called "insert/edit link (or image)"). The following code must be included in the HTML file before any functions that relate to the file browser are called:

```html
<script type="text/javascript" src="path/to/tiny_mce/tiny_mce_popup.js"></script>
```

Now your file browser window has all the necessary TinyMCE extras it needs to interoperate with the editor it was called from.

##### File Browser Dialogue Initialization in TinyMCE2.x

If you would like your file browser window to initialize itself via your own Javascript function do this only by the following onload event handler or you might break TinyMCE_Popup!

```html
<body onload="tinyMCEPopup.executeOnLoad('init();')">
```

Instead of init() you can call any other function you have previousely defined in your HTML code returned by your server-side script.

##### File Browser Dialogue Initialization in TinyMCE3.x

Since the 3.x branch of TinyMCE it is best to define a more complex object to carry your functions. Take a look:

```js
var FileBrowserDialogue = {
    init : function () {
        // Here goes your code for setting your custom things onLoad.
    },
    mySubmit : function () {
        // Here goes your code to insert the retrieved URL value into the original dialogue window.
        // For example code see below.
    }
}

tinyMCEPopup.onInit.add(FileBrowserDialogue.init, FileBrowserDialogue);
```

The last line of the code above sets the "init()" function of your new FileBrowserDialogue object into a chain of functions that will get executed by tinyMCEPopup after the page has loaded. This is a great difference to the 2.x branch of TinyMCE!

Remember that all this HTML output will be placed into your custom popup window and not into the javascript part of your editor's document!

## Retrieve TinyMCE's References

As mentioned above tinyMCE.openWindow() (for the 2.x branch) or tinyMCE.activeEditor.windowManager.open() (for the 3.x branch) does communicate some parameters to the newly opened window. More specifically it does this to the TinyMCE_Popup script which can access the transferred object. Have a look:

Example for the 2.x branch:

```js
var win = tinyMCE.getWindowArg("window");
var input = tinyMCE.getWindowArg("input");
var res = tinyMCE.getWindowArg("resizable");
var inline = tinyMCE.getWindowArg("inline");
```

Example for the 3.x branch:

```js
var win = tinyMCEPopup.getWindowArg("window");
var input = tinyMCEPopup.getWindowArg("input");
var res = tinyMCEPopup.getWindowArg("resizable");
var inline = tinyMCEPopup.getWindowArg("inline");
```

The function tinyMCE.getWindowArg() (2.x branch) or tinyMCEPopup.getWindowArg() (3.x branch) can retrieve all the properties of your object defined as second parameter of tinyMCE.openWindow() / tinyMCE.activeEditor.windowManager.open(). Compare the above four variables with our function call above!

## How To Return Values

With the retrieved references you can now return your values (like image URL or hyperlink URL) back to the editor dialogue window. Earlier in the callback function we defined two important properties of the object transferred to the file browser window: window : win and input : field_name. These two can now be used to return information to the dialogue window. Let's say we have a function 'mySubmit' in our file browser window like the following example:

Again the code for TinyMCE2.x:

```js
function mySubmit() {
  //call this function only after page has loaded
  //otherwise tinyMCEPopup.close will close the
  //"Insert/Edit Image" or "Insert/Edit Link" window instead

  var URL = document.my_form.my_field.value;
  var win = tinyMCE.getWindowArg("window");

  // insert information now
  win.document.getElementById(tinyMCE.getWindowArg("input")).value = URL;

  // for image browsers: update image dimensions
  if (win.getImageData) win.getImageData();

  // close popup window
  tinyMCEPopup.close();
  }
```

And the code for TinyMCE3.x:

```js
var FileBrowserDialogue = {
    init : function () {
        // Here goes your code for setting your custom things onLoad.
    },
    mySubmit : function () {
        var URL = document.my_form.my_field.value;
        var win = tinyMCEPopup.getWindowArg("window");

        // insert information now
        win.document.getElementById(tinyMCEPopup.getWindowArg("input")).value = URL;

        // are we an image browser
        if (typeof(win.ImageDialog) != "undefined") {
            // we are, so update image dimensions...
            if (win.ImageDialog.getImageData)
                win.ImageDialog.getImageData();

            // ... and preview if necessary
            if (win.ImageDialog.showPreviewImage)
                win.ImageDialog.showPreviewImage(URL);
        }

        // close popup window
        tinyMCEPopup.close();
    }
}

tinyMCEPopup.onInit.add(FileBrowserDialogue.init, FileBrowserDialogue);
```

Make sure you close your file browser window with tinyMCEPopup.close(). This ensures that any alterations by a plugin (as is the case with the [inline popup-plugin](https://www.tiny.cloud/docs-3x/reference/plugins/Plugin3x@inlinepopups/)) won't break.

Again remember that this function needs to be placed in your custom popup window and not in the editor's document!

## Some Additional Information

Here are some tweaks and tricks for your file browser popup window.

### Remove TinyMCE's default popup CSS

Since 3.2 version of TinyMCE you can simply supply a popup_css : false parameter when creating a popup window. Like this:

```js
tinyMCE.activeEditor.windowManager.open({
    file : filemanager_url
   ,width : 600
   ,height : 600
   ,resizable : "yes"
   ,inline : "yes"
   ,close_previous : "no"
   ,popup_css : false // Disable TinyMCE's default popup CSS
}, {
    window : win,
    input : field_name
});
```

The following information could no longer be needed for the 3.x branch of TinyMCE.

There is an issue with dynamically loaded CSS stuff which might break some of your file browser window's layout. TinyMCE_Popup() adds an additional link element which loads additional CSS code. If you don't want that to happen you can remove this additional link element by using your own initialize function (as mentioned above). This function just has to remove the last link element available in your DOM tree (or at least its 'href' attribute). Try the following code from within your own initializing function:

```js
var allLinks = document.getElementsByTagName("link");
allLinks[allLinks.length-1].parentNode.removeChild(allLinks[allLinks.length-1]);
```

### Keep TinyMCE's editor_id to prevent undefined errors

This is important for the 2.x branch of TinyMCE only. TinyMCE3 doesn't need this since a reference to the editor gets passed to tinyMCEPopup automatically.

If you don't include the editor_id in the openWindow call of TinyMCE2.x, you will lose the instance id of the editor which called the popup (editor_id : tinyMCE.selectedInstance.editorId). If you don't include it, you will get JavaScript undefined errors, after filebrowser callback. This is because the TinyMCE window arguments of opener window (for example advImage's plugin) somehow doesn't always carry the instance id of the editor which called the popup to the pop-up.

Here is the solution to pass in the editor_id via the tinyMCE.openWindow function...

```js
tinyMCE.openWindow(fileBrowserWindow, {
    window : win,
    input : field_name,
    resizable : "no",
    inline : "yes",
    editor_id : tinyMCE.selectedInstance.editorId
});
```

### Enable Image Preview in original insert/edit image dialogue window

This line will come in handy if you want to preview the image after closing your custom filebrowser:

```js
win.showPreviewImage(inurl);
```

For 3.x, the ImageDialog namespace is used.

```js
win.ImageDialog.showPreviewImage(inurl);
```

### How to ensure your file browser's window title using inline popups plugin

Again this information refers to the 2.x branch of TinyMCE. It isn't valid for the 3.x branch.

If you use the [inlinepopups plugin](https://www.tiny.cloud/docs-3x/reference/plugins/Plugin3x@inlinepopups/) then your popup won't carry your window's title automatically. This is due to the fact that the inlinepopups plugin creates iframes in layers. To get your window title shown correctly you'll need to add some JavaScript code inside your custom file browser's template like shown below:

```html
<head>
    <script type="text/javascript" src="{path}/tiny_mce/tiny_mce_popup.js"></script>
... <!-- more scripts here... -->
    <script type="text/javascript">
        myInitFunction = function () {
            // ensure window title in inlinepopups
            var obj;
            var inlinepopups = false;
            for (obj in tinyMCE.selectedInstance.plugins)
                if (tinyMCE.selectedInstance.plugins[obj] == "inlinepopups")
                    inlinepopups = true;

            if (inlinepopups)
                tinyMCE.setWindowTitle(window, document.getElementsByTagName("title")[0].innerHTML);
        }
    </script>
</head>
<body onload="tinyMCEPopup.executeOnLoad('myInitFunction();');">
    <!-- your template's HTML body here -->
</body>
```

### How to prevent multiple file browser windows

If you don't use the [inlinepopups plugin](https://www.tiny.cloud/docs-3x/reference/plugins/Plugin3x@inlinepopups/) then this might be interesting for you.

The idea is to store something into the current editor object (tinyMCE.selectedInstance/tinyMCE.activeEditor) to prevent the file_browser_callback function from opening yet another window. This is a bit tricky since you might overwrite existing objects or properties/methods! So make sure you know what you are doing!

My solution comes in two steps:

*   extend the file_browser_callback function
*   patch the tinyMCEPopup object in every dialogue window template

Let's see the extended file_browser_callback function (for TinyMCE3 modify the following code according to the code samples earlier on this page!):

```js
function myFileBrowser (field_name, url, type, win) {

    var cmsURL = window.location.pathname;      // script URL
    var searchString = window.location.search;  // possible parameters
    if (searchString.length < 1) {
        // add "?" to the URL to include parameters (in other words: create a search string because there wasn't one before)
        searchString = "?";
    }

    // block multiple file browser windows
    if (!tinyMCE.selectedInstance.fileBrowserAlreadyOpen) {
        // no file browser window open
        tinyMCE.selectedInstance.fileBrowserAlreadyOpen = true; // but now it will be

        tinyMCE.openWindow({
            file : cmsURL + searchString + "&type=" + type,
            title : "File Browser",
            width : 420,
            height : 400,
            close_previous : "no"
        }, {
            window : win,
            input : field_name,
            resizable : "yes",
            inline : "yes",
            editor_id : tinyMCE.selectedInstance.editorId
        });
    }

    return false;
}
```

Now let's see how the closing function of the popup's tinyMCEPopup object needs to look like (for TinyMCE3 modify this code according to the code samples earlier on this page!):

```html
<head>
    <script type="text/javascript" src="{path}/tiny_mce/tiny_mce_popup.js"></script>
... <!-- more scripts here... -->
    <script type="text/javascript">
        myInitFunction = function () {

            // patch TinyMCEPopup.close
            tinyMCEPopup.close_original = tinyMCEPopup.close;
            tinyMCEPopup.close = function () {
                // remove blocking of opening another file browser window
                tinyMCE.selectedInstance.fileBrowserAlreadyOpen = false;

                // call original function to close the file browser window
                tinyMCEPopup.close_original();
            };
        }
    </script>
</head>
<body onload="tinyMCEPopup.executeOnLoad('myInitFunction();');">
    <!-- your template's HTML body here -->
</body>
```

Finally, here is a fully working exampel of the popup window for tinyMCE 3.x (just change the path of tiny_mce_popup.js):

```js
<script type="text/javascript" src="tinymce/jscripts/tiny_mce/tiny_mce_popup.js">
</script>

<script language="javascript" type="text/javascript">

var FileBrowserDialogue = {
    init : function () {
        // Here goes your code for setting your custom things onLoad.
    },
    mySubmit : function () {
        var URL = document.my_form.my_field.value;
        var win = tinyMCEPopup.getWindowArg("window");

        // insert information now
        win.document.getElementById(tinyMCEPopup.getWindowArg("input")).value = URL;

        // are we an image browser
        if (typeof(win.ImageDialog) != "undefined")
        {
            // we are, so update image dimensions and preview if necessary
            if (win.ImageDialog.getImageData) win.ImageDialog.getImageData();
            if (win.ImageDialog.showPreviewImage) win.ImageDialog.showPreviewImage(URL);
        }

        // close popup window
        tinyMCEPopup.close();
    }
}

tinyMCEPopup.onInit.add(FileBrowserDialogue.init, FileBrowserDialogue);

</script>

<form name="my_form">
<input type="text" name="my_field" />
<input type="button" value="Submit" onClick="FileBrowserDialogue.mySubmit();">
</form>
```

## Problems

### Pressing insert doesn't work

The following information is for TinyMCE2.x only.

After you selected something in your filebrowser you can't click on "insert"?
Follow this instruction to solve this issue:
Open /tiny_mce/plugins/advimage/jscripts/functions.js go to line: 270-271

You find:

```js
var inst = tinyMCE.getInstanceById(tinyMCE.getWindowArg('editor_id'));
```

Replace it with:

```js
var inst = tinyMCE.selectedInstance;
```

Open `/tiny_mce/plugins/advlink/jscripts/functions.js` go to line: 414-415

You find:

```js
var inst = tinyMCE.getInstanceById(tinyMCE.getWindowArg('editor_id'));
```

Replace it with:

```js
var inst = tinyMCE.selectedInstance;
```

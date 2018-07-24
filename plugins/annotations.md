---
layout: default
title: Annotations
description: TinyMCE Annotations provides ability to provide additional information about a selected piece of content and creates identifiers for each added annotation.
keywords: annotation annotations
---

TinyMCE Annotation feature encourages content re-usability and makes the content more readable, maintainable, and flexible.
These are pieces of code which don't have any direct impact on the execution of the code, instead they provide additional data about the program to either the compiler or the run-time system.
This data is used by the compiler or the run time system to do a variety of things - generation of additional code, XML files, suppress warnings, errors, etc.
User can even define annotation types, the way we define classes.

## Using the Annotator Plugin

Please follow the following procedure to setup TinyMCE Annotation plugin:
### 1. Configure the Annotate Button

       To configure the annotate button on your toolbar, make the following changes:

       ```js
        setup: (ed) => {
            ed.addButton('annotate-alpha', {
              text: 'Annotate',
              onclick: () => {
                const comment = prompt('Comment with?');
                ed.experimental.annotator.annotate('alpha', {
                  comment
                });
                ed.focus();
              },
       ```

### 2. Registering the Annotator Plugin

The annotator API supports multiple annotation formats. Each annotation format must be registered with the annotator (editor.annotator). The registration process uses this API.

```js
ed.on('init', () => {
       ed.experimental.annotator.register('alpha', {
         persistent: true,
         decorate: (uid, data) => {
           return {
             attributes: {
               'data-mce-comment': data.comment
             }
           };
         }
       });

     });
```
This will register an annotation with name 'alpha'. In our example, when a 'alpha' is being added to the document, a span marker will be created with class 'alpha' and a data attribute for author.
> Note: The data passed through here is the same as the data specified when calling the annotate API. `decorate` is used to turn the annotation data into a DOM representation.
The uid passed through to `decorate` is either the uid field in the data object (if it exists), or a randomly generated uid if it doesn't. Annotator will be responsible for putting the uid on the span. The user does not need to do that part.

### 3. Making the Plugin Available

For adding the annotate tool to the toolbar that is registered with 'alpha' set the value of toolbar to:

```js
toolbar: "annotate-alpha”
```

### 4. Applying Annotations

Now, that we have registered an annotation, we can use it by applying it to the current selection.
> Note: if the selection is collapsed (single cursor rather than ranged selection) and is within a word, it will perform word grab first, and then apply the annotation to the resulting word selection.
The API to apply an annotation is `annotate`.  Annotations can be programmatically applied to selected text using:

```js
editor.annotator.annotate('yoast-comments', {
author: 'me'
});
```
> Note: The data passed through `{ author: 'me' }` is passed all the way through to the decorate function specified during registration for the particular annotation (here: alpha). This data can be any object. In this way, users can tag markers with any attributes / classes they want on a per-annotation basis. Here, we will end up with a span with a `data-author` attribute set to `me`. If the user wants, they can specify a `uid` as part of the data here. This will be used instead of a randomly generated uid when passing through as the first argument to decorate.

Example of specifying your own uid:

```js
editor.annotator.annotate('alpha', {
uid: 'use-this-id-instead-of-your-random-one-annotator!',
author: 'me'
});
```

### 5. Listening to Selection Events

Another thing that the annotator API allows the users to do is be notified when the selection cursor moves into or out of a specified annotation. For example, for our 'alpha' scenario:


```js
editor.annotator.annotationChanged('alpha', function (state, name, obj) {
if (state === false) {
// name is passed through for convenience, so that if the handler is elsewhere, we
// don't need to curry it in. But yes, in will always be the same as the first argument
// passed through to annotationChanged
console.log('We are no longer in a ' + name + ' area');
} else {
console.log('We are now in comment: ' + obj.uid);
}
});
```

The `obj` parameter is only set if `state` is true. `obj` has two fields when set: `uid`, which is the uid of the annotation currently nearest (in the DOM hierarchy) to the selection cursor, and `nodes`, which is an array of DOM nodes which make up this annotation. The reason that `nodes` is passed out is if the user might want to tag these nodes with a class to say that they are the 'active annotation'.
The annotationChanged listeners should only fire when the state changes, or when the state stays true, but the uid changes. The full API is:

```js
/**
* Executes the specified callback when the current selection matches the annotation or not.
*
* @method annotationChanged
* @param {String} name Name of annotation to listen for
* @param {function} callback Calback with (state, name, and data) fired when the annotation
* at the cursor changes. If state if false, data will not be provided.
*/
annotationChanged: (name: string, callback): void
```

## Example

Here is an example of the full annotate API:

```js
<script type="text/javascript">
tinymce.init({
   selector: "textarea",
   plugins: [
       "advlist autolink lists link image charmap print preview anchor",
       "searchreplace visualblocks code fullscreen",
       "insertdatetime media table contextmenu paste"
   ],
   toolbar: "annotate-alpha | insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",

   content_style: '.mce-annotation { background-color: darkgreen; color: white; }',

   setup: (ed) => {
     ed.addButton('annotate-alpha', {
       text: 'Annotate',
       onclick: () => {
         const comment = prompt('Comment with?');
         ed.experimental.annotator.annotate('alpha', {
           comment
         });
         ed.focus();
       },

       onpostrender: (ctrl) => {
         const button = ctrl.control;
         ed.on('init', () => {
           ed.experimental.annotator.annotationChanged('alpha', (state, name, obj) => {
             if (! state) {
               button.active(false);
             } else {
               button.active(true);
             }
           });
         });
       }
     });

     ed.on('init', () => {
       ed.experimental.annotator.register('alpha', {
         persistent: true,
         decorate: (uid, data) => {
           return {
             attributes: {
               'data-mce-comment': data.comment
             }
           };
         }
       });

     });
   }
});

</script>

<form method="post" action="dump.php">
    <textarea name="content"></textarea>
</form>
```
[Example]({../images/annotations.png})

## Deleting an Annotation

To delete a particular annotation at the cursor, use the `remove` API. It will remove the closest annotation that matches the name. For example,

```js
editor.annotator.remove('alpha');
```

Now, this will bypass any other annotations that might be closer to the selection cursor, and will just remove annotations which are 'alpha' annotations. If there are no annotations of that name, it will do nothing. The full API is:

```js
/**
* Removes any annotations from the current selection that match
* the name
*
* @param remove
* @param {String} name the name of the annotation to remove
*/
remove: (name: string): void
```

## Retrieving All Annotations for a Particular Annotation Name

Lastly, the annotator API allows you to retrieve an object of all of the uids for a particular annotation type (e.g. alpha), and the nodes associated with those uids. For example, to retrieve all 'alpha' annotations, we would use this code:

```js
var annotations = editor.annotator.getAll('yoast-comments');
var nodesInFirstUid = annotations['first-uid'];
```

Assuming that there is a uid called 'first-uid', the above code shows you how to access the nodes used for making that annotation. In the yoast plugin, we need to turn these to xpaths, which is one of the main reasons they are exposed like this. The full API is:

```js
/**
* Retrieve all the annotations for a given name
*
* @method getAll
* @param {String} name the name of the annotations to retrieve
* @return {Object} an index of annotations from uid => DOM nodes
*/
getAll: (name: string): Record<string, DomElement[]>
```


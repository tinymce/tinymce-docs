---
layout: default
title: Annotations
description: TinyMCE Annotations provides the ability to describe particular features or add general information to a piece of content and creates identifiers for each added annotation.
keywords: annotation annotations annotator
---

The {{site.productname}} Annotations API provides the ability to add, modify, and delete annotations; listen to text selection events and retrieve all annotations with the same annotation name. The Annotations API is a part of the {{site.productname}} core and functions in the same way as the formatting APIs in {{site.productname}} core.

The primary value that the Annotations API provides is that it tags each annotation with a unique identifier(uid) accessible via `editor.annotator`. This highlights the annotated content and wraps it in annotation markers. These markers can either stay in the content or be removed on `getContent`, depending on the user configuration (`persistent` setting).

## Using the Annotator

Perform the following procedure to set up the {{site.productname}} Annotations feature:

### 1. Configure the Annotate Button

To configure the annotate button on your toolbar:


```js
setup: function(ed) {
  ed.ui.registry.addButton('annotate-alpha', {
    text: 'Annotate',
    onAction: function() {
      var comment = prompt('Comment with?');
      ed.annotator.annotate('alpha', {
        comment
      });
      ed.focus();
    }
  })
}
```

See [Configure {{site.productname}}]({{ site.baseurl }}/configure/) for more information on how to configure {{site.productname}} core.

### 2. Registering the Annotator

The annotator API supports multiple annotation functions. Each annotation function must be registered with the annotator (`editor.annotator`).

```js
ed.on('init', function() {
  editor.annotator.register('alpha', {
    persistent: true,
    decorate: function (uid, data) {
      return {
        attributes: {
          'data-mce-comment': data.comment ? data.comment : '',
          'data-mce-author': data.author ? data.author : 'anonymous'
        }
      };
    }
  });
});
```

This will register an annotation with the name `alpha`. In our example, when an `alpha` is being added to the document, a span marker will be created with class `alpha` and a data attribute for the author.

> **Note**: The data passed through here is the same as the data specified when calling the annotate API. `decorate` is used to turn the annotation data into a document object model (DOM) representation.
The uid passed through to `decorate` is either the uid field in the data object (if it exists), or a randomly generated uid if it does not. Annotator will be responsible for putting the uid on the span. The user does not need to do that part.

### 3. Making the Annotator Available

For adding the annotate tool to the toolbar that is registered with `alpha` set the value of the toolbar to:

```js
toolbar: 'annotate-alpha'
```

### 4. Applying Annotations

After registering an annotation, use it by applying it to the current selection.

> **Note**: If the selection is collapsed (single cursor rather than ranged selection) and is within a word, it will first perform a word grab function and then apply the annotation to the resulting word selection.
The API to apply an annotation is `annotate`.  Annotations can be programmatically applied to selected text using:

```js
editor.annotator.annotate('alpha', {
  author: 'me'
});
```

The data passed through `{ author: 'me' }` is passed to the `decorate` function specified during registration for the particular annotation (here: alpha). This data can be any object. In this way, users can tag markers with any attributes/classes they want on a per-annotation basis. Here, we will end up with a span with a `data-author` attribute set to `me`. If the user wants, they can specify a `uid` as part of the data here. This is used instead of a randomly generated `uid` when passing through as the first argument to `decorate`.

Example of specifying your own `uid`:

```js
  editor.annotator.annotate('alpha', {
    uid: 'use-this-id-instead-of-your-random-one-annotator!',
    author: 'me'
  });
```

### 5. Listening to Selection Events

The Annotator API notifies the user when the selection cursor moves in or out of a specified annotation. For example, for the `alpha` scenario:

```js
editor.annotator.annotationChanged('alpha', function (state, name, obj) {
  if (state === false) {
    // NOTE: name will be 'alpha' here
    console.log('We are no longer in a ' + name + ' area');
  } else {
    console.log('We are now in comment: ' + obj.uid);
  }
});
```

The `obj` parameter is only set if the `state` is true. A set `obj` has two fields:

* `uid`, which is the uid of the annotation currently nearest (in the DOM hierarchy) to the selection cursor.
* `nodes`, which is an array of DOM nodes which make up this annotation. `nodes` are made available to users in case the user might want to tag these nodes with a class to say that they are the **active annotations**.

The `annotationChanged` listeners should only fire when the state or the uid changes. The full API is:

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

## Interactive example

Use the following example to create the Annotate API:

{% include live-demo.html id="annotations" height="750" %}

## Retrieving All Annotations for a Particular Annotation Name

The Annotator API allows retrieving an object of all of the uids for a particular annotation type (e.g. alpha), and the nodes associated with those uids. For example, to retrieve all `alpha` annotations, this code is used:

```js
var annotations = editor.annotator.getAll('alpha');
var nodesInFirstUid = annotations['first-uid'];
```

Assuming that there is a uid called `first-uid`, the above code shows how to access the nodes used for making that annotation. The full API is:

```js
/**
* Retrieve all the annotations for a given name
*
* @method getAll
* @param {String} name the name of the annotations to retrieve
* @return {Object} an index of annotations from uid => DOM nodes
*/
getAll: (name)
```

## Deleting an Annotation

Use the `remove` API to delete a particular annotation at the cursor. It will remove the closest annotation that matches the name. For example,

```js
editor.annotator.remove('alpha');
```

This bypasses any other annotations that might be closer to the selection cursor and removes annotations which are `alpha` annotations. If there are no annotations of that name, it will do nothing. The full API is:

```js
/**
* Removes any annotations from the current selection that match
* the name
*
* @param remove
* @param {String} name the name of the annotation to remove
*/
remove: (name)
```

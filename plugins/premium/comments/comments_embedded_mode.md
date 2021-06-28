---
layout: default
title: Configuring the Comments plugin in embedded mode
title_nav: Embedded mode
description: Information on configuring the Comments plugin in embedded mode
keywords: comments commenting tinycomments embedded mode
---

{% assign pluginname = "Comments" %}
{% assign plugincode = "comments" %}

## Add the Comments plugin in embeddded mode

To add the Comments plugin in embedded mode to the {{site.productname}}, configure the following options:

```js
tinymce.init({
  selector: '#textarea',
  plugins: 'tinycomments',
  tinycomments_author: 'author',
  tinycomments_author_name: 'Name of the commenter',
  tinycomments_mode: 'embedded'
})
```

This is the minimum recommended setup for the Comments plugin in embedded mode. If the `tinycomments_author` and `tinycomments_author_name` options are not configured, all users will be assigned the name "_ANON_".

## Interactive example

{% include live-demo.html id="comments-embedded" %}

## Configuration options

### `tinycomments_author`

This option sets the author id to be used when creating or replying to comments.

**Type:** `String`

**Default Value:** `'Anon'`

#### Example: Using `tinycomments_author`

```js
tinymce.init({
  selector: '#textarea',
  tinycomments_author: 'embedded_journalist',
  tinycomments_mode: 'embedded'
})
```

### `tinycomments_author_name`

> Available in Tiny Comments version 2.1 onwards.

_Optional_ - This option sets the author's display name to be used when creating or replying to comments. If this option is omitted, then the author id is used instead.

**Type:** `String`

#### Example: Using `tinycomments_author_name`

```js
tinymce.init({
  selector: '#textarea',
  tinycomments_author: 'embedded_journalist',
  tinycomments_author_name: 'Embedded Journalist',
  tinycomments_mode: 'embedded'
})
```

### `tinycomments_can_delete`

_Optional_ - This option sets the author permissions for _deleting comment conversations_. If the `tinycomments_can_delete` option is not included, the current author (`tinycomments_author`) cannot delete comment conversations created by other authors.

**Type:** `Function`

**Default Function:**

```js
function (req, done, fail) {
  var allowed = req.comments.length > 0 &&
                req.comments[0].author === <Current_tinycomments_author>;
  done({
    canDelete: allowed
  });
}
```

The following example extends the default behavior to allow the author `<Admin user>` to delete other author's comment conversations by adding `|| currentAuthor === '<Admin user>'`.

#### Example: Using `tinycomments_can_delete`

```js
var currentAuthor = 'embedded_journalist';

tinymce.init({
  selector: '#textarea',
  tinycomments_author: currentAuthor,
  tinycomments_can_delete: function (req, done, fail) {
    var allowed = req.comments.length > 0 &&
                  req.comments[0].author === currentAuthor;
    done({
      canDelete: allowed || currentAuthor === '<Admin user>'
    });
  }
});
```

### `tinycomments_can_resolve`

{{site.requires_5_8v}}

_Optional_ - This option adds a _Resolve Conversation_ item to the dropdown menu of the first comment in a conversation. This callback sets the author permissions for _resolving comment conversations_.

**Type:** `Function`

#### Example: Using `tinycomments_can_resolve`

```js
var currentAuthor = 'embedded_journalist';

tinymce.init({
  selector: '#textarea',
  tinycomments_author: currentAuthor,
  tinycomments_can_resolve: function (req, done, fail) {
    var allowed = req.comments.length > 0 &&
                  req.comments[0].author === currentAuthor;
    done({
      canResolve: allowed || currentAuthor === '<Admin user>'
    });
  }
});
```

### `tinycomments_can_delete_comment`

_Optional_ - This option sets the author permissions for _deleting comments_. If the `tinycomments_can_delete_comment` option is not included, the current author (`tinycomments_author`) cannot delete comments added by other authors.

**Type:** `Function`

**Default Function:**

```js
function (req, done, fail) {
  var allowed = req.comment.author === <Current_tinycomments_author>;
  done({
    canDelete: allowed
  });
}
```

The following example extends the default behavior to allow the author `<Admin user>` to delete other author's comments by adding `|| currentAuthor === '<Admin user>'`.

#### Example: Using `tinycomments_can_delete_comment`

```js
var currentAuthor = 'embedded_journalist';

tinymce.init({
  selector: '#textarea',
  tinycomments_author: currentAuthor,
  tinycomments_can_delete_comment: function (req, done, fail) {
    var allowed = req.comment.author === currentAuthor;
    done({
      canDelete: allowed || currentAuthor === '<Admin user>'
    });
  }
});
```

### `tinycomments_can_edit_comment`

_Optional_ - This option sets the author permissions for _editing comments_. If the `tinycomments_can_edit_comment` option is not included, the current author (`tinycomments_author`) cannot edit comments added by other authors.

**Type:** `Function`

**Default Function**

```js
function (req, done, fail) {
  var allowed = req.comment.author === <Current_tinycomments_author>;
  done({
    canEdit: allowed
  });
}
```

The following example extends the default behavior to allow the author `<Admin user>` to edit other author's comments by adding `|| currentAuthor === '<Admin user>'`.

#### Example: Using `tinycomments_can_edit_comment`

```js
var currentAuthor = 'embedded_journalist';

tinymce.init({
  selector: '#textarea',
  tinycomments_author: currentAuthor,
  tinycomments_can_edit_comment: function (req, done, fail) {
    var allowed = req.comment.author === currentAuthor;
    done({
      canEdit: allowed || currentAuthor === '<Admin user>'
    });
  }
});
```

{% include plugins/comments_open_sidebar.md %}

{% include plugins/comments_embed_fullpage_issues.md %}

{% include plugins/comments_highlighting_css.md %}

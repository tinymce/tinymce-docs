---
layout: default
title: Creating unit tests
---

## Why Write Tests?

Writing automated tests for any plugins or patches you develop ensures that the code works as intended and that future changes don't unintentionally cause bugs. While testing can be done manually, taking the time to write good automated tests saves a lot of time and effort in testing in the future. The tests in the main TinyMCE codebase are automatically run after every change is pushed into the git repository ([view the results](http://tinymce.ephox.com/test-results)).

## Running Existing Tests

If you download the [development package](https://www.tiny.cloud/get-tiny/) for TinyMCE, it will contain a tests directory with all the tests for TinyMCE. Tests are grouped into separate HTML files for different areas of functionality. You can open any test file in a browser and the tests in that file will automatically run, showing you the results. If the tests pass you'll see a green bar but if any test fails the bar will be red. Refreshing the page will rerun the tests.

Open the `index.html` file to see a list of all the test files so you can easily run them.

The [tests for the latest release](http://tinymce.moxiecode.com/js/tinymce/tests/) can also be run online.

## Writing Tests

Tests for TinyMCE are written using the [QUnit](http://docs.jquery.com/QUnit) testing framework. The QUnit documentation is a very nice, short guide to using QUnit. You can also look at the existing tests for TinyMCE for examples of how to do things.

One very useful tip is that if you are using a full instance of TinyMCE in your tests, you need to ensure it finishes loading before QUnit starts running the tests. This is done by calling QUnit.setup(); in the init_instance_callback function:

```js
tinyMCE.init({
...
init_instance_callback : function(ed) {
  QUnit.setup();
}
...
});
```

Finally, it's worth knowing that the [tests/js/utils.js](http://github.com/tinymce/tinymce/blob/master/tests/js/utils.js) file is planned to become a useful collection of test utilities for TinyMCE so consider putting any functions which are likely to be useful to multiple test pages in that file.

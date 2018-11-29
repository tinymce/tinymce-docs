---
layout: default
title: Angular 1 integration
title_nav: Angular 1
description: This directive allows you to add a TinyMCE editor to your form elements.
keywords: integration integrate angular angularjs angular1
---

Integration with Angular 1 is currently done through [angular-ui-tinymce](https://github.com/angular-ui/ui-tinymce) a third party module. This how-to shows you how to setup a project using [AngularJS](https://angularjs.org/) and [tinymce](/docs/demo/basic-example/).

## 1. Setting up the project directory

First, we create a directory for the project called "tinymce-angular-demo". After that, we run "bower init"in the new directory, this will set up a new empty bower project.

```
$ mkdir tinymce-angular-demo
$ cd tinymce-angular-demo
$ bower init
```

## 2. Installation of angular, ui-tinymce and tinymce

We now install the angular-ui-tinymce package this will automatically install angular and tinymce.

```
$ bower install angular-ui-tinymce --save
```

## 3. Creating the demo.html file

This **demo.html** file has angular properties and two calls to the controller.

```html
<!DOCTYPE html>
<head>
  <script type="text/javascript" src="bower_components/tinymce/tinymce.js"></script>
  <script type="text/javascript" src="bower_components/angular/angular.js"></script>
  <script type="text/javascript" src="bower_components/angular-ui-tinymce/src/tinymce.js"></script>
  <script type="text/javascript" src="app.js"></script>
</head>
<body ng-app="myApp">
  <form method="post" ng-controller="TinyMceController">
    <textarea ui-tinymce="tinymceOptions" ng-model="tinymceModel"></textarea>
    <button ng-click="getContent()">Get content</button>
    <button ng-click="setContent()">Set content</button>
  </form>
</body>
```

## 4. Creating the app.js file

The **app.js** file shows you how to work with the model that automatically updates tinymce.

```js
var myAppModule = angular.module('myApp', ['ui.tinymce']);

myAppModule.controller('TinyMceController', function($scope) {
  $scope.tinymceModel = 'Initial content';

  $scope.getContent = function() {
    console.log('Editor content:', $scope.tinymceModel);
  };

  $scope.setContent = function() {
    $scope.tinymceModel = 'Time: ' + (new Date());
  };

  $scope.tinymceOptions = {
    plugins: 'link image code',
    toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
  };
});
```

## 5. Testing the application

You can now test the application by running the demo.html page in your favorite browser.

#### A note about integrations

> Note:  We are pleased to reference third-party integrations/code to help you build great products with TinyMCE. If you have queries about this integration, please contact the developer directly.

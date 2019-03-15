---
layout: default
title: tinymce.WindowManager
---

|  |  |
| --- | --- |
| Namespace | tinymce |
| Class | WindowManager |

This class handles the creation of native windows and dialogs. This class can be extended to provide for example inline dialogs.      

**Example**  

## Public Methods

| Method | Defined By |
| --- | --- |
| [WindowManager](#windowmanager)(ed:[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html)) : Constructs a new window manager instance. | WindowManager |
| [alert](#alert)(t:String, cb:function, s:Object):void : Creates a alert dialog. | WindowManager |
| [close](#close)(w:Window):void : Closes the specified window. | WindowManager |
| [confirm](#confirm)(t:String, cb:function, s:Object):void : Creates a confirm dialog. | WindowManager |
| [createInstance](#createinstance)(cl:String):Object : Creates a instance of a class. | WindowManager |
| [open](#open)(s:Object, p:Object):void : Opens a new window. | WindowManager |
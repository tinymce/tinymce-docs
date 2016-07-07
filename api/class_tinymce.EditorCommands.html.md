---
layout: default
title: tinymce.EditorCommands
---

|  |  |
| --- | --- |
| Namespace | tinymce |
| Class | EditorCommands |

This class enables you to add custom editor commands and it contains overrides for native browser commands to address various bugs and issues.

## Public Methods

| Method | Defined By |
| --- | --- |
| [addCommands](#addcommands)(command_list:Object, type:String):void : Adds commands to the command collection. | EditorCommands |
| [execCommand](#execcommand)(command:String, ui:Boolean, value:Object):Boolean : Executes the specified command. | EditorCommands |
| [queryCommandState](#querycommandstate)(command:String):Boolean/Number : Queries the current state for a command for example if the current selection is "bold". | EditorCommands |
| [queryCommandValue](#querycommandvalue)(command:String):Object : Queries the command value for example the current fontsize. | EditorCommands |

## Method details

### addCommands 

***public function addCommands(command_list:Object, type:String):void***  
Adds commands to the command collection.      

**Parameters**  

| Param | Detail |
| --- | --- |
| command_list:Object | Name/value collection with commands to add, the names can also be comma separated. |
| type:String | Optional type to add, defaults to exec. Can be value or state as well. |

### execCommand 

***public function execCommand(command:String, ui:Boolean, value:Object):Boolean***  
Executes the specified command.      

**Parameters**  

| Param | Detail |
| --- | --- |
| command:String | Command to execute. |
| ui:Boolean | Optional user interface state. |
| value:Object | Optional value for command. |

**Returns**  
Boolean - true/false if the command was found or not.

### queryCommandState 

***public function queryCommandState(command:String):Boolean/Number***  
Queries the current state for a command for example if the current selection is "bold".      

**Parameters**  

| Param | Detail |
| --- | --- |
| command:String | Command to check the state of. |

**Returns**  
Boolean/Number - true/false if the selected contents is bold or not, -1 if it's not found.

### queryCommandValue 

***public function queryCommandValue(command:String):Object***  
Queries the command value for example the current fontsize.      

**Parameters**  

| Param | Detail |
| --- | --- |
| command:String | Command to check the value of. |

**Returns**  
Object - Command value of false if it's not found.
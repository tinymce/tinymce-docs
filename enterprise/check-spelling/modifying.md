---
layout: default
title: Modifying spell check dictionaries
description: Spell Checker Pro dictionaries can be modified to include custom words.
keywords: enterprise tinymcespellchecker spell check checker pro pricing
---

**Note:** Updating the dictionaries packaged with the spellchecker is, in effect, forking the dictionary. Any future enhancements to our dictionaries (e.g. additional words added or errors fixed) could cause you to want to re-apply your updates to these future release dictionaries.

**Note:** Updating the spellchecking feature (i.e. by installing updated versions of `ephox-spelling.war`) may overwrite your modified dictionaries. Please ensure you backup your modified dictionaries before upgrading `ephox-spelling.war`.

### Creating new updates to a dictionary

1) You'll need to identify which language/s you want to apply updates to. The spellchecking feature provides support for <link>13 languages</link>.
You can locate each individual dictionary .jar file for each supported language in *your_web_server/ephox-spelling/WEB-INF/classes/dictionaries*.
For the purposes of this document and the examples contained herein, it will be assumed that you're looking to update the English (US) dictionary en_us_4_0.jar.
Once you have found this .jar file, use a file unzipping utility to extract the contents of the .jar.

2) If the file has been extracted correctly the contents should contain 2 directories: com and META-INF.
If a custom dictionary has already been created for this spell checker, there will also be a file named userdic.tlx present. If this is the case and you wish to extend the existing custom dictionary then do not delete this file. Please see the <link>Modifying an Updated Dictionary</link> section of this document for more information.
If, however, you wish to remove the current custom dictionary, then delete this file. For more information on this then please see <link>Removing the Modifications from a Dictionary</link> section of this document.

3) With a plain text editor, create a file called userdic.tlx in the same directory where the contents of the .jar file were extracted. This file will be where the listings for the custom dictionary are placed.

4) At the top of the userdic.tlx file, place the following line:

````
        #LID 24941
````
5) For each word that you wish to place into the custom dictionary, list the word in the userdic.tlx file on its own line. Then, one tab spacing from the word, place an i character. Thus, lines in the file should appear in the following format:

````
        customword        i
````
6) Repeat step 5 for all the words you wish to add to the custom dictionary. When finished, save the userdic.tlx file.

7) After saving the userdic.tlx file the .jar file must be recompiled. This requires using the Java .jar command at the command line in the directory where the contents of the original .jar file were extracted.

**Example**

If the contents of the dictionary .jar file were extracted to c:\customdictionary and the location of the jar command is c:\java\bin\jar, then the following command would create a .jar file called en_us_4_0.jar.

````
        c:\customdictionary>c:\java\bin\jar cvf en_us_4_0.jar .
````
8) Move the newly compiled .jar file back to it's original location, replacing the original file. For the context of this example, you would be replacing your_web_server/ephox-spelling/WEB-INF/classes/dictionaries/en_us_4_0.jar with your updated copy of en_us_4_0.jar.

#### Modifying an updated dictionary
1) Perform steps 1 and 2 as above in the <link>Creating New Updates to a Dictionary</link> section of this document.

2) Open the userdic.tlx file in a plain text editor.

3) For each word that you wish to add to the custom dictionary, list the word in the userdic.tlx file on its own line. Then, one tab spacing from the word, place an i. Thus, lines in the file should appear in the following format:

````
        customword                i
````
4) Repeat step 3 for all the words you wish to add to the custom dictionary. When finished save the userdic.tlx file.

5) After saving the userdic.tlx file the .jar file must be recompiled. This requires using the Java jar command at the command line in the directory where the contents of the original .jar file were extracted. The name of the new spell checker .jar file is specified in this step.

**Example**

If the contents of the dictionary .jar file were extracted to c:\customdictionary and the location of the jar command is c:\java\bin\jar, then the following command would create a jar file called en_us_4_0.jar.

````
        c:\customdictionary>c:\java\bin\jar cvf en_us_4_0.jar .
````
6) Move the newly compiled .jar file back to it's original location, replacing the original file. For the context of this example, you would be replacing your_web_server/ephox-spelling/WEB-INF/classes/dictionaries/en_us_4_0.jar with your updated copy of en_us_4_0.jar.

#### removing the modifications from a dictionary
1) Perform steps 1 and 2 as above in the <link>Creating New Updates to a Dictionary</link> section of this document.

2) Delete the userdic.tlx file from the directory where the contents of the original .jar file were extracted.

3) After deleting the userdic.tlx file the .jar file must be recompiled. This requires using the Java jar command at the command line in the directory where the contents of the original .jar file were extracted. The name of the new spell checker .jar file is specified in this step.

**Example**

If the contents of the dictionary .jar file were extracted to c:\customdictionary, and the location of the jar command is c:\java\bin\jar, then the following command would create a .jar file called en_us_4_0.jar.

````
        c:\customdictionary>c:\java\bin\jar cvf en_us_4_0.jar .
````
4) Move the newly compiled .jar file back to it's original location, replacing the original file. For the context of this example, you would be replacing your_web_server/ephox-spelling/WEB-INF/classes/dictionaries/en_us_4_0.jar with your updated copy of en_us_4_0.jar.

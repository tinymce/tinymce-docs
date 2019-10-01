
The following new features were added to the TinyMCE 5.1 version.

### Mobile

Legacy mobile experience in provided for TinyMCE 4.7 through TinyMCE 5.0
![TinyMCE legacy mobile experience]({{site.baseurl}}/images/legacy_mobile_exp.png)

New mobile experience introduced for TinyMCE 5.1
![TinyMCE 5.1+ mobile experience]({{site.baseurl}}/images/5_1_mobile_exp.png)

Recommend adding the following `meta` tag to the `head` of pages using TinyMCE to ensure the mobile user interface functions as intended.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```


### Sticky Toolbar

A Sticky Toolbar (or Docking Toolbar), docks the toolbar and the menu to the top of the screen when scrolling down a web page until the editor is no longer visible.

For information on the Sticky Toolbars, see: [Enabling Sticky Toolbars]({{site.baseurl}}/configure/editor-appearance/#enablingstickytoolbars).


added new referrer_policy setting to add the referrerpolicy attribute when loading scripts or stylesheets.

added a dark content_css skin to go with the dark UI skin.

### Premium Plugins

#### PowerPaste

PowerPaste 5.0 included a change to the `Remove Formatting` functionality to also filter out inline style elements such as `strong`, `b`, `em`, `i`, and `sub`, to make `Remove Formatting` more consistent with other editor functionality. PowerPaste 5.1.1 makes this behavior configurable using the new `powerpaste_clean_filtered_inline_elements` setting, which takes a string of comma-separate inline tag names. These inline elements will be filtered on `clean` or `Remove Formatting` paste.

It's worth noting, that 5.1.1 reverts the previous default as well, so that by default it will keep the strong, b, etc... elements when running clean. If users want the same functionality as PowerPaste 5.0.0, then they'd need to add this to their configuration:
```js
powerpaste_clean_filtered_inline_elements: 'strong,em,b,i,u,strike,sup,sub,font'
```

Fixed:  PowerPaste- When powerpaste is enabled links that has queries / regex are not resolving when pasted

#### Media Embedded

fixed: media embed will display a video but it can't be played

#### Spellchecker Pro

Fixed: Powerspell flags contraction words as invalid

#### Advanced Code

Fixed: getContent call does not get the content of inline advcode
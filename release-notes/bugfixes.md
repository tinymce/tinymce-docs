---
layout: default
title: Bug fixes in TinyMCE 5.0 Beta
title_nav: Bug fixes
description: These are the fixed issues in TinyMCE 5.0 Beta.
keywords: knownissues bug releasenotes migration 4.x
---

In the developer's preview release, we invited the community to test the TinyMCE 5.0 editor and report bugs and issues. The following issues have been fixed in the TinyMCE 5.0 Beta version.

### Editor-Core

The new TinyMCE 5.0 editor comes with significant changes to the previous versions. Our team at Tiny has created a more configurable and modern editor. To create a less cumbersome editor, we have removed some configurations because they are no longer necessary or an improved solution has been introduced. For more information, please see the [Editor-Core]({{site.baseurl}}/migration-from-4x/#editor-core) section in the Migration Guide.

#### Alloy

| Issue key | Summary |
| AP-36 | Add Types to Alloy |
| AP-38 | Scope Alloy Project |
| AP-46 | Integrate alloys pub sub messaging with tinymce |
| AP-47 | [dialog H] create a help menu in Alloy |
| AP-49 | cleanup alloy types |
| AP-51 | SPIKE: Investigate typed Alloy on the Mobile theme |
| AP-57	| Add Types to Boulder |
| AP-71 | Fully type alloy |
| AP-144 | Port status bar to alloy |
| AP-409 | Add types to lumber |
| AP-407 | Add types to Sand |
| AP-415 | Add types to Jax |

#### Browser

The following browser related issues were reported during the developer's preview and are now fixed in the TinyMCE 5.0 BETA version.

| Issue key| Summary |
| AP-158 | First automated test run: Make *all* browsers pass all relevant tests |
| AP-182 | Cross Browser Tests : Setup & run tests against the OS/Browser combinations |
| AP-240 | Safari: Unable to select all using keys when there are anchors in the text editor |
| AP-248 | Firefox: Cannot use <space> to toggle off locks in sizeinput |
| AP-269 | Incorrect display of IFrame border (Chrome/Safari) |
| AP-357 | IE11 Issue with SVG icons |

#### Colorpicker

The following Colorpicker related issues were reported during the developer's preview and are now fixed in the TinyMCE 5.0 BETA version. Please see the [Colorpicker]({{site.baseurl}}/configure/content-appearance/#color_picker) docs for more information.

| Issue key | Summary |
| AP-87	| Create colorinput component |
| AP-207 | Color Picker - Not applying color selection |
| AP-210 | Color Picker - button should not be visible if color picker is not in the list of plugins configured |
| AP-216 | Change color picker dialog title to "Color" to match Tiny 4.8.2 |
| AP-239 | Keyboard navigation within the Colorpicker |
| AP-317 | Colorpicker's inputs are not being given the right class. |
| AP-372 | If "color_picker_callback" in place then on selecting colorpicker no colorpicker should popup and the color in callback should be applied |
| AP-123 | Colorinput fixes |
| AP-142 | Font color and Background color palettes |
| AP-284 | Unable to apply forecolor and backcolor to the text in the table |
| AP-286 | ColorInput gives an error saying the panel is an unknown component. |


#### Editor

The following editor related issues were reported during the developer's preview and are now fixed in the TinyMCE 5.0 BETA version.

| Issue key| Summary |
| AP-22 | [T5] create type interfaces for tinymce components |
| AP-52 | SVG implementation details |
| AP-72 | Fix type error in Transformer |
| AP-73 | Change bridge version to latest |
| AP-84 | Fix type errors on develop |
| AP-92 | Add types to Agar |
| AP-94 | Add configuration for typeahead responseTime |
| AP-95 | Add shiftKey support to bedrock keyeffects |
| AP-104 | Add some useful chain assertions to Agar |
| AP-105 | Chain.isInput fails on undefined |
| AP-106 |Add formChange event to Input fields |
| AP-107 | Notification Manager |
| AP-108 | API for switching tabs |
| AP-117 | Change Typeahead to pass though change events |
| AP-126 | Display placeholder when typeahead menu is empty |
| AP-127 | remove PatchEditor and use bridge |
| AP-135 | Add onCancel |
| AP-147 | Standardise test code format |
| AP-151 | Update TransformFind types to return Option<B> instead of Option<Element> |
| AP-172 | Get menus working from init config |
| AP-176 | Add logging methods for standardised QA to Agar |
| AP-178 | Think of ways to simplify the onSetup API for customers. |
| AP-180 | selection.selectorChanged needs a way to unbind handlers |
| AP-188 | Find and Replace -functional issue |
| AP-190 | Pressing left and right with an open menu should navigate to the next menu |
| AP-195 | Editor crashes when pagebreak_separator set to empty string |
| AP-199 | Expanded SlotContainer behavior API |
| AP-200 | Fixed Sliding behaviour responding to nested transitioned events and incorrect type definition for grow |
| AP-206 | Menu items - Enabled when focusing out of menu item |
| AP-211 | On focus styles |
| AP-219 | remove extra div wrapping from .tox-tinymce |
| AP-236 | missing icons |
| AP-256 | Cleanup Editor for public Preview |
| AP-262 | size lock ratio |
| AP-267 | Tall menus cause scroll jump with a small window |
| AP-273 | Bottom positioned menus appear in the wrong spot initially |
| AP-282 | Translations |
| AP-283 | Re-enable all tinymce tests |
| AP-312 | Cap the width of menu items with ellipsis. |
| AP-359 | Font size select issues |
| AP-373 | General - editor does not autoscroll when pressing enter.|
| AP-379 | An empty editor causes issues with the statusbar because of iframe wrap min-height |
| AP-381 | Broken keyboard shortcuts - Windows |
| AP-392 | Editor crashing |
| AP-430 | Page responsiveness with multiple inline editors |
| AP-445 | Keyboard shortcut anomalies |
| AP-452 | Update Chain/Step `.log(message)` to write to the TestLogs and added `.label(message, c)` and fix types |


### User Interface

TinyMCE 5.0 has an ARIA WCAG 2.1 standards compliant user interface to make the user interface controls and dynamic content more accessible. The user interface logic has been changed entirely in TinyMCE 5.0. For more information on the UI changes, please see the [Migration Guide]({{site.baseurl}}/migration-from-4x).

#### UI

| Issue key | Summary |
| AP-130 | Ui polishing |
| AP-314 | Fix memory leaks in theme. There are a few events which need to be unbound. |
| AP-334 | Select boxes are broken |
| AP-344 | importcss_append configuration is not working as expected |

#### CSS

The following CSS related issues were reported during the developer's preview and are now fixed in the TinyMCE 5.0 BETA version.

| Issue key | Summary |
| AP-143 | Styles select dropdown & ImportCss |
| AP-183 | create a Css solution for dialog width/height |
| AP-201 | Refactor the menu CSS to be more generic |
| AP-203 | Need to make a content.inline.min.css |
| AP-393 | style_formats API is not fully supported |
| AP-453 | TinyMCE 5 DP doesn't support css values in height option |

#### Skin

The following Skin related issues were reported during the developer's preview and are now fixed in the TinyMCE 5.0 BETA version.

| Issue key |	Summary |
| AP-30 | Make oxide an npm module on nexus |
| AP-31 | wrap Oxide project in npm and build script to export css |
| AP-77 | Compile Oxide Styles in tinymce |
| AP-78 | Add oxide classes to Preview dialog |
| AP-131 | create packaging for the Apollo skin |
| AP-187 | Cleanup css styles from demos, move to oxide |
| AP-384 | Dialog headings (the titles) are styled wrong. Apply correct classes or update |

#### Theme

The following theme related issues were reported during the developer's preview and are now fixed in the TinyMCE 5.0 BETA version.

| Issue key | Summary |
| AP-79	| Improve types for SilverDialog |
| AP-91 | Use more Bridge types in SilverDialog |
| AP-96	| Bug: Error when closing SilverDialog |
| AP-139 | Adapt mcagar to silver |
| AP-194 | Support inline mode on the silver theme |
| AP-308 | Update Mobile theme to work (maybe: pull into silver) |

### Components

#### Context Form

The following Context Form related issues were reported during the developer's preview and are now fixed in the TinyMCE 5.0 BETA version. Please see the [Context Form]({{site.baseurl}}/ui-components/contextform/) docs for more information.

| Issue key| Summary |
| AP-274 | Separate ContextForm API into launch and form (and | DOCument how it works) |
| AP-301 | Navigating through a link flickers and moves the context form |

#### Context Menus

The following Context Menu related issues were reported during the developer's preview and are now fixed in the TinyMCE 5.0 BETA version. Please see the [Context Menu]({{site.baseurl}}/ui-components/contextmenu/) docs for more information.

| Issue key| Summary |
| AP-11	| image tools context menus |
| AP-12 | Spell Checker Context menu |
| AP-16	| Table context menus |
| AP-109 | Spike a new context menu for apollo that works similar to tbio |

####  Context Toolbar

The following Context Toolbar related issues were reported during the developer's preview and are now fixed in the TinyMCE 5.0 BETA version. Please see the [Context Toolbar]({{site.baseurl}}/ui-components/contexttoolbar/) docs for more information.

| Issue key | Summary |
| AP-148 | Create a context toolbar|
| AP-243 | Context toolbar overflows outside the container when page is scrolled |
| AP-268 | Context toolbar contained in a scroll box |
| AP-297 | Use Ctrl+F9 to focus the context toolbar. Escape should focus the editor again. |
| AP-318 | Improve contexttoolbar positioning near edge of editor |
| AP-327 | Update context toolbar position on editor resize |

#### Dialog

The following Dialog related issues were reported during the developer's preview and are now fixed in the TinyMCE 5.0 BETA version. Please see the [Dialog]({{site.baseurl}}/ui-components/dialog/) docs for more information.

| Issue key| Summary |
| AP-17	| [dialog L] Insert Anchor |
| AP-18	| [dialog L] Source Code |
| AP-19	| [dialog L] codesample |
| AP-20	| [dialog L] color picker |
| AP-21	| [dialog H] Image dialog |
| AP-43	| [dialog L] Preview |
| AP-45	| [dialog] Find and Replace dialog |
| AP-48	| [dialog] create special chars dialog |
| AP-50	| [dialog L] docment Properties (Fullpage) |
| AP-55	| [dialog M] Insert Link |
| AP-61	| Create styles for a pick swatch dialog |
| AP-70	| Spike a dialog API for discussion |
| AP-74 | Fix classes used on TextField and make label optional |
| AP-81	| Wire dialog values through TabPanel |
| AP-82 | Implement Grid component |
| AP-83 | Create a Dropzone component |
| AP-88 | Fix type and lint errors |
| AP-89 | Pass through extra information to typeaheads |
| AP-90	| Add change behavior to SelectBox |
| AP-93	| Search replace dialog tabbing from replace to check box does not work |
| AP-97	| Make a confirm dialog |
| AP-98	 | [dialog L] Code dialog |
| AP-100 | [dialog H] image tools |
| AP-101 | [dialog L] Table properties dialog |
| AP-102 | [dialog L] Template dialog |
| AP-103 | Implement Size component |
| AP-114 | Design approach for handling multiple-screen dialogs |
| AP-122 | Make Dialog Buttons Great Again |
| AP-124 | Integrate dialog busy feature |
| AP-137 | Dialogue - Find and replace - Except "Find" all other buttons should be disabled by default |
| AP-184 | Create UI for image tools dialog |
| AP-208 | Add preview label to the text field in the Template dialog |
| AP-209 | Help dialog has 'Ok' and 'Cancel' buttons instead of 'Close' |
| AP-212 | Table dialog: Colorpicker tab doesn't close on clicking Ok |
| AP-214 | Keyboard navigation in advanced tab of table dialog |
| AP-217 | Preview dialog doesn't close on escape |
| AP-218 | [Notifications] Template dialog throws error when trying to open it without configured templates |
| AP-220 | SearchReplace dialog: Prev button doesn't become enabled |
| AP-221 | Table Dialog: Color picker transfers focus from dialog to body on clicking Ok |
| AP-222 | SearchReplace & Anchor: Alert dialog has 'Close' button instead of 'Ok' |
| AP-223 | SearchReplace & Anchor & Table: Alert dialog has the 'Ok' button on the left side of the window |
| AP-241 | Can't refocus dialogs by clicking on dialog body |
| AP-252 | Dialogs size and responsiveness |
| AP-253 | Show dialogs with backdrop |
| AP-260 | The typeaheads in dialogs need styling on the containers that their menus show up in, so that they can be seen above the dialog |
| AP-265 | Source code dialogue anomalies |
| AP-272 | Incorrect dialogue focus |
| AP-276 | Can't align row using row properties dialogue |
| AP-291 | Dialog checkboxes have no focus indication |
| AP-293 | Link dialogue anomalies |
| AP-315 | dialog checkbox does not refire a dialog onChange event |
| AP-329 | tabbed dialogs shrinking when no results returned |

#### Menu

The following Menu related issues were reported during the developer's preview and are now fixed in the TinyMCE 5.0 BETA version.

| Issue key | Summary |
| AP-2 | Clarify Icon declaration for buttons and menuItems |
| AP-76	| Reimplement Buttons and MenuItems using Bridge register |
| AP-280 | Menu check marks should be on the left |

#### Toolbar Buttons

The following Toolbar Buttons related issues were reported during the developer's preview and are now fixed in the TinyMCE 5.0 BETA version. Please see the [Toolbar Buttons]({{site.baseurl}}/ui-components/toolbarbuttons/) docs for more information.

| Issue key| Summary |
| AP-1	| Clarify inner button creation for Public API |
| AP-28	| Make menu item buttons for the file toolbar |
| AP-33	| Make Toolbar and button Groups for Toolbar |
| AP-54	| Make general toolbar button |
| AP-64	| [T5] plugins A-C update to the new addButton, Addmenu APi |
| AP-65	| [T5] plugins D-L update to the new addButton, Addmenu APi |
| AP-66	| [T5] plugins M-S update to the new addButton, Addmenu APi |
| AP-67	| [T5] plugins T-W update to the new addButton, Addmenu APi |
| AP-68	| [T5] plugins all Premium plugins - update to the new addButton, Addmenu APi |
| AP-136 | tab navigating radio buttons is broken after clicking a radio button |
| AP-152 | Generalise toolbars in preparation for context toolbars. |
| AP-155 | Identify the bridge requirements for existing / proposed toolbar / menubar. |
| AP-175 | Create a sidebar component |
| AP-186 | Core "plugins" - update to the new addButton, Addmenu APi |
| AP-189 | Editor configuration "height" not functional with full set of toolbar items & toolbar items should break and rollover as per the height settings |
| AP-226 | Update complex format controls to new button api, etc. |
| AP-250 | Disabled toolbar button styles. |
| AP-251 | Ensure keyboard navigation works with disabled toolbar buttons. |
| AP-259 | Slow tool tips, when hovering over a toolbar button |
| AP-258 | Undo and redo buttons should be disabled unless there is an undo or redo state |
| AP-264 | Alignment toolbar buttons can get out of state |
| AP-275 | Empty toolbar items give 'No representation for toolbarItem: ' errors. |
| AP-290 | Defaulting toolbar is missing |
| AP-295 | SplitButtons (and normal Buttons) toggle as you click them (rather than just relying on the state) |
| AP-310 | Menubuttons (and dropdowns in general) are not using the icon packs |
| AP-303 | Status bar word count needs correction |
| AP-307 | Menus should open as you hover over them, once you have a menu open. |
| AP-321 | Block formatting toolbar should have a default 'Formatting' title when there is no selection |
| AP-371 | Stop icon is displayed along with tooltip for undo and redo buttons |
| AP-377 | toolbar - restore last draft icon has text displayed ( not tooltip) |
| AP-450 | Filter out empty toolbar groups |

#### URL

The following URL related issues were reported during the developer's preview and are now fixed in the TinyMCE 5.0 BETA version. Please see the [URL]({{site.baseurl}}/configure/url-handling/) docs for more information.

| Issue key| Summary |
| AP-85	| Make a Url input component |
| AP-118 | Change Urlinput to fire formChange event |
| AP-119 | Add validation icons to UrlInput |
| AP-125 | Add history to UrlInput and disable anchor+headers in image mode |
| AP-128 | Wire up button on URL Input |
| AP-153 | Pressing <escape> and <enter> in a URL input should not be swallowed by the URL input |

### Premium Plugins

#### Comments

The following issues were reported against the Comments premium plugin during the developer's preview and are now fixed in the TinyMCE 5.0 BETA version. Please see the [Comments]({{site.baseurl}}/plugins/comments/) docs for more information.

| Issue key| Summary |
| AP-179 | Tiny comments (premium) |

#### Dialog

The following issues were reported against the dialogs in the premium plugin during the developer's preview and are now fixed in the TinyMCE 5.0 BETA version. Please see our [Premium Features]({{site.baseurl}}/enterprise/) docs for more information.

| Issue key| Summary |
| AP-23	| [dialog H] Foam plugin, accessibility (premium) |
| AP-24	| [dialog M] Powerpaste 2 (premium plugin) |
| AP-25	| [dialog M] Powerspell (premium plugin) |
| AP-26	| [dialog L] Clerk (premium plugin) |

#### Mentions

The following issues were reported against the Mentions premium plugin during the developer's preview and are now fixed in the TinyMCE 5.0 BETA version. Please see the [Mentions]({{site.baseurl}}/plugins/mentions/) docs for more information.

| Issue key | Summary |
| AP-159 | Mentions |

#### Plugins

#### Accessibility Checker

The following Accessibility Checker related issues were reported during the developer's preview and are now fixed in the TinyMCE 5.0 BETA version. Please see the [Accessibility Checker]({{site.baseurl}}/plugins/a11ychecker/) docs for more information.

| Issue key | Summary |
| AP-261 | Accessibility checker, notification banner is broken |
| AP-330 | accessibility checker not loading at all |
| AP-340 | accessibility checker requires input validation |
| AP-369 | AllyChecker dialogue should show "Caption cannot be empty" when left empty and click repair |
| AP-419 | Accessibility checker does not work without a toolbar |

#### Advlist

The following Advlist related issues were reported during the developer's preview and are now fixed in the TinyMCE 5.0 BETA version. Please see the [Advlist]({{site.baseurl}}/plugins/aadvlist/) docs for more information.

| Issue key| Summary |
| AP-288 | Unable to customize advlist plugin |

#### Anchors

The following Anchors related issues were reported during the developer's preview and are now fixed in the TinyMCE 5.0 BETA version. Please see the [Anchors]({{site.baseurl}}/plugins/anchor/) docs for more information.

| Issue key | Summary |
| AP-120 | Make Typeahead dropdown anchor configurable |
| AP-174 | Positioning magic for anchors |
| AP-277 | Statusbar bugs (tox-edit-area height and autoresize plugin) |
| AP-424 | Turn resize handler off when autoresize is enabled |

#### CharMap

The following CharMap related issues were reported during the developer's preview and are now fixed in the TinyMCE 5.0 BETA version. Please see the [CharMap]({{site.baseurl}}/plugins/charmap/) docs for more information.

| Issue key| Summary |
| AP-86	| Create the charmap component |
| AP-115 | Special chars, when mouse focus moves away from the char, focus defaults back to the first item instead of the last item that was focused |
| AP-129 | Character Map mouse hover and mouse out focus states |
| AP-228 | Consolidate charmap / resultsbox into Collection |
| AP-238 | Charmap: Character category names need updating |
| AP-316 | Character map entries do not have the active class added on mouse over |

#### Directionality

The following Directionality related issues were reported during the developer's preview and are now fixed in the TinyMCE 5.0 BETA version. Please see the [Directionality]({{site.baseurl}}/plugins/directionality/) docs for more information.

| Issue key | Summary |
| AP-423 | Directionality ltr/rtl not implemented |

#### Emoticons

The following Emoticons related issues were reported during the developer's preview and are now fixed in the TinyMCE 5.0 BETA version. Please see the [Emoticons]({{site.baseurl}}/plugins/emoticons/) docs for more information.

| Issue key | Summary |
| AP-156 | Create the emoticon panel |
| AP-366 | emoji type ahead can mess with typing urls http:// will bring up an empty emoji typeahead result |
| AP-449 | Emoji dialog intermittent failing tests |

#### Image Tools

The following Image Tools related issues were reported during the developer's preview and are now fixed in the TinyMCE 5.0 BETA version. Please see the [Image Tools]({{site.baseurl}}/plugins/imagetools/) docs for more information.

| Issue key | Summary |
| AP-323 | imagetools needs to handle CORS errors |
| AP-342 | imagetools_toolbar configurations not functional |
| AP-346 | Imagetools - Image editing area size should be consistent across all options and should not overlap on buttons below |
| AP-382 | Image - context menu not appearing when image has caption |

#### Link

The following Link related issues were reported during the developer's preview and are now fixed in the TinyMCE 5.0 BETA version. Please see the [Link]({{site.baseurl}}/plugins/link/) docs for more information.

| Issue key | Summary |
| AP-13	| Link checker (premium) |
| AP-255 | Link plugin, pressing insert link button without a selection causes console errors |
| AP-341 | Insert link plugin: url validation component is missing |
| AP-358 | Link context toolbar issues |
| AP-438 | Link context form is incorrectly styled |

#### Media

The following Media related issues were reported during the developer's preview and are now fixed in the TinyMCE 5.0 BETA version. Please see the [Media]({{site.baseurl}}/plugins/media/) docs for more information.

| Issue key | Summary |
| AP-198 | Media plugin is missing media dimensions setting |
| AP-245 | Media Embed premium plugin (pillow) |

#### Num/Bullist

The following Lists related issues were reported during the developer's preview and are now fixed in the TinyMCE 5.0 BETA version. Please see the [Lists]({{site.baseurl}}/plugins/lists/) docs for more information.

| Issue key | Summary |
| AP-140 | Num/Bullist dropdown |
| AP-146 | Create numbered list icons |
| AP-339 | Num/Bullist - not reflecting the selection on toolbar |

#### Search and Replace

The following Search and Replace related issues were reported during the developer's preview and are now fixed in the TinyMCE 5.0 BETA version. Please see the [Search and Replace]({{site.baseurl}}/plugins/searchreplace/) docs for more information.

| Issue key| Summary |
| AP-298 | Find and Replace - "Match case" should not be selected by default, title and button label needs correction |

#### Table

The following Table related issues were reported during the developer's preview and are now fixed in the TinyMCE 5.0 BETA version. Please see the [Table]({{site.baseurl}}/plugins/table/) docs for more information.

| Issue key | Summary |
| AP-197 | Implement insert table MenuItem |
| AP-285 | Table editing tools states can go stale after content is modified |
| AP-365 | Table - resizing of split cells could be improved, sometime they are a lot larger than they need to be |
| AP-367 | Table improvements |
| AP-368 | Table anomalies |
| AP-385 | Caption - table properties and image |
| AP-391 | Table style attribute should retain "border-collapse: collapse;" when border is set to 0 |

#### Table of Contents

The following Table of Contents related issues were reported during the developer's preview and are now fixed in the TinyMCE 5.0 BETA version. Please see the [Table of Contents]({{site.baseurl}}/plugins/toc/) docs for more information.

| Issue key | Summary |
| AP-347 | By default table of contents (toc) should be disabled on toolbar and should be only enabled if editor content has headings, Table of contents - contextmenu should be displayed in center not top right corner |

### Documentation

The following documentation related issues were reported during the developer's preview and are now fixed in the TinyMCE 5.0 BETA version. Please see the latest [Docs](https://www.tiny.cloud/docs-preview/) for more information.

| Issue key | Summary |
| DOC-98 | Typo - importcss_file_filter |
| DOC-103 |	Remove reduntant note in Tiny quick-start |
| DOC-115 |	Review "visual" documentation and amend the content |
| DOC-117 | Remove deprecated features and content from documentation from 4.x and 5.x versions |
| DOC-118 |	Remove TinyMCE mobile documentation from Dev Preview |
| DOC-119 | Missing documentation - Dev Preview - Editor Appearance - insert_toolbar |
| DOC-120 |	Correction - Skin |
| DOC-121 |	Correction - selection_toolbar |
| DOC-122 |	fontsize_formats configuration has to be changed from pt to px |
| DOC-125 |	Correction - Content filtering - entities |
| DOC-128 |	Correction - Content filtering - valid_children |
| DOC-129 |	Correction - Content filtering - forced_root_block |
| DOC-130 |	Correction - Content filtering - fix_list_elements |
| DOC-132 |	Correction - Accessibility keyboard shortcuts |
| DOC-133 |	Caption - Themes & Skin |
| DOC-135 |	Remove references from docs and code for "force_hex_style_colors" config |
| DOC-138 |	Out of sequence content |
| DOC-139 |	Should Anchor top/bottom documentation in link section? |
| DOC-140 |	Context Menu documentation page not found |
| DOC-141 |	Add "inlite" plugin documentation to "Add Plugins to TinyMCE" section |
| DOC-142 |	Amend Distraction-free documentation |
| DOC-143 |	Remove colorpicker and textcolor documentation |
| DOC-144 |	Correction - noneditable |
| DOC-145 |	Review and improve definition of default in advlist docs |
| DOC-148 |	Remove "colorpicker" and "textcolor" doc from "Add Plugins to TinyMCE" section |
| DOC-149 |	Remove deep nesting from docs nav menu |
| DOC-150 |	Correction - target_list |
| DOC-151 |	Update nginx redirect rules for new documentation structure |

### QA

The following Quality Assurance related issues that were carried out during the developer's preview. We have tested and fixed these issues in the TinyMCE 5.0 BETA version.

| Issue key | Summary |
| AP-309 | Write tests for complex format controls from AP-226 |
| AP-185 | Create 5.0 fiddle |
| AP-445 | Keyboard shortcut anomalies |
| QUAL-15 | Review and contribute in technical documentation |
| QUAL-9 | Verify 3.x Compatibility Plugin with Tiny 5.0 |
| QUAL-6 | Review exisiting Testrail Tests |
| QUAL-5 | Create test summary report for Apollo (TinyMCE 5 ) |
| QUAL-4 | Prepare release QA Plan for Apollo (TinyMCE 5) |
| QUAL-3 | Review and validate existing TinyMCE test cases on TestRail |
| QUAL-2 | Sort out test environment and also document custom test environment setup steps |
| QUAL-1 | Create sprint QA plan & setup a work item handover process |

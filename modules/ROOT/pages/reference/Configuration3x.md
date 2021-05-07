---
layout: default
title: Configuration
---

This document is the index/reference page for all available core configuration options in TinyMCE. There is also a list of old and [deprecated config options](https://www.tiny.cloud/docs-3x/TinyMCE3x@Deprecated_Configuration_Options/) for older versions of TinyMCE.

### Configuration options

All configuration options below are to be placed within the `tinyMCE.init()` JavaScript call. This call will usually be made from outside of TinyMCE.

## General

*   [accessibility_warnings](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@accessibility_warnings/)
*   [auto_focus](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@auto_focus/)
*   [browsers](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@browsers/)
*   [class_filter](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@class_filter/)
*   [custom_shortcuts](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@custom_shortcuts/)
*   [dialog_type](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@dialog_type/)
*   [directionality](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@directionality/)
*   [editor_deselector](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@editor_deselector/)
*   [editor_selector](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@editor_selector/)
*   [elements](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@elements/)
*   [gecko_spellcheck](https://www.tiny.cloud/docs/configure/spelling/#gecko_spellcheck/)
*   [keep_styles](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@keep_styles/)
*   [language](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@language/)
*   [mode](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@mode/)
*   [nowrap](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@nowrap/)
*   [object_resizing](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@object_resizing/)
*   [plugins](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@plugins/)
*   [readonly](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@readonly/)
*   [selector](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@selector/)
*   [skin](.https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@skin/)
*   [skin_variant](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@skin_variant/)
*   [table_inline_editing](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@table_inline_editing/)
*   [theme](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@theme/)
*   imagemanager_contextmenu

## Callbacks

*   [cleanup_callback](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@cleanup_callback/)
*   [execcommand_callback](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@execcommand_callback/)
*   [file_browser_callback](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@file_browser_callback/)
*   [handle_event_callback](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@handle_event_callback/)
*   [handle_node_change_callback](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@handle_node_change_callback/)
*   [init_instance_callback](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@init_instance_callback/)
*   [onchange_callback](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@onchange_callback/)
*   [oninit](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@oninit/)
*   [onpageload](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@onpageload/)
*   [remove_instance_callback](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@remove_instance_callback/)
*   [save_callback](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@save_callback/)
*   [setup](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@setup/)
*   [setupcontent_callback](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@setupcontent_callback/)
*   [urlconverter_callback](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@urlconverter_callback/)

## Cleanup/Output

*   [apply_source_formatting](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@apply_source_formatting/)
*   [convert_fonts_to_spans](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@convert_fonts_to_spans/)
*   [convert_newlines_to_brs](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@convert_newlines_to_brs/)
*   [custom_elements](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@custom_elements/)
*   [doctype](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@doctype/)
*   [element_format](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@element_format/)
*   [encoding](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@encoding/)
*   [entities](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@entities/)
*   [entity_encoding](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@entity_encoding/)
*   [extended_valid_elements](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@extended_valid_elements/)
*   [fix_list_elements](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@fix_list_elements/)
*   [font_size_classes](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@font_size_classes/)
*   [font_size_style_values](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@font_size_style_values/)
*   [force_p_newlines](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@force_p_newlines/)
*   [force_br_newlines](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@force_br_newlines/)
*   [force_hex_style_colors](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@force_hex_style_colors/)
*   [forced_root_block](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@forced_root_block/)
*   [formats](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@formats/)
*   [indentation](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@indentation/)
*   [inline_styles](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@inline_styles/)
*   [invalid_elements](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@invalid_elements/)
*   [remove_linebreaks](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@remove_linebreaks/)
*   [preformatted](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@preformatted/)
*   [protect](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@protect/)
*   [schema](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@schema/)
*   [style_formats](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@style_formats/)
*   [valid_children](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@valid_children/)
*   [valid_elements](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@valid_elements/)
*   [verify_css_classes](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@verify_css_classes/)
*   [verify_html](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@verify_html/)
*   [removeformat_selector](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@removeformat_selector/)

 |

## URL

*   [convert_urls](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@convert_urls/)
*   [relative_urls](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@relative_urls/)
*   [remove_script_host](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@remove_script_host/)
*   [document_base_url](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@document_base_url/)

## Layout

*   [body_id](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@body_id/)
*   [body_class](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@body_class/)
*   [constrain_menus](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@constrain_menus/)
*   [content_css](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@content_css/)
*   [popup_css](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@popup_css/)
*   [popup_css_add](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@popup_css_add/)
*   [editor_css](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@editor_css/)
*   [width](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@width/)
*   [height](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@height/)

## Visual aids

*   [visual](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@visual/)
*   [visual_table_class](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@visual_table_class/)

## Undo/Redo

*   [custom_undo_redo](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@custom_undo_redo/)
*   [custom_undo_redo_levels](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@custom_undo_redo_levels/)
*   [custom_undo_redo_keyboard_shortcuts](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@custom_undo_redo_keyboard_shortcuts/)
*   [custom_undo_redo_restore_selection](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@custom_undo_redo_restore_selection/)

## File lists

*   [external_link_list_url](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@external_link_list_url/)
*   [external_image_list_url](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@external_image_list_url/)
*   [external_media_list_url](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@external_media_list_url/)
*   [external_template_list_url](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@external_template_list_url/)

## Triggers/Patches

*   [add_form_submit_trigger](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@add_form_submit_trigger/)
*   [add_unload_trigger](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@add_unload_trigger/)
*   [submit_patch](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@submit_patch/)

## Advanced theme

*   [theme_advanced_layout_manager](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@theme_advanced_layout_manager/)
*   [theme_advanced_blockformats](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@theme_advanced_blockformats/)
*   [theme_advanced_styles](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@theme_advanced_styles/)
*   [theme_advanced_source_editor_width](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@theme_advanced_source_editor_width/)
*   [theme_advanced_source_editor_height](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@theme_advanced_source_editor_height/)
*   [theme_advanced_source_editor_wrap](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@theme_advanced_source_editor_wrap/)
*   [theme_advanced_toolbar_location](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@theme_advanced_toolbar_location/)
*   [theme_advanced_toolbar_align](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@theme_advanced_toolbar_align/)
*   [theme_advanced_statusbar_location](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@theme_advanced_statusbar_location/)
*   [theme_advanced_buttons<1-n>](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@theme_advanced_buttons_1_n/)
*   [theme_advanced_buttons<1-n>_add](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@theme_advanced_buttons_1_n_add/)
*   [theme_advanced_buttons<1-n>_add_before](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@theme_advanced_buttons_1_n_add_before/)
*   [theme_advanced_disable](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@theme_advanced_disable/)
*   [theme_advanced_containers](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@theme_advanced_containers/)
*   [theme_advanced_containers_default_class](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@theme_advanced_containers_default_class/)
*   [theme_advanced_containers_default_align](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@theme_advanced_containers_default_align/)
*   [theme_advanced_container_<container>](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@theme_advanced_container_container/)
*   [theme_advanced_container_<container>_class](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@theme_advanced_container_container_class/)
*   [theme_advanced_container_<container>_align](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@theme_advanced_container_container_align/)
*   [theme_advanced_custom_layout](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@theme_advanced_custom_layout/)
*   [theme_advanced_link_targets](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@theme_advanced_link_targets/)
*   [theme_advanced_resizing](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@theme_advanced_resizing/)
*   [theme_advanced_resizing_min_width](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@theme_advanced_resizing_min_width/)
*   [theme_advanced_resizing_min_height](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@theme_advanced_resizing_min_height/)
*   [theme_advanced_resizing_max_width](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@theme_advanced_resizing_max_width/)
*   [theme_advanced_resizing_max_height](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@theme_advanced_resizing_max_height/)
*   [theme_advanced_resizing_use_cookie](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@theme_advanced_resizing_use_cookie/)
*   [theme_advanced_resize_horizontal](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@theme_advanced_resize_horizontal/)
*   [theme_advanced_path](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@theme_advanced_path/)
*   [theme_advanced_fonts](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@theme_advanced_fonts/)
*   [theme_advanced_font_sizes](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@theme_advanced_font_sizes/)
*   [theme_advanced_text_colors](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@theme_advanced_text_colors/)
*   [theme_advanced_background_colors](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@theme_advanced_background_colors/)
*   [theme_advanced_default_foreground_color](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@theme_advanced_default_foreground_color/)
*   [theme_advanced_default_background_color](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@theme_advanced_default_background_color/)
*   [theme_advanced_more_colors](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@theme_advanced_more_colors/)

## Initialization of TinyMCE

In order to initialize the TinyMCE the following code must be placed within HEAD element of a document. The following example is configured to convert all TEXTAREA elements into editors when the page loads. There are other [modes](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@mode/) as well.

## Example of TinyMCE configuration

```html
<html>
<head>
<script language="javascript" type="text/javascript" src="../jscripts/tiny_mce/tiny_mce.js"></script>
<script language="javascript" type="text/javascript">
tinyMCE.init({
  theme : "advanced",
  mode : "textareas"
});
</script>
</head>
```

NOTE: Remember to remove the last "," character in the options list. In some versions of Microsoft Internet Explorer, not removing the final comma will cause tinyMCE to be initialized with the default settings.

As an alternative, the tinyMCE.init statement can be put in it's own file and referenced in a script tag:

```html
<html>
<head>
<script language="javascript" type="text/javascript" src="../jscripts/tiny_mce/tiny_mce.js"></script>
<script language="javascript" type="text/javascript" src="../jscripts/tiny_mce/basic_config.js"></script>
</head>
```

Using this approach, you can create various configurations and reuse them in scripts as needed.

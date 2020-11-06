---
layout: default
title: <Plugin Name> plugin
title_nav: <Plugin Name>
description: <What does this plugin do? What is the benefit? (One sentence description)>.
description_short: <Like description, but shorter (if possible)>.
keywords: plugin <plugincode> etc.
---
{% comment %} Replace content in angled brackets (<>) and remove my comments before committing!!! {% endcomment %}
{% assign pluginname = "<Plugin Name>" %} {% comment %} Official product name as a string. Can be used in content using the {pluginname} variable {% endcomment %}
{% assign plugincode = "<plugincode>" %} {% comment %} The plugin identifier used to add the plugin to an editor using the `plugin` option. Provide as a string. Can be used in content using the {plugincode} variable {% endcomment %}
{% assign plugincategory = "premium"|"opensource" %}

{{site.premiumplugin}}

{% comment %}
  Add an introduction. What does the plugin do? Why would I use this plugin? Keep it concise.
{% endcomment %}

## Interactive example

{% comment %}
  No Lorem Ipsum! Add some content to test on, possibly just a description of how end-users use the feature?
  See the emoticons, advtable,and advcode demos for examples.
{% endcomment %}

{% include live-demo.html id="{{plugincode}}" %}

## Basic setup

To add the {{pluginname}} plugin to the editor, add `{{plugincode}}` to the `plugins` option in the editor configuration.

For example:

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: '{{plugincode}}',
  toolbar: '<toolbar-button(s)>',
  an_essential_option: false
});
```

{% comment %} Delete everything not require/relevant from this point on. {% endcomment%}

## Configuration options

The following configuration options affect the behavior of the {{pluginname}} plugin.

{% comment %}
  There should be a template to help you create these configuration option/settings "chunks".
  Just include as per the below example.
{% endcomment %}
{% include configuration/<setting-name-in-hyphen-case>.md %}

{% comment %}
  Toolbar buttons content, uses the pluginname and plugincode variables.
  The toolbar buttons are the same as another plugin, assign the other plugin's identifier to `altplugincode`
  Don't forget to add this to available-toolbar-buttons.md
{% endcomment %}
{% include misc/plugin-toolbar-button-id-boilerplate.md %}
{% comment %}
  Menu items content, uses the pluginname and plugincode variables.
  The menu items are the same as another plugin, assign the other plugin's identifier to `altplugincode`
  Don't forget to add this to available-menu-items.md
{% endcomment %}
{% include misc/plugin-menu-item-id-boilerplate.md %}

## Commands

The {{pluginname}} plugin provides the following JavaScript commands.

{% include commands/{{plugincode}}-cmds.md %}

## Events

The {{pluginname}} plugin provides the following events.

{% include events/{{plugincode}}-events.md %}

## APIs

The {{pluginname}} plugin provides the following APIs.

{% include plugin-apis/{{plugincode}}-apis.md %}

{% if page.name == "available-toolbar-buttons.md" %}
## {{pluginname}} plugin

The {{pluginname}} plugin provides the following toolbar buttons:

{% if altplugincode %}
{% include toolbar-button-ids/{{altplugincode}}-toolbar-buttons.md %}
{% else %}
{% include toolbar-button-ids/{{plugincode}}-toolbar-buttons.md %}
{% endif %}

For information on the {{pluginname}} plugin, see: [Plugins - The {{pluginname}} plugin]({{site.baseurl}}/plugins/{{plugincategory}}/{{plugincode}}/)

{% else %}
## Toolbar buttons

The {{pluginname}} plugin provides the following toolbar buttons:

{% if altplugincode %}
{% include toolbar-button-ids/{{altplugincode}}-toolbar-buttons.md %}
{% else %}
{% include toolbar-button-ids/{{plugincode}}-toolbar-buttons.md %}
{% endif %}

{% include misc/toolbar-button-settings.md %}

{% endif %}
{% assign altplugincode = nil %}

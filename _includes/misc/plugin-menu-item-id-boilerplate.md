{% if page.name == "available-menu-items.md" %}
## {{pluginname}} plugin

The {{pluginname}} plugin provides the following menu items:

{% if altplugincode %}
{% include menu-item-ids/{{altplugincode}}-menu-items.md %}
{% else %}
{% include menu-item-ids/{{plugincode}}-menu-items.md %}
{% endif %}

For information on the {{pluginname}} plugin, see: [Plugins - The {{pluginname}} plugin]({{site.baseurl}}/plugins/{{plugincode}}/)

{% else %}
## Menu items

The {{pluginname}} plugin provides the following menu items:

{% if altplugincode %}
{% include menu-item-ids/{{altplugincode}}-menu-items.md %}
{% else %}
{% include menu-item-ids/{{plugincode}}-menu-items.md %}
{% endif %}

{% include misc/menu-item-settings.md %}

{% endif %}
{% assign altplugincode = nil %}

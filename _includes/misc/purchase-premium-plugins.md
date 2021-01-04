{% if extensionType != 'Packs' %}
{% assign extensionType = 'plugin' %}
{% endif %}
{% if pluralExtensionType == true %}
{% assign isAre = 'are' %}
{% else %}
{% assign isAre = 'is' %}
{% endif %}
## Getting started with {% if pluginname != 'Tiny Drive' %}{{site.productname}}{% endif %} {{pluginname}}

### Creating an account

Try the **{{pluginname}} {{extensionType}}** and the {{site.cloudname}} with a free [{{site.accountpage}}]({{site.accountsignup}}). New accounts receive a 30-day trial of the {{site.companyname}} [premium plugins]({{site.plugindirectory}}), skins, and icon packs; with no credit card information or commitment required.

### Get {% if pluginname != 'Tiny Drive' %}{{site.productname}}{% endif %} {{pluginname}}

{% if pluginminimumplan != 'enterprise' %}
The **{{pluginname}} {{extensionType}}** {{isAre}} included in the following {{site.cloudname}} plans:
{% else %}
The **{{pluginname}} {{extensionType}}** {{isAre}} included in [{{site.enterpriseplan}}]({{site.pricingpage}}).
{% endif %}

{% case pluginminimumplan %}
{% when 'tierone' %}- The [{{site.tieroneplan}}]({{site.pricingpage}}).
{% when 'tierone' or 'tiertwo' %}- The [{{site.tiertwoplan}}]({{site.pricingpage}}).
{% when 'tierone' or 'tiertwo' or 'tierthree' %}- The [{{site.tierthreeplan}}]({{site.pricingpage}}).
- [{{site.enterpriseplan}}]({{site.pricingpage}}).
{% endcase %}

{% if pluginminimumplan == 'tiertwo' or pluginminimumplan == 'tierthree' %}
A 14-day free trial is also available for the {{site.tiertwoplan}} and the {{site.tierthreeplan}}.
{% elsif pluginminimumplan == 'tierthree' %}
A 14-day free trial is available for the {{site.tierthreeplan}}.
{% endif %}

## Further information

For information on:

- {{site.cloudname}} plans, see: [{{site.companyname}} Pricing Plans]({{site.pricingpage}}).{% if extensionType == 'Packs' %}
- Enabling premium skins, see: [The `skin` setting]({{site.baseurl}}/configure/editor-appearance/#skin).
- Enabling premium icon packs, see: [The `icons` setting]({{site.baseurl}}/configure/editor-appearance/#icons).{% else %}
- Configuring the **{{pluginname}} {{extensionType}}**, see: [The {{pluginname}} {{extensionType}} documentation]({{site.baseurl}}/plugins/premium/{{plugindocspage}}/).
{% endif %}
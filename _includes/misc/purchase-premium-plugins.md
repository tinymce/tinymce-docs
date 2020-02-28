{% if extensionType != 'Packs' %}
{% assign extensionType = 'plugin' %}
{% endif %}
{% if pluralExtensionType == true %}
{% assign isAre = 'are' %}
{% else %}
{% assign isAre = 'is' %}
{% endif %}
### Getting started with TinyMCE {{pluginname}}

#### Creating an account

To try out the **{{pluginname}} {{extensionType}}** and the {{site.cloudname}}, create a free [{{site.accountpage}}]({{site.accountsignup}}). Sign-up for a free {{site.accountpage}} and receive a 30-day trial of the {{site.companyname}} [premium plugins]({{site.plugindirectory}}), skins, and icon packs; with no credit card information or commitment required.

#### Buy TinyMCE {{pluginname}}

{% if pluginminimumplan == 'tierone' %}
The **{{pluginname}} {{extensionType}}** {{isAre}} included in the following {{site.cloudname}} plans:

- The [{{site.tieroneplan}}]({{site.pricingpage}}).
- The [{{site.tiertwoplan}}]({{site.pricingpage}}).
- The [{{site.tierthreeplan}}]({{site.pricingpage}}).
- [{{site.enterpriseplan}}]({{site.pricingpage}}).

{% elsif pluginminimumplan == 'tiertwo' %}
The **{{pluginname}} {{extensionType}}** {{isAre}} included in the following {{site.cloudname}} plans:

- The [{{site.tiertwoplan}}]({{site.pricingpage}}).
- The [{{site.tierthreeplan}}]({{site.pricingpage}}).
- [{{site.enterpriseplan}}]({{site.pricingpage}}).

{% elsif pluginminimumplan == 'tierthree' %}
The **{{pluginname}} {{extensionType}}** {{isAre}} included in the following {{site.cloudname}} plans:

- The [{{site.tierthreeplan}}]({{site.pricingpage}}).
- [{{site.enterpriseplan}}]({{site.pricingpage}}).

{% elsif pluginminimumplan == 'enterprise' %}
The **{{pluginname}} {{extensionType}}** {{isAre}} included in [{{site.enterpriseplan}}]({{site.pricingpage}}).

{% endif %}

### Further information

For information on:

- {{site.cloudname}} plans, see: [{{site.companyname}} Pricing Plans]({{site.pricingpage}}).{% if extensionType == 'Packs' %}
- Enabling premium skins, see: [The `skin` setting]({{site.baseurl}}/configure/editor-appearance/#skin).
- Enabling premium icon packs, see: [The `icons` setting]({{site.baseurl}}/configure/editor-appearance/#icons).{% else %}
- Configuring the **{{pluginname}} {{extensionType}}**, see: [The {{pluginname}} {{extensionType}} documentation]({{site.baseurl}}/plugins/{{plugindocspage}}/).
{% endif %}
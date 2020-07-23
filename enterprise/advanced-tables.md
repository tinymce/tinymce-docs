---
layout: default
title: Advanced Tables plugin
title_nav: Advanced Tables
description: Add sorting functionality to tables.
keywords: sort tables advanced advtable premium
---

{{site.requires_5_1v}}

Advanced Tables adds sorting functionality to tables in {{site.productname}}. Tables can be sorted by row or column values using:

* The **Sort** options in the **Table** menu.
* The **Sort** options in the table contextual menu.
* The **Sort** options in the **Table** toolbar menu button.

**For example:**

| Sort rows based on the selected column                   | Advanced Sort Dialog                                 |
| -------------------------------------------------------- | ---------------------------------------------------- |
| ![Advanced Tables enhanced contextual menu for sorting rows based on the selected Column (Sort > Sort table by column ascending/descending).]({{ site.baseurl }}/images/advtable_context_menu_sort.png) | ![Advanced Tables sort dialog (Sort > Advanced Sort{{site.ellps}}).]({{ site.baseurl }}/images/advtable_dialog_sort.png) |

The plugin is capable of sorting:

* Numerical data
* Text data

> **Note**: Currently, the sort function will treat cells with Alphanumeric data as Text data. This includes currency symbols which are text characters.

### Try our Advanced Tables Demo
{% include codepen.html id="advtable" %}

{% assign pluginname = 'Advanced Tables' %}
{% assign pluginminimumplan = 'tiertwo' %}
{% assign plugindocspage = 'advtable' %}
{% include misc/purchase-premium-plugins.md %}

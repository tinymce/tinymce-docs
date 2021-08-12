---
layout: default
title: Add Hunspell dictionaries to Spell Checker Pro
title_nav: Using Hunspell dictionaries
description: Instructions for adding Hunspell dictionaries to TinyMCE Spell Checker Pro.
keywords: enterprise tinymcespellchecker spell check checker pro server configuration configure
---

{{site.requires_5_9v}}

{{site.productname}} 5.9 introduced support for Hunspell dictionaries. Hunspell dictionaries can be obtained from various sources, but the files must be stored to a strict structure to work with {{site.productname}} Spell Checker Pro. {{site.companyname}} provides dowloadable bundles that have the required structure.

To add Hunspell dictionaries to a self-hosted {{site.productname}}:

1. Download the latest {{site.productname}} Enterprise package.
1. Download the desired Hunspell dictionaries.
1. Configure the {{site.productname}} spelling service to use the Hunspell dictionaries.

## Downloadable Hunspell Bundles

{{site.companyname}} provides two downloadable bundles of Hunspell dictionaries.

`hunspell-dictionaries-approved.zip`
: Does **not** contain dictionaries licensed under:
* [The GNU General Public License (**GPL**)](https://www.gnu.org/licenses/licenses.html#GPL).
* [The GNU Lesser General Public License (**LGPL**)](https://www.gnu.org/licenses/licenses.html#LGPL).

`hunspell-dictionaries-all.zip`
: This package contains all the Hunspell dictionaries that the spelling service supports. You will need to ensure that their license matches your requirements.

Hunspell dictionaries can be downloaded from other sources, but will need to be stored in the structure shown in [Configuring the spelling service to use Hunspell dictionaries](#configuringthespellingservicetousehunspelldictionaries).

## Configuring the spelling service to use Hunspell dictionaries

Hunspell support is enabled in the spelling service by configuring `ephox.spelling.hunspell-dictionaries-path`. This setting should point to a directory on the same machine (or container the service is running in a docker container). You can remove unwanted dictionaries and their associated directories, but the file structure must be as follows (including filenames):

```
├── af_ZA
│   ├── af_ZA.aff
│   ├── af_ZA.dic
│   └── license
├── da
│   ├── da.aff
│   ├── da.dic
│   └── license
├── de_DE
│   ├── de_DE.aff
│   ├── de_DE.dic
│   └── license
├── en_AU
│   ├── en_AU.aff
│   ├── en_AU.dic
│   └── license
├── en_CA
│   ├── en_CA.aff
│   ├── en_CA.dic
│   └── license
├── en_GB
│   ├── en_GB.aff
│   ├── en_GB.dic
│   └── license
├── en_medical
│   ├── en_medical.aff
│   ├── en_medical.dic
│   └── license
├── en_US
│   ├── en_US.aff
│   ├── en_US.dic
│   └── license
├── es
│   ├── es.aff
│   ├── es.dic
│   └── license
├── fr
│   ├── fr.aff
│   ├── fr.dic
│   └── license
├── hu
│   ├── hu.aff
│   ├── hu.dic
│   └── license
├── it_IT
│   ├── it_IT.aff
│   ├── it_IT.dic
│   └── license
├── mi_NZ
│   ├── license
│   ├── mi_NZ.aff
│   └── mi_NZ.dic
├── nb_NO
│   ├── license
│   ├── nb_NO.aff
│   └── nb_NO.dic
├── nl_NL
│   ├── license
│   ├── nl_NL.aff
│   └── nl_NL.dic
├── nn
│   ├── license
│   ├── nn.aff
│   └── nn.dic
├── pl
│   ├── license
│   ├── pl.aff
│   └── pl.dic
├── pt_BR
│   ├── license
│   ├── pt_BR.aff
│   └── pt_BR.dic
├── pt_PT
│   ├── license
│   ├── pt_PT.aff
│   └── pt_PT.dic
├── sv_FI
│   ├── license
│   ├── sv_FI.aff
│   └── sv_FI.dic
└── sv_SE
    ├── license
    ├── sv_SE.aff
    └── sv_SE.dic
```

The downloadable dictionary bundles provided by {{site.companyname}} will match this structure. Once the directory in this structure, set the [`hunspell-dictionaries-path` setting]({{site.baseurl}}/enterprise/server/configure/#hunspell-dictionaries-pathoptional) in the `application.conf` file. For example:

```conf
ephox {
  spelling {
    hunspell-dictionaries-path = "/opt/ephox/hunspell-dictionaries"
  }
}
```

### Missing Dictionaries

Where a Hunspell dictionary has not been provided, the spelling service will fallback to the built-in dictionaries for supported languages. For a list of supported Spell Checker languages, see: [Spell Checker Pro plugin - Supported languages]({{site.baseurl}}/plugins/premium/tinymcespellchecker/#supportedlanguages).

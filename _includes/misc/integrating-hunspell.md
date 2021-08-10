As of TinyMCE 5.9, Hunspell dictionaries are now supported by the client and server. Hunspell dictionaries can be obtained from various sources but must conform to a structure. {{site.companyname}} provides some convenient bundles that have the right structure.

There are several stages to integrating Hunspell

* obtaining the TinyMCE 5.9 Enterprise package with accompanying spelling service
* sourcing the desired Hunspell bundles
* configuring the spelling service to use the Hunspell bundles

## Downloadable Hunspell Bundles

{{site.companyname}} provides two different downloadable packages for Hunspell dictionaries. The distinction between these two packages is **entirely** license based.

### hunspell-dictionaries-approved

This package contains only Hunspell dictionaries that **do not** have these licenses:

* `GPL`
* `LGPL`

### hunspell-dictionaries-all

This package contains all the Hunspell dictionaries that the spelling service supports. You will need to ensure that their license matches your requirements.

---

You can also source your own Hunspell bundles, but you will need to ensure that they conform to the file structure outlined below.

## Configuring Spelling to Use Hunspell

Hunspell support is enabled in the spelling service by configuring `ephox.spelling.hunspell-dictionaries-path`. This setting should point to a directory on the same machine (or container if running via docker). You do not need to provide every dictionary, but if you want a dictionary to be available to the spelling service, it must conform to this file structure (including filenames).

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

The downloads provided by {{site.companyname}} will match this structure. Once you have the directory in this structure (e.g. `/opt/ephox/hunspell-dictionaries`), then you would configure it like so: 

```conf
ephox {
  spelling {
    hunspell-dictionaries-path = "/opt/ephox/hunspell-dictionaries"
  }
}
```

### Missing Dictionaries

If not all languages are provided, the spelling service will fallback to use the built-in dictionaries. Note: not all languages are supported by the pre 5.9 built-in dictionaries. You can see which languages are available by looking at the pre 5.9 languages table in {LINK HERE}.

### TinyMCE < 5.9

Earlier versions of the TinyMCE editor configured with the 5.9 spelling service will always use the built-in dictionaries, and will not have access to any new languages provided by Hunspell. 


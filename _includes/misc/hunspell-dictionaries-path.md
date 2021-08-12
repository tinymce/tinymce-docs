{{site.requires_5_9v}}

The `ephox.spelling.hunspell-dictionaries-path` element is used to define the location of the Hunspell dictionaries. When the setting is not provided, Hunspell dictionaries are not supported.

Requirements:

- The directory containing the Hunspell dictionaries must conform to the file structure defined in [Configuring the spelling service to use Hunspell dictionaries]({{site.baseurl}}/enterprise/server/self-hosting-hunspell/#configuringthespellingservicetousehunspelldictionaries).
- The directory containing the Hunspell dictionaries must be on the same server machine as the java service.

{{site.companyname}} recommends storing the Hunspell dictionaries in a similar location to the `application.conf` file. For example, if `application.conf` is in a directory called `/opt/ephox`, the Hunspell dictionaries should be stored in the subdirectory `/opt/ephox/hunspell-dictionaries`.

Example:

```conf
ephox {
  spelling {
    hunspell-dictionaries-path: "/opt/ephox/hunspell-dictionaries"
  }
}
```
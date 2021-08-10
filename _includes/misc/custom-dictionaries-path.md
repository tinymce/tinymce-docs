The `ephox.spelling.custom-dictionaries-path` element is used to define the location of the custom dictionaries. When the setting is not provided, no custom dictionaries are loaded.

Requirements:

- The directory containing the custom dictionaries must be on same server machine as the java service.
- The directory should not contain subdirectories or non-dictionary files.

{{site.companyname}} recommends storing the custom dictionaries in a similar location to the `application.conf` file. For example, if `application.conf` is in a directory called `/opt/ephox`, the dictionary files could live in a subdirectory `/opt/ephox/dictionaries`.

Example:

```conf
ephox {
  spelling {
    custom-dictionaries-path = "/opt/ephox/dictionaries"
  }
}
```
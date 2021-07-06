
{{site.requires_jsspelling_war_2_110_0v}}

Adding the `ephox.spelling.dynamic-custom-dictionaries` element and setting it to `true` instructs the spelling service to periodically check the `custom-dictionaries-path` for changes, and update the custom dictionaries accordingly. This allows updates to the custom dictionaries without restarting the spelling service. The default value is `false`.

Example:

```conf
ephox {
  spelling {
    custom-dictionaries-path = "/opt/ephox/dictionaries"
    dynamic-custom-dictionaries = true
  }
}
```
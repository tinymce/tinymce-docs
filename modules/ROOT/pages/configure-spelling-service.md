# Spelling service settings
:description: Configuration options for the Spelling premium server-side component.

The following settings for the Spelling premium server-side component are optional. These settings should be added to the `application.conf` file described in [Required configuration for the server-side components]({{site.baseurl}}/how-to-guides/premium-server-side-guide/configure-server-side-services/configure-required-services/).

## `spelling` (optional)

The Spelling service has these configurable settings:

- `hunspell-dictionaries-path`
- `custom-dictionaries-path`
- `dynamic-custom-dictionaries`

### `hunspell-dictionaries-path` (optional)

{% include misc/hunspell-dictionaries-path.md %}

### `custom-dictionaries-path` (optional)

For information on creating custom dictionaries, see: [Adding custom dictionaries - Creating custom dictionary files]({{site.baseurl}}/plugins-ref/premium/tinymcespellchecker/custom-dictionaries-for-tiny-spellchecker/#creatingcustomdictionaryfiles).

{% include misc/custom-dictionaries-path.md %}

### `dynamic-custom-dictionaries` (optional)

{% include misc/dynamic-custom-dictionaries.md %}

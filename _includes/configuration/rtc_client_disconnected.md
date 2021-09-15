### `rtc_client_disconnected`

The `rtc_client_disconnected` option can be used with the [`rtc_client_connected`](#rtc_client_connected) option to maintain a list of connected users.

{% if plugincode != "rtc" %}
Required plugin
: [Real-Time Collaboration (`rtc`)]({{site.baseurl}}/plugins/premium/rtc/)
{% endif %}

Type
: Function (Returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise))

Input parameters
: {% include rtc/rtc-client-connect-inputs.md %}

{% include rtc/rtc-client-connect-disconnect-example.md %}

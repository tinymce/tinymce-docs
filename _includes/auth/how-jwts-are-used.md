A JSON Web Token (JWT) endpoint is a service for generating and providing authorization tokens to users. These tokens can then be used to verify that submitted content was sent by an authorized user and to prevent unauthorized access.

The following diagram shows how JWTs are used:

![JSON Web Token Call Flow]({{site.baseurl}}/images/jwt-call-flow.png "JSON Web Token Call Flow")

{% if plugincode == 'tinydrive' %}
When a user opens {{pluginname}}:

1. {{pluginname}} requests a signed JWT on behalf of the user.
1. If your JWT endpoint authorizes the user, your JWT endpoint will send a JWT to {{pluginname}}, certifying the user.
1. When the user makes a request (such as adding or deleting a file), the JWT will be sent with the request to show that the user is authorized. This JWT is verified using the _public_ key stored on the {{site.cloudname}} Server.
1. The {{site.cloudname}} Server sends a response, indicating that content submission was successful (or unauthorized if necessary).
{% else %}
When a user starts a {{pluginname}} session:

1. The {{pluginname}} plugin requests a signed JWT on behalf of the user.
1. If your JWT endpoint authorizes the user, your JWT endpoint will send a JWT to the {{pluginname}} plugin, certifying the user.
1. When the user makes a request (such as adding or deleting content), the JWT will be sent with the request to show that the user is authorized. This JWT is verified using the _public_ key stored on the RTC Server.
1. The RTC Server sends the verified content to collaborating editors.
{% endif %}

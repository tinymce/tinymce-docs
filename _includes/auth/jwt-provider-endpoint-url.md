## JWT provider endpoint URL

The easiest way to setup JWT authentication for {{site.cloudname}} services is to create a JWT provider endpoint. This endpoint takes a JSON HTTP POST request and produces a JSON response with the token that the service can then use for all HTTP requests.

The following diagram explains the JWT call flow:

![JSON Web Token Call Flow]({{site.baseurl}}/images/jwt-call-flow.png "JSON Web Token Call Flow")

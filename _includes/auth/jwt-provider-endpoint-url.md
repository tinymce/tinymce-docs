## JWT provider endpoint URL

The easiest way to setup JWT authentication against {{site.cloudname}} services is to create a JWT provider endpoint. This endpoint takes a JSON HTTP POST request and produces a JSON result with the token that the service will then use for all the HTTP requests.

The following diagram explains the JWT call flow:

![JSON Web Token Call Flow]({{site.baseurl}}/images/jwt-call-flow.png "JSON Web Token Call Flow")

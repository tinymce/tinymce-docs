### `token_provider`

This setting could take one of the following two forms:

* A URL to a page or endpoint that accepts a HTTP JSON POST request, and produces a JSON structure with a valid JWT.
* A function that provides the same token through a callback, allowing a HTTP request in any desired format. The token provider function should have a success and a failure callback, where:
    - The success callback accepts an object with a `token` property containing the JWT
    - The failure callback accepts a string to present as an error message if the token could not be produced.

For information on how to create these tokens, refer to the [JWT authentication guide]({{site.baseurl}}/tinydrive/jwt-authentication/).

Type
: `String` or `Function`

Required
: yes

#### Example Using a JWT Provider URL

```js
tinydrive.{{apiname}}({
  token_provider: '/jwt' // this can be a page or endpoint like this{% include tinydrive/then_code_chunk.md %}
```

#### Example Using a JWT Provider Callback

```js
tinydrive.{{apiname}}({
  token_provider: function (success, failure) {
     success({ token: 'jwt-token' });
     // failure('Could not create a jwt token')
  }{% include tinydrive/then_code_chunk.md %}
```
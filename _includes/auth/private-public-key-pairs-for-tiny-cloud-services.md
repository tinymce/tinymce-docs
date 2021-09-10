## Add a public key to the {{site.cloudname}} API key

The {{pluginname}} Server requires a _public_ key generated from the same _private_ key that will be used on your JSON Web Token (JWT) provider endpoint. The public key(s) stored on the {{pluginname}} Server are used to ensure that content is sent by authorized users.

There are two methods for generating and adding a public key to your API key:

1. The secure key pair generator at [{{site.accountpage}} - JWT Keys]({{site.accountpageurl}}/jwt/) (recommend).
1. Generate a key pair locally and add the _public_ key to [{{site.accountpage}} - JWT Keys]({{site.accountpageurl}}/jwt/).

### Generate a key pair using the {{site.accountpage}} JWT Keys page

The [{{site.accountpage}} - JWT Keys]({{site.accountpageurl}}/jwt/) page provides a private/public key generator. This generator will store a copy of the _public_ key, and provide a downloadable file for both the public and private keys. {{site.companyname}} does not store the _private_ key and the key pair cannot be retrieved later.

### Generate a key pair locally

When generating a key pair locally, use one of the supported algorithms.
{% include auth/jwt-supported-algorithms.md %}

For instructions on generating a key pair locally, see: [Creating a private/public key pair for Tiny Cloud]({{site.baseurl}}/advanced/generate-rsa-key-pairs/).

Once a public key has been generated, add the public key to the {{site.cloudname}} API key at: [{{site.accountpage}} - JWT Keys]({{site.accountpageurl}}/jwt/).

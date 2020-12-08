## Private/public key pairs for {{site.cloudname}} services

{{site.cloudname}} services tokens use public/private RSA key pairs. The {{site.cloudname}} services only store the public key, allowing developers to have full control over the authentication.

The private/public key pair can be created on your [{{site.companyname}} - {{site.accountpage}} page]({{site.accountpageurl}}), however the public key is only stored on the {{site.accountpage}}. The private key should be downloaded and stored in your backend.

> **Important**: Keep the private key secure. Do not commit files containing the key to public repositories or websites.

For information on generating a RSA key pair locally, see: [Creating a private/public key pair for {{pluginname}}](#creatingaprivatepublickeypairfor{{plugincode}}).

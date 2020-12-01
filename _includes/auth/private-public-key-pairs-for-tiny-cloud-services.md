## Private/public key pairs for {{site.cloudname}} services

{{site.cloudname}} services tokens use public/private RSA key pairs. The {{site.cloudname}} services only store the public key, allowing developers to have full control over the authentication.

The private/public key pair can be created on your [{{site.companyname}} - {{site.accountpage}} page]({{site.accountpageurl}}), however we only store the public key on the {{site.accountpage}}. The private key should be downloaded and stored in your backend.

> **Important**: Keep the private key secure, do not commit files containing the key to public repositories or websites.

For information on generating an RSA key pair locally, see: [Creating a private/public key pair for {{pluginname}}](#creatingaprivatepublickeypairfor{{plugincode}}).
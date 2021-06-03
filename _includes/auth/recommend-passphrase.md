> **Caution**: {{site.companyname}} recommends setting a passphrase on private keys when the public key will be used in a production environment.
>
> To set a passphrase on the public key, either:
>
> - Remove the `-N ""` from the `ssh-keygen` command shown below and provide a passphrase when prompted.
> - Provide a passphrase to the `ssh-keygen` command using the `-N` option instead of an empty string.
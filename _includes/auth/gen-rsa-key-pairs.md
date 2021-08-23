The procedure for creating a key pair depends on the operating system of the host machine.

* [Linux procedure](#linux).
* [Apple macOS procedure](#applemacos).
* [Microsoft Windows procedure](#microsoftwindows).

## Linux

To create a private/public key pair on a Linux operating system:

1. [Install OpenSSL](#installingopensslonlinux).
1. [Create a private/public key pair](#createaprivatepublickeypaironlinux).
1. [Retrieve the public key](#retrievethepublickeyonlinux).

### Installing OpenSSL on Linux

The procedure for installing OpenSSL on Linux distributions varies. The installation commands for common Linux distributions have been provided here.

#### Red Hat Enterprise Linux 7 or CentOS 7

On a command line, run the following commands to install OpenSSL on:

* Red Hat Enterprise Linux 6 or 7.
* CentOS 6 or 7.

```sh
sudo yum check-update
sudo yum install openssl
```

#### Red Hat Enterprise Linux 8+, Fedora, or CentOS 8+

On a command line, run the following commands to install OpenSSL on:

* Red Hat Enterprise Linux 8 or later.
* CentOS 8 or later.
* Fedora 18 or later.

```sh
sudo dnf check-update
sudo dnf install openssl
```

#### Debian, Ubuntu, Linux Mint, or other Debian-based distributions

On a command line, run the following commands to install OpenSSL on Debian-based operating systems (such as: Debian, Ubuntu, and Linux Mint).

```sh
sudo apt update
sudo apt install openssl
```

#### SUSE Linux Enterprise Server or openSUSE

On a command line, run the following commands to install OpenSSL on openSUSE-based operating systems (such as: openSUSE and SUSE Linux Enterprise Server).

```sh
sudo zypper refresh
sudo zypper install openssl
```

### Create a private/public key pair on Linux

To create a private/public key pair:

1. On a command line, run:

    ```sh
    ssh-keygen -m PEM -t rsa -b 2048 -f <MY_KEY_PAIR_NAME>
    ```

    Where _`<MY_KEY_PAIR_NAME>`_ should be replaced with a name for the key pair.

{% include auth/passphrase-step-jwt.md %}

Two files will be created in the current directory:

* `<MY_KEY_PAIR_NAME>` - The private key.
* `<MY_KEY_PAIR_NAME>.pub` - The public key.

### Retrieve the public key on Linux

To retrieve the public key, on a command line, run:

```sh
openssl rsa -in <MY_KEY_PAIR_NAME> -outform DER -pubout | base64 -w0
```

The public key for the `<MY_KEY_PAIR_NAME>` key pair will be printed on the command line with base64 encoding.

## Apple macOS

To create a private/public key pair on a macOS operating system:

1. [Create a private/public key pair](#createaprivatepublickeypaironmacos).
1. [Retrieve the public key](#retrievethepublickeyonmacos).

### Create a private/public key pair on macOS

To create a private/public key pair:

1. Using **Finder**, open a **Terminal**.
1. On a terminal, run:

    ```sh
    ssh-keygen -m PEM -t rsa -b 2048 -f <MY_KEY_PAIR_NAME>
    ```

    Where _`<MY_KEY_PAIR_NAME>`_ should be replaced with a name for the key pair.

{% include auth/passphrase-step-jwt.md %}

Two files will be created in the current directory:

* `<MY_KEY_PAIR_NAME>` - The private key.
* `<MY_KEY_PAIR_NAME>.pub` - The public key.

### Retrieve the public key on macOS

To retrieve the public key, on a terminal, run:

```sh
openssl rsa -in <MY_KEY_PAIR_NAME> -outform DER -pubout | base64 -
```

The public key for the `<MY_KEY_PAIR_NAME>` key pair will be printed on the terminal with base64 encoding.

## Microsoft Windows

To create a private/public key pair on a Microsoft Windows operating system:

1. [Install OpenSSL](#installingopensslonmicrosoftwindows).
1. [Create a private/public key pair](#createaprivatepublickeypaironwindows).
1. [Retrieve the public key](#retrievethepublickeyonwindows).

### Installing OpenSSL on Microsoft Windows

To install OpenSSL with _Git for Windows_:

1. Download the _Windows_ package from [the Git Downloads page](https://git-scm.com/downloads).
1. Open the downloaded file `Git-<VERSION>-<ARCH>-bit.exe`, where _`<VERSION>`_ is the latest version of _Git for Windows_ and _`<ARCH>`_ is the architecture, such as _32-bit_ or _64-bit_.
1. Click **Next** on the _Information_ and _Select Destination Location_ screens.
1. Select **Check daily for Git for Windows updates** on the *Select Components* screen, then click **Next**.
1. Click **Next** on the remaining screens to accept the default settings.
1. Once the installation is complete, click **Finish**.

### Create a private/public key pair on Windows

To create a private/public key pair:

1. Open the **Start** menu (or _Windows_ menu) and open **Git Bash**.
1. On the _Git bash_ command line, run:

    ```sh
    ssh-keygen -m PEM -t rsa -b 2048 -f <MY_KEY_PAIR_NAME>
    ```

    Where _`<MY_KEY_PAIR_NAME>`_ should be replaced with a name for the key pair.

{% include auth/passphrase-step-jwt.md %}

Two files will be created in the current directory:

* `<MY_KEY_PAIR_NAME>` - The private key.
* `<MY_KEY_PAIR_NAME>.pub` - The public key.

### Retrieve the public key on Windows

To retrieve the public key, on a _Git bash_ command line, run:

```sh
openssl rsa -in <MY_KEY_PAIR_NAME> -outform DER -pubout | base64 -w0
```

The public key for the `<MY_KEY_PAIR_NAME>` key pair will be printed on the command line with base64 encoding.
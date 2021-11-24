---
layout: default
title: Containerized service deployments
description: Server-side components for premium plugins using Dockerfiles
keywords: enterprise tinymcespellchecker spell check checker pro imagetools server
---

The {{site.enterpriseversion}} server-side components can be deployed on Docker orchestration applications such as [Kubernetes](https://kubernetes.io/), [Docker Swarm](https://docs.docker.com/engine/swarm/), or [OpenShift](https://www.openshift.com/). {{site.companyname}} provides packages containing pre-configured [`Dockerfiles`](https://docs.docker.com/engine/reference/builder/) for building and deploying the {{site.enterpriseversion}} server-side components using Docker.

**Outline**

- [Containerized services for Self-hosted Enterprise deployments](#containerizedservicesforself-hostedenterprisedeployments)
- [Containerized services for individually licensed premium plugins](#containerizedservicesforindividuallylicensedpremiumplugins)

## Containerized services for Self-hosted Enterprise deployments

The following sections assist with containerizing the {{ site.productname }} services for users with licenses to the Self-hosted {{site.productname}} Enterprise bundles:

- The **Self-hosted Essential** bundle.
- The **Self-hosted Professional** bundle.
- The **Self-hosted Premium** bundle.

### Prerequisites

* The [Docker Engine](https://docs.docker.com/engine/docker-overview/) is installed and running.
* The user has Administrative or Root user access.
* The user is either:

  * Using a Linux, Unix or macOS operating system.
  * Using Windows and has access to unix command line tools using [Git for Windows](https://gitforwindows.org/), [Cygwin](https://www.cygwin.com/), or the [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10).

### Download and extract the TinyMCE Self-hosted Bundle

1. Go to **[{{site.accountpage}} Downloads]({{site.download-enterprise}})** and download the {{site.productname}} self-hosted bundle `.zip` file.
2. Open a command line and navigate to the directory containing the downloaded `.zip` file:

    - `TinyMCE-Essential_latest.zip` for **Self-hosted Essential** users.
    - `TinyMCE-Professional_latest.zip` for **Self-hosted Professional** users.
    - `TinyMCE-Premium_latest.zip` for **Self-hosted Premium** users.

    Windows Users should open a Bash command line as the Administrator User.

3. Extract the contents of the `.zip` file, such as:

    ```sh
    unzip TinyMCE-Premium_latest.zip -d tinymce-selfhosted
    ```

    The structure of the extracted files will be:

    ```sh
    tinymce-selfhosted/
    ├── tinymce/
    └── tinymce-services/
        ├── ephox-hyperlinking-docker-starter-kit.zip
        ├── ephox-hyperlinking.war
        ├── ephox-image-proxy-docker-starter-kit.zip
        ├── ephox-image-proxy.war
        ├── ephox-spelling-docker-starter-kit.zip
        ├── ephox-spelling.war
        └── version.txt
    ```

4. Navigate into the `tinymce-services` folder.

    ```sh
    cd tinymce-selfhosted/tinymce-services/
    ```

Proceed to setting up and deploying the containerized services:

- For the Enhanced Media Embed and Link Checker service, see: [Deploy the TinyMCE hyperlinking server-side component using Docker (self-hosted enterprise bundles)](#deploythetinymcehyperlinkingserver-sidecomponentusingdockerself-hostedenterprisebundles).
- For the Image Tools plugin service, see: [Deploy the TinyMCE image proxy server-side component using Docker (self-hosted enterprise bundles)](#deploythetinymceimageproxyserver-sidecomponentusingdockerself-hostedenterprisebundles).
- For the Spell Checker Pro service, see: [Deploy the TinyMCE spelling service server-side component using Docker (self-hosted enterprise bundles)](#deploythetinymcespellingserviceserver-sidecomponentusingdockerself-hostedenterprisebundles).

{% assign shbundledockerfiles = true %}

{% include docker/dockerized-hyperlinking-service.md %}

{% include docker/dockerized-image-proxy.md %}

{% include docker/dockerized-spelling-service.md %}

{% assign shbundledockerfiles = false %}

## Containerized services for individually licensed premium plugins

The following sections assist with containerizing the {{ site.productname }} services for users with licenses to self-hosted versions of:

* [_Tiny Enhanced Media Embed_]({{site.plugindirectory}}enhanced-media-embed/)
* [_Tiny Link Checker_]({{site.plugindirectory}}link-checker/)
* [_Tiny Spell Checker Pro_]({{site.plugindirectory}}spell-checker-pro/)

Select from the following:

- For the Tiny Enhanced Media Embed and Tiny Link Checker service, see: [Deploy the TinyMCE hyperlinking server-side component using Docker (individually licensed)](#deploythetinymcehyperlinkingserver-sidecomponentusingdockerindividuallylicensed).
- For the Tiny Spell Checker Pro service, see: [Deploy the TinyMCE spelling service server-side component using Docker (individually licensed)](#deploythetinymcespellingserviceserver-sidecomponentusingdockerindividuallylicensed).

{% include docker/dockerized-hyperlinking-service.md %}

{% include docker/dockerized-spelling-service.md %}
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

The following sections assist with containerizing the {{ site.productname }} services for users with licenses to the Self-hosted **{{site.productname}} Enterprise Bundle**.

### Prerequisites

* The [Docker Engine](https://docs.docker.com/engine/docker-overview/) is installed and running.
* The user has Administrative or Root user access.
* The user is either:
  * Using a Linux, Unix or macOS operating system.
  * Using Windows and has access to unix command line tools using [Git for Windows](https://gitforwindows.org/), [Cygwin](https://www.cygwin.com/), or the [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10).

### Download and extract the TinyMCE Enterprise Bundle

1. Go to **[{{ site.accountpage }}]({{ site.accountpageurl }}) > My Downloads** and download the **{{site.productname}} Enterprise Bundle**.
2. Open a command line and navigate to the directory containing `enterprise_latest.zip`. Windows Users should open a Bash command line as the Administrator User.
3. Extract the contents of `enterprise_latest.zip`, such as:

    ```sh
    unzip enterprise_latest.zip -d tinymce-enterprise
    ```
    The structure of the extracted files will be:
    ```sh
    tinymce-enterprise/
    ├── moxiemanager-net/
    ├── moxiemanager-php/
    ├── readme.txt
    ├── tinymce/
    ├── tinymce-4/
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
    cd tinymce-enterprise/tinymce-services/
    ```

Proceed to setting up and deploying the containerized services:

- For the Enhanced Media Embed and Link Checker service, see: [Deploy the TinyMCE hyperlinking server-side component using Docker (self-hosted enterprise bundle)](#deploythetinymcehyperlinkingserver-sidecomponentusingdockerself-hostedenterprisebundle).
- For the Image Tools plugin service, see: [Deploy the TinyMCE image proxy server-side component using Docker (self-hosted enterprise bundle)](#deploythetinymceimageproxyserver-sidecomponentusingdockerself-hostedenterprisebundle).
- For the Spell Checker Pro service, see: [Deploy the TinyMCE spelling service server-side component using Docker (self-hosted enterprise bundle)](#deploythetinymcespellingserviceserver-sidecomponentusingdockerself-hostedenterprisebundle).

{% assign shbundledockerfiles = true %}

{% include configuration/dockerized-hyperlinking-service.md %}

{% include configuration/dockerized-image-proxy.md %}

{% include configuration/dockerized-spelling-service.md %}

{% assign shbundledockerfiles = false %}

## Containerized services for individually licensed premium plugins

The following sections assist with containerizing the {{ site.productname }} services for users with licenses to self-hosted versions of:

* [_Tiny Enhanced Media Embed_](https://apps.tiny.cloud/products/enhanced-media-embed/)
* [_Tiny Link Checker_](https://apps.tiny.cloud/products/link-checker/)
* [_Tiny Spell Checker Pro_](https://apps.tiny.cloud/products/spell-checker-pro/)

Select from the following:

- For the Tiny Enhanced Media Embed and Tiny Link Checker service, see: [Deploy the TinyMCE hyperlinking server-side component using Docker (individually licensed)](#deploythetinymcehyperlinkingserver-sidecomponentusingdockerindividuallylicensed).
- For the Tiny Spell Checker Pro service, see: [Deploy the TinyMCE spelling service server-side component using Docker (individually licensed)](#deploythetinymcespellingserviceserver-sidecomponentusingdockerindividuallylicensed).

{% include configuration/dockerized-hyperlinking-service.md %}

{% include configuration/dockerized-spelling-service.md %}
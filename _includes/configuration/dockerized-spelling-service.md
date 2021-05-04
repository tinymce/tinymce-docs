{% if shbundledockerfiles == false %}

### Deploy the TinyMCE spelling service server-side component using Docker (individually licensed)

{% elsif shbundledockerfiles == true %}

### Deploy the TinyMCE spelling service server-side component using Docker (self-hosted enterprise bundles)

{% endif %}
The TinyMCE spelling service server-side component can be deployed using Docker or a container orchestration application such as Kubernetes. {{site.companyname}} provides a pre-configured package for creating a Spelling Service Docker image.

{% include misc/admon_dont-push-docker-images.md %}

{% if shbundledockerfiles == false %}

#### Prerequisites

- The [Docker Engine](https://docs.docker.com/engine/docker-overview/) is installed and running.
- The user has Administrative or Root user access.
- The user is either:
  - Using a Linux, Unix or macOS operating system.
  - Using Windows and has access to unix command line tools using [Git for Windows](https://gitforwindows.org/), [Cygwin](https://www.cygwin.com/), or the [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10).

{% endif %}

#### Procedure

The following procedure covers downloading, configuring, building and testing the {{site.productname}} Spelling Service Docker image.
{% if shbundledockerfiles == true %}

> **Note**: This procedure assumes that a {{ site.productname }} self-hosted enterprise bundle has been extracted as described in [Download and extract the TinyMCE Self-hosted Bundle](#downloadandextractthetinymceself-hostedbundle).

4.  Navigate into the `tinymce-services` folder.

    ```sh
    cd tinymce-selfhosted/tinymce-services/
    ```

5.  Extract the contents of `ephox-spelling-docker-starter-kit.zip`, such as:

    ```sh
    unzip ephox-spelling-docker-starter-kit.zip -d spelling-service-dockerfile
    ```

    The structure of the extracted files will be:

    ```sh
    spelling-service-dockerfile/
    ├── config
    │   └── ephox-spelling-docker-env.conf
    ├── docker-entrypoint.sh
    ├── Dockerfile
    └── generate-jetty-start.sh
    ```

6.  Copy `ephox-spelling.war` into the directory containing the extracted files, such as:

    ```sh
    cp ephox-spelling.war spelling-service-dockerfile/
    ```

7.  Navigate into the `spelling-service-dockerfile` folder.

    ```sh
    cd spelling-service-dockerfile
    ```

    {% elsif shbundledockerfiles == false %}

8.  Go to **[{{ site.accountpage }}]({{ site.accountpageurl }}) > My Downloads** and download _Tiny Spell Checker Pro_.
9.  Open a command line and navigate to the directory containing `ephox-spelling_<version>.zip`. Windows Users should open a Bash command line as the Administrator User.
10. Extract the contents of `ephox-spelling_<version>.zip`, such as:

    ```sh
    unzip ephox-spelling_<version>.zip -d tinymce-spelling-service
    ```

11. Navigate into the extracted folder.

    ```sh
    cd tinymce-spelling-service
    ```

5.  Extract the contents of `ephox-spelling-docker-starter-kit.zip`, such as:

    ```sh
    unzip ephox-spelling-docker-starter-kit.zip
    ```

    The structure of the current directory (`tinymce-spelling-service/`) will be:

    ```sh
    tinymce-spelling-service/
    ├── config
    │   └── ephox-spelling-docker-env.conf
    ├── docker-entrypoint.sh
    ├── Dockerfile
    ├── ephox-spelling-docker-starter-kit.zip
    ├── ephox-spelling.war
    ├── generate-jetty-start.sh
    ├── license.txt
    ├── readme.txt
    └── version.txt
    ```

    {% endif %}

12. Set the permissions on the extracted files to executable.

    ```sh
    chmod +x *.sh
    ```

13. _Optional_: Edit the `http` configuration settings in `config/ephox-spelling-docker-env.conf`. The configurable settings are in the `http` section of the file. For example:

    ```conf
    http {
      max-connections = 100
      max-connections-per-host = 10
      max-redirects = 10
      max-retries = 3
      request-timeout-seconds = 10
      trust-all-cert = false
      websphere = {
        use-ssl-config = true
      }
    }
    ```

    For information on the `http` configuration setting, see: [Configure server-side components - `http`]({{site.baseurl}}/enterprise/server/configure/#httpoptional).

14. _Optional_: Configure the service to use a HTTP proxy by updating `config/ephox-spelling-docker-env.conf`. See:
    [Configure server-side components]({{site.baseurl}}/enterprise/server/configure/).
15. _Optional_: Add a custom dictionary, as described in [Adding custom dictionaries]({{site.baseurl}}/enterprise/check-spelling/custom/).
16. Create an `origins.env` file in the same directory as the `Dockerfile`, and specify the Hypertext Transfer Protocol (HTTP) and domain name of sites hosting the TinyMCE editor (`allowed-origins`). Up to 99 origins can be added without editing `config/ephox-spelling-docker-env.conf`.

    For example:

    ```conf
    ORIGIN0=example.net
    ORIGIN1=example
    ORIGIN2=http://example.org
    ```

    For information on `allowed-origins`, see: [Configure server-side components - allowed-origins]({{site.baseurl}}/enterprise/server/configure/#allowed-originsrequired).

17. As the root user or Administrator, build the {{site.productname}} Spelling Service Docker image using the following command:

    ```sh
    docker build -t tinymce-spelling-service .
    ```

18. As the root user or Administrator, deploy the service using the following command:

    ```sh
    docker run -d -p 8082:8080 --env-file origins.env tinymce-spelling-service
    ```

    Where:

    - `-p 8082:8080` maps the container port `8080` to local port `8082`.
    - `--env-file origins.env` adds the allowed origins to the container.

19. To verify that the Docker container is deployed and the spelling service is running, execute:

    ```sh
    curl http://localhost:8082/ephox-spelling/
    ```

    The response from the `curl` command should be:

    ```sh
    Spelling service is running.
    ```

The {{site.productname}} Spelling Service Docker image can now be pushed to a private container registry for deployment on [Kubernetes](https://kubernetes.io/), [Docker Swarm](https://docs.docker.com/engine/swarm/) or [OpenShift](https://www.openshift.com/).

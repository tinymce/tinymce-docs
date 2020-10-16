### Deploy the TinyMCE image proxy server-side component using Docker (self-hosted enterprise bundles)

The TinyMCE image proxy server-side component can be deployed using Docker or a container orchestration application such as Kubernetes. {{site.companyname}} provides a pre-configured package for creating a Image Proxy Docker image.

> **Warning**: Do not push this docker image to a publicly accessible container registry. Doing so will constitute a breach of the [{{site.companyname}} Self-Hosted Software License Agreement]({{site.legalpage}}/tiny-self-hosted-software-license-agreement-enterprise/).

#### Procedure

The following procedure covers downloading, configuring, building and testing the {{site.productname}} Image Proxy Docker image.

> **Note**: This procedure assumes that a {{ site.productname }} self-hosted enterprise bundle has been extracted as described in [Download and extract the TinyMCE Self-hosted Bundle](#downloadandextractthetinymceself-hostedbundle).

4. Navigate into the `tinymce-services` folder.

    ```sh
    cd tinymce-selfhosted/tinymce-services/
    ```

5. Extract the contents of `ephox-image-proxy-docker-starter-kit.zip`, such as:

    ```sh
    unzip ephox-image-proxy-docker-starter-kit.zip -d image-proxy-service-dockerfile
    ```

6. Copy `ephox-image-proxy.war` into the directory containing the extracted files, such as:

    ```sh
    cp ephox-image-proxy.war image-proxy-service-dockerfile/
    ```

4. Navigate into the `image-proxy-service-dockerfile` folder.

    ```sh
    cd image-proxy-service-dockerfile
    ```

5. Set the permissions on the extracted files to executable.

    ```sh
    chmod +x *.sh
    ```

6. _Optional_: Edit the `image-proxy` configuration setting in `config/ephox-image-proxy-docker-env.conf`. The configurable setting is in the `image-proxy` section of the file. For example:

    ```conf
    image-proxy {
      image-size = 10000000 // 10MB in bytes
    }
    ```

    For information on the `image-proxy` configuration setting, see: [Configure server-side components - `image-proxy`]({{site.baseurl}}/enterprise/server/configure/#image-proxyoptional).

1. _Optional_: Edit the `http` configuration settings in `config/ephox-image-proxy-docker-env.conf`. The configurable settings are in the `http` section of the file. For example:

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

1. _Optional_: Configure the service to use a HTTP proxy by updating `config/ephox-image-proxy-docker-env.conf`. See: [Configure server-side components]({{site.baseurl}}/enterprise/server/configure/).
7. Create an `origins.env` file in the same directory as the `Dockerfile`, and specify the Hypertext Transfer Protocol (HTTP) and domain name of sites hosting the TinyMCE editor (`allowed-origins`). Up to 99 origins can be added without editing `config/ephox-image-proxy-docker-env.conf`.

    For example:

    ```conf
    ORIGIN0=example.net
    ORIGIN1=example
    ORIGIN2=http://example.org
    ```

    For information on `allowed-origins`, see: [Configure server-side components - allowed-origins]({{site.baseurl}}/enterprise/server/configure/#allowed-originsrequired).

8. As the root user or Administrator, build the {{site.productname}} Image Proxy Docker image using the following command:

    ```sh
    docker build -t tinymce-image-proxy-service .
    ```

9. As the root user or Administrator, deploy the service using the following command:

    ```sh
    docker run -d -p 8081:8080 --env-file origins.env tinymce-image-proxy-service
    ```

    Where:
    * `-p 8081:8080` maps the container port `8080` to local port `8081`.
    * `--env-file origins.env` adds the allowed origins to the container.

10. To verify that the Docker container is deployed and the image proxy is running, execute:

    ```sh
    curl http://localhost:8081/ephox-image-proxy/
    ```

    The response from the `curl` command should be:

    ```sh
    Image proxy service is running.
    ```

The {{site.productname}} Image Proxy Docker image can now be pushed to a private container registry for deployment on [Kubernetes](https://kubernetes.io/), [Docker Swarm](https://docs.docker.com/engine/swarm/) or [OpenShift](https://www.openshift.com/).
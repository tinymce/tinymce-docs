# jointiny/tiny-cloud-docs-linkchecker (jointiny is org within ephox account)
# Images build from this Dockerfile are used in Wercker to build
# our webiste and documentation

FROM mesosphere/linkchecker
MAINTAINER Tiny, is-inbox@tiny.cloud

# pkgs
RUN \
  apt-get update && \
  apt-get install --no-install-recommends -y -q \
    awscli \
    && \
  apt-get clean autoclean && \
  apt-get autoremove -y && \
  rm -rf /var/lib/{apt,dpkg,cache,log}/

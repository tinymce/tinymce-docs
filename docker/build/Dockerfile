# jointiny/tiny-cloud-docs-build (jointiny is org within ephox account)
# Images build from this Dockerfile are used in Wercker to build
# our webiste and documentation

FROM debian:stable
MAINTAINER Tiny, is-inbox@tiny.cloud

ENV DEBIAN_FRONTEND noninteractive

# pkgs
RUN \
  apt-get update && \
  apt-get install --no-install-recommends -y -q \
    ca-certificates \
    curl \
    g++ \
    git \
    make \
    python \
    awscli \
    ruby \
    ruby-dev \
    rubygems \
    patch \
    sed \
    ssh \
    unzip \
    zlib1g-dev \
    && \
  curl -fsSL https://deb.nodesource.com/setup_14.x | bash - && \
  apt-get install nodejs && \
  apt-get clean autoclean && \
  apt-get autoremove -y && \
  rm -rf /var/lib/{apt,dpkg,cache,log}/

RUN gem install bundle

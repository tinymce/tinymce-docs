# jointiny/tiny-cloud-docs-build (jointiny is org within ephox account)
# Images build from this Dockerfile are used in Wercker to build
# our webiste and documentation

FROM ubuntu
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
    nodejs \
    npm \
    awscli \
    ruby \
    ruby-dev \
    rubygems \
    patch \
    ssh \
    unzip \
    zlib1g-dev \
    && \
  apt-get clean autoclean && \
  apt-get autoremove -y && \
  rm -rf /var/lib/{apt,dpkg,cache,log}/

RUN npm install -g npm@6

RUN gem install bundle

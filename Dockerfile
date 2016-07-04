# boilerplate
FROM ephox/node:4.2.2
MAINTAINER ephoxServices, ops@textbox.io

ENV DEBIAN_FRONTEND noninteractive

# pkgs
RUN \
  apt-get update && \
  apt-get install --no-install-recommends -y -q \
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

RUN gem install bundle

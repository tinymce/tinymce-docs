# boilerplate
FROM kilianciuffolo/node:4.2.2
MAINTAINER kilian@lukibear.com

ENV DEBIAN_FRONTEND noninteractive

# pkgs
RUN \
  apt-get update && \
  apt-get install --no-install-recommends -y -q \
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

WORKDIR /tinymce-docs
COPY Gemfile ./
COPY Gemfile.lock ./

RUN bundle install --deployment

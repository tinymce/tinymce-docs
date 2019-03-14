# TinyMCE documentation

[![wercker status](https://app.wercker.com/status/4d4c743635332430f9d25acae1be5218/s/master "wercker status")](https://app.wercker.com/project/bykey/4d4c743635332430f9d25acae1be5218)

This project serves as the documentation for TinyMCE, as you see on 
[https://www.tiny.cloud/docs](httsp://www.tiny.cloud/docs). If you have any 
modifications you wish to contribute, fork this project, make the changes 
and submit a pull request. You will need to sign the contributors license 
agreement, which will be emailed to you upon creating the pull request.

This project is built using [Jekyll](https://jekyllrb.com/).

# Working on TinyMCE documentation

## Prerequisites

You need the following installed on your computer:

1. Ruby version 2 or later.

2. Bundler. This can be installed via:

```
gem install bundler
```
  
3. g++. On Fedora, for instance, run:

```
sudo dnf install gcc-c++
```

4. Docker

5. make

## First time set up

Once you have the prerequisites

Then retrieve and init the project:

    git clone git@github.com:tinymce/tinymce-docs.git
    cd tinymce-docs
    ./_scripts/init.sh

## Run development version

    ./_scripts/serve.sh

Navigate to [http://127.0.0.1:4000/](http://127.0.0.1:4000/)

## Run with moxiedoc
    git clone git@github.com:tinymce/tinymce-docs.git
    cd tinymce-docs
    ./_scripts/init.sh
    ./_scripts/api-reference.sh 
    ./_scripts/serve.sh

## Run with moxiedoc, with a local version of tinymce checked out
    git clone git@github.com:tinymce/tinymce-docs.git
    cd tinymce-docs
    ./_scripts/init.sh
    ./_scripts/api-reference-local.sh <tinymce src folder path>
    ./_scripts/serve.sh

# Codepens

Codepens can be created using the "codepen.html" include, e.g:

    {% include codepen.html id="basic-example" %}
    
There are several options for this include file - please see codepen.html for details.

## Overriding the tinymce URL in codepens

All codepens usually get their tinymce.min.js URL from the `codepen_url` setting in the _config.yml file. 
However, there are some instances where you wish to override this, e.g.

 - You want to push/deploy a branch for a new feature that's only on the 'dev' channel.
 - You want to run the site locally, but test out the codepens in a different channel.

To help with this, there are two mechanisms for overriding the tinymce.min.js URL.

 1. Set `codepen_url` in `_config-local-override.yml`.  
    - This will override the `codepen_url` setting in `config.yml`. 
    - This file is *not* intended to be checked in. 
    - This option changes the URL for all codepens.
    
 2. Set the `tinymce_url_override` setting when including `codepen.html`.
    - This is useful if you want to deploy the develop branch for a feature only in the 'dev' channel.
    - This only overrides the URL for one codepen.
    - Don't use this in more than one codepen on a page.
    - Don't use this long-term - when the feature is fully rolled-out, use the standard channel.
    - See `codepen.html` for details.
    
Note: Jekyll is pretty bad at automatically reloading code when you're playing with include files.
Sometimes you need to restart the server.  

## Contributing to TinyMCE

If you would like to contribute to the TinyMCE project please read 
the [Contributor's Guide](https://www.tiny.cloud/docs/advanced/contributing-docs/)

See the [TinyMCE Docs Wiki](https://github.com/tinymce/tinymce-docs/wiki) for additional information, 
including information on troubleshooting the "first time set up" process.

## Why is HTML minification disabled?

It's very slow and the minifier is using regex to parse HTML. We may add a different minifier in the future.


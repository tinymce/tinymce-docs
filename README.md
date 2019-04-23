# TinyMCE documentation

[![wercker status](https://app.wercker.com/status/4d4c743635332430f9d25acae1be5218/s/master "wercker status")](https://app.wercker.com/project/bykey/4d4c743635332430f9d25acae1be5218)

This project serves as the documentation for TinyMCE, as you see on 
[https://www.tiny.cloud/docs](https://www.tiny.cloud/docs). If you have any 
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

5. `make` - From the root folder, run `_scripts/init.sh` and `_scripts/serve.sh` as instructed below .

## Notes for Windows users

If you are a Windows user, follow these steps to work on TinyMCE documentation:

1. Install [Ruby+Devkit 2.4.5-1 (x64)](https://rubyinstaller.org/downloads/) and no later.

2. Run the following commands from a terminal to install Bundler:

```
gem install bundler
```
```
bundle install
```
3. From the root folder, run `_scripts/init.sh` and `_scripts/serve.sh` as instructed below . 

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

## Contributing to TinyMCE

If you would like to contribute to the TinyMCE project please read 
the [Contributor's Guide](https://www.tiny.cloud/docs/advanced/contributing-docs/)

See the [TinyMCE Docs Wiki](https://github.com/tinymce/tinymce-docs/wiki) for additional information, 
including information on troubleshooting the "first time set up" process.

## Why is HTML minification disabled?

It's very slow and the minifier is using regex to parse HTML. We may add a different minifier in the future.


## Working with Codepens

While working with Codepens, please be aware that adding comments in the single line format (`//`) to the *.js files will break the related demonstration due to parsing issues. To create comments, use this format:

```
<!--
    This is a comment.
-->
```
Or
```
/*
    This is a comment.
*/
```
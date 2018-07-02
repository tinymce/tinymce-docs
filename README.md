# TinyMCE documentation

[![wercker status](https://app.wercker.com/status/4d4c743635332430f9d25acae1be5218/s/master "wercker status")](https://app.wercker.com/project/bykey/4d4c743635332430f9d25acae1be5218)

This project serves as the documentation for TinyMCE, as you see on tinymce.com. If you have any modifications you wish to contribute, fork this project, make the changes and submit a pull request. You will need to sign a contributors license agreement, a link will be sent via email.

We use Jekyll 3, mainly because of [incremental](https://jekyllrb.com/docs/configuration/) building feature. You should have at least Ruby 2 to run it (check your version: `ruby -v`).

## Prerequisites

You need the following installed on your computer:

1. Ruby.

2. Bundler. This can be installed via:

```
gem install bundler
```
  
3. g++. On Fedora, for instance, run:

```
sudo dnf install gcc-c++
```

4. make

## First time set up

Once you have the prerequisites

Then retrieve and init the project:

    git clone git@github.com:tinymce/tinymce-docs.git
    cd tinymce-docs
    ./_scripts/init.sh

## Run development version

    ./_scripts/serve.sh

Navigate to [http://127.0.0.1:4000/](http://127.0.0.1:4000/)

## Contributing to TinyMCE

If you would like to contribute to the TinyMCE project please read 
the [Contributor's Guide](https://www.tinymce.com/docs/advanced/contributing-docs/)

See the [TinyMCE Docs Wiki](https://github.com/tinymce/tinymce-docs/wiki) for additional information, 
including init error handling.

## Why is HTML minification disabled?

It's very slow and the minifier is using regex to parse HTML. We may add a different minifier in the future.

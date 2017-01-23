## TinyMCE documentation

[![wercker status](https://app.wercker.com/status/4d4c743635332430f9d25acae1be5218/s/master "wercker status")](https://app.wercker.com/project/bykey/4d4c743635332430f9d25acae1be5218)

This project serves as the documentation for TinyMCE, as you see on tinymce.com, if you have any modifications you wish to contribute, fork this project, make the changes and submit a pull request. You will need to sign a contributors license agreement, a link will be sent via email.

We use Jekyll 3, mainly because of [incremental](https://jekyllrb.com/docs/configuration/) building feature. You should have at least Ruby 2 to run it (check your version: `ruby -v`).

### First time setup

Make sure you have `bundler` installed:

    $ gem install bundler
    
Then retrieve and init the project:

    $ git clone git@github.com:tinymce/tinymce-docs.git
    $ cd tinymce-docs
    $ ./_scripts/init.sh

### Error Handling on Ubuntu

This section handles the initialization errors on Ubuntu.

If you get this error when running `init.sh`:

> An error occurred while installing json (2.0.2), and Bundler cannot continue.
  Make sure that `gem install json -v '2.0.2'` succeeds before bundling.

When you run `sudo gem install json -v '2.0.2'` as indicated, if this error is found:

> ERROR:  Error installing json:
> ERROR: Failed to build gem native extension.
  current directory: /var/lib/gems/2.3.0/gems/json-2.0.2/ext/json/ext/generator
  /usr/bin/ruby2.3 -r ./siteconf20170116-6174-1d8kq6j.rb extconf.rb
  mkmf.rb can't find header files for ruby at /usr/lib/ruby/include/ruby.h

Then you install `sudo apt-get install ruby-dev`.

You probably also need to run `sudo apt-get install zlib1g-dev` before `sudo gem install nokogiri`.

### Run development version

    $ ./_scripts/serve.sh

Navigate to http://127.0.0.1:4000/

### Contribute to TinyMCE

If you would like to contribute to the TinyMCE project please read our contributor's guide:
https://www.tinymce.com/docs/advanced/contributing-docs/

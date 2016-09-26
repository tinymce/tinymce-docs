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

### Run development version

    $ ./_scripts/serve.sh

Navigate to http://127.0.0.1:4000/

### Contribute to TinyMCE

If you would like to contribute to the TinyMCE project please read our contributor's guide:
https://www.tinymce.com/docs/advanced/contributing-docs/

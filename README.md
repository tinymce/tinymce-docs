## TinyMCE documentation

### First time setup

    $ git clone git@github.com:tinymce/tinymce-docs.git
    $ cd tinymce-docs
    $ sudo gem install bundle
    $ bundle install
    $ cp _config-local.sample.yml _config-local.yml

Edit `_config-local.yml` accordingly with your workflow, you may want to set `shared_baseurl: "https://tinymce.com" for example in order to use the correct styles and CSS.

### Run development version

    $ jekyll serve --config _config.yml,_config-local.yml

Navigate to http://127.0.0.1:4000/

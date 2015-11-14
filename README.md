## TinyMCE documentation

### First time setup

    $ git clone git@github.com:tinymce/tinymce-docs.git
    $ cd tinymce-docs
    $ sudo gem install bundle
    $ bundle install
    $ cp _config-local.sample.yml _config-local.yml
    $ curl http://beta.tinymce.com/_docs/menu.html > _includes/menu.html
    $ curl http://beta.tinymce.com/_docs/footer.html > _includes/footer.html
    $ curl http://beta.tinymce.com/_docs/favicons.html > _includes/favicons.html
    $ echo [] > _data/nav_api.json

Edit `_config-local.yml` accordingly with your workflow, you may want to set `shared_baseurl: "http://beta.tinymce.com"` for example in order to use the correct styles and CSS.

### Run development version

    $ jekyll serve --config _config.yml,_config-local.yml

Navigate to http://127.0.0.1:4000/

### Contribute to TinyMCE

If you would like to contribute to the TinyMCE project please read our contributor's guide:
http://www.tinymce.com/docs/advanced/contributing-to-open-source/

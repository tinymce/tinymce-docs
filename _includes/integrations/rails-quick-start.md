
{% if productSource == 'cloud' %}
The {{site.cloudname}} can be used to integrate {{site.productname}} into Ruby on Rails projects.
This procedure creates a [basic Ruby on Rails application](https://guides.rubyonrails.org/getting_started.html) containing a {{site.productname}} editor.

{% include integrations/rails-basic-proj.md %}

3. Add the following lines within the `<head>` element of `app/views/layouts/application.html.erb` to automatically include {{site.productname}} on pages using the `application` layout:

    ```html
    <script src="{{ site.cdnurl }}" referrerpolicy="origin"></script>
    <script>
      tinymce.init({
        selector: '.tinymce',
        plugins: 'lists link image table code help wordcount'
      });
    </script>
    ```

4. Create a `<textarea>` with the initial content `Hello, World!` for {{site.productname}} by adding the following lines to `app/views/welcome/index.html.erb`:

    ```html
    <%= text_area_tag :content, "Hello, World!", :class => "tinymce" %>
    ```

7. On a command line, from the project's root directory, start the Ruby on Rails server.
    ```sh
    rails server
    ```

The page containing the {{site.productname}} will be accessible at `http://localhost:<port>/` (default: http://localhost:3000/).
{% elsif productSource == 'zip' %}
Self-hosted instances of {{site.productname}} can be integrated into Ruby on Rails projects.
This procedure creates a [basic Ruby on Rails application](https://guides.rubyonrails.org/getting_started.html) containing a {{site.productname}} editor.

{% include integrations/rails-basic-proj.md %}

3. Add the following lines within the `<head>` element of `app/views/layouts/application.html.erb` to automatically include {{site.productname}} on pages using the `application` layout:

    ```html
    <script src="/path/to/tinymce.min.js"></script>
    <script>
      tinymce.init({
        selector: '.tinymce',
        plugins: 'lists link image table code help wordcount'
      });
    </script>
    ```

4. Create a `<textarea>` with the initial content `Hello, World!` for {{site.productname}} by adding the following lines to `app/views/welcome/index.html.erb`:

    ```html
    <%= text_area_tag :content, "Hello, World!", :class => "tinymce" %>
    ```

5. On a command line, from the project's root directory, start the Ruby on Rails server.

    ```sh
    rails server
    ```

The page containing the {{site.productname}} will be accessible at `http://localhost:<port>/` (default: http://localhost:3000/).

For information on self-hosting {{site.productname}}, see: [Installing {{ site.productname }}]({{site.baseurl}}/general-configuration-guide/advanced-install/).
{% else %}
{{site.thirdPartyInteg}}

Sam Pohlenz maintains the [{{site.productname}} Ruby on Rails gem](https://github.com/spohlenz/tinymce-rails) for integrating {{site.productname}} into the Ruby on Rails asset pipeline.
This procedure creates a [basic Ruby on Rails application](https://guides.rubyonrails.org/getting_started.html) containing a {{site.productname}} editor.

{% include integrations/rails-basic-proj.md %}

1. Using a text editor, open the project `Gemfile` and add the line:

    ```sh
    gem 'tinymce-rails'
    ```

    Do not add this line within a `group` - `end` element.

1. Install the `tinymce-rails` gem using `bundle`:

    ```sh
    bundle install
    ```

2. Create a {{site.productname}} configuration file.

   1. Create the `config/tinymce.yml` file:

      ```sh
      touch config/tinymce.yml
      ```

   2. Add a {{site.productname}} configuration. The configuration must be in the [YAML format](https://yaml.org/spec/1.2/spec.html), such as:

      ```yml
      height: 500
      menubar: false
      toolbar:
        - undo redo | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | removeformat | help
      plugins:
        - insertdatetime media
        - table paste code help wordcount
      ```

3. Add the following lines within the `<head>` element of `app/views/layouts/application.html.erb` to automatically include {{site.productname}} on pages using the `application` layout:

    ```html
    <%= tinymce_assets %>
    <script type="text/javascript" src="/assets/tinymce.js"></script>
    ```

4. Create a `<textarea>` with the initial content `Hello, World!` for {{site.productname}} by adding the following lines to `app/views/welcome/index.html.erb`:

    ```html
    <%= text_area_tag :content, "Hello, World!", :class => "tinymce" %>
    <%= tinymce %>
    ```

5. On a command line, from the project's root directory, start the Ruby on Rails server.

    ```sh
    rails server
    ```

The page containing the {{site.productname}} will be accessible at `http://localhost:<port>/` (default: http://localhost:3000/).

For information on creating advanced configurations for the third-party TinyMCE Ruby on Rails integration, visit the project on GitHub: [Rails Integration for TinyMCE](https://github.com/spohlenz/tinymce-rails).
{% endif %}
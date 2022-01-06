## Prerequisites

This procedure requires the following programs:
* [Node.js](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/)
* [Ruby](https://www.ruby-lang.org/)
* [SQLite 3+](https://sqlite.org/index.html)
* [Ruby on Rails](https://rubyonrails.org/)

## Procedure
On a command line or command prompt:

1. Create a new Ruby on Rails project.

    ```sh
    rails new myTinySite
    ```

2. Navigate into the project directory.

    ```sh
    cd myTinySite/
    ```

3. Create a new Rails controller, such as:

    ```sh
    rails generate controller Welcome index
    ```
    This creates a controller named `Welcome` with an action named `index`.

4. Set the project home page to `index`.

   1. Using a text editor, open `config/routes.rb`, such as:

      ```sh
      nano config/routes.rb
      ```

   2. Add `root 'welcome#index'` to set `index` as the project home page. For example:

      ```ruby
      Rails.application.routes.draw do
        get 'welcome/index'

        root 'welcome#index'
      end
      ```
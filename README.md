# TinyMCE Documentation

This project maintains the documentation for TinyMCE at
[https://www.tiny.cloud/docs-4x/](https://www.tiny.cloud/docs-4x/). If you have any
modifications you wish to contribute, fork this project, make the changes
and submit a pull request. You will need to sign the contributors license
agreement, which will be emailed to you upon creating the pull request.

This project is built using [Jekyll](https://jekyllrb.com/).

## Contributing to the TinyMCE Documentation

If you would like to contribute to the TinyMCE project please read the TinyMCE Documentation Contributor's Guide at either:

- [TinyMCE Documentation - Contributor's Guide](https://www.tiny.cloud/docs-4x/advanced/contributing-docs/).
- [GitHub - Contributing to the TinyMCE developer documentation](https://github.com/tinymce/tinymce-docs-4x/blob/develop/CONTRIBUTING.md#contributing-to-the-tinymce-developer-documentation).

## Working on TinyMCE documentation

### Compiling or building the documentation

The following procedure assists with building (or compiling) the documentation locally. Tiny recommends testing and reviewing changes locally prior to submitting a pull request.

#### Installing Prerequisites

##### Linux users

You need the following programs installed on your computer:

- Ruby version 2 or later. To verify the installed version, run:
  ```
  ruby --version
  ```

1. Install git, g++, `make`, and the zlib development files. For example:
    - On Fedora, run:

      ```
      sudo dnf install git-all gcc-c++ make zlib-devel
      ```
    - On Ubuntu, Debian or their derivatives, run:
      ```
      sudo apt install git gcc cpp make zlib1g-dev
      ```

2. Install Ruby Nokogiri: https://nokogiri.org/
    ```
    sudo gem install nokogiri
    ```

3. Install Ruby Bundler. Install using:
    ```
    sudo gem install bundler
    ```

4. (optional) Docker

##### Windows users

If you are a Windows user, follow these steps to work on TinyMCE documentation:

1. Install [git for Windows](https://gitforwindows.org/).

2. Install [Ruby+Devkit](https://rubyinstaller.org/downloads/).

3. Run the following command on a command prompt to install Ruby Bundler:
    ```
    gem install bundler
    ```

##### Mac OS users

1. Ruby version 2 or later is required. Verify the pre-installed version, using:
    ```
    ruby --version
    ```

2. Install Ruby Bundler, using:
    ```
    gem install bundler
    ```

#### First time set up

Once you have installed any missing prerequisites, in a terminal or on a command prompt:

1. Clone the git repository:
    ```
    git clone git@github.com:tinymce/tinymce-docs.git
    ```

2. Change directory into the cloned git repository:
    ```
    cd tinymce-docs
    ```

3. Run the initialization script to install dependencies and create the required local files in the git repository:
    ```
    ./_scripts/init.sh
    ```

#### Run the development version of the documentation

To create a development version of the documentation, run:

```
./_scripts/serve.sh
```

Allow the `serve.sh` script to run in the background while you are working on the TinyMCE documentation.

To view the documentation; in a web browser, navigate to [http://localhost:4000/](http://localhost:4000/).

> **Note**: The development version of the documentation will update automatically when you save changes locally.

#### TinyMCE API documentation

The TinyMCE API documentation is maintained within the [TinyMCE project repository](https://github.com/tinymce/tinymce) and compiled for the documentation site using [MoxieDoc](https://github.com/tinymce/moxiedoc).

##### Prerequisites

- [NodeJS](https://nodejs.org/en/).
- The TinyMCE documentation repository set up for development as described in [Installing Prerequisites](#installing-prerequisites) and [First time set up](#first-time-set-up).

##### Installing MoxieDoc

To install MoxieDoc, run:

```
npm install -g git://github.com/tinymce/moxiedoc.git
```

##### Run the development version of the documentation for the current TinyMCE version

1. Download the TinyMCE version in the `.api-version` file in this project's root directory and extract the API documentation using:
```
    ./_scripts/api-reference.sh
```

2. Start the development server using:
```
    ./_scripts/serve.sh
```

##### Run the development version of the documentation for a local TinyMCE repository

1. Extract the API documentation from a local copy of the TinyMCE repository using:
```
    ./_scripts/api-reference-local.sh <path/to/the/tinymce/repo>
```
2. Start the development server using:
```
    ./_scripts/serve.sh
```
3. To include updates made to the TinyMCE API documentation in the TinyMCE repository, run the `api-reference-local` script:
```
    ./_scripts/api-reference-local.sh <path/to/the/tinymce/repo>
```

>**Note**: The development server does not need to be stopped prior to running the `api-reference-local` script.

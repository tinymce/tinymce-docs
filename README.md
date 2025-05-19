# TinyMCE Documentation

This project maintains the official documentation for TinyMCE, available at [https://www.tiny.cloud/docs](https://www.tiny.cloud/docs). If you have modifications or improvements to contribute, fork this repository, make the necessary changes, and submit a pull request (PR). A contributor's license agreement (CLA) must be signed before your contribution can be merged. This agreement will be sent via email when you create a PR.

This project is built using [Antora](https://antora.org/), a powerful documentation site generator that supports multi-repository collaboration, content modularization, and flexible versioning.

## Contributing to the TinyMCE Documentation

To contribute to the TinyMCE documentation project, please review the following resources:

- [TinyMCE Documentation - Contributor's Guide](https://www.tiny.cloud/docs/configure/contributing-docs/)
- [GitHub - How to contribute to TinyMCE’s documentation](https://github.com/tinymce/tinymce-docs/blob/release/docs-6/CONTRIBUTING.md#how-to-contribute-to-tinymces-documentation)

These guides cover contribution guidelines, project structure, style conventions, and best practices for submitting changes.

## Setting Up Your Development Environment

To contribute effectively, you should set up a local development environment. This allows you to preview and test your changes before submitting a PR.

### Prerequisites

Ensure the following software is installed:

- [Node.js](https://nodejs.org/en/) (version 22.9 or lower)
- [Yarn](https://yarnpkg.com/)
- Git

### Cloning the Repository

Clone the TinyMCE documentation repository:

```bash
git clone git@github.com:tinymce/tinymce-docs.git
cd tinymce-docs
yarn
```

### Running the Development Server

To build and serve the documentation locally:

```bash
yarn build
yarn start-dev
```

Visit [http://127.0.0.1:4000](http://127.0.0.1:4000) to view the documentation. The server supports hot-reloading, so changes will automatically reflect when you save your work.

> **Note:** The `yarn build` command generates the API reference documentation from the TinyMCE source code. To adjust the API version, edit the `API_VERSION` variable in the `scripts/api-reference.sh` file. Alternatively, use `yarn build-local` to build using a local TinyMCE instance:

Example:

```bash
yarn build-local ../path/to/local/tinymce
```

### API Documentation

The TinyMCE API documentation is compiled and generated using [MoxieDoc](https://github.com/tinymce/moxiedoc) from the core [TinyMCE project repository](https://github.com/tinymce/tinymce). To update the published API docs:

1. Update the `.api-version` file.
2. Run `yarn build`:

   * Running `yarn build` downloads the TinyMCE package specified in `.api-version` and generates new API reference content from source.
3. Commit the changes.

> **Warning:** The API documentation should not be edited manually. Always generate it from source to ensure accuracy.

## Live Demos

Live demos can be added to the `modules/ROOT/examples/live-demos` directory. Reference them in your documentation with:

```asciidoc
liveDemo::{sub-directory-name}[]
```

### Overriding the tinymce URL in Live Demos

By default, live demos load TinyMCE from the URL specified in the `tinymce_live_demo_url` attribute in the `antora.yml` file. This can be overridden for specific use cases:

* Testing a new feature on the `dev` channel.
* Running the site locally while testing live demos on a different channel.

To help with this, there are two mechanisms for overriding the `tinymce.min.js` URL:

1. **Global Override:**
   To change the TinyMCE URL for all live demos, modify the `tinymce_live_demo_url` attribute in `antora-playbook-dev.yml`:

   ```yaml
   asciidoc:
     attributes:
       tinymce_live_demo_url: https://your-custom-url.com/tinymce.min.js
   ```

2. **Per-Demo Override:**  Use the `script_url_override` attribute:
   To override the URL for a specific live demo:

   ```asciidoc
   liveDemo::{sub-directory-name}[script_url_override='https://your-custom-url.com/tinymce.min.js']
   ```

> **Caution:** Use this sparingly. Avoid using different URLs for multiple demos on the same page, and remember to revert these changes once the feature is fully released.

---
layout: default
title: Django integration
title_nav: Django
description: Django TinyMCE component.
keywords: integration integrate Django django django-tinymce python
---

{% include /misc/admon_third_party_integration.md %}

For information on adding {{site.productname}} to a Django project, try using the Python-based `django-tinymce` package. For information on setting up `django-tinymce`, see: [the django-tinymce Documentation](https://django-tinymce.readthedocs.io/en/latest/index.html).
To use an newer version of {{site.productname}}, use the {{site.cloudname}} or statically host a manually downloaded copy of {{site.productname}}.

## Using the Tiny Cloud with django-tinymce

To load {{site.productname}} from the {{site.cloudname}}, update the project’s `settings.py` file:

* Set `TINYMCE_JS_URL` to the {{site.cloudname}} CDN.
* Ensure `TINYMCE_COMPRESSOR` is set to `False`.

For example:

```py
TINYMCE_JS_URL = '{{site.cdnurl}}'
TINYMCE_COMPRESSOR = False
```

## Using self-hosted TinyMCE with django-tinymce

If you'd rather download and install the script manually:

1. Get the package from [{{site.productname}} Downloads]({{site.gettiny}}/).
1. Unzip the package and move the `'path/to/{{site.prodnamecode}}/'` directory into the django project.
1. Add a URL path to the `{{site.prodnamecode}}` directory.
1. Add the relevant configuration setting:

    * If you do not need the `TINYMCE_COMPRESSOR` (`TINYMCE_COMPRESSOR = False`), add `TINYMCE_JS_URL` to the project’s `settings.py` file pointing to `tinymce/tinymce.min.js`.
        Such as:

        ```py
        TINYMCE_JS_URL = os.path.join(MEDIA_URL, "path/to/tinymce/tinymce.min.js")
        TINYMCE_COMPRESSOR = False
        ```

    *  If you do need the `TINYMCE_COMPRESSOR` (`TINYMCE_COMPRESSOR = TRUE`), add `TINYMCE_JS_ROOT` to the project’s `settings.py` file pointing to the `tinymce/` root directory.
        Such as:

        ```py
        TINYMCE_JS_ROOT = os.path.join(MEDIA_URL, "path/to/tinymce")
        TINYMCE_COMPRESSOR = True
        ```

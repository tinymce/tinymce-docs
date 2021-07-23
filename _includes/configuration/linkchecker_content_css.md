### `linkchecker_content_css`

After a link is checked for validity, a result of the validation is added to it via `data-mce-linkchecker-status` attribute. There are three possible outcomes of the validation: `valid`, `invalid` and `unknown`. Link Checker visually reflects `invalid` outcome by injecting the following CSS styles into the editor:

```css
a[data-mce-linkchecker-status="invalid"] {
    outline-color: rgba(231, 76, 60, 0.25);
    background-color: rgba(231, 76, 60, 0.25)
}

a[data-mce-linkchecker-focus="true"] {
    outline: 1px solid rgba(231, 76, 60, 0.75)
}
```

`data-mce-linkchecker-focus` attribute is set to *true* every time a dedicated context menu is shown on a link. This only happens for `invalid` links.

It is possible to replace or extend those styles, by providing a URL to custom stylesheet via `linkchecker_content_css` option.


## Tab order

The tab order of the elements in a page, including {{site.productname}}, should be configured by setting the [`tabindex` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) on the relevant elements. The browser will then natively handle the tab order.

To configure `tabindex` for the {{site.productname}} editor, set the attribute on the target element for the editor, or the equivalent if using a framework. 
In iframe (classic editor) mode, {{site.productname}} copies the `tabindex` attribute from the target element to the editor's iframe, to allow this to work correctly.
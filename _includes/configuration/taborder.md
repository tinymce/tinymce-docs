## Tab order

Tab order of the elements in a page, including TinyMCE, should be configured by setting [`tabindex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) on the relevant elements. The browser will then natively handle the tab order.

To configure `tabindex` for the TinyMCE editor, set it on the target element for the editor, or the equivalent if using a framework. 
In iframe mode, TinyMCE copies the `tabindex` attribute from the target element to the editor's iframe, to allow this to work correctly.
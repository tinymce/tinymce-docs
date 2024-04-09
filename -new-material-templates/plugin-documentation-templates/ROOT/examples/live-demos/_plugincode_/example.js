/*

This file is not normally required.

Sometimes, however, a plugin, or a particular feature of a plugin,
requires a back-end service.

In these cases, creating a working demo requires setting up an
emulated version of this service.

And `example.js` is part of this emulation.

`index.js` still runs the live demo.

But `example.js` is what is displayed in the *js* tab of the
live-demo interface on the built docs site.

So `example.js` has to be a working equivalent to `index.js` *if*
`index.js` was wired up in a standard way, to its required back-end
service.

NB: there is one UX consequence of setting up demos to work in
these cases. The *Edit on CodePen* tab does not — and cannot —
present in the documentation.

The initial setup of these ‘includes-an-emulated-back-end’ examples
will almost certainly include significant initial input from the
plugin’s developer.

*/

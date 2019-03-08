---
layout: default
title: Implement TinyMCE in Ruby on Rails
---

In your RubyOnRails application you can just invoke TinyMCE [in the standard way](https://www.tiny.cloud/docs-3x/TinyMCE3x@Installation/), in the layout file, or just for the views in which you want to use TinyMCE. A good place for TinyMCE files may be `public/javascripts/tiny_mce` directory, but you are free to choose any other location.

The plugins listed below will just make this task even easier.

The most crucial thing to keep in mind is to include the TinyMCE javascript library before the scriptaculous library in your layout or view (see [the scriptaculous wiki](http://wiki.script.aculo.us/scriptaculous/show/tinymce)). The best order seems to be:

1.  prototype.js
2.  tiny_mce.js
3.  scriptaculous.js
4.  tinyMCE.init({ ...options... })

## tiny_mce plugin

To integrate TinyMCE into a Ruby on Rails application, there is a [tiny_mce](http://github.com/kete/tiny_mce) plugin originally created by Blake Watters, and maintained by KieranP. This plugin makes TinyMCE available to all textareas for the controllers and actions you choose. For an installation guide, see the README documentation of the plugin at [http://github.com/kete/tiny_mce](http://github.com/kete/tiny_mce) (hosted on Github). It includes full installation, upgrade, and configuration documentation that should get you started. If you have any questions or problems, please file a ticket at [http://kete.lighthouseapp.com/projects/14744-tiny_mce/tickets](http://kete.lighthouseapp.com/projects/14744-tiny_mce/tickets) and someone will help ASAP.

## Links

*   [Github hosting](http://github.com/kete/tiny_mce)
*   [Ticketing Support System](http://kete.lighthouseapp.com/projects/14744-tiny_mce/tickets)

## tinymce_hammer plugin

[tinymce_hammer](http://tinymcehammer.lanalot.com/) is a Ruby on Rails plugin (requires Rails 2.3+) that provides

*   Easy, simple installation and usage, provides form helpers and form builder methods
*   Fast, provides a single combined javascript for loading TinyMCE javascript
*   Flexible, provide lazy loading support

## Links

*   [Project Website (tutorials, downloads, etc)](http://tinymcehammer.lanalot.com/)
*   [Github hosting](http://github.com/trevorrowe/tinymce_hammer)
*   [Mailing list](http://groups.google.com/group/tinymce_hammer/topics)

## See also:

*   [Configure tinyMCE Spellcheck with rails app](http://webonrails.com/2008/08/08/configuring-tinymce-spellchecker-with-rails-application/)
*   Integrating TinyMCE with the [ajaxscaffold generator](http://www.ajaxscaffold.com/), see [blog.katipo.co.nz](http://blog.katipo.co.nz/?p=24) (possibly outdated)
*   Although TinyMCE does some HTML sanitizing, it's not advisable to rely on that because it can be easily circumvented (remember, it's just a client-side script). Better use something like technoweenie's [white_list plugin](http://svn.techno-weenie.net/projects/plugins/white_list/). (possibly outdated)
*   [spellchecking](http://www.gusto.com/mike/blog/post202) ([forum thread](http://archive.tinymce.com/forum/viewtopic.php?id=5060)) (Outdated)
*   [GZip compressor](http://garbageburrito.com/home/tinymce_gzip_compressor_ruby_on_rails_plugin) ([forum thread](http://archive.tinymce.com/forum/viewtopic.php?id=4765)) (Outdated)
*   [integration with scriptaculous's InPlaceEdit](http://dev.rubyonrails.org/ticket/5263) ([forum thread](http://archive.tinymce.com/forum/viewtopic.php?id=3702)) (Outdated)

---
layout: default
title: force_br_newlines
---

**This option is deprecated as of 3.5 use `forced_root_blocks: false` instead to control `p` vs `br` behavior.**

If you set this option to true, TinyMCE will force BR elements on newlines instead of inserting paragraphs. This option is set to false by default since paragraphs is a much better concept. BR elements should only be used when you really have to (mostly never). Also as of 3.x the [forced_root_block](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@forced_root_block/) option is enabled by default so if you really want to disable paragraphs disable that one as well.

## Example of usage of the force_br_newlines option:

```js
tinyMCE.init({
  force_br_newlines : true,
  force_p_newlines : false,
  forced_root_block : '' // Needed for 3.x
});
```

## Example of paragraph no margin css

This CSS will reduce the space between (lines) paragraphs to zero. It will look more like the default line spacing in popular Word processors.

```css
p {margin: 0; padding: 0;}
```

## Post processing away P tags before output to Flash/E-mail

See also: [Reasons why not to use BR elements for linebreaks](https://www.tiny.cloud/docs-3x/extras/TinyMCE3x@TinyMCE_FAQ/)

## Perl Example

Note that this code does not rely upon regular expressions for processing the HTML, since you really cannot rely upon them to do the job. For a detailed discussion, see How do I remove HTML from a string? in perlfaq9; at the terminal of a machine with Perl, type perldoc -q html.

```perl
#!/usr/bin/perl
use strict;
use warnings;
use HTML::TokeParser;
use CGI ();

my $cgi = CGI->new;

# Test by uncommenting next line and changing the value:
# $cgi->param(content => "your html here for testing only");

# Replace 'content' with name of your TinyMCE-edited field:
my $p = HTML::TokeParser->new( $cgi->param('content') );
my $output = "";
while (my $token = $p->get_token){
  if ($token->[0] eq 'S'){
    if ($token->[1] eq 'p'){
      $output .= '<br/>';
    } else {
      $output .= $token->[4];
    }
  }
  elsif ($token->[0] eq 'E'){
    if ($token->[1] eq 'p'){
      $output .= '<br/>';
    } else {
      $output .= $token->[2];
    }
  }
  elsif ($token->[0] eq 'PI'){
    $output .= $token->[2];
  }
  else {
    $output .= $token->[1];;
  }
}

# Your new doc is in $output
warn $output;
__END__
```

## PHP Example

```php
// Get content from TinyMCE
$content = $_REQUEST['content'];
$content = preg_replace('/<p[^>]*>/', '', $content); // Remove the start <p> or <p attr="">
$content = preg_replace('/</p>/', '<br />', $content); // Replace the end
echo $content; // Output content without P tags
```

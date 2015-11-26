Jekyll::Converters::Markdown::RedcarpetParser::CommonMethods.module_eval do
  def add_code_tags(code, lang)
    code = code.to_s
    code = code.sub(/<pre>/, "<pre class=\"prettyprint\"><code class=\"language-#{lang}\" data-lang=\"#{lang}\">")
    code = code.sub(/<\/pre>/,"</code></pre>")
  end
end

require 'nokogiri'

# Adds linkable anchors for documentation headers
class Kramdown::Converter::Html
  def convert_header(el, indent)
    text = el.options[:raw_text]
    level = el.options[:level]
    anchor = Nokogiri::HTML(text).text.gsub(/[^a-zA-Z0-9\-_]/, "").downcase

    "<a class=\"anchor\" id=\"#{anchor}\"></a>" +
        "<h#{level}><a class=\"anchorable\" href=\"##{anchor}\">#{text}</a></h#{level}>"
  end
end

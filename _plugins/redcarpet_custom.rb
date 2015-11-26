require 'redcarpet'
require 'nokogiri'

class Redcarpet::Render::HTML
  def header(text, level)
    anchor = Nokogiri::HTML(text).text.gsub(/[^a-zA-Z0-9\-_]/, "").downcase

    "<a class=\"anchor\" id=\"#{anchor}\"></a>" +
    "<h#{level}><a class=\"anchorable\" href=\"##{anchor}\">#{text}</a></h#{level}>"
  end
end

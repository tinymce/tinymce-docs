require 'cgi'

module Jekyll
  module FilterCode
    def filter_code(input)
      CGI.escapeHTML(input.gsub(/\t/, "  ")) if !input.nil?
    end
  end
end

Liquid::Template.register_filter(Jekyll::FilterCode)

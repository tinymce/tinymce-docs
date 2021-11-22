require 'cgi'

module Jekyll
  module URLEncode
    def url_encode(input)
      input = CGI.escape(input)
    end
  end
end

Liquid::Template.register_filter(Jekyll::URLEncode)

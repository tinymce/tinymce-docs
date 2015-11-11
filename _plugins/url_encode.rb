require 'uri'

module Jekyll
  module URLEncode
    def url_encode(input)
      input = URI.escape(input, Regexp.new("[^#{URI::PATTERN::UNRESERVED}]"))
    end
  end
end

Liquid::Template.register_filter(Jekyll::URLEncode)

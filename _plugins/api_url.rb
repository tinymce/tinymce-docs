module Jekyll
  module APIURLFilter
    def api_url(input)
      input.gsub(/\./, "/").downcase if !input.nil?
    end
  end
end

Liquid::Template.register_filter(Jekyll::APIURLFilter)

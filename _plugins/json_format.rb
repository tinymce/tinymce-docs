module Jekyll
  module JSONFormatFilter
    def json_format(input)
      input = JSON.parse(input).to_json
    end
  end
end

Liquid::Template.register_filter(Jekyll::JSONFormatFilter)

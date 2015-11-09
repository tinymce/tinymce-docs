module Jekyll
  module NoNLFilter
    def no_nl(input)
      input.gsub(/\n/, " ")if !input.nil?
    end
  end
end

Liquid::Template.register_filter(Jekyll::NoNLFilter)

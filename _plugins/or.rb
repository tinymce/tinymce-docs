module Jekyll
  module ORFilter
    def or(a, b)
      a = a || b
    end
  end
end

Liquid::Template.register_filter(Jekyll::ORFilter)

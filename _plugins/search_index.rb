module Jekyll
  module SearchIndexFilter
    def search_index(input)
      input.gsub(/[^a-zA-Z0-9]+/, "-").gsub(/^-|-$/, "").downcase
    end
  end
end

Liquid::Template.register_filter(Jekyll::SearchIndexFilter)

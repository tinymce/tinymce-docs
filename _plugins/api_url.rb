module Jekyll
  module APIURLFilter
    def api_url(input)
      fullName = input.downcase

      if fullName == "tinymce"
        "tinymce/root_tinymce"
      else
        namespace = fullName.gsub(/\.[^.]+$/, "")
        namespace + "/" + fullName if !input.nil?
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::APIURLFilter)

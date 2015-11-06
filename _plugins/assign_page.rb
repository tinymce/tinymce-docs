module Jekyll
  module Tags
    class AssignPage < Liquid::Assign
    TrailingIndex = /index\.html$/

      def page_hash(context)
        reg = context.registers
        site = reg[:site]
        if reg[:page_hash].nil?
          reg[:page_hash] = Hash[ (site.posts + site.pages).collect {
            |x| [x.url.sub(TrailingIndex, ''), x]}]
        end
        return reg[:page_hash]
      end

      # Assign's Initializer stores variable name
      # in @to and the value in @from.
      def render(context)
        url = @from.render(context)
        page = page_hash(context)[url.sub(TrailingIndex, '')]
        raise ArgumentError.new "No page with url #{url}." if page.nil?
        context.scopes.last[@to] = page
        ''
      end
    end
  end
end

Liquid::Template.register_tag('assign_page', Jekyll::Tags::AssignPage)

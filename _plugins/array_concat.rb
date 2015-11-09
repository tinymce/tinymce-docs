module Jekyll
  module ArrayConcatFilter
    def array_concat(arr1, arr2)
      result = []
      result.concat(arr1)
      result.concat(arr2)
      arr1 = result
    end
  end
end

Liquid::Template.register_filter(Jekyll::ArrayConcatFilter)

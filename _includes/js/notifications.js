(function () {

    if (typeof window.$ === "undefined") {
        return;
    }

    function getPrefixURL(type) {
        switch(type) {
            case "blog":
                return "https://www.tiny.cloud/blog/";
                break;
            default:
                return "https://www.tiny.cloud/blog/";
        }
    }

    function setResultToNewsBar(latest) {
        $(".tiny-news-text").text(latest.text);
        var newsLink = $(".tiny-news-link");
        newsLink.attr("href", latest.url);
        newsLink.text(latest.urlText);
        if (latest.type !== undefined) {
            var prefix = $(".tiny-news-prefix");
            prefix.text("TINY " + latest.type.toUpperCase() + " > ");
            prefix.attr("href", getPrefixURL(latest.type));
        }
    }

    function fetchLatestNews() {
        var url = "https://cdn.jsdelivr.net/npm/contentful@latest/dist/contentful.browser.min.js";
        $.getScript( url, function() {
            var client = contentful.createClient({
                space: "sn6g75ou164i",
                accessToken: "BptrxEYsjeOYo1RSx_-qF_UVkn5HDs_MeHpG1g0wJx4"
            });
            client.getEntries({
                order: "-sys.createdAt",
                limit: 1,
                content_type: "news"
            }).then(function(entries) {
                setResultToNewsBar(entries.items[0].fields);
            }).catch(function(err) {
                console.log(err);
            });
        });
    }
    $(document).ready(fetchLatestNews);
})();

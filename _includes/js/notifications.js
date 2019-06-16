(function () {

    if (typeof window.fetch === "undefined" ||
        typeof window.$ === "undefined" ||
        typeof window.localStorage === "undefined"
    ) {
        return;
    }

    function setNews(latest) {
        $(".tiny-news-text").text(latest.text);
        var newsLink = $(".tiny-news-link");
        newsLink.attr("href", latest.url);
        newsLink.text(latest.urlText);
    }

    function go() {
        var storedNews = localStorage.getItem("latestTinyNews");
        console.log("storedNews", storedNews);
        if (storedNews === null) {
            console.log("no news in storage, fetch some");
            var url = "https://cdn.jsdelivr.net/npm/contentful@latest/dist/contentful.browser.min.js";
            $.getScript( url, function() {
                var client = contentful.createClient({
                    space: "sn6g75ou164i",
                    accessToken: "BptrxEYsjeOYo1RSx_-qF_UVkn5HDs_MeHpG1g0wJx4"
                });
                
                client.getEntries({ order: "-sys.createdAt", limit: 10, content_type: "news" }).then(function(entries) {
                    console.log("entries", entries);
                    setNews(entries.items[0].fields);
                }).catch(function(err) {
                    console.log(err)
                });
            });  
        } else {
            console.log("news was stored");
            var latest = JSON.parse(storedNews).items[0].fields;
            setNews(latest);
        }
    }
    $(document).ready(go);
})();
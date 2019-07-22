(function () {

  if (typeof window.fetch === "undefined" ||
      typeof window.$ === "undefined"
  ) {
    return;
  }

  var ENDPOINT = isStagingEnvironment()
      ? "https://apps.staging.tiny.cloud/tiny/order/"
      : "https://apps.tiny.cloud/tiny/order/";

  function fetchCart() {
    fetch(ENDPOINT, {
      credentials: "include",
      method: "GET",
      mode: "cors"
    }).then(function (response) {
      return response.json()
    }).then(function (response) {
      if (response.itemCount > 0) {
        showStoreButtons();
      }
    }).catch(function(error) {
      console.error('Fetch error:', error);
    });
  }

  function isStagingEnvironment() {
    return window.location.hostname.indexOf("staging") >= 0 ||
        window.location.hostname.indexOf("localhost") >= 0;
  }

  function showStoreButtons() {
    $(".tiny-news-store").css("visibility", "visible");
    $(".store-button-mobile").css({
      "visibility": "visible",
      "height": "inherit",
      "padding": "20px 0"
    });
  }

  $(document).ready(fetchCart);
})();

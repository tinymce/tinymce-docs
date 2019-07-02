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
        showStoreButtons(response.itemCount)
      }
    });
  }

  function isStagingEnvironment() {
    return window.location.hostname.indexOf("staging") >= 0 ||
        window.location.hostname.indexOf("localhost") >= 0;
  }

  function showStoreButtons(count) {
    $(".tiny-news-store").css("visibility", "unset");
    $("#nav-cart-button").text("Cart (" + count + ")");
  }

  $(document).ready(fetchCart);
})();
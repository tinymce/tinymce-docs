(function () {

  var ENDPOINT = isStagingEnvironment()
      ? "https://apps.staging.tiny.cloud/tiny/order/"
      : "https://apps.tiny.cloud/tiny/order/";

  function fetchByXhr() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', ENDPOINT);
    xhr.withCredentials = true;
    xhr.send();
    xhr.onload = function() {
      if (xhr.status != 200) {
        console.log("Error", xhr.status, xhr.statusText);
      } else {
        console.log("response", xhr.response, JSON.parse(xhr.response));
        if (JSON.parse(xhr.response).itemCount > 0) {
          showStoreButtons();
        }
      }
    };
    xhr.onerror = function() {
      console.log("Request failed");
    };
  }

  function isStagingEnvironment() {
    return window.location.hostname.indexOf("staging") >= 0 ||
        window.location.hostname.indexOf("localhost") >= 0;
  }

  function showStoreButtons() {
    $(".tiny-news-store").css("visibility", "unset");
    $("#nav-cart-button").text("Cart");
  }

  $(document).ready(fetchByXhr);
})();

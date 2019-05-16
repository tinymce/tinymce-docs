(function () {

    if (typeof window.fetch === "undefined" ||
        typeof window.$ === "undefined" ||
        typeof window.localStorage === "undefined"
    ) {
        return;
    }

    var ENDPOINT = isStagingEnvironment()
        ? "https://apps.staging.tiny.cloud/tiny/user/me/"
        : "https://apps.tiny.cloud/tiny/user/me/";

    var LS_KEY_VALUE = "tiny:docs:isAuthKey";
    var LS_KEY_EXPIRE = "tiny:docs:isAuthKeyExpiry";
    var EXPIRE_TIMEOUT = 15 * 60 * 1000;

    var $getTinyBtn = $(".header-get-tiny-button, .header-get-tiny-button-mobile");
    var $myAccountBtn = $(".header-my-account-button, .header-my-account-button-mobile");

    function getIsAuthData() {

        var isAuthFromStorage = localStorage.getItem(LS_KEY_VALUE) === "true";
        var isAuthExpireFromStorage = parseInt(localStorage.getItem(LS_KEY_EXPIRE), 10);

        if (isAuthFromStorage && isAuthExpireFromStorage > Date.now()) {
            return renderMyAccountButton();
        }

        fetch(ENDPOINT, {
            credentials: "include",
            method: "GET",
            mode: "cors"
        }).then(function (response) {
            return response.json()
        }).then(function (response) {
            localStorage.setItem(LS_KEY_VALUE, response.isAuthenticated);
            localStorage.setItem(LS_KEY_EXPIRE, Date.now() + EXPIRE_TIMEOUT);
            if (response.isAuthenticated) {
                renderMyAccountButton();
            }
        });
    }

    function isStagingEnvironment() {
        return window.location.hostname.indexOf("staging") ||
            window.location.hostname.indexOf("localhost");
    }

    function renderMyAccountButton() {
        $getTinyBtn.hide();
        $myAccountBtn.css({ display: "block"});
    }

    $(document).ready(getIsAuthData);
})();
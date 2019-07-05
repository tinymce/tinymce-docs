(function () {

    if (typeof window.fetch === "undefined" ||
        typeof window.$ === "undefined" ||
        typeof window.localStorage === "undefined"
    ) {
        return;
    }

    var WP_ENDPOINT = isStagingEnvironment()
        ? "https://apps.staging.tiny.cloud/tiny/user/me/"
        : "https://apps.tiny.cloud/tiny/user/me/";

    var AUTH0_ENDPOINT = isStagingEnvironment()
        ? "https://portal.staging.tiny.cloud/v1/user"
        : "https://portal.tiny.cloud/v1/user";

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
    
        var wordpressResponse = {};
    
        fetch(WP_ENDPOINT, {
                credentials: "include",
                method: "get",
                mode: "cors",
            })
            .then(function (response) {
                return response.json();
            })
            .then(function (wordpressAuthResponse) {
                wordpressResponse = wordpressAuthResponse;
    
                return fetch(AUTH0_ENDPOINT, {
                    credentials: "include",
                    method: "get",
                    mode: "cors",
                });
            })
            .then(function (response) {
                return response.json();
            })
            .then(function (auth0Response) {
                /**
                 * Just don't change the button if you can't verify the identity.
                 */
                if (!auth0Response.public || !auth0Response.public.username) {
                    return;
                }
    
                if (!wordpressResponse.isAuthenticated || !wordpressResponse.username) {
                    return;
                }
    
                var isAuthenticated =
                    wordpressResponse.username === auth0Response.public.username &&
                    wordpressResponse.isAuthenticated;
    
                localStorage.setItem(LS_KEY_VALUE, isAuthenticated);
                localStorage.setItem(LS_KEY_EXPIRE, Date.now() + EXPIRE_TIMEOUT);
    
                if (isAuthenticated) {
                    renderMyAccountButton();
                }
            });
    }

    function isStagingEnvironment() {
        return window.location.hostname.indexOf("staging") >= 0 ||
            window.location.hostname.indexOf("localhost") >= 0;
    }

    function renderMyAccountButton() {
        $getTinyBtn.hide();
        $myAccountBtn.css({ display: "block"});
    }

    $(document).ready(getIsAuthData);
})();
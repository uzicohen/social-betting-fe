'use strict';

var TOKEN_KEY = 'jwtToken';

var getJwtToken = function () {
    return localStorage.getItem(TOKEN_KEY);
};

var setJwtToken = function (token) {
    localStorage.setItem(TOKEN_KEY, token);
};

var removeJwtToken = function () {
    localStorage.removeItem(TOKEN_KEY);
};

var createAuthorizationTokenHeader = function () {
    var token = getJwtToken();
    if (token) {
        return {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/x-www-form-urlencoded'
        };
    } else {
        return {
            'Content-Type': 'application/x-www-form-urlencoded'
        };
    }
}

module.exports = { getJwtToken, setJwtToken, removeJwtToken, createAuthorizationTokenHeader };
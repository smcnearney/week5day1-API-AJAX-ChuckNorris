'use strict';

function get(url) {
    return fetch(url)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            return data;
        })
        .catch(function (error) {
            console.error("ERROR:", error);
            return error;
        });    
}
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fecthData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange = (() => {
            if(xhttp.readyState === 4){
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : new Error('Error ' + url_api);
            }
        });
        xhttp.send();
    });
}

module.exports = fecthData;
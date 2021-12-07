function webServiceRequest(url, data) {
    // Build URL parameters from data object.
    let params = "";
    // For each key in data object...
    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            if (params.length == 0) {
                // First parameter starts with '?'
                params += "?";
            }
            else {
                // Subsequent parameter separated by '&'
                params += "&";
            }

            //Encoding replaces the problem characters with escape sequences
            let encodedKey = encodeURIComponent(key);
            let encodedValue = encodeURIComponent(data[key]);

            params += encodedKey + "=" + encodedValue;
        }
    }
    //Create an instance of the element for script
    let script = document.createElement('script');
    //Add the instance of element together with the parameters 
    script.src = url + params;
    //Appends a node as the last child of a node
    document.body.appendChild(script);
}



function dataReverseGeo(lng, lat, callbackName) {

    //Define a variable to hold the data needed to be requested
    let data = {
        q: `${lat}+${lng}`,
        countrycode: "MY",
        key: "46a38f2f952f4a65a8340cb1d569a8db",
        callback: callbackName
    }

    //Generate request to the web service
    webServiceRequest(`https://api.opencagedata.com/geocode/v1/json`, data);
}


function myFunction() {
    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;
    
        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');
    
            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
        return false;
    };
    
    var humidity = getUrlParameter('humidity');
    var temp = getUrlParameter('temp');
    var ambientnoise = getUrlParameter('ambientnoise');
    
    document.getElementById("test-humidity").innerHTML = humidity;
    document.getElementById("test-temp").innerHTML = temp;
    document.getElementById("test-ambientnoise").innerHTML = ambientnoise;
    }
let theLocation = ""

function getLocation() {
    let lat = 0;
    let long = 0;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
          lat = position.coords.latitude;
          long = position.coords.longitude;
      });
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }

    dataReverseGeo(long, lat, "showData");

}

function showData(result)
{
    let data = result.results[0];
    location = data.formatted;
}
  

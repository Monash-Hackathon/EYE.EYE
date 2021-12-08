let theLocation = ""

function getLocation() {
    let lat = 0;
    let long = 0;
      navigator.geolocation.getCurrentPosition(position => {
          lat = position.coords.latitude;
          long = position.coords.longitude;
      });
    dataReverseGeo(long, lat, "showData");

}

function showData(result)
{
    let data = result.results[0];
    theLocation = data.formatted;
}
  
getLocation();

updateData(LOC_KEY, theLocation);

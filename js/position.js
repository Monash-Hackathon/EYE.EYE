let theLocation = ""

function getLocation() {
    let lat = 0;
    let long = 0;
      navigator.geolocation.getCurrentPosition(position => {
          lat = position.coords.latitude;
          long = position.coords.longitude;
          dataReverseGeo(position.coords.longitude, position.coords.latitude, "showData");
      });

}

function showData(result)
{
    let data = result.results[0];
    theLocation = data.formatted;
}
  
getLocation();


setTimeout(() => {updateData(LOC_KEY, theLocation)}, 3000);

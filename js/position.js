
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
    if (data != undefined)
    {
        updateData(LOC_KEY, data.formatted)
    }
    else
    {
        setTimeout(() => {updateData(LOC_KEY, data.formatted)}, 3000);
    }
}
  
getLocation();



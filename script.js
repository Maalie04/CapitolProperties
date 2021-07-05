
var ApplicationKey = b2f0d79ea0mshef6e2494270b43ap1807fejsn68dd68d4adae;


var usefrHandler = function (event) {
    event.preventDefault();
    var cityName = $(".city-search").val().trim();

    if(cityName === ""){
        return;
    }
    console.log(cityName);
    // console.log(tempeture.value)

    searchWeatherApi(cityName);
    cityArray.push(cityName);
    localStorage.setItem("cities", JSON.stringify(cityArray));
};



// url: 'https://real-estate-usa.p.rapidapi.com/api/v1/properties'
// params: {postal_code: '94105', offset: '0', limit: '200'},
// headers: {
//   'x-rapidapi-key': 'b2f0d79ea0mshef6e2494270b43ap1807fejsn68dd68d4adae',
//   'x-rapidapi-host': 'real-estate-usa.p.rapidapi.com';

var ApplicationKey = b2f0d79ea0mshef6e2494270b43ap1807fejsn68dd68d4adae;


var userHandler = function (event) {
    event.preventDefault();
    
    localStorage.setItem("", JSON.stringify());
};


function searchZipCode() {

    var requestUrl = 

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

        

            weatherTemp = data.temp;
            console.log(weatherTemp);
            var card = $("<div>").addClass("card").attr("style", "background-color: blue");
            var cardTitle = $("<h2>").addClass("cardTitle").text(data.name);
            card.append(cardTitle);
            $(".searched-cities").append(card);

            // console.log(data.temp)
            fiveDay(data.coord.lat, data.coord.lon);
        });
}
function showListingData(data){
    var {temp, wind, humidity, uvi} = data.current;



}

// url: 'https://real-estate-usa.p.rapidapi.com/api/v1/properties'
// params: {postal_code: '94105', offset: '0', limit: '200'},
// headers: {
//   'x-rapidapi-key': 'b2f0d79ea0mshef6e2494270b43ap1807fejsn68dd68d4adae',
//   'x-rapidapi-host': 'real-estate-usa.p.rapidapi.com';
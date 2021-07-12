var cityArray = JSON.parse(localStorage.getItem("cities")) || [];
console.log(localStorage)




 $("#search-btn").on("click", function(event){
    event.preventDefault();
    
    var cityName = $(".city-search").val().trim();
    var stateName = $(".state-search").val().trim();
    var searchObject = {
        city: cityName,
        state: stateName,
        }

    if (cityName === "") {
        return;
    }
    console.log(cityName);
    // makes sure previous city isnt listed in the array
    if (cityArray.indexOf(cityName) === -1) {
        cityArray.push(cityName);
    }
    console.log(cityArray);
 searchWeatherApi(cityName);
 getApi(cityName,stateName);


    localStorage.setItem("cities", JSON.stringify(cityArray));
    // console.log(cityArray);
});


function getApi(city,state) {
    fetch("https://realty-in-us.p.rapidapi.com/properties/list-for-sale?state_code="+state+"&city="+city+"&offset=0&limit=200&sort=relevance", {
        "method": "GET",


        "headers": {
            "x-rapidapi-key": "f9f8fdbbf6msh903f7a4208de85cp1705ebjsn44f85ee69786",
            "x-rapidapi-host": "realty-in-us.p.rapidapi.com"
        }
    })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            // console.log(response.listings[0].price)
            // console.log(response.listings[0].address)
            for (let i = 0; i < 6; i++) {
                // card 1
                // $(".card-text" + i).text("Price: " + response.listings[i].price);
                // $(".bed-text" + i).text("Bed-Rooms: " + response.listings[i].beds);
                // $(".bath-text" + i).text("Bath-Rooms: " + response.listings[i].baths)
                // $(".square-text" + i).text("Square-Feet: " + response.listings[i].sqft);
                // $(".address-text" + i).text("Address: " + response.listings[i].address)
                // $(".img" + i).attr("src", response.listings[i].photo);
                // console.log(i);
                console.log("card.text" + i);
            }
        })
        .catch(err => {
            console.error(err);
        });
}


function searchWeatherApi(cityName) {

    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=imperial&appid=4e4346890dbabb049a4ba08f09b5e215';

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.main.temp);
            console.log(data.name);
            //  console.log(data);
            $(".title").text(data.name);
            $(".text").text("Temp: ");
            $(".temp").text(data.main.temp);
          

            // var card = $("<div>").addClass("card").attr("style", "background-color: blue");
            // var cardTitle = $("<h2>").addClass("cardTitle").text(data.name);
            // card.append(cardTitle);
            // $(".searched-cities").append(card);

            // var lis = document.getElementsByClassName(".temp");
            // // document.li.innerHTML = "";
            // console.log(data);
            // $(".current-date").text(moment().format("MM Do YY"));
            // $(".temp").text("");
            // $(".cityTitle").text("");
            // $(".wind").text("");
            // $(".humidity").text("");
            // $(".cityTitle").append(data.name);
            // $(".temp").append("Temp: " + data.main.temp);
            // $(".wind").append("Wind: " + data.wind.speed);
            // $(".humidity").append("Humidiy: " + data.main.humidity);

            // console.log(data.temp)

        });
}

















getApi()
// searchWeatherApi("baltimore")





















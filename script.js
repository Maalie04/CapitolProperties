// var searchbtn = document.getElementById('search-btn')
// var price = document.getElementById('price');
// var contacts = document.getElementById('contacts');

// price.addEventListener('click', function(event) {
//     event.preventDefault();
//     console.log('The price is right!');
// })

// contacts.addEventListener('click', function(event) {
//     event.preventDefault();
//     console.log('these are the contacts');
// })



// searchbtn.addEventListener('click', function(event) {
//     event.preventDefault();
//     console.log('im amazing');
// })


fetch("https://realty-in-us.p.rapidapi.com/properties/v2/list-for-sale?city=Annapolis&state_code=md&offset=0&limit=200&sort=relevance", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "80d8f34458msh69ffe15bf82e868p178d66jsnac41a9fd8412",
        "x-rapidapi-host": "realty-in-us.p.rapidapi.com"
    }
})
    .then(response => response.json())
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });



var searchbtn = document.getElementById('search-btn')
var price = document.getElementById('price');
var contacts = document.getElementById('contacts');
var requestData = "https://realty-in-us.p.rapidapi.com/properties/list-for-sale?state_code=MD&city=Annapolis&offset=0&limit=200&sort=relevance"
price.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('The price is right!');
})
contacts.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('these are the contacts');
})
searchbtn.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('im amazing');
})
function getApi() {
    fetch("https://realty-in-us.p.rapidapi.com/properties/auto-complet?input=dallas", {
        "method": "GET",
        "headers": {


        //     fetch("https://realty-in-us.p.rapidapi.com/properties/list-for-sale?state_code=MD&city=Annapolis&offset=0&limit=200&sort=relevance", {
        // "method": "GET",
        // "headers": {

            'x-rapidapi-key': 'f9f8fdbbf6msh903f7a4208de85cp1705ebjsn44f85ee69786',
            'x-rapidapi-host': 'realty-in-us.p.rapidapi.com'
        }
    })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            // console.log(response.listings[0].price)
            // console.log(response.listings[0].address)
            for (let i = 0; i < 6; i++) {

                // card 1

                $(".card-text" + i).text("Price: " + response.listings[i].price);

                $(".bed-text" + i).text("Bed-Rooms: " + response.listings[i].beds);

                $(".square-text" + i).text("Square-Feet: " + response.listings[i].sqft);
                $(".img" + i).attr("src", response.listings[i].photo);


                console.log(i);
                console.log("card.text" + i);

            }
        })
        .catch(err => {
            console.error(err);
        });
}
getApi()


// test function we were trying
var postalCodes = ["21401", "21402", "21403", "21404", "21411"]

var cityArray = JSON.parse(localStorage.getItem('cities')) || [];

var subbmitHandler = function (event) {
    event.preventDefault();

    var cityName = $('#inputValue').val().trim();

    if (cityName === '') {
        return;
    }

    getApi(cityName);
    localStorage.setItem('cities', JSON.stringify(cityArray));
}











// var listingPrice = response.listings[i].price
                // var listingPhoto = response.listings[i].photo
                // var listingAddress = response.listings[i].address
                // var listingBaths = response.listings[i].bath
                // var listingBeds = response.listings[i].beds
                // var listingSqft = response.listings[i].sqft





// card 2
                // $(".card-text1").text("");
                // $(".card-text1").append("Price: " + response.listings[i].price);
                // $(".bed-text1").text("");
                // $(".bed-text1").append("Bed-Rooms: " + response.listings[i].beds);
                // $(".square-text1").text("");
                // $(".square-text1").append("Square-Feet: " + response.listings[i].sqft);

                // // card 3
                // $(".card-text2").text("");
                // $(".card-text2").append("Price: " + response.listings[i].price);
                // $(".bed-text2").text("");
                // $(".bed-text2").append("Bed-Rooms: " + response.listings[i].beds);
                // $(".square-text2").text("");
                // $(".square-text2").append("Square-Feet: " + response.listings[i].sqft);

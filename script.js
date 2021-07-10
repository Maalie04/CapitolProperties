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
    fetch("https://realty-in-us.p.rapidapi.com/properties/list-for-sale?state_code=MD&city=Annapolis&offset=0&limit=200&sort=relevance", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "80d8f34458msh69ffe15bf82e868p178d66jsnac41a9fd8412",
            "x-rapidapi-host": "realty-in-us.p.rapidapi.com"
        }
    })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            console.log(response.listings[0].price)
            console.log(response.listings[0].address)
            for (let i = 0; i < 6; i++) {
                // card 1
                $(".card-text" + i).text("Price: " + response.listings[i].price);
                $(".bed-text" + i).text("Bed-Rooms: " + response.listings[i].beds);
                $(".square-text" + i).text("Square-Feet: " + response.listings[i].sqft);
                $(".img" + i).attr("src",response.listings[i].photo);
                console.log(i);
                console.log("card.text" + i);
            }
        })
        .catch(err => {
            console.error(err);
        });
}
getApi()

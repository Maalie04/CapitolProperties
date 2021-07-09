var searchbtn = document.getElementById('search-btn')
var price = document.getElementById('price');
var contacts = document.getElementById('contacts');

price.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('The price is right!');
})

contacts.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('these are the contacts');
})



searchbtn.addEventListener('click', function(event) {
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
            for (let i = 0; i < 3; i++) {
                var listingPrice = response.listings[i].price
                console.log(response.listings[i].price);
                var listingPhoto = response.listings[i].photo
                var listingAddress = response.listings[i].address
                var listingBaths = response.listings[i].bath
                var listingBeds = response.listings[i].beds
                var listingSqft = response.listings[i].sqft
                $(".card-text" + i).text("");
               
                $(".card-text" + i).append("Price" + response.listings[i].price);
                // $(".card-text1").append("Price" + response.listings[i].price);
                // $(".card-text2").append("Price" +response.listings[i].price);
            }
        })
        .catch(err => {
            console.error(err);
        });
}
getApi()
//gotta create a function to call into another function to run the Api Function.
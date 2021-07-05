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
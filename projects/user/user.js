var names = document.querySelector("#name");
var info = document.querySelector("#info");
var email = document.querySelector("#email");
var city = document.querySelector("#city");
var btn = document.querySelector("#btn");
var profile = document.querySelector("#imgs");

var url = "https://randomuser.me/api/";

btn.addEventListener("click", function(){
    fetch(url)
    .then(handleError)
    .then(function(respons){
        names.innerHTML = respons.results[0].name.title + " " +respons.results[0].name.first  +" "+ respons.results[0].name.last;
        info.innerHTML = respons.results[0].location.state;
        email.innerHTML = respons.results[0].email;
        city.innerHTML = respons.results[0].location.city;
        profile.src = respons.results[0].picture.large;
        
    })
    .catch(function(error){
        console.log(error);
    })
});

function handleError (respons){
    if(!respons.ok){
        throw Error(respons.status);
    }
    return respons.json();
}
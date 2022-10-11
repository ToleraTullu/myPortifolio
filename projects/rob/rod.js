var xbtn = document.querySelector("#xml");
var fbtn = document.querySelector("#fetch");
var quote = document.querySelector("#quote");
var abtn = document.querySelector("#axios");

xbtn.addEventListener("click", function(){
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function (respons){
        if(xml.readyState == 4 && xml.status == 200){
            var data = JSON.parse(xml.responseText);
            quote.innerHTML = data[0];
        }
    }
    xml.open("GET", "https://ron-swanson-quotes.herokuapp.com/v2/quotes");
    xml.send();
});

fbtn.addEventListener("click", function(){

    fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
    .then(function(respons){
       if(!respons.ok){
        throw Error("Something wrong")
       }
       else{
        return respons.json();
       }
    })
    .then(function(data){
        quote.innerHTML = data[0];
    })
    .catch(function(data){
        console.log(data);
    })

});

$("#jq").click(function(){

    $.get("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
    .done(function (respons) {
        $("#quote").text(respons);
    })

});

abtn.addEventListener("click", function(){
    axios.get("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
    .then(function(data){
        quote.innerHTML = data.data;
    })
})
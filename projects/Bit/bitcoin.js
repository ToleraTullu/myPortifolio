var btn = document.querySelector("#btn");
var USD = document.querySelector("#USD");
var GBE = document.querySelector("#GBE");
var ERO = document.querySelector("#ERO");

btn.addEventListener("click", function(){
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function (){
        if(xml.readyState == 4 && xml.status == 200){
            var respons = JSON.parse(xml.responseText);
            USD.innerHTML = respons.bpi.USD.rate +" "+ respons.bpi.USD.code ;
            GBE.innerHTML = respons.bpi.GBP.rate +" "+ respons.bpi.GBP.code ;
            ERO.innerHTML = respons.bpi.EUR.rate +" "+ respons.bpi.EUR.code ;
            // console.log(respons.bpi);
        }
    }
    xml.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
    xml.send();
});
// À l'aide de l'url suivante : "[https://restcountries.eu/rest/v1/all](https://restcountries.eu/rest/v1/all)" :

// - Créez un array vide `countriesNames`
// - Créez une fonction asynchrone `getCountries` pour récupérer les pays et stocker leurs noms dans l'array
// - Afficher les noms des pays récupérés dans la console, séparés par un tiret

var request = require("request");
var fs = require("fs");

var countriesNames = [];


function getCountries(){

    request.get("https://restcountries.eu/rest/v2/all", function(err, res, body){

        if(err){
            console.log(err)
        }

        var countries = JSON.parse(body)

        var names = countries.map(function(elem){
            elem =  elem.name
            return elem

        })

        countriesNames.push(names)
        countriesNames.join("-")
        
        console.log(countriesNames)
    })

}
getCountries()
// À l'aide de l'api suivante (lisez bien la documentation) : [https://api.chucknorris.io/](https://api.chucknorris.io/)

// - Créez une fonction asynchrone `getFact` qui récupèrera une blague Chuck Norris aléatoire à chaque fois que la fonction est lancée, et qui l'affichera dans la console


var request = require("request");
// var fs = require("fs");


function getFact(){

    request.get("https://api.chucknorris.io/jokes/random", function(err, res, body){

        
        var chuck = JSON.parse(body) 

        console.log(chuck.value)
        
    })
    

}
getFact()
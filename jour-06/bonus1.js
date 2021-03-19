// - A l'aide du package npm `moment` et en regardant sa [documentation](https://momentjs.com/) sur internet,
//  refaites les exos 1 & 2.

const moment = require("moment");

// 1
// - Créez une fonction `formatDate` qui reçoit en paramètre une string (au format aaaa-mm-jj)
// - La fonction doit renvoyer la date au format jj/mm/aaaa
// - Appelez la fonction et affichez son résultat dans la console


var firstFormat = "2014-02-04";

var newFormat = "";

function formatDate(date){

   newFormat = moment(firstFormat).format("DD/MM/yyyy")

    console.log("first date format: ", firstFormat)
    console.log("new date format: ", newFormat)

}

formatDate(firstFormat)


//2
// - Créez une fonction `calculateAge` qui reçoit en paramètre une date au format string (qui sert de date de naissance)
// - La fonction doit calculer l'âge de la personne (en années) née a ce moment là, en fonction de la date d'aujourd'hui
// - Appelez la fonction et affichez son résultat dans la console



var date = ""
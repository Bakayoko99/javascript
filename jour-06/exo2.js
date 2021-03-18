// - Créez une fonction `calculateAge` qui reçoit en paramètre une date au format string (qui sert de date de naissance)
// - La fonction doit calculer l'âge de la personne (en années) née a ce moment là, en fonction de la date d'aujourd'hui
// - Appelez la fonction et affichez son résultat dans la console


var dateBirth = new Date ("1999-02-04");

var age = 0;

function calculateAge(birth){

    var dateDeNaissance = dateBirth.getFullYear()

    var today = new Date().getFullYear()

    age = today - dateDeNaissance
    
    console.log(age)
}

calculateAge(dateBirth)





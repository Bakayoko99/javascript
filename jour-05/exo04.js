// - Installez et importez le package `prompt` (n'oubliez pas d'initialiser !) et lancez les méthodes de `prompt`
// - Créez une variable `mysteryNum` contenant une valeur aléatoire (un nombre entier entre 1 et 100)
// - Créez une fonction `play` qui demande au joueur "Quel est le nombre mystère ?" puis :
//     - si le joueur donne une valeur incorrecte (pas un nombre) on affiche "error" et on relance la fonction `play`
//     - si le joueur donne un chiffre trop petit, on affiche "C'est plus !" et on relance la fonction `play`
//     - si le joueur donne un chiffre trop grand, on affiche "C'est moins !" et on relance la fonction `play`
//     - si le joueur donne le bon nombre, on affiche "Bravo !!"
// - Appelez la fonction
// - Testez le jeu

var min = 1;
var max = 100;

var go = 50;

// var mysteryNum = -Math.floor(Math.random() * (max - min + 1) + min);

var domanda = "Quel est le nombre mystère ?";

function play(question){

if( typeof go === 1 ){ 

    console.log("error")
}

else if(go < mysteryNum){

    console.log("C'est plus !")

}

else if(go > mysteryNum){

    console.log("C'est moins !")

}

else if(go == mysteryNum){

    console.log("Bravo !!")

}

}

play(domanda)

console.log(play)
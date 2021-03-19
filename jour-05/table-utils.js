// - Créez un fichier `table-utils.js`
// - Mettez votre fonction `multiply` dans ce fichier, et ajouter en une deuxieme `addition` qui reprend le même principe mais avec une addition au lieu d'une multiplication
// - Exportez les deux fonctions graces aux modules, et importez les dans votre fichier précedant pour refaire marcher votre code
// - Affichez la table d'addition


var num2 = 0

function multiply(num1){

    if( num1 == null){
        console.log("error")
    }
    else{

    for(i = 1; i <= 10; i ++){

       num2 = i * num1

        

        console.log(num1,"*", i, "=", num2)

    }

    }
}


 multiply(process.argv[2])


 var num2 = 0

 function addition(num1){
 
     if( num1 == null){
         console.log("error")
     }
     else{
 
     for(i = 1; i <= 10; i ++){
 
        num2 = parseInt(num1) + i;
 
        console.log(num1,"+", i, "=", num2)
 
     }
 
     }
 }
 
 
  addition(process.argv[2])


  module.exports = { addition, multiply};
 


// - Créez une fonction `calculate` qui recevra trois paramètres (deux nombres entiers et un opérateur `+`, `-`, `x`, `/` ou `%`)
// - Créez une condition (méthode au choix) pour chaque valeur possible de l'opérateur qui retournera le résultat du calcul
// - Affichez le résultat dans la console (vérifiez que pour les arguments `5`, `x` et `4` vous obtenez bien `20`)
// - Vous devrez donner les arguments dans le terminal en appelant le programme alors attention aux paramètres !

//     ⇒ Si vous ne donnez pas trois arguments, le programme doit afficher "error" dans la console


 function calculate(num1, operator, num2){

     if ( operator == "+"){

        console.log(num1 + num2)
     }
     else if ( operator == "-"){
         console.log(num1 - num2)
     }
     else if ( operator == "X"){
         console.log(num1 * num2)
     }
     else if ( operator == "/")
         console.log(num1 / num2)

     else if( operator == "%")
         console.log(num1 % num2)

     else (console.log("error"))
    }

    calculate(parseInt(process.argv[2]), process.argv[3], parseInt(process.argv[4]) )


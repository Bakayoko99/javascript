// - Créez une fonction `multiply` qui recevra un paramètre (un nombre entier)
// - Faites en sorte que la fonction affiche la table de multiplication de ce nombre dans la console (de 1 à 10) ligne par ligne
// - Vous devrez donner l'argument dans le terminal en appelant le programme

//     ⇒ Si vous ne donnez pas d'argument, le programme doit afficher "error" dans la console

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


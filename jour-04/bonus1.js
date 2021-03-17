// 07 - Bonus 

// - Créez une fonction `generatePassword` qui reçoit un paramètre `num`
// - La fonction génère un mot de passe aléatoire, avec autant de lettres que la valeur de `num`
// - Le mot de passe contiendra uniquement des lettres majuscules
// - Si `num` est plus petit que 6 ou plus grand que 15, la fonction retourne "error"


// var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// var min = 1;
// var max = 10;

// var randomLetters = [];

// function generatePassword(num){r

//     for( i = 0; i <= num.lenght; i++ ){
    
//     randomLetters = letters.charAt(Math.floor(Math.random() * (max - min + 1) + min))

//     i + 
// }

// }

// generatePassword("lololo")

// console.log(randomLetters)





// .charAt(2)





// var lettres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";



// var min = 0;

// var max = 25;

// var randomIndex = 0;

// var psw = []

// var nemo = [];

// var ok = lettres.charAt(randomIndex)

// console.log(randomIndex)

// var password = "BOBOO"

// function generatePassword(numb) {

//     for (var i = 0; i < password.length; i++) {

//         randomIndex = Math.floor(Math.random() * (max - min + 1) + min)

//         psw.push(ok)
        
//         nemo = i + ok
        
       
//     }
    
// }
//     //var words = lettres.split("")
//     generatePassword(password)

//     console.log(nemo)
    // var lollo = words.indexOf(randomIndex)


    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


    var min = 0;
    var max = 25;

    var psw = "kokkk";
    
    var randomLetters = [];

    var password = "";

    function generatePassword(num){

    if( psw.length < 6 || psw.length > 15 ){

        console.log("error")
    }
    else{

    for( i = 0; i < psw.length; i++ ){
    
    randomLetters.push(letters.charAt(Math.floor(Math.random() * (max - min + 1) + min)));

    password = randomLetters.join("")
    }
    }

    }

    generatePassword(password)



    console.log(password)
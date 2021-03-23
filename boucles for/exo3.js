

var chanceux = 0;

for( i = 1; i< 20; i ++){
    var randomDice = Math.floor(Math.random()*(6 - 1 + 1) + 1)
    if(randomDice >= 5){
        chanceux += randomDice
    }
}


console.log(chanceux)

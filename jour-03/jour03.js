
// 01 - Array

var fruits = ["mango", "lemon", "blueberry"];

console.log(fruits);

console.table(fruits);

// 02 - Access

var ingredients = ["eggs", "milk", "butter"];

console.log(ingredients[1]);

console.log(ingredients.indexOf("butter"));

// 03 - Add and Remove

var objects = ["pen", "book", "lamp"];

objects.unshift("chair");

console.log(objects);

objects.pop()

console.log(objects);

objects.push("laptop");

console.log(objects);

objects.shift()

console.log(objects);

// 04 - Order

var numbers = [4, 10, 8, 12, 6];

numbers.reverse();

console.log(numbers);

numbers.sort((a, b) => a - b);

console.log(numbers);

// 05 - Boucle

var total = 0;

var limit = 10;

for (i = total; i <= limit; i++) {
    total += i
    //total = total +i
};

console.log(total);

// 06 - Reverse

var sentence = "Hello Konexio !";

var sentenceReverse = []

for (i = sentence.length - 1; 0 <= i; i--) {

    sentenceReverse.push(sentence[i])
};

console.log(sentenceReverse.join(""));

// 07 - Bonus 

var fin = 100

for (i = 0; i <= fin; i++) {

    if (i % 3 === 0) {

        console.log("fizz");

    }else if(i % 5 === 0) {

        console.log("buzz");
        
    }else if(( i % 5 && i %5 ) === 0) {

        console.log("fizzbuzz");

    }else if(i % 7 === 0) {

        console.log();

    }else{ 
        console.log(i);
    }
}

// 08 - Bonus II

var toto = 0

var totoLimit = 10

var io = 0

while( toto <= totoLimit ){

    io = io + toto
    toto++

}

console.log(io)

// 09 - Bonus III

var promo = []

// 10 - Bonus IV
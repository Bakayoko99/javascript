
// 01 - Object

var cat = {

    name: "Garfield",

    age: 3,

    isCute: true
};

console.log(cat);

console.log(cat.age);

if( cat.isCute === true){
    console.log("So cute !")
};

// 02 - Combine

var cat2 = {
    
    name: "ronaldo",

    age: 32,

    isCute: false

}

var cats = [ cat, cat2 ];

console.log(cat.age);

console.log(cat2.isCute);

// 03 - Even

function checkIfEven(num){

    if( num % 2 === 0){
        console.log("even")
    }

    else(console.log("odd"))

};

checkIfEven(6);

checkIfEven(8);

checkIfEven(13);

// 04 - Compare

function compare(num1, num2){

    if(num1 > num2){
        console.log("num1 is bigger")
    }

    else if(num2 > num1){
        console.log("num2 is bigger")
    }

    else(console.log("both are the same"))
};

compare(44, 44);

compare(12, 44);

compare(36, 25);

// 05 - Add Up

function addUp(num){

    var a = 0;

    for (var i = 1; i <= num; i++ ) {

       a += i;
    
    }

    return a;

};

console.log(addUp(12));

// 06 - Time

var h = 3600;
var m = 60;
var s = 1;

function format(num){

    hour =  (num - 3600)

    minutes = 



    return num

};

console.log(format(3700));

console.log(2800 % 60);

// 07 - Bonus 

// 08 - Bonus II


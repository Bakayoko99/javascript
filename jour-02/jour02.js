// 01 - Number

var integer = 102;

var float = 13.9;

console.log(integer, float);

// 02 - Convert

var basic = 34;

var stringified = basic.toString();

console.log(stringified);

// 03 - Round

var num = 1.5;

var rounded = Math.round(num);

console.log(rounded);

// 04 - Arithmétique

var test = 12;

var bis = 5;

console.log(test + bis)

console.log(test - bis)

console.log(test * bis)

console.log(test / bis)

console.log(test ** bis)

console.log(test % bis)

// 05 - Comparaison

var test = 143;

var bis = 219;

console.log(test > bis);

console.log(test < bis);

console.log(test >= bis);

console.log(test <= bis);

console.log(test == bis);

console.log(test === bis);

console.log(test != bis);

// 06 - Condition I

var limit = 50;

var score = 64;

if (score >= limit) {

    console.log("Ok good !")

} else (console.log("Oh nooo..."));

// 07 - Condition II

var password = "azerty";

if (password.length > 5) {

    console.log("The password is secure")

} else (console.log("The password is not secure"));

// 08 - Condition III

if (score >= limit && password.length > 5) {

    console.log("Everything is good")

}
else if (score >= limit || password.length > 5) {

    console.log("Something is good")

}
else if (score >= limit === password.length > 5) {

    console.log("Nothing is good")

}

// 09 - Bonus

var random = 10;

if (random === 6) {

    console.log("Yes I win !")

}

else if (random != 6) {

    console.log("So close...")
}


switch (random) {
    case 6:
        console.log("Yes I win !");
        break;
    case 1:
        console.log("So close...");
        break;
    case 2:
        console.log("So close...");
        break;
    case 3:
        console.log("So close...");
        break;
    case 4:
        console.log("So close...");
        break;
    case 5:
        console.log("So close...");
        break;
    default:
        console.log("not a valid number");
}

// 10 - Bonus II

var month = "january"

switch (month) {
    case "january":
        console.log("Winter");
        break;
    case "februay":
        console.log("Winter");
        break;
    case "mars":
        console.log("Spring");
        break;
    case "april":
        console.log("Spring");
        break;
    case "may":
        console.log("Summer");
        break;
    case "june":
        console.log("Summer");
        break;
    case "july":
        console.log("Summer");
        break;
    case "august":
        console.log("Summer");
        break;
    case "september":
        console.log("Fall");
        break;
    case "october":
        console.log("Fall");
        break;
    case "november":
        console.log("Winter");
        break;
    case "december":
        console.log("Winter");
        break;
    default:
        console.log("That's not a month...");
}

// 11 - Bonus III

var roundeNumber = 3.6

if( roundeNumber   ){

    console.log(Math.floor())

}

else if( ){
    console.log(Math.ceil())
}



// 12 - Bonus IV












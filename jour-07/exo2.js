var fs = require("fs");


var myArray = [1, 2, 3, 4, 5]

var double = myArray.map(function(num){
    return num * 2

});

console.log( double );
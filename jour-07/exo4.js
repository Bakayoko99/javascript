var fs = require("fs");



var myArray = [1, "toto", 34, "javascript", 8]

var numbers = myArray.filter(function(num){
    if( typeof num === "number"){
        return num
    }
})

console.log(numbers);
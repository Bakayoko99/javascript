var fs = require("fs");


var numbers = [1, 2, 3, 4, 5, 6, 7, 8]

var even = numbers.filter(function(pairs){
    
    if( pairs % 2 == 0 ){
        return pairs
    }    
})

console.log(even)
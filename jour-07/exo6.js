var fs = require("fs");


var cakes = [
    {
        name: "cake",
        flavor: "vanilla",
        status: "available"
    },
    {
        name: "brownie",
        flavor: "chocolate",
        status: "available"
    },
    {
        name: "pie",
        flavor: "strawberry",
        status: "available"
    },
    {
        name: "muffin",
        flavor: "pistachio",
        status: "available"
    },
    {
        name: "donut",
        flavor: "chocolate",
        status: "available"
    },
]

var soldOut = cakes.map(function(element){

    if (element.flavor == "chocolate"){
     element.status = "sold out"
    }

    return element
    
})

console.log(soldOut)

var choco = soldOut.filter(function(elem){
   
    if(elem.flavor == "chocolate" ){
        return elem
    }

})

console.log(choco)
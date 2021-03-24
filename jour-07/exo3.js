var fs = require("fs");


var longNames = [
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
]


var shortNames = longNames.map(function(elem){
    
    elem = { name: elem.firstName +" "+ elem.lastName }
    
    return elem
    
})

console.log(shortNames)
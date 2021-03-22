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


var shortNames = longNames.map(function(names){
    
    names = { name: names.firstName +" "+ names.lastName }
    
    return names
    
})

console.log(shortNames)
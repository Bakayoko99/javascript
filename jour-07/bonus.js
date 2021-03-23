var prompt = require("prompt");
var fs = require("fs");


var motMystere = "morning";

prompt.start();

function onErr(err) {
    console.log(err);
    return;
}

var properties = [
    {
        name: "mot mystere",
        hidden: true,
        replace: "_"
    }
]



prompt.get(properties, function(err, res){
    if (err) {
        return onErr(err)}

    for( i = 0; i <= 10; i++){
        res = i
    }

    
})



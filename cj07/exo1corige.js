var fs = require("fs")


fs.readFile("jour07.txt", function(err, data){
    if(err){
        console.log("error", err)
        return 
    }

    console.log("text jour07", data.toString())


})
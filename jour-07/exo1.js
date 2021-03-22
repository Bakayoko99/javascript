var fs = require("fs");

fs.readFile("./jour07.txt",function(err, data){
    if(err){
        return console.error(err)
    }

    console.log(data.toString());
})





var grid = [
    [" ", " ", " ", " ", "N ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    ["W ", " ", " ", " ", " ", " ", " ", " ", " ", "E "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", "S ", " ", " ", " ", " ", " "]
];

var rover = { direction: "N" };

var n = grid[0][4];
var e = grid[4][9];
var s = grid[9][4];
var w = grid[4][0];
console.log(n.direction);


console.log(grid.join('\n') + '\n\n');


// grid[0][4] = grid[4][9];
// grid[4][9] = ' ';
// console.log(grid.join('\n'));




function turnLeft(rover) {


}

function turnRight(rover) {


    switch (rover) {

        case "d"
        


    }


    // if (rover = "d") {

        
    // } else if(roverRight === "S") {

    // }

}

turnRight("d");
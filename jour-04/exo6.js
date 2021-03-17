// 06 - Time

var ore = 3600;
var minuti = 60;
var secondi = 1;



function format(num) {

    hour = Math.floor(num / 3600); // = 1

    num = num - (hour * 3600) // = 100

    minutes = Math.floor(num / 60)  // = 1

    num = num - (minutes * 60) // = 40

    secondes = Math.floor(num / 1) // = 40

    console.log(hour + ":" + minutes + ":" + secondes);

    return num

};

format(3700);



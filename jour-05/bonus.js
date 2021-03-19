// Vous vous souvenez de **Motus** ? Aujourd'hui on va le coder ! Petit rappel des règles :

// - Un mot mystère (ici de 5 lettres) est proposé, on ne connaît que la première lettre
// - Le joueur a six tentatives pour deviner le mot mystère, et pour chaque tentative :
//     - Les lettres qui sont à la bonne place sont en rouge
//     - Les lettres qui sont à la mauvaise place sont en jaune
//     - Les lettres qui n'existent pas dans le mot mystère restent neutres

// ⇒ Si le joueur propose un mot qui n'a pas le bon nombre de lettres (ici 5) alors il a perdu

// ⇒ Si le joueur propose "BOTTE" et que le mot mystère est "BRUTE" attention : un des "T" proposés doit rester neutre !

// À l'aide du package `prompt` que vous connaissez, et du package `colors` (cherchez le sur NPM et lisez la doc), tentez d'écrire un code qui peut permettre à l'utilisateur de jouer à Motus.
//  Si vous réussissez : [bravo !](https://youtu.be/Kz4-Z-s5R9o) Sinon : [dommage...](https://youtu.be/y_sG_lPgMvk)


var prompt = require("prompt");
var Color = require("color");



var motMystere = "balle";
// motMystere.charAt(0)

function play(){

    prompt.start();

    function onErr(err) {
        console.log(err);
        return;
    }

    prompt.get([{

        name: "userWord",
        validator: /^[a-z]{5,6}$/,
        description: "entrer un mot de six lettres"

    }], function motusGame(err, res) {

        if (err) {
        return onErr(err);}

        else if(res.userWord )










        });



};

play()
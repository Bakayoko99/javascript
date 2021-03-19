
// - À l'aide du package `prompt`, créez une fonction `checkProfile` qui demande à l'utilisateur un email, un username et un mot de passe
// - La fonction vérifiera que l'utilisateur a saisi des informations valides (regardez la doc, et plus precisement les `pattern`) :
//     - l'email doit être au bon format
//     - le username ne doit comporter que des lettres, chiffres et tirets (les petits)
//     - le mot de passe doit contenir au moins 6 caractères, au moins une lettre et au moins un chiffre, et peut contenir des tirets
// - Si tout est bon, elle retourne "All good !", sinon elle retourne "error"

var prompt = require("prompt");


var properties = [
    {
      name: "email",
      validator: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      warning: "l'email doit être au bon format"
    },
    {
      name: "username",
      validator: /^[a-zA-Z\s\-]+$/, 
      warning: "le username ne doit comporter que des lettres, chiffres et tirets (les petits)"
    },
    {
      name: "password",
      validator:"",
      hidden: true,
      warning: "le mot de passe doit contenir au moins 6 caractères, au moins une lettre et au moins un chiffre, et peut contenir des tirets"
    }
  ];



prompt.start();

function onErr(err) {
    console.log(err);
    return;
}


prompt.get(properties, function checkProfile(err, res) {
    if (err) {
    return onErr(err)}

  console.log("All good !");
    });
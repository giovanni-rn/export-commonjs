// Importation avec la syntaxe "CommonJS", celle utilisée pour NodeJS
const { print, add, variable } = require("./export.js");

// Utilisation des fonctions et variables importées
print("Salut !");
console.log(add(4, 9));
console.log("Cela fonctionne avec fonction, variables, etc.", variable);

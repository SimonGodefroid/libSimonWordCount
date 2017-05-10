// on importe l'objet contenant le texte qui est dans le fichier json sampleText.
var sampleText = require("./sampleText.json");

// ici on déclare la fonction countWordOccurences qui va faire le travail demandé
function countWordOccurences(textInput) {
  // on récupère le contenu de l'objet de texte
  var text = textInput[0]["content"];
  // on créée un tableau avec le texte qui a été donné en utilisant les espaces comme séparateurs et en mettant les mots en miniscule pour pouvoir ignorer les compter sans tenir compte de la casse. On enlève aussi les points et les virgules.
  var arr = text.toLowerCase().replace(/\./g, "").replace(/\,/g, "").split(" ");
  // on créé un objet vide dont les clés seront les mots du paragraphe.
  var obj = {};
  // on itère pour chaque mot présent dans le paragraphe...
  for (var i = 0; i < arr.length; i++) {
    // on défini que le mot en cours est le i-ème mot du tableau arr
    var currentWord = arr[i];
    // si le mot a une taille supérieure à 2 on execute la suite du code
    if (currentWord.length > 2 && isNaN(currentWord.toString(10) / 1)) {
      // si la clef de l'objet obj avec pour valeur arr[i] (par exemple si i = 0, "lorem"), n'existe pas (c'est à dire qu'elle est undefined),
      if (obj[currentWord] === undefined) {
        // alors on lui défini la valeur 1. Ceci va donc créér une key (propriété) à l'objet obj, qui aura pour nom "lorem" et pour valeur 1.
        obj[currentWord] = 1;
      } else {
        // sinon, si la propriété existe déjà, alors on ajoute 1 à la valeur qu'elle contenait auparavant (on incrémente)
        obj[currentWord] += 1;
      }
    }
  }
  // on fait une boucle pour imprimer dans la console en itérant sur le nombre de propriétés qu'a l'objet obj...
  for (var j in Object.keys(obj)) {
    // ... et pour chaque clé on l'imprime en imprimant en face sa valeur afin de donner un résultat lisible dans la console.
    console.log(
      Object.keys(obj)[j] +
      " appears " +
      Object.values(obj)[j] +
      " in that text excerpt"
    );
  }
  // on retourne l'objet afin qu'il puisse être utilisé par un autre programme.
  console.log(obj);
  return obj;
}

// ici on execute la fonction sur le sampleText importé plus haut.
countWordOccurences(sampleText);

// le sampleText est un article de Maddyness sur Evaneos :)
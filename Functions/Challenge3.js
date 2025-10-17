let valeur = 0;
let compt = 0;
let tab = [1, 2, 4, 3, 1];

function compterOccur(tab, valeur) {

  for (let i = 0; i < tab.length; i++) {
    if (tab[i] === valeur) {
      compt++;
    }
  }
  return compt;
}

console.log(compterOccur(tab, valeur));

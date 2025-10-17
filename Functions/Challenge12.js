function motsLongs(tabMots, longueur) {
  let resultat = [];
  for (let i = 0; i < tabMots.length; i++) {
    if (tabMots[i].length >= longueur) {
      resultat.push(tabMots[i]);
    }
  }
  return resultat;
}
let tab = ["chat", "voiture", "je", "ordinateur"];
let longueurMin = 5;
console.log("Les mots longs sont :", motsLongs(tab, longueurMin));

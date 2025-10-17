function doubler(tab) {
  let nouveauTab = [];
  for (let i = 0; i < tab.length; i++) {
    nouveauTab.push(tab[i] * 2);
  }
  return nouveauTab;
}
let tab = [1, 2, 3, 4];
console.log("Tableau doublé :", doubler(tab)); 

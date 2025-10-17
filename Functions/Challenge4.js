function inverserTableau(tab) {
  let nouveauTab = [];
  for (let i = tab.length - 1; i >= 0; i--) {
    nouveauTab.push(tab[i]);
  }
  return nouveauTab;
}
let tab = [1, 2, 3, 4, 5];
console.log("Tableau inversé :", inverserTableau(tab));

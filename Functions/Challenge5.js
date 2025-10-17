 let pairs = [];
function filtrerPairs(tab) { 
  for (let i = 0; i < tab.length; i++) {
    if (tab[i] % 2 === 0) {
      pairs.push(tab[i]);
    }
  }
  return pairs;
}
let tab = [1, 2, 3, 4,5,6];
console.log("Nombres pairs uniquement :", filtrerPairs(tab)); 

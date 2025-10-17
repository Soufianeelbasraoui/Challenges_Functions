function supprimerDoublons(tab) {
  return [...new Set(tab)];
}

let tab = [1, 2, 2, 3, 4, 4, 5];
console.log("Sans doublons :", supprimerDoublons(tab)); 


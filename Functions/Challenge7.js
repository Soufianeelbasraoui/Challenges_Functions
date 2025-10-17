function moyenneTab(tab) {
  let somme = 0;
  let moyenne = 0;

  for (let i = 0; i < tab.length; i++) {
    somme += tab[i]; 
  }

  moyenne = somme / tab.length; 
  return moyenne;
}

let tab = [10, 20, 30, 40];
console.log("Moyenne du tableau :", moyenneTab(tab)); 

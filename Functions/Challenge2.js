
let tab=[1,2,3,4,5,6,12]
let max =0;
function maxTableau(tab){
     for (let i = 0; i < tab.length; i++) { 
        if (tab[i] > max) {
          max = tab[i];
        }
      }
    return max;
}

console.log(maxTableau(tab));
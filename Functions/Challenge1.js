
let somme = 0;
function sumArray(tab){

    for(let i = 0; i <tab.length; i++ ){

         somme = somme + tab[i];
    }
    return somme;
}
let tab = [1,2,3]
console.log(sumArray(tab));
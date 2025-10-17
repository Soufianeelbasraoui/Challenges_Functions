
let tab=[1,2,3,4];
let produit=1;
function produitTableau(tab){
for(let i=0 ;i<tab.length; i++){
 produit*=tab[i];
}
return produit;
}
console.log(produitTableau(tab));
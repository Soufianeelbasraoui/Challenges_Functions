function tableMultiplication(n) {
  const table = [];
  for (let i = 1; i <= 10; i++) {
    table.push(n * i);
  }
  return table;
}
console.log(tableMultiplication(3)); 

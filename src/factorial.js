function factorialize(num) {
  let inputValue = num;
  let factorial = 1;
    for (let x = num; x >= 1; x--) {
      factorial *= x;
    }
  return factorial;
}

console.log(factorialize(5));

factorialArray.reduce(function(a,b){return a*b})

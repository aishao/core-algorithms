function returnUnion() {

  let myArray = [1, 2, 3, 4, 2, 4, 6, 8];

  return [...new Set(myArray)]; // .. Es6 version of .unique method

}
console.log(returnUnion());

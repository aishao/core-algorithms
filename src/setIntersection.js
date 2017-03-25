function setIntersection() {

  let a = new Set([1, 2, 3, 4]);
  let b = new Set([2, 4, 6, 8]);

  let setIntersection = new Set(
    [...a].filter(x => b.has(x)));

    return setIntersection;
}
console.log(setIntersection());








/*

let a = new Set([]);
let b = new Set([]);
let intersection = new Set(
    [...a].filter(x => b.has(x)));
*/

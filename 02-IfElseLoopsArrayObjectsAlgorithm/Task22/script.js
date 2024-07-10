function mergeArraysToString(array1, array2, char) {
  return array1.concat(array2).join(char);
}

console.log(mergeArraysToString([1, 2], [3, 4], '*'));
console.log(mergeArraysToString(['a', 'b'], ['c', 'd'], '/'));

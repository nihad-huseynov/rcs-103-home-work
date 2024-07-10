function getFirst(array, n) {
  if (n == null) {
    return array[0];
  }
  return array.slice(0, n);
}

console.log(getFirst([1, 73, 99, 20]));
console.log(getFirst([1, 73, 99, 20], 2));
console.log(getFirst([1, 73, 99, 20], 0));
console.log(getFirst([1, 73, 99, 20], 4));

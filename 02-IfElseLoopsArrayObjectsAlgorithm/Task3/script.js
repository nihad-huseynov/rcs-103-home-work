let arr = [3, 8, 2, 5, 4, 10, 7, 6];

let maxElem = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > maxElem) {
    maxElem = arr[i];
  }
}

console.log(maxElem);
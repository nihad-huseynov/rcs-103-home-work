let arr = [3, 8, 2, 5, 4, 10, 7, 6];

let minElem = arr[0];
let maxElem = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] < minElem) {
    minElem = arr[i];
  }
  if (arr[i] > maxElem) {
    maxElem = arr[i];
  }
}

let totalSum = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== minElem && arr[i] !== maxElem) {
    totalSum += arr[i];
  }
}

console.log(totalSum);

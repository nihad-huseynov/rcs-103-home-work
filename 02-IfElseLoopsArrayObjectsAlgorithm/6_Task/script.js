let arr = [3, 8, 2, 5, 4, 10, 7, 6];

let minElem = arr[0];
let maxElem = arr[0];
let minIndex = 0;
let maxIndex = 0;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < minElem) {
    minElem = arr[i];
    minIndex = i;
  }
  if (arr[i] > maxElem) {
    maxElem = arr[i];
    maxIndex = i;
  }
}

[arr[minIndex], [arr[maxIndex]]] = [arr[maxIndex], arr[minIndex]];

console.log(arr);

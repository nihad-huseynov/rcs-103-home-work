let arr = [3, 8, 2, 5, 4, 10, 7, 6];

let minEvenElem = null;
let maxOddElem = null;
let minEvenIndex = -1;
let maxOddIndex = -1;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    if (minEvenElem === null || arr[i] < minEvenElem) {
      minEvenElem = arr[i];
      minEvenIndex = i;
    }
  } else {
    if (maxOddElem === null || arr[i] > maxOddElem) {
      maxOddElem = arr[i];
      maxOddIndex = i;
    }
  }
}

[arr[minEvenIndex], arr[maxOddIndex]] = [arr[maxOddIndex], arr[minEvenIndex]];

console.log(arr);

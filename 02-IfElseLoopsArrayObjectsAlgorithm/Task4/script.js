let arr = [3, 8, 2, 5, 4, 10, 7, 6];

let maxEvenElem = null;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    if (maxEvenElem === null || arr[i] > maxEvenElem) {
      maxEvenElem = arr[i];
    }
  }
}

console.log(maxEvenElem);

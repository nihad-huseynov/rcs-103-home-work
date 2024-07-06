let arr = [3, 8, 2, 5, 4, 10, 7, 6];
let number = parseInt(prompt("Ededi daxil edin: "));

let found = false;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === number) {
    found = true;
    break;
  }
}

if (found) {
  console.log("Eded array-de var.");
} else {
  console.log("Eded array-de yoxdur.");
}

let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === 'string') {
    let upperCount = 0;
    for (let char of arr[i]) {
      if (char === char.toUpperCase() && char !== char.toLowerCase()) {
        upperCount++;
      }
    }
    if (upperCount > 2) {
      console.log(arr[i]);
    }
  }
}

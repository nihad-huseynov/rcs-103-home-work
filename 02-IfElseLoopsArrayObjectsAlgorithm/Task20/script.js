function findCharSumIndices(str, char) {
  let sum = 0;
  let found = false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      sum += i;
      found = true;
    }
  }
  return found ? sum : -1;
}

console.log(findCharSumIndices('salam', 'a'));
console.log(findCharSumIndices('salam', 'x'));

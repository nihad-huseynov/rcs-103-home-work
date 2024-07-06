function insertAt(array, index, str) {
  if (index >= array.length) {
    array.push(str);
  } else {
    array.splice(index, 0, str);
  }
  return array;
}

console.log(insertAt(['a', 'salam', 'b', 'world'], 3, 'dev'));
console.log(insertAt(['a', 'salam', 'b', 'world'], 5, 'dev'));
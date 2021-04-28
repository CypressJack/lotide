const flatten = function(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let y = 0; y < array[i].length; y++) {
        newArray.push(array[i][y]);
      }
    }  else {
      newArray.push(array[i]);
  }
};
return newArray;
}

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
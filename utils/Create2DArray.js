function Create2DArray(rows, col) {
  const arr = [];

  for (let i = 0; i < rows; i++) {
    arr[i] = Array(...Array(col)).map(Number.prototype.valueOf, 0);
  }

  return arr;
}

module.exports = Create2DArray;

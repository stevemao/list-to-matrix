module.exports = function listToMatrix(list, elementsPerSubArray) {
  const matrix = [];
  let i;
  let k;

  for (i = 0, k = -1; i < list.length; i += 1) {
    if (i % elementsPerSubArray === 0) {
      k += 1;
      matrix[k] = [];
    }

    matrix[k].push(list[i]);
  }

  return matrix;
}

const assert = require('assert')
const listToMatrix = require('./')

assert.deepStrictEqual(listToMatrix([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [[1, 2, 3], [4, 5, 6], [7, 8, 9]])
assert.deepStrictEqual(listToMatrix([1, 2, 3, 4, 5, 6, 7, 8], 3), [[1, 2, 3], [4, 5, 6], [7, 8]])
assert.deepStrictEqual(listToMatrix([1, 2], 3), [[1, 2]])

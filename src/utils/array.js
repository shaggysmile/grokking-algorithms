/**
 * Array Swap implementation.
 *
 * @param {*[]} arr
 * @param {number} index1 - First index.
 * @param {number} index2 - Second index.
 * @return {array} Array with swaped elements
 */
function swap (arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
  return arr
}

/**
 * Generate an integer Array containing an arithmetic progression.
 *
 * @param {number} start - First index.
 * @param {number} stop - Second index.
 * @return {array} array
 */
function range (start, stop = 0) {
  if (!stop) {
    stop = start
    start = 0
  }
  let length = Math.max(Math.ceil((stop - start)), 0)
  return Array.from(Array(length).keys()).map(item => stop ? item + start : item)
}
/**
 * Shuffle a collection.
 * @param {array} arr - Some array.
 * @return {array}
 */
function shuffle (arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1))
    swap(arr, i, randomIndex)
  }
  return arr
}

module.exports = {
  range,
  swap,
  shuffle
}

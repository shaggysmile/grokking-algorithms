
/**
 * Binary search implementation.
 *
 * @param {*[]} sortedArray
 * @param {*} value
 * @return {value}
 */
function binarySearch (originalArr, value) {
  const array = [...originalArr.sort((a, b) => a - b)]
  let low = 0
  let hight = array.length - 1
  while (low <= hight) {
    const middle = Math.floor(hight - low / 2)
    const guess = array[middle]
    if (guess === value) {
      return array[middle]
    }
    if (guess > value) {
      hight = middle - 1
    } else {
      low = middle + 1
    }
  }
  return null
}
module.exports = {
  binarySearch
}

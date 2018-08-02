const { swap } = require('../utils/array')
function bubbleSort (originalArr) {
  const array = [...originalArr]
  let swapped
  do {
    swapped = false
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1)
        swapped = true
      }
    }
  } while (swapped)
  return array
}

function bubbleSort2 (originalArr) {
  const array = [...originalArr]
  let swapped = false
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      const nextIndex = j + 1
      if (array[j] > array[nextIndex]) {
        swap(array, j, nextIndex)
        swapped = true
      }
    }
    if (!swapped) {
      break;
    }
  }
  return array
}

module.exports = {
  bubbleSort,
  bubbleSort2
}

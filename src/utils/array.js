function swap (arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
  return arr
}

function range (start, stop = 0) {
  if (!stop) {
    stop = start
    start = 0
  }
  let length = Math.max(Math.ceil((stop - start)), 0)
  return Array.from(Array(length).keys()).map(item => stop ? item + start : item)
}

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

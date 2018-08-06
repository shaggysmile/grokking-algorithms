function binarySearch (originalArr, item) {
  const array = [...originalArr.sort((a, b) => a - b)]
  let low = 0
  let hight = array.length - 1
  while (low <= hight) {
    const middle = Math.floor(hight - low / 2)
    let guess = array[middle]
    if (guess === item) {
      return array[middle]
    }
    if (guess > item) {
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

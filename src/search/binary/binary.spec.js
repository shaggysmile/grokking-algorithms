const { range } = require('./../../utils/array')
const { binarySearch } = require('./binary')

describe('binary search', () => {
  const inputArray = range(0, 100)
  it('check if binarySearch functions exists', () => {
    expect(binarySearch).toBeDefined()
  })
  it('test found element', () => {
    const item = 4
    const expectedIndex = 4
    expect(binarySearch(inputArray, item)).toEqual(expectedIndex)
  })
  it('test not found element', () => {
    const item = 101
    const expectedIndex = null
    expect(binarySearch(inputArray, item)).toEqual(expectedIndex)
  })
  it('test with letters', () => {
    const item = 'm'
    const expectedIndex = 3
    expect(binarySearch(['a', 'b', 'c', 'm', 'x', 'y', 'z'], item)).toEqual(expectedIndex)
  })
})

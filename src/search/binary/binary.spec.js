const { range } = require('./../../utils/array')
const { binarySearch } = require('./binary')

describe('binary search', () => {
  const inputArray = range(0, 100)
  it('test is function to be defined', () => {
    expect(binarySearch).toBeDefined()
  })
  it('test found element', () => {
    const item = 4
    expect(binarySearch(inputArray, item)).toEqual(item)
  })
  it('test not found element', () => {
    const item = 101
    expect(binarySearch(inputArray, item)).toEqual(null)
  })
})

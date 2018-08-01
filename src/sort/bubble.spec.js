const { range, shuffle } = require('./../utils/array')
const { bubbleSort, bubbleSort2 } = require('./bubble')

describe('bubbleSort', () => {
  it('test is function to be defined', () => {
    expect(bubbleSort).toBeDefined()
    expect(bubbleSort2).toBeDefined()
  })

  it('test sorting', () => {
    const compareNumeric = (a, b) => a - b
    const inputArray = shuffle(range(-10, 10))
    const expectArray = [...inputArray].sort(compareNumeric)
    expect(bubbleSort(inputArray)).toEqual(expectArray)
    expect(bubbleSort2(inputArray)).toEqual(expectArray)
  })
})

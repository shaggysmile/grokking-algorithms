const { range, shuffle } = require('./../utils/array')
const { bubbleSort, bubbleSort2 } = require('./bubble')

const compareNumeric = (a, b) => a - b
const inputArray = shuffle(range(-10, 10))
const expectArray = [...inputArray].sort(compareNumeric)

describe('bubble sorting', () => {
  it('check if bubbleSort functions exists', () => {
    expect(bubbleSort).toBeDefined()
    expect(bubbleSort2).toBeDefined()
  })

  it('test bubble sorting 1', () => {
    expect(bubbleSort(inputArray)).toEqual(expectArray)
  })
  it('test bubble sorting 2', () => {
    expect(bubbleSort2(inputArray)).toEqual(expectArray)
  })
})

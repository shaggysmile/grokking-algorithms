const { range, shuffle, swap } = require('./array')

test('init array utils', () => {
  expect(range).toBeDefined()
  expect(shuffle).toBeDefined()
  expect(swap).toBeDefined()
})

test('test array range', () => {
  expect(range(0)).toEqual([])
  expect(range(0, 3)).toEqual([0, 1, 2])
  expect(range(1, 3)).toEqual([1, 2])
})

test('test array swap', () => {
  const array = [0, 1, 2, 3, 4, 5]
  expect(swap([...array], 0, 1)).toEqual([1, 0, 2, 3, 4, 5])
  expect(swap([...array], 0, 5)).toEqual([5, 1, 2, 3, 4, 0])
})

var nAry = require('.')

function sum(x, y, z) {
  return x + y + (z || 0)
}

test('ignores extra args', () => {
  expect(nAry(2, sum)(1, 2, 3)).toBe(3)
})

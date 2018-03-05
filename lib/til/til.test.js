var til = require('.')

test('applies cb to value while condition is true', () => {
  var val = til(i => i <= 100, i => i * 2)(2)
  expect(val).toBe(128)
})

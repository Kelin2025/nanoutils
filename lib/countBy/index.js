import curryN from '../curryN'

export default curryN(2, function countBy(cb, arr) {
  return arr.reduce(function(acc, cur) {
    var k = cb(cur)
    acc[k] = (acc[k] || 0) + 1
    return acc
  }, {})
})
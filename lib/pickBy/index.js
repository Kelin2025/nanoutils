import curry2 from '../_internal/_curry2'

export default curry2(function pickBy(cb, obj) {
  return Object.keys(obj).reduce(function(acc, key) {
    if (cb(obj[key], key)) acc[key] = obj[key]
    return acc
  }, {})
})

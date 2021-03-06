import curry2 from '../_internal/_curry2'

var map
try {
  map = Map
} catch (_) { }
var set

try {
  set = Set
} catch (_) { }

function equals (a, b, circulars) {
  var circ = (circulars || []).concat([a, b])
  if (a === b) return true
  if (a == null || b == null) return a === b
  if (typeof a !== typeof b) return false
  if (a instanceof Date) {
    return a.getTime() === b.getTime()
  }
  if (a instanceof RegExp) {
    return a.toString() === b.toString()
  }
  if (set && a instanceof set) {
    return equals(a.values(), b.values(), circ)
  }
  if (map && a instanceof map) {
    return equals(a.entries(), b.entries(), circ)
  }
  if (typeof a === 'object' && typeof b === 'object') {
    var keys = Object.keys(a)
    return (
      keys.length === Object.keys(b).length &&
      keys.every(function (key) {
        return circ.some(function (c) {
          return c === a[key]
        })
          ? a[key] === b[key]
          : equals(a[key], b[key], circ)
      })
    )
  }
  return false
}

export default curry2(equals)

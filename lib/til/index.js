import curry3 from '../_internal/_curry3'

export default curry3(function til (cond, cb, val) {
  return !cond(val) ? til(cond, cb, cb(val)) : val
})

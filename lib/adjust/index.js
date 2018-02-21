import curry3 from '../_internal/_curry3'

export default curry3(function adjust(fn, i, arr) {
  if (arr[i]) arr[i] = fn(arr[i])
  return arr
})

import curry3 from '../_internal/_curry3'

export default curry3(function addIndex(f, g, array) {
  var index = 0;
  return f(
    function(value) {
      return g(value, index++)
    }, 
    array
  )
})
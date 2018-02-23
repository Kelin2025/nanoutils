import curry2 from '../_internal/_curry2'
import sortBy from '../sortBy'

export default curry2(function sortWith(listOfComparators, array) {
  return sortBy(
    listOfComparators
      .slice(1)
      .reduce(
        function(newComparator, comparator) {
          return function(a, b) {
            return newComparator(a, b) || comparator(a, b)
          }
        },
        listOfComparators[0]
      ),
    array
  )
})
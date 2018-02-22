var unionWith = require('.')

test("return array with no duplicates according to provided equality function", () => {
	const arr1 = [{ a: 1 }, { a: 2 }]
	const arr2 = [{ a: 1 }, { a: 3 }]

	const func = (item1, item2) => item1.a === item2.a

	const result = [{ a: 1 }, { a: 2 }, { a: 3 }]

	expect(unionWith(func, arr1, arr2)).toEqual(result)
	// curring
	expect(unionWith(func, arr1)(arr2)).toEqual(result)
	expect(unionWith(func)(arr1, arr2)).toEqual(result)
	expect(unionWith(func)(arr1)(arr2)).toEqual(result)
})

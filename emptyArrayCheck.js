const array = [];

console.log(array.length ? true : false);

const arr = undefined;

console.log(!!(arr && arr.length))

console.log(arr?.length ? true : false)
//optional chaining
//?.

//your can use it with the null coalescing operator, too .
console.log(arr?.[0]?.id ?? "No id property")

myArray = 'Dave';

myArray = [{"id":1}]
console.log(Array.isArray(myArray) && myArray.length ?true: false)

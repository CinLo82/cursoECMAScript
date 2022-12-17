const array = [24, 25, 34, 24];

console.log(array);
console.log(array.length);

//[ 24, 25, 34, 24 ]
//4

const array1 = [24, 25, 34, 24, , , , ];

console.log(array1);
console.log(array1.length);
// [ 24, 25, 34, 24, <3 empty items> ]
// 7

const array2 = [24, 25, 34, 24, , , ,44, 5 ];

console.log(array2);
console.log(array2.length);
// [ 24, 25, 34, 24, <3 empty items>, 44, 5 ]
// 9
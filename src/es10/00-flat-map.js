// flat
const array = [1,1,2,3,4,[1,3,4,5,[2,3,1]]];
console.log(array.flat(3));

//flat-map
const array2 = [1,1,2,3,4];
console.log(array2.flatMap(v => [v, v * 2]));


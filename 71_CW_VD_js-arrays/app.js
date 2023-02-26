const array1 = [1, 2, 3, -10, 9];
// const array = array1;
// array[0] = 80;
// console.log(array1[0]);
// const array2 = array1.sort((a,b) => a - b);
// const array2 = array1.sort(); //no comparator - sorting of strings: [ -10, 2, 3, 80, 9 ]
// console.log("array sorted");
// console.log(array2);
// // adds to end
// console.log(array1.push(40));
// // console.log(array1.push(40).push(20)); //TypeError: array1.push(...).push is not a function
const array2 = [10, 15];
// array1.push(array2); //6
// // console.log(array1); //[ 1, 2, 3, -10, 9, 40, [ 10, 15 ] ]
// // array2.push(array2);
// // console.log(array2); // circulation: <ref *1> [ 10, 15, [Circular *1] ]
// // //using spread operator
array1.push(...array2);
console.log(array1);
// console.log([1, 2, 3, -10, 9].push(...[26, -2, 113, -100, 99])); //10 (elements)
/************************************/
// adds at beginning
array1.unshift(-100);
// console.log(array1.unshift(-100)); // "-100" puts to the beginning and gives the number of elements. 
//concat
// console.log(array1.concat(array2));
// console.log(array1 + array2); // concatination of the strings: -100,1,2,3,-10,9,10,1510,15
/************************************/
// join
// console.log(array1.join(':'));  // "-100:1:2:3:-10:9:10:15"
// inserts at middle
array1.splice(4, 0, 'Hello');
console.log(array1);

// let array1 = [1, 2, 3, -10, 9];
// const array = array1;
// array[0] = 80;
// console.log(array1[0]);
// const array2 = array1.sort(); //no comparator - sorting of strings
// console.log("array sorted");
// console.log(array2);
//adds to end
// console.log(array1.push(40));
// const array2 = [10, 15];
// array1.push(array2);
//console.log(array1);
//array2.push(array2);
//console.log(array2) //circulation
//using spread operator
// array1.push(...array2);
// console.log(array1);
/*********************************** */
//adds at beginning
// array1.unshift(-100);
//concat
//console.log(array1.concat(array2));
//console.log(array1 + array2); concatination of the strings
/************************************************************** */
//join 
//console.log(array1.join(':'))
/***************************************************************** */
//inserts at middle
// array1.splice(4, 0,'Hello'); //remove N (2-nd place) elements, starting from
// console.log(array1);

// slice: 1st parameter - starting index, 2nd parameter - finishing index. slice takes a copy, not chaning base array.
// slice returns copy of a part of array; 
// const array3  = array1.slice();
// console.log(array1, 'array1');
// console.log(array1.splice(4, 3), 'splice result of array1');
// console.log(array1, 'array1 after splice');
// console.log(array1.slice(4, 7), 'slice result of array1');
// console.log(array1, 'array1 after slice');

// removes first element
// console.log(array1.shift(), 'result of shift');
// console.log(array1,'array1 after shift');
// removes last element
// console.log(array1.pop(), 'result of pop');
// console.log(array1, 'array1 after pop');
// array1 = [3, {n: 4}]; // 2nd element is n, which equals to 4.
// console.log(array1.indexOf(3), 'result indexOf(3)');
// console.log(array1.indexOf({n: 4}), 'result indexOf({n: 4})');
// console.log(array1.findIndex(e => e.n==4), 'result array1.findIndex(e => e.n==4)');
/***************************************************************** */
// map
// array1 = [1, 2, 3, 4, 5];
// console.log(array1.map(e => e ** 2), 'result of array1.map(e => e ** 2)');
// console.log(array1, 'array1 after applying map method');
//filter
// console.log(array1.filter(e => e % 2 == 1), 'result of array1.filter(e => e % 2 == 1)');
// console.log(array1, 'array1 after applying filter method');
// reduce
// console.log(array1.reduce((r, e) => r + e));
// console.log(array1.reduce((r, e) => r + e), 'result of array1.reduce((r, e) => r + e))');
// console.log(array1.reduce((r, e) => r * e, 10));
// console.log(array1.reduce((r, e) => r * e, 10), 'result of array1.reduce((r, e) => r * e, 10))');
// console.log(array1, 'result of array1');

// KR
// function maxMinAvg (array) {
//     res.average = 
//     `Maximal value is ` + array.reduce((r, e) => r * e, 10);
// }
// console.log(maxMinAvg(array1));
//required output (average should be as an integer number):
//Maximal value is 5, minimal value is 1, average value is 3.

// function maxMinAvg (array) {
//         const res = array.reduce((r, e) => {
//             r.max = Math.max(r.max, e);
//             r.min = Math.min(r.min, e);
//             r.total += e;
//             return r;
//     }, {min: array[0], max: array[0], total: 0})
//     return `Maximal value is ${res.max}, minimal value is ${res.min}, average value is ....`
// }

/***************************************************************** */
//TODO your code
/***************************************************************** */
// array1 = [1, 2, 3];
// const array4 = array1.map(e => e * 2);
// console.log(array4); // [ 2, 4, 6 ]

// Array.prototype.map = function(mapper) {
//     console.log(this);

//     const newArray = [];
//     this.forEach((value, index, array) => {
//         newArray[index] = mapper(value, index, array);
//     });
//     return newArray;
// }
// /***************************************************************** */
// array1 = [1, 2, 3];
// const array4 = array1.map((e, i) => i + '. ' + e * 2);
// console.log(array4); // [ 2, 4, 6 ]

// Number.prototype.toString = function () {
//     console.log("test");
//     return 10;
// }

// let num = 5;
// console.log(`${num.toString()} `); // test  10

// Number.prototype.toString = function () {
//     console.log("test");
//     return toBinary(this);
// }
// function toBinary(num) {
//     let res = [];
//     do {
//         let rem = num % 2;
//         num = Math.round(num / 2);
//         res.push[rem];
//     }while(num != 0);
//     return res;
// }

// let num = new Number(5);
// console.log(`${num} `); //looping

// array1 = [1, 2, 3];
// // const[a, b, c] = array1;
// // console.log(a, b, c, 'return of a, b, c'); // 1 2 3

// let [, b, c] = array1;
// console.log(b, c, 'return of b, c'); // 2 3
// b = 100;
// console.log(array1);

// let d = 4;
// let g = 5;
// //swap
// [d,g]=[g,d];
// //destructuring object
// console.log(d, g); //5 4
function SomeObject() {
    this.h = 10;
    this.f = function()function(){console.log("hello")};
}
let {f, h} = {h:10, f: function(){console.log("hello")}};
console.log(h, f);
let {f, h} = obj;
f();
obj.f();
let array1 = [1, 2, 3, -10, 9];
// const array = array1;
// array[0] = 80;
// console.log(array1[0]);
// const array2 = array1.sort(); //no comparator - sorting of strings
// console.log("array sorted");
// console.log(array2);
//adds to end
console.log(array1.push(40));
const array2 = [10, 15];
array1.push(array2);
//console.log(array1);
//array2.push(array2);
//console.log(array2) //circulation
//using spread operator
array1.push(...array2);
console.log(array1);
/*********************************** */
//adds at beginning
array1.unshift(-100);
//concat
//console.log(array1.concat(array2));
//console.log(array1 + array2); concatination of the strings
/************************************************************** */
//join 
//console.log(array1.join(':'))
/***************************************************************** */
//inserts at middle
array1.splice(4, 0, 'Hello');
console.log(array1)

//slice & splice
//slice returns copy of a part of array, splice removes a part of array
const array3 = array1.slice();
console.log(array1.splice(4, 3), 'splice result of array1');
console.log(array1, 'array1 after splice')
array1 = array3.slice();
console.log(array1.slice(4, 7), 'slice result of array1');
console.log(array1, 'array1 after slice')
//removes first element
// console.log(array1.shift(), 'result of shift')
// console.log(array1, 'array1 after shift')
//removes last element
console.log(array1.pop(), 'result of pop')
console.log(array1, 'array1 after pop')
//includes
// array1 = [3, {n: 4}];
// console.log(array1.indexOf(3), 'result indexOf(3)')
// console.log(array1.indexOf({n:4}),'result indexOf({n:4})' )
// console.log(array1.findIndex(e => e.n==4));
/**************************************************** */
//map
array1 = [1, 2, 3, 4, 5, 20];
// console.log(array1.map(e => e ** 2), 'result of array1.map(e => e ** 2)');
// console.log(array1, 'array1 after applying map method')
//filter
// console.log(array1.filter(e => e % 2 == 1), 'result of array1.filter(e => e % 2 == 1)')
// console.log(array1, 'array1 after applying filter  method')
//reduce
console.log(array1.reduce((r, e) => r * e))
function maxMinAvg(array) {

    const res = array.reduce((r, e) => {
        r.max = Math.max(r.max, e);
        r.min = Math.min(r.min, e);
        r.total += e
        return r
    }, { min: array[0], max: array[0], total: 0 })
    return `maximal value - ${res.max}, minimal value - ${res.min}, average value - ${Math.round(res.total / array.length)}`

}
console.log(maxMinAvg(array1));
//required output (average should be as an integer number)
//Maximal value is 5, minimal value is 1, average value is 3 
/******************************************************* */
Array.prototype.map = function (mapper) {
    console.log(this);

    const newArray = [];
    this.forEach((value, index, array) => {
        newArray[index] = mapper(value, index, array);
    });

    return newArray;
}
/************************************************************** */
array1 = [1, 2, 3];
// const array4 = array1.map((e, i) => i + '. ' + e * 2);
// //array4 - [2, 4, 6]
// console.log(array4)
Number.prototype.toString = function () {
    console.log("test");
    return this;

}


let num = new Number(5);
//console.log(`${num} `);
array1 = [1, 2, 3];
let [, b, c] = array1;
console.log(b, c);
b = 100;
console.log(array1);
let d = 4;
let g = 5;
//swap
[d, g] = [g, d];
//destructuring object
function SomeObject() {
    this.h = 10;
    this.f = function () { console.log("hello") }
}
// const obj = {h:10, f: function(){console.log("hello")}}
const obj = new SomeObject();
let { f, h } = obj;
f();
obj.f();
Number.prototype.toString = function (str = '0123456789') {
    // console.log('test');

    return toBinary(this, str);
}
function toBinary(num, str) {
    const res = [];

    do {
        let rem = num % str.length;
        num = (num - rem) / str.length;
        res.unshift(str[rem]);
    } while (num != 0);
    return res.join('');
};
const num1 = new Number(0xff);
console.log(`${num1.toString('abc')}`)





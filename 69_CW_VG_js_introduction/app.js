// let a = 10;
// console.log(`JS welcome with ${a}`)
//Primitives
let a = 12.5; //number

a = "Hello"; //string
a = true; //boolean
//Wrapper classes
let b = new String("Hello");
b = new Number(12.5);
b = new Boolean(true);
//Classes 
let d = new Date();
d = new Object();
d = new Function();
//Undefine
let c;
//null
let g = null;
//Primitives value ; classes - references

// console.log(`new Number(12.5) == new Number(12.5) is ${new Number(12.5) == new Number(12.5)}`);
// console.log(`12.5 == new Number(12.5) is ${12.5 == new Number(12.5)}`);
// console.log(`12.5 === new Number(12.5) is ${12.5 === new Number(12.5)}`);
// console.log(`new Number(12.5) == new Number(12.5) with String conversion is ${(new Number(12.5)).toString() == (new Number(12.5)).toString()}`);
// console.log(`20 + '20' is ${20 + '20'} `);
// console.log(`20 * '20' is ${20 * '20'} `);
// console.log(`20 * 'a' is ${20 * 'a'} `);
//conversion to string
// console.log(12.0.toString());
// console.log(12.5 + '');
//conversion to number
// 

//conversion to boolean
// let aa = 0;
// console.log(aa ? aa : 'undefined');
// function fun(num) {
//     if(num != undefined) {
//         console.log('some task is performed with ' + num);
//     } else {
//         console.log('task is not performed ')
//     }
// }
// fun(0);
// let aa = 0;
// function fun(num) {
//         if(typeof(num) == "object") {
//             console.log('some task is performed with ' + num);
//         } else {
//             console.log('task is not performed ')
//         }
//     }fun(0)
//console.log(10 - true);
//Array
const ar = [];
ar[1000000] = 10;
ar['qsd'] = "Andrey";
ar.andrey = "Andrey";
ar.length = 0;
//console.log(ar[1000000], ar.name);
ar[0] = 123;
ar[1] = 2;
//console.log(ar.sort((a, b) => a - b));
//console.log(typeof ar);
const fun1 = function () {
    console.log("kkkk");
};
fun1.name = "my function";
//fun1();
//const country = "Israel"
//console.log(typeof fun1);




//distinc function properties
// function sum(op1, op2) {
//     op1 = op1 == undefined ? 10 : op1;
//     op2 = op2 == undefined ? 20 : op2;
//     return op1 + op2;
// } <=>
// function sum(op1=10, op2=20) {

//     return op1 + op2;
// } <=>
// function sum(op1, op2) {
// op1 = op1 ?? 10;
// op2 = op2 ?? 20;

// }
// console.log(sum());//30
// console.log(sum(30));//50
// console.log(sum(undefined, 80));//90
// console.log(sum(0,10));//10
const person = {
    id: 123, name: "Vasya", country: "USA",
    getCountry: () => this
};
function createPerson(id, name, country) {
    return {
        id, name, country: country,
        getCountry: function () { return country }
    };
}
const person2 = createPerson(124, "Vasya", "USA");
//console.log(`person == person2 is ${JSON.stringify(person) == JSON.stringify(person2)}`)
//console.log(`person == person2 is ${person.toString() == person2.toString()}`)
//console.log(person.getCountry());  
//getting object keys
//console.log(Object.keys(person)) ;
//getting object values
//console.log(Object.values(person));
//getting object entries
//console.log(Object.entries(person));
//Field Access
//console.log(person.id) //access through point
//console.log(person["id"]) //access through brackets 
// person.age = 25;
// console.log(person.age);
// const age = "age";
// person[age] = 25; //Java person.put(age, 25)
// console.log(person[age]);
const array = [
    'abc', 'ab', 'a', 'lpm', 'abc', 'lpm', 'lpm'
];

//Output:
/*
lpm => 3
abc => 2
a => 1
ab => 1
*/
function displayOccurences(array) {
    const obj = {};
    
    array.forEach(element => {
        element = element.toLowerCase();
        obj[element] = obj[element] ? obj[element] + 1 : 1;
    });
    Object.entries(obj).sort((e1, e2) => {
        const res = e2[1] - e1[1];
        return res ? res : e1[0] > e2[0] ? 1 : -1;
    }).forEach(e => console.log(`${e[0]} => ${e[1]}`))
    
}
displayOccurences(array);





// const [a, b] = [..."ab"];
// const ar = [];
// ar.push(..."ab");
// const n = new Number(0);
// const c = n;
// n = null;
// const l = 2;
// const b = l;

// console.log(l);
// console.log(b);
// console.log(ar);

// console.log(3 + 4 * "5");

// const a = {};
// const b = { key: "b", toString: function() {return this.key + 9}};
// const c = { key: "c" };
// //Any object key should be a string ; if an object doesn’t have the method
// //toString , JS will convert the object to [object Object] 
// a.b = 123;
// a[c] = 456;

// console.log(a[b]);


// const numbers = [1, 2, 3];
// numbers[10] = 11;
// console.log(numbers.length);

// const num = parseInt("155*6");
// console.log(num);

// let a = parseInt("k", 32);
// a = 10 + "7 * 6";
// console.log(a);

// function getInfo(member, year) {
//     member.name = "Lydia";
//     year = "1998";
//   }
  
//   const person = { name: "Sarah" };
//   const birthYear = "1997";
  
//   getInfo(person, birthYear);
  
//   console.log(person, birthYear);
  

//   function greeting() {
//     throw "Hello world!";
//   }
  
//   function sayHi() {
//     try {
//       const data = greeting();
//       console.log("It worked!", data);
//     } catch (e) {
//       console.log("Oh no an error:", e);
//     }
//   }
  
//   sayHi();
  




//   const numbers = [7, 2, 3, 4, 5];
// const [y] = numbers;

// console.log(y);


// const user = { name: "Lydia", age: 21 };
// const admin = { admin: true, user };
// // const admin = { admin: true, ...user };

// console.log(admin);



// const settings = {
//   username: "lydiahallie",
//   level: 19,
//   health: 90
// };

// const data = JSON.stringify(settings, ["level", "health"]);//considered only // specified keys 
// console.log(data);


// let num = 10;

// const increaseNumber = () => num++;
// const increasePassedNumber = number => number++;

// const num1 = increaseNumber();
// const num2 = increasePassedNumber(num1);

// console.log(num1);
// console.log(num2);



// [1, 2, 3, 4].reduce((x, y) => console.log(x, y));



// function addToList(item, list) {
//     return list.push(item);
//   }
  
//   const result = addToList("apple", ["banana"]);
//   console.log(result);
  
// console.log("К want pizza"[0])

// function sum(num1, num2 = num1) {
//     console.log(num1 + num2)
//   }
  
//   sum(10)
  

// let newList = [1, 2, 3].push(4)

// console.log(newList.push(5))


// <div onclick="console.log('div')">
//   <p onclick="console.log('p')">
//     Click here!
//   </p>
// </div>



// const person = { name: "Lydia" };

// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person, 21));
// console.log(sayHi.bind(person, 21));


// function sayHi() {
//     return (() => 0)();
//   }
  
//   console.log(typeof sayHi());
  

// console.log(0, new Number(0), (""), (" "), new Boolean(false), undefined);

// console.log(!!0, !!(new Number(0)), !!(""), !!(" "), !!(new Boolean(false)), !!undefined);


// (() => {
//     let x, y;
//     try {
//       throw new Error();
//     } catch (x) {
//       (x = 1), (y = 2);
//       console.log(x);
//     }
//     console.log(x);
//     console.log(y);
//   })();
  

// [[0, 1], [2, 3]].reduce(
//     (acc, cur) => {
//       return acc.concat(cur);
//     },
//     [1, 2]
//   );
  

  // console.log([[0, 1], [2, 3]].reduce(
  //   (acc, cur) => {
  //     return acc.concat(cur);
  //   },
  //   [1, 2]
  // ));


  // console.log(!!0,
  //   !!(new Number(0)),
  //   (!!""),
  //   (!!" "),  
  //   !!new Boolean(false),
  //   !!undefined,
  //   );


  //   console.log(!!0, !!(new Number(0)), !!(""), !!(" "), !!(new Boolean(false)), !!undefined);
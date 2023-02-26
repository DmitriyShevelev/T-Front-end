// const person = {id: 123, name: "Vasya", country: "USA",
//  getContry: function() {
//      return this.country
//  }};
//  function createPerson(id, name,country) {
//      return {id, name, country, toString: function() {
//          return `type Person: [${this.id}/${this.name}/${this.country}]`
//      }}
//  }
function Person(id, name, country) {
    this.id = id;
    this.name = name;
    this.country = country;

}
Person.prototype.toString = function () {
    return `type Person: [${this.id}/${this.name}/${this.country}]`
}
// Object.prototype.toString = function() {
//     throw new Error("forget about toString");
// }
const person = new Person(123, "Vasya", "USA");
console.log(person + ""); //launching of the toString
console.log(person.constructor.name);
class Employee extends Person {
    constructor(id, name, country, hours, wage) {
        super(id, name, country);
        this.hours = hours;
        this.wage = wage;
    }
    toString() {
        return `Type: Employee, ${super.toString()}, salary: ${this.computeSalary()}`
    }
}
Employee.prototype.computeSalary = function () {
    return this.hours * this.wage;
}
// Employee.prototype.toString = function () {
//     return `Type: Employee, ${Person.prototype.toString.call(this)}, salary: ${this.computeSalary()}`
// }
const empl = new Employee(124, "Moshe", "Israel", 50, 500);
console.log(empl.toString());
//console.log(empl.computeSalary());
Employee.prototype.displaySalary = function () {
    console.log(`salary of employee ${this.name} is ${this.computeSalary()}`)
}
//empl.displaySalary(); //error as displaySalary doesn't exist in the Employee prototype
//displaySalary.call(empl);
const employees = [
    new Employee(125, "Vasya", "Israel", 100, 500),
    new Employee(126, "Moshe", "Israel", 50, 500)
]
//employees.forEach(e => console.log(e.toString()));
employees.forEach(e => console.log(Person.prototype.toString.call(e)));
class Deferred {
    constructor() {
        this.thenArr = [];
    }
    then(fun) {
        this.thenArr[this.thenArr.length] = fun;
    }
    resolve(str) {
        this.thenArr.forEach(e => {
            str = e(str);
        })
    }
}






const dd = new Deferred()
dd.then(function (res) { console.log('1 ', res); return 'a'; });

dd.then(function (res) { console.log('2 ', res); return 'b'; });

dd.then(function (res) { console.log('3 ', res); return 'c'; });
dd.resolve('hello');

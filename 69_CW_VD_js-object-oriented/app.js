// const person = {id: 123, name: "Vasya", country: "USA",
//  getCountry: function() }
//     return this.country
// }};

// function createPerson(id, name, country) {
//     return {id, name, country, getCountry: function() {
//         return this.country;
//     }}
// };

// function createPerson(id, name, country) {
//     return {id, name, country, toString: function() {
//         return `type Person: [${this.id}/${this.name}/${this.country}]`;
//     }}
// }
// const person = createPerson(123, "Vasya", "USA");
// console.log(`${person}`);

function Person(id, name, country) {
    this.id = id;
    this.name = name;
    this.country = country;
}
Person.prototype.toString = function () {
    return `type Person: [${this.id}/${this.name}/${this.country}]`;
}

const person = new Person(123, "Vasya", "USA");
// console.log(person + "");
console.log(person.constructor.name);

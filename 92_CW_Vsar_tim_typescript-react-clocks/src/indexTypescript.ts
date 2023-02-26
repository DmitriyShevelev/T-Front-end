const num: number = 20;
// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i),1000);


// }
let str = "abc";
let str1:string;
let myBoolean: boolean;
const num1: number = +str;
let comparator: (a?: number, b?: number) => number;
myBoolean = !!"abcd";
str1 = "1234"
comparator = function (n: number = 10, b: number = 20) {
    return n - b;
}
let c = comparator() + "str";
//console.log(c);
let m = +str - +c;
let a1:any;
a1 = 10;
a1 = "10";
a1 = { d: 25, c: "ddd" };
let a2: unknown;
a2 = 234;
a2 = true;
a2 = { d: 25, c: "ddd" };

a1 = a2;
//console.log(a1.d);
a1 = str;
myBoolean = a1;
str = "12";
//console.log(comparator(str as any,12));
let a10;
a10 = 100;
a10 = "100";
/********************************************************* */
//Using interface
// interface Person {
//     id: number;
//     name: string;
//    getName?: ()=>string
// }
// let person1: Person = {id: 123,name: "Moshe",getName() {return this.name}};
// let id = "tttt";
// person1[id] = 123;
// console.log((person1 as any)[id]);
// interface Employee extends Person {
//     salary: number;
// }
// let empl: Employee = {id: 123, name: "Nik", salary:5000};
// interface Employee {
//     company?:string;
// }
/***************************************************************** */
//Using Type
type Person = {
    id: number;
    name: string;
    getName?: () => string
    toString: () => string
}
let person1: Person = { id: 123, name: "Moshe", getName() { return this.name } };
let id = "tttt";
person1[id] = 123;
//console.log((person1 as any)[id]);
type Employee = Person & {
    salary: number;
}
let empl: Employee = { id: 123, name: "Nik", salary: 5000 };
type EmployeeCompany = Employee & {
    company: string;
}
/************************************************* */
type Comparator<T> = (a: T, b: T) => number;
function comparator_func<T>(a: T, b: T): number {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}
const comparatorPerson: Comparator<Person> = comparator_func;
// console.log(comparatorPerson({id:123,name:'Moshe', toString(){
//     return JSON.stringify(this)
// }}, {id:120,name:'Moshe',toString(){
//     return JSON.stringify(this)
// }}))
const comparatorNumber: Comparator<number> = comparator_func;
//console.log(comparatorNumber(123, 34))
/********************************************************************** */
interface IComparator<T> {
    compareTo(a: T, b: T): number;
}
class ComparatorPerson implements IComparator<Person> {
    compareTo(a: Person, b: Person): number {

        return a.name.localeCompare(b.name);
    }

}
/******************************************************** */
type Point = {
    x: number;
    y: number;
}
interface Shape {
    draw():void;
}
class Line implements Shape {
    constructor(private readonly p1: Point, private p2: Point) {}
    draw(): void {
        console.log(`this is the line from point (${JSON.stringify(this.p1)}) to point (${JSON.stringify(this.p2)})`)
    }
    getLengthX() {
        return this.p1.x - this.p2.y;
    }
    
}
class Square implements Shape {
    constructor(private _p: Point, private _width: number){}
    draw(): void {
        console.log(`this is the square with point (${JSON.stringify(this._p)}, width ${this._width})`)
    }
    
}
const shapes = new Array<Shape>();
shapes.push(new Line({x:3, y:4},{x:5, y:10}), new Square({x:3, y:5},  20));
shapes.forEach(s => {
    s.draw();
    if(s instanceof Line) {
        let length = (s as Line).getLengthX();
        console.log("length", length);
    }
})
const map:Map<string, number> = new Map([["123", 324]]);
const keys:string[] = Array.from(map.keys());









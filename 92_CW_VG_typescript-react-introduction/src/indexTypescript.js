var num = 20;
// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i),1000);
// }
var str = "abc";
var str1;
var myBoolean;
var num1 = +str;
var comparator;
myBoolean = !!"abcd";
str1 = "1234";
comparator = function (n, b) {
    if (n === void 0) { n = 10; }
    if (b === void 0) { b = 20; }
    return n - b;
};
var c = comparator() + "str";
//console.log(c);
var m = +str - +c;
var a1;
a1 = 10;
a1 = "10";
a1 = { d: 25, c: "ddd" };
var a2;
a2 = 234;
a2 = true;
a2 = { d: 25, c: "ddd" };
a1 = a2;
//console.log(a1.d);
a1 = str;
myBoolean = a1;
str = "12";
//console.log(comparator(str as any,12));
var a10;
a10 = 100;
a10 = "100";
var person1 = { id: 123, name: "Moshe", getName: function () { return this.name; } };
var id = "tttt";
person1[id] = 123;
var empl = { id: 123, name: "Nik", salary: 5000 };
function comparator_func(a, b) {
    if (a < b) {
        return -1;
    }
    else if (a > b) {
        return 1;
    }
    else {
        return 0;
    }
}
var comparatorPerson = comparator_func;
// console.log(comparatorPerson({id:123,name:'Moshe', toString(){
//     return JSON.stringify(this)
// }}, {id:120,name:'Moshe',toString(){
//     return JSON.stringify(this)
// }}))
var comparatorNumber = comparator_func;
var ComparatorPerson = /** @class */ (function () {
    function ComparatorPerson() {
    }
    ComparatorPerson.prototype.compareTo = function (a, b) {
        return a.name.localeCompare(b.name);
    };
    return ComparatorPerson;
}());
var Line = /** @class */ (function () {
    function Line(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
    }
    Line.prototype.draw = function () {
        console.log("this is the line from point (".concat(JSON.stringify(this.p1), ") to point (").concat(JSON.stringify(this.p2), ")"));
    };
    Line.prototype.getLengthX = function () {
        return this.p1.x - this.p2.y;
    };
    return Line;
}());
var Square = /** @class */ (function () {
    function Square(_p, _width) {
        this._p = _p;
        this._width = _width;
    }
    Square.prototype.draw = function () {
        console.log("this is the square with point (".concat(JSON.stringify(this._p), ", width ").concat(this._width, ")"));
    };
    return Square;
}());
var shapes = new Array();
shapes.push(new Line({ x: 3, y: 4 }, { x: 5, y: 10 }), new Square({ x: 3, y: 5 }, 20));
shapes.forEach(function (s) {
    s.draw();
    if (s instanceof Line) {
        var length_1 = s.getLengthX();
        console.log("length", length_1);
    }
});
var map = new Map([["123", 324]]);
var keys = Array.from(map.keys());

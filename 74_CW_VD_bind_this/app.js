// class X {
//     constructor(array, factor) {
//         this.array = array;
//         this.factor = factor;
//     }
//     displayOne(element) {
//         console.log(element * this.factor);
//     }
//     displayAll() {
//         // this.array.forEach(this.displayOne);
//         // this.array.forEach(e => this.displayOne(e));
//         // this.array.forEach(function(e) {this.displayOne(e)} );
//         this.array.forEach(this.displayOne.bind(this));
//     }
// }

class X {
    constructor(array, factor) {
        this.array = array;
        this.factor = factor;
        this.f = ()=> this.displayOne(20);  // this doesn't exist in these arrow function.
    }
    displayOne(element) {
        console.log(element * this.factor);
    }
    displayAll() {
        this.array.forEach(this.displayOne(e));
    }
}

const ar = [ 1, 2, 3];
const x = new X(ar, 10);
const obj = {
    d: 45,
    f: function() {console.log(this.d)}
}
obj.f();
// x.displayAll();
/******************************************************** */
// Array.prototype.forEach = function(func) {
//     console.log('kuku');
//     for (let i = 0; i < this.length; i++) {
//         func(this[i]);
//         // displayOne(this[i]);
//     }
// }
/******************************************************** */
// const ar2 = [0.1, -40];
// ar.forEach(e => console.log(e));
// const obj = {x1: 2, displ: function() {console.log(this.x1)}};
// obj.displ();
const point = {
    x: 3,
    y: 4
};
function pointInSpaceTime(z, t) {
    console.log(`x: ${this.x}, y: ${this.y}, z: ${z}, t: ${t}`);
};

Function.prototype.mybind = function(thisObj, ...args) {
    return (...params) => {
        thisObj.method = this;
        const res = thisObj.method(...args)
        if (method) {
            thisObj.method = method;
        } else {
            delete thisObj.method;
        }
        return res;
    }
}
// point.method = pointInSpaceTime;
// point.method(10, 20);

//point.pointInSpaceTime(10, 20);  // error as pointInSpaceTime doesn't belong to point;

// Way 1:
// const pointInSpaceTimeMethod = pointInSpaceTime.bind(point);
// pointInSpaceTimeMethod(10, 20); // additional params are passed during the call.
// Way 2:
// const pointInSpaceTimeMethod = pointInSpaceTime.bind(point, 10, 20);
// pointInSpaceTimeMethod(10, 20);
// Way 3:
// const pointInSpaceTimeMethod = pointInSpaceTime.bind(point, 10, 20);
// pointInSpaceTimeMethod();
// Function.prototype.mybind = function(thisObj, ...args) {
//     return (...params) => {
//         thisObj.method = this;
//         thisObj.method(...args.concat(params));
//         // this.call(thisObj, args.concat(params));
//         // this.apply(thisObj, args.concat(params));
//     }
// }
// // Way 4:
// const pointInSpaceTimeMethod = pointInSpaceTime.bind(point, 10);
// pointInSpaceTimeMethod(20); //mixed both at binding and at method call

/*********************** mybind */
// Way 1:
// const pointInSpaceTimeMethod = pointInSpaceTime.mybind(point);
// pointInSpaceTimeMethod(10, 20); // additional params are passed during the call.
// Way 2:
// const pointInSpaceTimeMethod = pointInSpaceTime.mybind(point, 10, 20);
// pointInSpaceTimeMethod(10, 20);
// Way 3:
// const pointInSpaceTimeMethod = pointInSpaceTime.mybind(point, 10, 20);
// pointInSpaceTimeMethod();
// Way 4:
// const pointInSpaceTimeMethod = pointInSpaceTime.mybind(point, 10);
// pointInSpaceTimeMethod(20); //mixed both at binding and at method call
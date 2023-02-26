class X {
    constructor(array, factor) {
        this.array = array;
        this.factor = factor;
        this.f = ()=> this.displayOne(20);
    }
    displayOne(element) {
        console.log(element * this.factor);
    }
    displayAll() {
        this.array.forEach(e => this.displayOne(e));
    }
}
const ar = [ 1, 2, 3];
const x = new X(ar, 10);
const obj = {
   d: 45,
   f: function()  {console.log(this.d)}

}
obj.f();
// x.displayAll();
/****************************************** */
// Array.prototype.forEach = function(func) {
//     console.log('kuku');
//     for (let i = 0; i < this.length; i++) {
//         func(this[i]);
//     }
// }
/********************************************** */
// const ar2 = [0.1, -40];
//  [10, 20].forEach(e => console.log(e));
// const obj = {x1: 2, displ: function() {console.log(this.x1)}}
// obj.displ();
const point = {
    x: 3,
    y:4
};
function pointInSpaceTime(z, t) {
    console.log(`x: ${this.x}, y: ${this.y}, z: ${z}, t: ${t}`);
}
point.method = pointInSpaceTime;
// point.method(10, 20);
//point.pointInSpaceTime(10, 20); error as pointInSpaceTime doen't belong to point
// const pointInSpaceTimeMethod = pointInSpaceTime.bind(point);
//  pointInSpaceTimeMethod(10, 20); //additional params are passed during the call
// const pointInSpaceTimeMethod = pointInSpaceTime.bind(point, 10, 20); //params passed at binding
// pointInSpaceTimeMethod();
Function.prototype.mybind = function(thisObj, ...args) {
    return (...params) => {
        const method = thisObj.method;
       thisObj.method = this;
      const res =  thisObj.method(...args.concat(params));
      if (method != undefined) {
          thisObj.method = method;
      } else {
          delete thisObj.method;
      }
      
      return res;
    }
}
// const pointInSpaceTimeMethod = pointInSpaceTime.mybind(point, 10);
// pointInSpaceTimeMethod(20); //mixed both at mybinding and at method call
/**************** mymbind */
//point.pointInSpaceTime(10, 20); error as pointInSpaceTime doen't belong to point
// const pointInSpaceTimeMethod = pointInSpaceTime.mybind(point);
//  pointInSpaceTimeMethod(10, 20); //additional params are passed during the call
// const pointInSpaceTimeMethod = pointInSpaceTime.mybind(point, 10, 20); //params passed at mybinding
// pointInSpaceTimeMethod();

const pointInSpaceTimeMethod = pointInSpaceTime.mybind(point, 10);
pointInSpaceTimeMethod(20); //mixed both at mybinding and at method call


// In Javascript, functions can be assigned to variables in the same way that strings or arrays can. They can be passed into other functions as parameters or returned from them as well. A “higher-order function” is a function that accepts functions as parameters and/or returns a function.

let radius = [4, 2, 1, 7];
console.log(radius);
/*
const claculateArea = (arr) => {
    let output = [];
    for (let i of arr) {
        output.push();
    }
    return output;
}


const claculateCircumference = (arr) => {
    let output = [];
    for (let i of arr) {
        output.push(Math.PI * i * 2);
    }
    return output;
}

const claculateDiameter = (arr) => {
    let output = [];
    for (let i of arr) {
        output.push(i * 2);
    }
    return output;
}

console.log(claculateArea(radius));
console.log(claculateCircumference(radius));
console.log(claculateDiameter(radius));

*/



const Area = (r) => {
    return Math.PI * r * r;
}

const Circumference = (r) => {
    return Math.PI * r * 2;
}

const Diameter = (r) => {
    return r * 2;
}


const claculate = (arr, logic) => {
    let output = [];
    for (let i of arr) {
        output.push(logic(i));
    }
    return output;
}

console.log(claculate(radius, Area));
console.log(claculate(radius, Circumference));
console.log(claculate(radius, Diameter));

console.log("using map....");

console.log(radius.map(Area));
console.log(radius.map(Circumference));
console.log(radius.map(Diameter));

console.log("using Prototype");

Array.prototype.claculate = function(logic) {
    let output = [];
    for (let i of this) {
        output.push(logic(i));
    }
    return output;
}

console.log(radius.claculate(Area));
console.log(radius.claculate(Circumference));
console.log(radius.claculate(Diameter));
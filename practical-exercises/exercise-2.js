var a = 10;
var b = 20;
console.log("Before swap: a =", a, ", b =", b);
var temp = a;
a = b;
b = temp;
console.log("After swap: a =", a, ", b =", b);
// es6: // Swap using array destructuring
// [a, b] = [b, a];

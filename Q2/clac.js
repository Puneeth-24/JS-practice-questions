function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}
var a = 2;
var b = 3;
console.log("".concat(a, " + ").concat(b, " = ").concat(add(a, b)));
console.log("".concat(a, " - ").concat(b, " = ").concat(sub(a, b)));
console.log("".concat(a, " * ").concat(b, " = ").concat(mul(a, b)));
console.log("".concat(a, " / ").concat(b, " = ").concat(div(a, b)));

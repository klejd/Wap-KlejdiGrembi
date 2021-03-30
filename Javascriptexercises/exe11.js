function sum(array) {
    return array.reduce((a, b) => a + b);
}

function multiply(array) {
    return array.reduce((a, b) => a * b);
}
let a = [1, 2, 3, 4];
console.log(sum(a));
console.log(multiply(a));
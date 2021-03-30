function sum(array) {
    var x;
    var total = 0;
    for (x = 0; x < array.length; x++) {
        total = total + array[x];
    }
    return total;
}

function multiply(array) {
    var x;
    var total = 1;
    for (x = 0; x < array.length; x++) {
        total = total * array[x];
    }
    return total;
}
var x = [1, 2, 3, 4];
console.log(sum(x));
console.log(multiply(x));
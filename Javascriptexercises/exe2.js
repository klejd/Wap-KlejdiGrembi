var a = performance.now();
console.log(a);

function maxOfThree(n1, n2, n3) {

    var array = [n1, n2, n3];

    var temp = 0;
    for (var x in array) {
        if (array[x] > temp) {
            temp = array[x];
        }

    }
    return temp;
}
console.log(maxOfThree(11, 20, 19));
var a = performance.now();
console.log(a);

var b = performance.now();
console.log(b);
console.log(maxOfThree(11, 20, 19));

function max(n1, n2, n3) {
    if (n1 > n2)
        return n1;
    if (n2 > n3)
        return n2;
    else
        return n3;
}
var b = performance.now();
console.log(b);
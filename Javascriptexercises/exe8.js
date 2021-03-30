function computeSumOfSquares(array) {
    var result = 0;
    result = array.reduce((a, b) => a = a + Math.pow(b, 2));
    return result;
}
var int = [1, 2, 3];
console.log(computeSumOfSquares(int))
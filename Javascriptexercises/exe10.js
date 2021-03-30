function computeSumOfSquaresOfEvensOnly(array) {
    var temparr = [];

    //temparr = array.filter((x) => x % 2 == 0);

    temparr = array.filter((x) => x % 2 == 0).map((a) => Math.pow(a, 2)).reduce((a, b) => a = a + b);
    return temparr;

}
var arr = [1, 2, 3, 4, 5];
console.log(computeSumOfSquaresOfEvensOnly(arr));
// return array.reduce((a, b) => a = a + Math.pow(b, 2), 10);
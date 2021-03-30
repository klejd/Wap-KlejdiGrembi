function printOddNumbersOnly(array) {
    var temparr = [];
    for (var a in array) {
        if (array[a] % 2 == 1) {
            temparr[a] = array[a];

        }

    }
    console.log(temparr);
    return temparr.filter(function() { return true; });

}
var integers = [5, 2, 5, 3, 7, 6, 3];
console.log(printOddNumbersOnly(integers));
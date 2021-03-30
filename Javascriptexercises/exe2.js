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
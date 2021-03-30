function findSecondBiggest(array) {
    try {
        var max = 0;
        var secondmax = 0;
        if (array === undefined) {
            console.log("The array is undefined");
        }
        if (array.length == 1 || array.length == 0) {
            return array;
        }
        for (var x in array) {
            if (array[x] > max) {
                secondmax = max;
                max = array[x];
                //console.log(secondmax);

            } else if (array[x] > secondmax && array[x] != max)
                secondmax = array[x];
        }
        return secondmax;
    } catch {
        console.log("exception ...");
    }
}
let b;
let a = [1, 22, 5, 8, 5, 25, 3, 10, 29, 21];
console.log(findSecondBiggest(b));
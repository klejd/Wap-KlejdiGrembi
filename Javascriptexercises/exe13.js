function fib(n, a, b) {
    // var a = 2;
    // var b = 3;
    let s = 0;
    let temp = [];
    if (a == 0, b == 1)

        temp = [0, 1];

    for (let i = 2; i < n; i++) {
        s = a + b;
        temp[i] = s;
        a = b;
        b = s;


    }
    return temp.filter(function() {
        return true;
    });

}
console.log(fib(10, 0, 1));





// function fib(n) {
//     if (n <= 1)
//         return n;
//     else
//         return fib(n - 1) + fib(n - 2);
// }

// function series(nr, a) {


//     for (let i = a; i <= nr; i++) {
//         console.log(fib(i));
//     }
// }
// console.log(series(10, 2));
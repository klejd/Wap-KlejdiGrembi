// function reverse(str) {
//     if (str.length == 0) {
//         return "";
//     }
//     return reverse(str.substring(1)) + str.charAt(0);
//     //using recursion short and fast.
// }
// console.log(reverse("klejdi grembi"));

function reverse1(str) {
    let s = "";
    let i, j;

    // for (i = 0, j = str.length - 1; i < j; i++, j--) {
    for (i = 0; i < j; i++) {
        for (j = str.length - 1; j > i; j--) {
            s = str[i];
            str[i] = str[j];
            str[j] = s;
            console.log(s);

        }

    }
    return s;

}
console.log(reverse1("klejdi"));
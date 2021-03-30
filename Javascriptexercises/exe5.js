function reverse(str) {
    if (str.length == 0) {
        return "";
    }
    return reverse(str.substring(1)) + str.charAt(0);
    //using recursion short and fast.
}
console.log(reverse("klejdi grembi"));
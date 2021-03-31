function findLongestWord(wordsarray) {
    var save = 0;
    for (var x in wordsarray) {
        if (wordsarray[x].length > save)
            save = wordsarray[x].length;
    }
    return save;
}
var arr = ["abcdf", "Abcd", "ab"];
console.log(findLongestWord(arr));

fucntio
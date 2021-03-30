function filterLongWords(wordarray, leng) {
    var temparr = [];
    var temparr2 = [];
    for (let a in wordarray) {
        if (wordarray[a].length == leng)
            temparr[a] = wordarray[a];

    }
    temparr2 = temparr.filter(function() { return true });
    return temparr2;
    //we clean all the empty strings in our array (resize)

}
var arr = ["abcdf", "Abcd", "ab", "klej"];
console.log(filterLongWords(arr, 4));
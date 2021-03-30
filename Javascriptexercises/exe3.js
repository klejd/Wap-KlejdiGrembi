function isVowel(character) {
    var chararray = ['a', 'e', 'i', 'o', 'u'];

    var count;
    var i;
    if (character.length == 1) {
        for (i = 0; i < chararray.length; i++) {
            if (chararray[i] == character.toLowerCase())
                return true;


        }
    }
    return false;


}
console.log(isVowel('i'));
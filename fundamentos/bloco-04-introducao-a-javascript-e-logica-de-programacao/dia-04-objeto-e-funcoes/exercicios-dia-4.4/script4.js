function palindromo (str){
    var splitString = str.split("")

    var reverseArray = splitString.reverse();

    var joinArray = reverseArray.join("")

    if (joinArray == str) {
        return true
    }
    return false
}

console.log(palindromo('arara'))
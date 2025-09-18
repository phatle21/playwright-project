function reverseString1(str) {
    return str.split("").reverse().join("");
}
function reverseString2(str) {
    var result = "";
    for (var i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}
console.log(reverseString1("hello"));
console.log(reverseString2("hello"));

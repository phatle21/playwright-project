function reverseString1(str: string): string {
    return str.split("").reverse().join("");
}   

function reverseString2(str: string): string {
    let result = "";
    for(let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

console.log(reverseString1("hello"));
console.log(reverseString2("hello"));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isPrime(n) {
    if (n <= 1)
        return false;
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0)
            return false;
    }
    return true;
}
function testIsPrime() {
    console.log(isPrime(2));
    console.log(isPrime(4));
}
function countPrimes(arr) {
    if (arr.length === 0)
        return 0;
    var primeCount = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        if (isPrime(num)) {
            primeCount++;
        }
    }
    return primeCount;
}
function testCountPrimes() {
    console.log(countPrimes([10, 15, 3, 7, 8, 23, 4])); // Output: 3 (3, 7, 23)
    console.log(countPrimes([]));
}
testIsPrime();
testCountPrimes();
// const numbers: number[] = [10, 15, 3, 7, 8, 23, 4];
// console.log(`Number of prime numbers in the array: ${countPrimes(numbers)}`);

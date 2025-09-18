import { test } from "node:test"; // Đảm bảo bạn đang sử dụng module node:test

function isPrime(n: number): boolean {
    if (n <= 1) return false;
    for(let i = 2; i <= Math.sqrt(n); i++) {
        if(n % i === 0) return false;
    }
    return true;
}

function testIsPrime(){
    console.log(isPrime(2)); //true
    console.log(isPrime(4)); //false
}

function countPrimes(arr: number[]): number {
    if(arr.length === 0) return 0;
    
    let primeCount: number = 0;

    for(const num of arr)   {
        if(isPrime(num)) {
            primeCount++;
        }
    }
    return primeCount;  
}

function testCountPrimes(){
    console.log(countPrimes([10, 15, 3, 7, 8, 23, 4])); // Output: 3 (3, 7, 23)
    console.log(countPrimes([]));
}

testIsPrime();
testCountPrimes();

// const numbers: number[] = [10, 15, 3, 7, 8, 23, 4];
// console.log(`Number of prime numbers in the array: ${countPrimes(numbers)}`);
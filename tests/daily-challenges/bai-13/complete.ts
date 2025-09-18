function countPrimes(n: number): number {   
    let count: number = 0;
    for (let i = 2; i < n; i++) {
        let isPrime: boolean = true;        
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }   
        }       
        if (isPrime) {
            count++;
        }   
    }
    return count;
}
console.log(countPrimes(10)); // Output: 4 (2, 3, 5, 7)
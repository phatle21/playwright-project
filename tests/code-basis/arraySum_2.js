function arraySum(numbers){
        return numbers.reduce((acc, curr) => acc + curr, 0);
}


const number = [1, 2, 3, 4, 5];
console.log(arraySum(number));
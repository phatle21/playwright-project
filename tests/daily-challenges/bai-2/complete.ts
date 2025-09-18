function calculateBMI(weight: number, height: number): string {
    const bmi = weight / (height * height);
    if (bmi < 18.5) {
        return "Gầy";
    }
    else if (bmi >= 18.5 && bmi < 24.9) {   
        return "Bình thường";
    }
    else if (bmi >= 25 && bmi < 29.9) {
        return "Thừa cân";
    }
    else {
        return "Béo phì";
    }
}

console.log(calculateBMI(86, 1.83)); 
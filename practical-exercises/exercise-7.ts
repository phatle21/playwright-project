// Create a function that takes age and hasLicense and returns true only 
// if the person is over 18 and has a license.

function canDrive(age: number, hasLicense: boolean): boolean {
    return age > 18 && hasLicense;
}
console.log(canDrive(20, true));  // Output: true
console.log(canDrive(16, true)); // Output: false
console.log(canDrive(22, false)); // Output: false      

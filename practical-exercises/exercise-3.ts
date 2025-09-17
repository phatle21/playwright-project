// function greet(name: string, greeting?: string): string {
//     return `${greeting || "Hello"}, ${name}!`;
// }
// console.log(greet("Alice")); // Output: Hello, Alice!
// console.log(greet("Bob", "Hi")); // Output: Hi, Bob!

function person(name: string, age: number): string{
    return `Hello, ${name}! You are ${age} years old.`;
}
console.log(person("John", 30)); // Output: Hello, John! You are 30 years old.


// Create a function that takes a name and age and returns a string like 
// "Hello, [name]! You are [age] years old."
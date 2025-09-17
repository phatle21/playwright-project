function greet(name, greeting) {
    return "".concat(greeting || "Hello", ", ").concat(name, "!");
}
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet("Bob", "Hi")); // Output: Hi, Bob!
function person(name, age) {
    return "Hello, ".concat(name, "! You are ").concat(age, " years old.");
}
console.log(person("John", 30)); // Output: Hello, John! You are 30 years old.
// Create a function that takes a name and age and returns a string like 
// "Hello, [name]! You are [age] years old."

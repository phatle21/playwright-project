class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    introduce(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
}   
}

let person = new Person("Alice", 30);
console.log(person.introduce());

class Student extends Person {
    grade: number;

    constructor(name: string, age: number, grade: number) {
        super(name, age);
        this.grade = grade;
    }       
    study(): string {
        return `${this.name} is studying in grade ${this.grade}.`;
    }
}
let student = new Student("Bob", 20, 3);
console.log(student.introduce());
console.log(student.study());   
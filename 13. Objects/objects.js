// Object in JavaScript is a data-type that stores data in form of key-value pair.

//Example of object:

let student = { name: "John", score: 83, pass: true };

let myObj = { count: 1, type: "object", "is good": true }; //multi-word key

//Getting values

console.log(student.name); // "John"
console.log(student.score); // 83

student.grade = "A";

console.log(student); //{ name: "John", score: 83, pass: true, grade: A }

//Deleting data;

delete student.grade;
console.log(student); //{ name: "John", score: 83, pass: true }

//Multi-word key can not be accessed simply by using it's key. We need to use [] like in objects

console.log(myObj["is good"]); // true

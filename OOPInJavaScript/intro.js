/*
Object Oriented Programming is a programming approach that organizes codes using objects as building blocks.
The purpose of OOP is to make codes more organized, reusable and easy to modify.  

Benefits:

1. Modular code:  Codes organized in form of objects.
2. Reusability
3. Maintainability
4. Readability
*/

//Example: 

class Dog{
 constructor(breed, color, age){
    this.breed = breed;
    this.color = color;
    this.age = age;
 }
 bark(){
    console.log("Woof! Woof!")
 }
}

// Creating multiple Dog objects

const kaale = new Dog("Bhote Kukur", "black", 2);
const raate = new Dog("Kathe Kukur", "brown", 3);

kaale.bark() //Woof! Woof!
raate.bark() // Woof! Woof! 

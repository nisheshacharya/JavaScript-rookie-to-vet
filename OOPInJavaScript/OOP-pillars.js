/*
OOP  is built on four main pillars:

1.Abstraction

2. Encapsulation

3. Inheritance

4. Polymorphism

(POLLY has ABS IN-CAP)

*/


//  1. Abstraction: Abstraction is hiding unnecessary details and showing only essential elements 
//     that an object needs to function.
 

class Car{
    constructor(model, color){
        this.model = model;
        this.color = color;
    }
   drive(){
    console.log("Driving ", this.color , "colored ", this.model )
   }
}

const toyota = new Car("corolla", "red");
toyota.drive();

// Here, to run function drive, we do not need to understand mechanism. 
//  We just need to have model and color and the job will be done.
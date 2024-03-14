//  1. Abstraction: Abstraction is hiding unnecessary details and showing only essential elements
//     that an object needs to function.
//     Abstraction helps developers to create user-friendly interface and modules.
 
class Car {
    constructor(model, color) {
      this.model = model;
      this.color = color;
    }
    drive() {
      console.log("Driving ", this.color, "colored ", this.model);
    }
  }
  
  const toyota = new Car("corolla", "red");
  toyota.drive();
  
  // Here, to run function drive, we do not need to understand mechanism.
  //  We just need to have model and color and the job will be done.
  
 
 
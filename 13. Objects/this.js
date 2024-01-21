//Example of use of this: 


let calculator = {
  read() {
    this.num1 = prompt("First number?");
    this.num2 = prompt("Second number?");
  },

  sum() {
    alert(this.num1 + this.num2);
  },

  multiply() {
    alert(this.num1 * this.num2);
  },
};

calculator.read();
calculator.sum();
calculator.multiply();

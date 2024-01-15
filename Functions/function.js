//Functions are statements to perform certain task

//FUNCTION WITHOUT PARAMETER:
function sayHi() {
  console.log("Hi!");
}

sayHi(); // Hi!

//FUNCTION WITH PARAMETER:
function printSum(a, b) {
  console.log(a + b);
}

printSum(2, 3); //5

//FUNCTION WITH VARIABLE

//INNER VARIABLE

function greet(name) {
  const greeting = "Namaste";
  console.log(greeting + " " + name);
}

greet("Alex");

// OUTER VARIABLE
const greeting = "Good afternoon";
function greetGuest(guestName) {
  console.log(greeting + " " + guestName);
}

//FUNCTION WITH RETURN

function addNumbers(a, b, c) {
  return a + b + c;
}

console.log(addNumbers(2, 3, 4)); //9   have to console.log to see the return

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

//Function as an expression

function weatherUpdate() {
  console.log("It's cold");
}

const weatherNow = weatherUpdate;

// we can call this function using expressing expression
weatherNow();

/* 
    // Callback function 

a callback function is a function that is passed as an argument
to another function and is executed after the completion of a specific task. */

function callBackAgeCheck(birthYear, getAge) {
  const age = getAge(birthYear);
  if (age >= 18) {
    console.log("You are good");
  } else {
    console.log("Too young");
  }
}

function getAge(birthYear) {
  //Here callBackAgeCheck is callback function passed to another function as parameter
  const date = new Date();
  const year = date.getFullYear();
  return;
}

getAge(1992, callBackAgeCheck);

// Arrow functions

let count = 10;
const countDown = () => {
  const myInterval = setInterval(() => {
    console.log(count);
    count--;
    if (count == -1) {
      clearInterval(myInterval);
    }
  }, 1000);
};

countDown();

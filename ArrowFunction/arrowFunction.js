//Arrow function is a shorter way of writing function. This function can also be written inLine

//Normal function:

function sayHi() {
  console.log("Hi");
}

function getSum(a, b) {
  return a + b;
}

//Arrow function

const sayHello = () => {  // this function is not returning, hence {} is used
  console.log("Hello");
};

const getTotal = (a, b) => (a + b);  // return

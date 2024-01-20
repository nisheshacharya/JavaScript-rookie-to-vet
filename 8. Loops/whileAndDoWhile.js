//while loop:
//do something while the condition is satisfied
while (i < 10) {
  console.log(i);
  i++;
}

//do while:
//do something first, and then check the condition to see if you need to stop

let j = 0;
do {
  console.log(j);
} while (j < 5);
// 0, 1,  2 , 3 , 4

/* **** Only if you know objects, array, array methods and call back functions *** */

//forEach:
//Loop for each element in an array; takes a callback function

let arr = [1, 2, 3, 4, 5];

arr.forEach((elem) => {
  console.log(elem);
});

//ofOf loop:

for (let element of arr) {
  console.log(element);
}

//for in Loop: for objects

const obj = { a: 1, b: 2 };
for(let elem in obj){
    console.log(elem);
}
// a, b

for(let elem in obj){
    console.log(obj[elem]);
}
// 1,2


// **Map** 
        //Map return a new array. it runs callback function on each element of array 


const myArray = [1,2,3,4];
const mappedArray = myArray.map(elem=>(elem*2));
console.log(mappedArray);       // [ 2, 4, 6, 8 ]

// ***Filter***
        // 

const filteredArray = myArray.filter(elem=>(elem%2 ==0))
console.log(filteredArray);
//2,4
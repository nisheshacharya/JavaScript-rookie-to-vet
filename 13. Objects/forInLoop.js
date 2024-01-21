// for in loop in object iterates through it and gives key.

const obj = { a: 1, b: 2, c: 3 };

for (let elem in obj) {
  console.log(elem);
}
// a
// b
// C

for (let elem in obj) {
  console.log(obj[elem]);
}
// 1
// 2
// 3


//when the key is a number, for in loop prints keys in ascending order.
const myObj = { 4: "Four", 2: "Two", 1: "One" };
for(let elem in myObj){
    console.log(elem);
}
//1
//2
4

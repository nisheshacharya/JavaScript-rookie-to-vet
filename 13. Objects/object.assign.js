let myObj = { name: "Harry", age: 20 };

const myObj2 = Object.assign(myObj, { university: "MIU" });
console.log(myObj2);          // { name: "Harry", age: 20 , university: "MIU" }



//We can also assign multiple properties 

const cond1 = {isStudent: true};
const cond2 = {isCompro: false}; 

const myObj3 = Object.assign(myObj2, cond1, cond2); 

console.log(myObj3);   //{ name: 'Harry', age: 20, university: 'MIU', isStudent: true, isCompro: false }
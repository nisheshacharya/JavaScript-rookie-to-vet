// Increment and decrement are short, inline way of adding 1 or subtracting 1 from a variable 

let a = 1; 
++a;                //is same as a = a+1
console.log(a);      //2

let b = 2; 
--b;                // is same as b = b-1; 
console.log(b);     // 1

// this way of wring ++ pr -- in front of the variable is called prefix form. 
//if written after the variable, it is cold postfix form. 
// the difference is that prefix form first increments or decrements and then other operations are carried out.
//while postfix form carries out operation and then increments of decrements

//example: 


let c = 5;
let d = 5;

console.log(++c); // 6

console.log(c++);   //5;
console.log(c);  //6


/*
*Important: increment or decrement can only be applied to variable, 
not to the integer itself.

eg.: 

console.log(5++); 
will throw an error. 

 */

